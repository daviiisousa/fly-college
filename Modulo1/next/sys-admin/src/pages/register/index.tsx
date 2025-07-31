import { Form } from "@/components/UI/Form/form";
import { Input } from "@/components/UI/Form/input";
import { GiPadlock } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

export default function Register() {
    return (
        <div className="min-h-screen bg-[url(/images/backGroundImage.jpg)] bg-cover flex justify-center items-center">
            <Form>
                <h1 className="text-3xl bg-linear-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent font-bold text-center">Cadastre-se</h1>
                <p className="text-gray-400 text-center">Crie sua conta</p>
                <label htmlFor="nome" className="mb-2 font-bold">Nome</label>
                <div className="flex items-center rounded-md px-2 bg-gray-800 border border-gray-700 w-full mb-5 hover:ring-1 ring-blue-400 focus-within:ring-1">
                    <MdOutlineDriveFileRenameOutline className="text-zinc-500" />
                    <Input required type="email" name="email" id="email" placeholder="Jonh Doe" className="border-none focus:ring-1 focus:ring-transparent" />
                </div>
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
            </Form>
        </div>
    )
}