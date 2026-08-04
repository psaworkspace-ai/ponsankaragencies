import { Link } from "react-router-dom";

import { SmartImage } from "@/components/common/SmartImage";

interface ProductCardProps {
  name: string;
  image?: string;
}

export function ProductCard({
  name,
  image,
}: ProductCardProps) {
  return (
    <Link
      to="#"
      className="
        group
        block
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Product Image */}
      <div className="overflow-hidden">
        <SmartImage
          variant="industrial"
          src={image}
          alt={name}
          className="h-32 sm:h-44 lg:h-56 w-full"
          imgClassName="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Product Name */}
      <div className="p-3 sm:p-4">
        <h3
          className="
            text-center
            text-sm
            sm:text-base
            lg:text-lg
            font-semibold
            text-slate-900
          "
        >
          {name}
        </h3>
      </div>
    </Link>
  );
}