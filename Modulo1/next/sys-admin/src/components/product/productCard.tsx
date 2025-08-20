import { Product } from "@/interfaces/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      key={product.id}
      className="group overflow-hidden rounded-2xl bg-slate-900 w-full h-full"
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
      </div>
      {product.isNew && (
        <span className="absolute top-2 left-2 z-10 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
          Novo
        </span>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-cover rounded-t-lg mb-3 group-hover:scale-105 transition-transform duration-300"
      />
      <div className="px-5 py-2 space-y-3">
        <p className="border rounded-2xl w-fit px-3 text-sm">
          {product.category}
        </p>

        <h3 className="font-semibold text-[14px]">{product.name}</h3>
        <p className="text-gray-400">{product.price}</p>
      </div>
    </div>
  );
}
