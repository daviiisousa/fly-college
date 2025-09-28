import { Category } from "@/interfaces/category";
import { VscExtensions } from "react-icons/vsc";

interface CategoryProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryProps) {
  return (
    <div
      className="group rounded-lg cursor-pointer hover:shadow-md transition-all
                         duration-300 ease-in-out border-0 bg-[#2c313a]/50 backdrop-blur-sm"
      key={category.id}
    >
      <div className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div
            className="rounded-full bg-[#5593f7]/10
                                     p-4 group-hover:bg-[#5593f7]/20 transition-colors
                                      duration-300"
          >
            <VscExtensions className="text-[#5593f7]" />
          </div>
        </div>
        <h3 className="font-medium text-sm mb-1">{category.name}</h3>
        <p className="text-xs text-gray-400">{category.count} produtos</p>
      </div>
    </div>
  );
}
