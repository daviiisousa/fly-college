import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  theme?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "gradient"
    | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, theme, ...props }: ButtonProps) {
  function getButtonTheme() {
    switch (theme) {
      case "primary":
        return "bg-blue-500 text-white hover:bg-blue-600";
      case "secondary":
        return "bg-gray-500 text-white hover:bg-gray-600";
      case "danger":
        return "bg-red-500 text-white hover:bg-red-600";
      case "success":
        return "bg-green-500 text-white hover:bg-green-600";
      case "warning":
        return "bg-yellow-500 text-white hover:bg-yellow-600";
      case "info":
        return "bg-gray-900 text-white hover:bg-transparent hover:ring";
      case "gradient":
        return "bg-linear-to-r from-blue-500 to-purple-400";
      case "ghost":
        return "bg-transparent";
      default:
        return "bg-gray-500 text-white hover:bg-gray-600";
    }
  }

  return (
    <button
      {...props}
      className={`rounded-md w-full py-3 font-medium my-5 hover:cursor-pointer ${className} ${getButtonTheme()}`}
    >
      {children}
    </button>
  );
}
