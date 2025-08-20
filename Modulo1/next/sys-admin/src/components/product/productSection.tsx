import { Product } from "@/interfaces/product";
import { productsMocks } from "@/mocks/mockProducts";
import { useEffect, useState } from "react";
import { ProductCard } from "./productCard";

export function ProductSection() {
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
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
