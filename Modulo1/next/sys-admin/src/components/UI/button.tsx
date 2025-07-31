import React from "react";

type buttonProps = {
    children: React.ReactNode;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...props }: buttonProps) {
    return (
        <button {...props} className={`rounded-md w-full py-3 font-medium my-5 hover:cursor-pointer ${className}`}>
            {children}
        </button>
    )
}