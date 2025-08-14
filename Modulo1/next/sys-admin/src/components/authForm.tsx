// components/AuthForm.jsx
import { Button } from "@/components/UI/button";
import { Form } from "@/components/UI/Form/form";
import Link from "next/link";
import React from "react";
import { GiPadlock } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { IconInput } from "./UI/Form/inputIcon";
import { SocialButtons } from "./socialButton";
import { bgHoverGradient, textGradient } from "@/utils/util";

type AuthFormProps = {
  type?: "login" | "register";
  className?: string;
} & React.FormHTMLAttributes<HTMLFormElement>;

export function AuthForm({
  type = "login",
  className = "min-w-96 my-5",
  ...formProps
}: AuthFormProps) {
  const isLogin = type === "login";
  const isRegister = type === "register";

  const config = {
    login: {
      title: "Bem-vindo de volta",
      subtitle: "Entre na sua conta para continuar",
      submitText: "Entrar",
      dividerText: "OU CONTINUE COM",
      footerText: "Não tem uma conta?",
      footerLink: "./register",
      footerLinkText: "Cadastra-se",
    },
    register: {
      title: "Cadastre-se",
      subtitle: "Crie sua conta",
      submitText: "Criar Conta",
      dividerText: "OU",
      footerText: "Já possui uma conta?",
      footerLink: "./login",
      footerLinkText: "Entre",
    },
  };

  const currentConfig = config[type];

  return (
    <Form className={className} onSubmit={formProps.onSubmit}>
      {/* Header */}
      <h1 className={`text-3xl ${textGradient} text-center font-bold`}>
        {currentConfig.title}
      </h1>
      <p className="text-gray-400 text-center">{currentConfig.subtitle}</p>

      {/* Campo Nome (apenas no registro) */}
      {isRegister && (
        <IconInput
          Icon={MdOutlineDriveFileRenameOutline}
          label="Nome Completo"
          required
          type="text"
          name="nome"
          id="nome"
          placeholder="Jonh Doe"
        />
      )}

      {/* Campo Email */}
      <IconInput
        Icon={MdEmail}
        label="Email"
        required
        type="email"
        name="email"
        id="email"
        placeholder="seu@email.com"
      />

      {/* Campo Senha */}
      <IconInput
        Icon={GiPadlock}
        label="Senha"
        required
        type="password"
        name="senha"
        id="senha"
        placeholder="######"
      />

      {/* Campo Confirmar Senha (apenas no registro) */}
      {isRegister && (
        <IconInput
          Icon={GiPadlock}
          label="Confirmar Senha"
          required
          type="password"
          name="confirmarSenha"
          id="confirmarSenha"
          placeholder="######"
        />
      )}

      {/* Opções extras do login */}
      {isLogin && (
        <div className="flex items-center justify-between">
          <label
            htmlFor="lembraSenha"
            className="flex items-center gap-2 text-zinc-400 cursor-pointer"
          >
            <input type="checkbox" name="lembraSenha" id="lembraSenha" />
            Lembrar-me
          </label>
          <Link
            href="/forgot-password"
            className={`${textGradient} hover:from-blue-900 hover:to-purple-900 transition-all`}
          >
            Esqueceu a senha?
          </Link>
        </div>
      )}

      {/* Botão Submit */}
      <Button
        type="submit"
        className="bg-linear-to-r from-blue-500 to-purple-400 hover:shadow-primary hover:shadow-blue-500 transition-all"
      >
        {currentConfig.submitText}
      </Button>

      {/* Divisor */}
      <div className="grid grid-cols-3 items-center my-3">
        <hr className="text-zinc-500" />
        <p className="text-center text-zinc-500">{currentConfig.dividerText}</p>
        <hr className="text-zinc-500" />
      </div>

      {/* Botões Sociais */}
      <SocialButtons isLogin={isLogin} />

      {/* Footer */}
      <p className="text-center text-zinc-500">
        {currentConfig.footerText}{" "}
        <Link
          href={currentConfig.footerLink}
          className={` ${textGradient} hover:from-blue-900 hover:to-purple-900 transition-all my-5`}
        >
          {currentConfig.footerLinkText}
        </Link>
      </p>
    </Form>
  );
}

// Hook para lógica de formulários de autenticação
// export function useAuthForm(type = 'login') {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData.entries());

//     if (type === 'register' && data.senha !== data.confirmarSenha) {
//       alert('As senhas não coincidem!');
//       return;
//     }

//     // Aqui você pode adicionar a lógica de autenticação
//     console.log(`${type} data:`, data);
//   };

//   return { handleSubmit };
// }
