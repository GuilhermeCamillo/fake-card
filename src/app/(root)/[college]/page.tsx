import FiapCard from "@/components/colleges/fiap-card";
import React from "react";
import { auth } from "../../../../auth";
import { getUserById } from "@/store/user.service";
import AnhembiCard from "@/components/colleges/anhembi-card";

const Page = async ({ params }: { params: Promise<{ college: string }> }) => {
  const session = await auth();
  const user = await getUserById({ id: session?.user?.id });

  if (!user) {
    return;
  }
  const college = (await params).college;

  const renderContent = () => {
    switch (college) {
      case "fiap":
        return <FiapCard user={user} />;
      case "usp":
        return <div>Conteúdo para USP</div>;
      case "anhembi":
        return <AnhembiCard user={user} />;
      default:
        return <div>Faculdade não encontrada.</div>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default Page;
