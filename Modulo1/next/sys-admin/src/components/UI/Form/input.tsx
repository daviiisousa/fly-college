import React from "react"

type InputProps = {
    className?: string,
} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...props }: InputProps) {
    return (
        <input
            {...props}
            className={`rounded-md p-2 bg-gray-800 border border-gray-700 w-full focus:outline-none focus:border-blue-500 ${className}`}
        />
    )
}