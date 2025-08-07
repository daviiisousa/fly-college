import { Button } from "@/components/UI/button";
import { Form } from "@/components/UI/Form/form";
import { Input } from "@/components/UI/Form/input";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { GiPadlock } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

export default function Register() {
  return (
    <div className="min-h-screen bg-[url(/images/backGroundImage.jpg)] bg-cover flex justify-center items-center">
      <Form className="min-w-96 my-5">
        <h1 className="text-3xl bg-linear-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent font-bold text-center">
          Cadastre-se
        </h1>
        <p className="text-gray-400 text-center">Crie sua conta</p>
        <label htmlFor="nome" className="mb-2 font-bold">
          Nome Completo
        </label>
        <div className="flex items-center rounded-md px-2 bg-gray-800 border border-gray-700 w-full mb-5 hover:ring-1 ring-blue-400 focus-within:ring-1">
          <MdOutlineDriveFileRenameOutline className="text-zinc-500" />
          <Input
            required
            type="text"
            name="nome"
            id="nome"
            placeholder="Jonh Doe"
            className="border-none focus:ring-1 focus:ring-transparent"
          />
        </div>
        <label htmlFor="email" className="mb-2 font-bold">
          Email
        </label>
        <div className="flex items-center rounded-md px-2 bg-gray-800 border border-gray-700 w-full mb-5 hover:ring-1 ring-blue-400 focus-within:ring-1">
          <MdEmail className="text-zinc-500" />
          <Input
            required
            type="email"
            name="email"
            id="email"
            placeholder="seu@email.com"
            className="border-none focus:ring-1 focus:ring-transparent"
          />
        </div>
        <label htmlFor="senha" className="mb-2 font-bold">
          Senha
        </label>
        <div className="flex items-center rounded-md px-2 bg-gray-800 border border-gray-700 w-full mb-5 hover:ring-1 ring-blue-400 focus-within:ring-1">
          <GiPadlock className="text-zinc-500" />
          <Input
            required
            type="password"
            name="senha"
            id="senha"
            placeholder="######"
            className="border-none focus:ring-1 focus:ring-transparent"
          />
        </div>
        <label htmlFor="confirmarSenha" className="mb-2 font-bold">
          Confirmar Senha
        </label>
        <div className="flex items-center rounded-md px-2 bg-gray-800 border border-gray-700 w-full mb-5 hover:ring-1 ring-blue-400 focus-within:ring-1">
          <GiPadlock className="text-zinc-500" />

          <Input
            required
            type="password"
            name="confirmarSenha"
            id="confirmarSenha"
            placeholder="######"
            className="border-none focus:ring-1 focus:ring-transparent "
          />
        </div>
        <Button
          type="submit"
          className="bg-linear-to-r from-blue-500 to-purple-400 hover:shadow-primary hover:shadow-blue-500 transition-all"
        >
          Criar Conta
        </Button>
        <div className="grid grid-cols-3 items-center my-3">
          <hr className="text-zinc-500" />
          <p className="text-center text-zinc-500">OU</p>
          <hr className="text-zinc-500" />
        </div>
        <div className="flex flex-col gap-5 font-bold my-5">
          <a
            href=""
            className="flex items-center gap-5 bg-black rounded-md p-3 justify-center hover:bg-transparent hover:ring-1 transition-all"
          >
            <FaGithub /> Github
          </a>

          <a
            href=""
            className="flex items-center gap-5 bg-black rounded-md p-3 justify-center hover:bg-transparent hover:ring-1 transition-all"
          >
            <FcGoogle /> Google
          </a>
        </div>
        <p className="text-center text-zinc-500">
          Já possui uma conta?{" "}
          <Link
            href="./"
            className="bg-linear-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent hover:from-blue-900 hover:to-purple-900 transition-all my-5"
          >
            Entre
          </Link>
        </p>
      </Form>
    </div>
  );
}
