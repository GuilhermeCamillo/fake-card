"use server";

import bcryptjs from "bcryptjs";
import { prisma } from "../../prisma/prisma";
import { auth, signIn } from "../../auth";
import { User } from "@prisma/client";
import { UserInfo } from "@/types/user.type";
import { revalidatePath } from "next/cache";

export const getUserFromDb = async (email: string, password: string) => {
  try {
    const existedUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existedUser) {
      return {
        success: false,
        message: "User not found.",
      };
    }

    if (!existedUser.password) {
      return {
        success: false,
        message: "Password is required.",
      };
    }

    const isPasswordMatches = await bcryptjs.compare(
      password,
      existedUser.password
    );

    if (!isPasswordMatches) {
      return {
        success: false,
        message: "Password is incorrect.",
      };
    }

    return {
      success: true,
      data: existedUser,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const SignIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await signIn("credentials", { email, password, redirectTo: "/home" });
  // try {
  //   console.log(email, password);
  // } catch (error) {
  //   console.log(error);
  // }
};

export const SignUp = async (values: {
  email: string;
  password: string;
  name: string;
  lastName: string;
}) => {
  const { email, password, name, lastName } = values;

  const existedUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existedUser) {
    return "User already exists.";
  }

  const hash = await bcryptjs.hash(password, 10);

  const createdUser = await prisma.user.create({
    data: {
      email,
      password: hash,
      name,
      lastName,
    },
  });

  return createdUser;
};

export const getUserById = async ({
  id,
}: {
  id: string;
}): Promise<User | null> => {
  const user = await prisma.user.findFirst({ where: { id } });
  return user;
};

export const updateUser = async ({ values }: { values: UserInfo }) => {
  const session = await auth();

  if (!session?.user) {
    return;
  }
  try {
    await prisma.user.update({
      data: { ...values, isFirstAccess: false },
      where: { id: session.user.id },
    });
    revalidatePath("/home");
  } catch (error) {
    console.log(error);
  }
  console.log(values);
};
