import { Category } from "@/interfaces/category";
import { SiKingstontechnology } from "react-icons/si";

interface CategoryProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryProps) {
  return (
    <div
      key={category.id}
      className="bg-slate-900 p-5 rounded-lg flex flex-col items-center justify-center cursor-pointer"
    >
      <SiKingstontechnology
        size={50}
        className=" m-2 text-blue-500 bg-slate-800 hover:bg-gray-700 p-2 rounded-3xl"
      />
      <h3 className="font-semibold text-lg">{category.name}</h3>
      {category.count && (
        <p className="text-sm text-gray-400">{category.count} produtos</p>
      )}
    </div>
  );
}
