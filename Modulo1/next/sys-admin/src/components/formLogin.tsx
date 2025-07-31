import { Input } from "./UI/Form/input";
import { GiPadlock } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { Button } from "./UI/button";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Form } from "./UI/Form/form";

export function FormLogin() {
    return (
        <Form>
            <h1 className="text-3xl bg-linear-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent font-bold text-center">Bem-vindo de volta</h1>
            <p className="text-gray-400 text-center">Entre na sua conta para continuar</p>
            <label htmlFor="email" className="mb-2 font-bold">Email</label>
            <div className="flex items-center rounded-md px-2 bg-gray-800 border border-gray-700 w-full mb-5 hover:ring-1 ring-blue-400 focus-within:ring-1">
                <MdEmail className="text-zinc-500" />
                <Input required type="email" name="email" id="email" placeholder="seu@email.com" className="border-none focus:ring-1 focus:ring-transparent" />
            </div>
            <label htmlFor="senha" className="mb-2 font-bold">Senha</label>
            <div className="flex items-center rounded-md px-2 bg-gray-800 border border-gray-700 w-full mb-5 hover:ring-1 ring-blue-400 focus-within:ring-1">
                <GiPadlock className="text-zinc-500" />
                <Input required type="password" name="senha" id="senha" placeholder="######" className="border-none focus:ring-1 focus:ring-transparent" />
            </div>
            <div className="flex items-center justify-between">
                <label htmlFor="lembraSenha" className="flex items-center gap-2 text-zinc-400 cursor-pointer">
                    <input type="checkbox" name="lembraSenha" id="lembraSenha" />
                    Lembrar-me
                </label>
                <Link href="/forgot-password" className="bg-linear-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent hover:from-blue-900 hover:to-purple-900 transition-all">Esqueceu a senha?</Link>
            </div>
            <Button type="submit" className="bg-linear-to-r from-blue-500 to-purple-400 hover:shadow-primary hover:shadow-blue-500 transition-all">
                Entrar
            </Button>
            <div className="grid grid-cols-3 items-center my-3">
                <hr className="text-zinc-500" />
                <p className="text-center text-zinc-500">OU CONTINUE COM</p>
                <hr className="text-zinc-500" />
            </div>
            <div className="grid grid-cols-2 items-center gap-5 font-bold my-5">
                <a href="" className="flex items-center gap-5 bg-black rounded-md p-3 justify-center hover:bg-transparent hover:ring-1 transition-all">
                    <FaGithub /> Github
                </a>

                <a href="" className="flex items-center gap-5 bg-black rounded-md p-3 justify-center hover:bg-transparent hover:ring-1 transition-all">
                    <FcGoogle /> Google

                </a>
            </div>
            <p className="text-center text-zinc-500">Não tem uma conta? <Link href="./register" className="bg-linear-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent hover:from-blue-900 hover:to-purple-900 transition-all my-5">Cadastra-se</Link></p>
        </Form>
    )
}