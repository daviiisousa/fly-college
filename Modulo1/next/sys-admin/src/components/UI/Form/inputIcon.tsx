import { Input } from "./input";

type IconInputProps = {
  Icon: React.ElementType;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

// Componente para inputs com ícones
export function IconInput({ Icon, label, ...inputProps }: IconInputProps) {
  return (
    <>
      <label htmlFor={inputProps.id} className="mb-2 font-bold">
        {label}
      </label>
      <div className="flex items-center rounded-md px-2 bg-gray-800 border border-gray-700 w-full mb-5 hover:ring-1 ring-blue-400 focus-within:ring-1">
        <Icon className="text-zinc-500" />
        <Input
          {...inputProps}
          className="border-none focus:ring-1 focus:ring-transparent"
        />
      </div>
    </>
  );
}
