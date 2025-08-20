import type { Category } from "@/interfaces/category";
import { categoriesMocks } from "@/mocks/mockCategories";
import { useEffect, useState } from "react";
import { CategoryCard } from "./categoryCard";

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
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
