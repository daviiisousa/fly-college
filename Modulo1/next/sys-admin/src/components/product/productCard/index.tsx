import { Product } from "@/interfaces/product";
import { Button } from "../../UI/buttons/button";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { StarRating } from "../../UI/StarsRating";
import { Badges } from "@/components/UI/badges";
import { formatCurrency } from "@/helpers/formatCurrency";

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
          <Badges
            variant="Novo"
            text="Novo"
            className="absolute top-2 left-2 z-10"
          />
        )}
        {product.discount && (
          <Badges
            className="absolute top-10 left-2  z-10"
            text={`${product.discount}% OFF`}
            variant="discount"
          />
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
        <Badges variant="category" className="block" text={product.category} />
        <h3 className="font-semibold text-[13px]">{product.name}</h3>
        <StarRating rating={product.rating} reviews={product.reviews} />
        <div className="flex items-center gap-5">
          <p className="text-blue-500 text-2xl font-bold">
            {formatCurrency(product.price)}
          </p>
          <p className="line-through text-gray-400">
            {formatCurrency(product.originalPrice)}
          </p>
        </div>
      </div>
    </div>
  );
}
