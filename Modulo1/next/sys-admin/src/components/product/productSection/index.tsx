import { Product } from "@/interfaces/product";
import { useEffect, useState } from "react";
import { ProductCard } from "../productCard";
import { requestApi } from "@/helpers/requestAPI";
import customToast from "@/helpers/customToast";

export function ProductSection() {
  const [product, setProduct] = useState<Product[] | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await requestApi({
          url: "/products",
          method: "GET",
        });
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        customToast.error({ message: "Erro ao buscar produtos." });
      }
    }

    fetchProducts();
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
