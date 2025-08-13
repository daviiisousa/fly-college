import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button {...props} className={`rounded-md w-full py-3 font-medium my-5 hover:cursor-pointer ${className}`}>
            {children}
        </button>
    )
}