import React from "react"

type FormProps = {
    className?: string,
    children: React.ReactNode
} & React.FormHTMLAttributes<HTMLFormElement>

export function Form({ className, children, ...props }: FormProps) {
    return (
        <form {...props} className={`bg-gray-900 rounded-md border border-zinc-600 p-5 h-full w-fit mx-auto text-white flex flex-col ${className}`}>
            {children}
        </form>
    )
}