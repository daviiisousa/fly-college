import { Product } from "@/interfaces/product";
import { productsMocks } from "@/mocks/mockProducts";
import { useEffect, useState } from "react";

export function ProductCard() {
  const [product, setProduct] = useState<Product[] | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      setProduct(productsMocks);
    }

    fetchProduct();
  }, []);

  return (
    <section className="space-y-5 text-white">
      <h2 className="text-3xl font-semibold">Produtos em Destaque</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {product?.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-2xl bg-slate-900"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-lg mb-3 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="px-5">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-400">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
