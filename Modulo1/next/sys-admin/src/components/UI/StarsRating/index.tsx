import { FaStar } from "react-icons/fa6";

interface StarRatingProps {
  rating: number;
  reviews: number;
  size?: number;
}

export function StarRating({ rating, reviews, size }: StarRatingProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < Math.floor(rating) ? "fill-yellow-500" : ""}
            size={size || 14}
          />
        ))}
      </div>
      <span className="text-sm text-gray-400">({reviews})</span>
    </div>
  );
}
