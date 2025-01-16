"use client";

import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { loginUser, registerUser } from "@/lib/auth";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";



const formSchema = authFormSchema("sign-in");


const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // Submit Handler
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setError(""); // Limpa erros anteriores
        setIsLoading(true); // Ativa o estado de carregamento

      if(type === 'sign-up'){
        try {
            const registeredUser = await registerUser(values.email, values.password); // Chama a função de registro
            console.log("Usuário registrado:", registeredUser);
            setUser(registeredUser); // Define o usuário registrado
        } catch (error: any) {
            setError(error.message || "Ocorreu um erro ao processar sua solicitação.");
        } finally {
            setIsLoading(false); // Desativa o estado de carregamento
        }
      }else{
        try {
            const user = await loginUser(values.email, values.password);
            console.log("Usuário logado com sucesso:", user);
            router.push("/");

          } catch (error: any) {
            setError(error.message); // Mostra a mensagem de erro no UI
          } finally {
            setIsLoading(false); // Desativa o loader
          }
        }
      
    };

    return (
        <section>
            <header className="flex flex-col gap-5 md:gap-8 mb-4">
                <Link href="/" className="cursor-pointer items-center gap-1 flex">
                    <Image src="/images/logo.png" width={150} height={150} alt="Logo" />
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-2xl lg:text-36 font-semibold text-gray-900">
                        {user
                            ? "Link Account"
                            : type === "sign-in"
                                ? "Entre na sua conta"
                                : "Cadastre-se"}
                    </h1>
                    <p className="text-xs md:text-lg font-normal text-gray-600">
                        {type === "sign-up"
                            ? "Por favor preencha seus dados"
                            : "Bem vindo de volta! Acesse sua conta para começar"}
                    </p>
                </div>
            </header>
            {user ? (
                <div className="flex flex-col gap-4">
                    {/* Renderizar conteúdo para usuário registrado */}
                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-72 md:w-[500px]">
                            {type === "sign-up" && (
                                <div className="grid grid-flow-row grid-cols-2 gap-4">
                                    <CustomInput control={form.control} name="firstName" label="First name" placeholder="Digite seu primeiro nome" />
                                    <CustomInput control={form.control} name="lastName" label="Last name" placeholder="Digite seu sobrenome" />
                                </div>
                            )}
                            <CustomInput control={form.control} name="email" label="Email" placeholder="Digite seu email" />
                            <CustomInput control={form.control} name="password" label="Password" placeholder="Digite sua senha" />
                            <div className="flex flex-col gap-4">
                                <Button type="submit" className="bg-main-500 hover:bg-main-400" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={24} className="animate-spin" /> &nbsp;Carregando...
                                        </>
                                    ) : type === "sign-in" ? "Entre" : "Cadastre-se"}
                                </Button>
                            </div>
                        </form>
                    </Form>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    <footer className="justify-center flex gap-1 mt-5">
                        <p className="text-14 font-normal text-gray-600">
                            {type === "sign-in"
                                ? "Não tem uma conta?"
                                : "Já tem uma conta?"}
                        </p>
                        <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"} className="text-14 cursor-pointer font-medium text-violet-500">
                            {type === "sign-in" ? "Cadastre-se" : "Entre"}
                        </Link>
                    </footer>
                </>
            )}
        </section>
    );
};

export default AuthForm;
