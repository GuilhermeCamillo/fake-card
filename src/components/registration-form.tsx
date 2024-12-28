"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import LoadingButton from "./loading-button";
import { User } from "@prisma/client";
import { updateUser } from "@/store/user.service";

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "" }),
  lastName: z.string().trim().min(1, { message: "" }),
  cpf: z.string().trim().min(1, { message: "" }),
  rg: z.string().trim().min(1, { message: "" }),
  documentNumber: z.string().trim().min(1, { message: "" }),
  cardType: z.string().trim().min(1, { message: "" }),
  birthDate: z.date(),
  course: z.string().trim().min(1, { message: "" }),
});

interface RegistrationFormProps {
  user: User;
}

export default function RegistrationForm({ user }: RegistrationFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name || "",
      lastName: user.lastName || "",
      cpf: user.cpf || "",
      rg: user.rg || "",
      documentNumber: user.documentNumber || "",
      cardType: user.cardType || "",
      birthDate: user.birthDate || undefined,
      course: user.course || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    updateUser({ values });
    setIsLoading(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Primeiro Acesso</CardTitle>
        <CardDescription>
          Por favor preencha as informações necessárias.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sobrenome</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* CPF e RG */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CPF</FormLabel>
                    <FormControl>
                      {/* <InputMask mask={"000.000.000-00"} {...field}/> */}
                      <Input id="cpf" placeholder="000.000.000-00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>RG</FormLabel>
                    <FormControl>
                      <Input id="rg" placeholder="00.000.000-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Número do documento */}
            <FormField
              control={form.control}
              name="documentNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número do documento (RM / N° MATRICULA)</FormLabel>
                  <FormControl>
                    <Input
                      id="documentNumber"
                      placeholder="Número da matricula"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Tipo de cartão */}
            <FormField
              control={form.control}
              name="cardType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de cartão (Faculdade)</FormLabel>
                  <FormControl>
                    <Select {...field} onValueChange={(e) => field.onChange(e)}>
                      <SelectTrigger id="cardType">
                        <SelectValue placeholder="Selecione o Tipo de Cartão" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FIAP">Fiap</SelectItem>
                        <SelectItem value="ANHEMBI">Anhembi Morumbi</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Data de nascimento */}
            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de Nascimento</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={`w-full justify-start text-left font-normal ${
                          !field.value && "text-muted-foreground"
                        }`}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP", { locale: ptBR })
                        ) : (
                          <span>Selecione a data de nascimento</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        locale={ptBR}
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            {/* Curso */}
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Curso (Estética ou Medicina, etc.)</FormLabel>
                  <FormControl>
                    <Input
                      id="course"
                      placeholder="Curso (Estética ou Medicina, etc.)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <LoadingButton
              title="Cadastrar"
              isLoading={isLoading}
              type="submit"
              className="w-full"
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
