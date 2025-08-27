import { Product } from "@/interfaces/product";
import { Button } from "../UI/button";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      key={product.id}
      className="group overflow-hidden rounded-2xl bg-slate-900 w-full h-full cursor-pointer"
    >
      <div className="relative">
        {product.isNew && (
          <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Novo
          </span>
        )}
        {product.discount && (
          <span className="absolute top-10 left-2  z-10 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {product.discount}% OFF
          </span>
        )}
        <Button
          theme="ghost"
          className="absolute right-2 z-10 p-2 rounded-full !w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <CiHeart size={35} className="bg-slate-950 p-2 rounded-md" />
        </Button>
        <Button
          theme="primary"
          className="absolute top-75 left-30 z-10 p-2 rounded-full !w-fit opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex items-center gap-5"
        >
          <FiShoppingCart /> Adicionar
        </Button>
      </div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded-t-lg mb-3 group-hover:scale-105 transition-transform duration-300"
      />
      <div className="px-5 py-2 space-y-3">
        <p className="border border-gray-600 rounded-2xl w-fit px-3 text-sm">
          {product.category}
        </p>

        <h3 className="font-semibold text-[13px]">{product.name}</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < Math.floor(product.rating) ? "fill-yellow-500" : ""
                }
              />
            ))}
          </div>
          <span className="text-sm text-gray-400">({product.reviews})</span>
        </div>
        <div className="flex items-center gap-5">
          <p className="text-blue-500 text-2xl font-bold">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p className="line-through text-gray-400">
            {product.originalPrice?.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
