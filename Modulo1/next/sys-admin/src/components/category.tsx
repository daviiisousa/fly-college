import type { Category } from "@/interfaces/category";
import { categoriesMocks } from "@/mocks/mockCategories";
import { useEffect, useState } from "react";
import { SiKingstontechnology } from "react-icons/si";

export function Category() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      setCategories(categoriesMocks);
    }

    fetchCategories();
  }, []);

  return (
    <section className="w-full text-white space-y-5 my-10">
      <h2 className="font-medium text-3xl">Categorias Populares</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((category) => (
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
        ))}
      </div>
    </section>
  );
}
