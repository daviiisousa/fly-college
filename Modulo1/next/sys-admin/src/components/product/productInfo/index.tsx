import { ProductDetails } from "@/interfaces/productDeatails";
import { Badges } from "../../UI/badges";
import { StarRating } from "../../UI/StarsRating";
import { formatCurrency } from "@/helpers/formatCurrency";
import { Button } from "@/components/UI/buttons/button";
import { FiMinus, FiPlus } from "react-icons/fi";
import React from "react";
import { FaHeart, FaShare, FaShop } from "react-icons/fa6";
import { BsTruck } from "react-icons/bs";
import { MdOutlineShield } from "react-icons/md";

interface ProductInfoProps {
  product: ProductDetails;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = React.useState(1);

  const shippingInfos = [
    { value: product?.shipping, color: "green", icon: <BsTruck /> },
    { value: product?.warranty, color: "blue", icon: <MdOutlineShield /> },
  ];
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
          <div className="flex items-center border h-[20px] py-3 px-2 rounded-2xl border-gray-500">
            <Button
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
              theme="ghost"
              className={`h-px flex items-center ${
                quantity <= 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={quantity <= 1}
            >
              <FiMinus />
            </Button>
            <span className="px-4 py-2 text-sm font-medium">{quantity}</span>
            <Button
              onClick={() => setQuantity((prev) => prev + 1)}
              theme="ghost"
              className="h-px flex items-center"
            >
              <FiPlus />
            </Button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <Button
              className="flex-1 flex items-center justify-center gap-5 font-bold"
              theme="primary"
            >
              <FaShop />
              Adicionar ao carrinho
            </Button>
            <div className="border border-slate-900 p-5 rounded-md hover:bg-gray-800 cursor-pointer">
              <FaHeart size={20} />
            </div>
            <div className="border border-slate-900 p-5 rounded-md hover:bg-gray-800 cursor-pointer">
              <FaShare />
            </div>
          </div>
          <Button className="!m-0">Comprar Agora</Button>
        </div>
        <div className="flex flex-col gap-2 border-t pt-4 border-gray-800">
          {shippingInfos.map((info, index) => {
            return (
              <div className="flex items-center gap-3 text-sm" key={index}>
                <span
                  className={`
                ${info.color === "green" && "text-green-500"}
                ${info.color === "blue" && "text-blue-500"}
                `}
                >
                  {info.icon}
                </span>
                <span>{info.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
