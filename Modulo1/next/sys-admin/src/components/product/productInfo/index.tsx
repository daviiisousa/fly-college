import { ProductDetails } from "@/interfaces/productDeatails";
import { Badges } from "../../UI/badges";
import { StarRating } from "../../StarsRating";
import { formatCurrency } from "@/helpers/formatCurrency";
import { Button } from "@/components/UI/buttons/button";
import { FiMinus, FiPlus } from "react-icons/fi";

interface ProductInfoProps {
  product: ProductDetails;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-5 text-white">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Badges variant="category" text={product.category} />
          {product.isNew && <Badges variant="Novo" text="Novo" />}
          {product.discount && (
            <Badges variant="discount" text={`${product.discount}% OFF`} />
          )}
        </div>
        <h1 className="text-2xl font-bold lg:text-3xl mb-4">{product.name}</h1>
        <StarRating
          rating={product.rating}
          reviews={product.reviews}
          size={20}
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-blue-500">
            {formatCurrency(product.price)}
          </span>
          <span className="line-through text-gray-400">
            {formatCurrency(product.originalPrice)}
          </span>
        </div>
        <p className="text-sm text-gray-400">
          ou 12x de {formatCurrency(product.price / 12)} sem juros
        </p>
      </div>
      <div>
        <p className="text-sm text-gray-400 leading-relaxed">
          {product.description}
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label htmlFor="quantidade" className="text-sm font-medium">
            Quantidade:
          </label>
          <div className="flex items-center border border-black/70 rounded-md">
            <Button theme="ghost" className="p-0 ">
              <FiMinus />
            </Button>
            <span className="px-4 py-2 text-sm font-medium">1</span>
            <Button theme="ghost" className="p-0 ">
              <FiPlus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
