import clsx from "clsx";
import React from "react";

type BadgesProps = {
  text?: string;
  variant?: "Novo" | "discount" | "category";
  className?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export function Badges({ text, variant, className }: BadgesProps) {
  function getVariant() {
    switch (variant) {
      case "Novo":
        return "bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded";
      case "discount":
        return "bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded";
      case "category":
        return "border border-gray-600 rounded-2xl w-fit px-3 text-sm";
      default:
        return "bg-gray-500 text-white text-xs font-semibold px-2 py-1 rounded";
    }
  }
  return <span className={clsx(className, getVariant())}>{text}</span>;
}
