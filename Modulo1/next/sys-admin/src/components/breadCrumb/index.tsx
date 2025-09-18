import { FaChevronLeft } from "react-icons/fa6";
import { Button } from "../UI/buttons/button";
import { useRouter } from "next/router";

interface BreadcrumbProps {
  items: {
    title: string;
  }[];
}
export function Breadcrumb({ items }: BreadcrumbProps) {
  const router = useRouter();
  return (
    <div className="flex items-center gap-5 mb-6 mt-20">
      <Button
        onClick={() => router.back()}
        theme="ghost"
        className="self-start flex gap-2 items-center !w-fit hover:bg-blue-500 transition-all px-2"
      >
        <FaChevronLeft size={12} />
        Voltar
      </Button>
      <nav className="flex items-center gap-2 text-gray-400 cursor-pointer">
        {items.map((item, index) => (
          <span
            key={index}
            className={`flex items-center gap-2 ${
              index === items.length - 1 ? "text-white font-semibold" : ""
            }`}
          >
            {item.title} {index < items.length - 1 && <span>/</span>}
          </span>
        ))}
      </nav>
    </div>
  );
}
