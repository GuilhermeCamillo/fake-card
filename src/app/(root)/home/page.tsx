import RegistrationForm from "@/components/registration-form";
import { auth, signOut } from "../../../../auth";
import { getUserById } from "@/store/user.service";
import CollegesList from "@/components/colleges-list";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Page = async () => {
  const session = await auth();
  const user = await getUserById(session?.user?.id);

  if (!user) {
    return;
  }

  return (
    <div className="w-auto mx-auto text-white p-4 flex items-center justify-center min-h-screen flex-col">
      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: "/signin",
          });
        }}
        className="cursor-pointer absolute top-0 right-0 mt-2 me-2"
      >
        <Button type="submit" className="w-full cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <p>Sair</p>
        </Button>
      </form>
      {user.isFirstAccess ? <RegistrationForm user={user} /> : <CollegesList />}
    </div>
  );
};

export default Page;
