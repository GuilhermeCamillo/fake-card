import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Form from "./form";

export default function SignIn() {
  return (
    <main className="flex items-center justify-center w-full min-h-screen">
      <Card className="mx-auto max-w-sm min-w-[360px]">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Digite seu e-mail abaixo para entrar em sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form />
          <p className="font-bold text-sm text-justify mt-10 text-red-500">
            Este site foi desenvolvido com fins exclusivos de estudo e
            aprimoramento de habilidades. Não me responsabilizo por qualquer uso
            indevido das informações ou por eventuais danos decorrentes do
            acesso ao conteúdo aqui apresentado. O objetivo principal é o
            aprendizado contínuo e a evolução técnica, sem qualquer intenção
            comercial ou profissional.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
