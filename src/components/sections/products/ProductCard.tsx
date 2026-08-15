import { Link } from "react-router-dom";
import { SmartImage } from "@/components/common/SmartImage";

interface ProductCardProps {
  name: string;
  image?: string;
  href?: string;
  subcategory?: string;
}

export function ProductCard({
  name,
  image,
  href = "#",
  subcategory,
}: ProductCardProps) {
  return (
    <Link
      to={href}
      className="
        group
        block
        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-brand-300
        hover:shadow-lg
        focus:outline-none
        focus:ring-2
        focus:ring-brand-500/30
      "
    >
      {/* =====================================================
          PRODUCT IMAGE
      ===================================================== */}

      <div
        className="
          relative
          h-[120px]
          overflow-hidden
          bg-slate-100
          sm:h-[150px]
          lg:h-[175px]
        "
      >
        <SmartImage
          variant="industrial"
          src={image}
          alt={name}
          className="h-full w-full"
          imgClassName="
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-500
            ease-out
            group-hover:scale-105
          "
        />

        {/* Image Overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/20
            via-transparent
            to-transparent
            opacity-70
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </div>

      {/* =====================================================
          PRODUCT INFORMATION
      ===================================================== */}

      <div
        className="
          flex
          min-h-[72px]
          flex-col
          items-center
          justify-center
          px-3
          py-3
          sm:min-h-[78px]
          sm:px-4
        "
      >
        {/* Subcategory */}

        {subcategory && (
          <span
            className="
              mb-1
              text-[9px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-brand-600
              sm:text-[10px]
            "
          >
            {subcategory}
          </span>
        )}

        {/* Product Name */}

        <h3
          className="
            line-clamp-2
            text-center
            text-sm
            font-semibold
            leading-5
            text-slate-900
            transition-colors
            duration-300
            group-hover:text-brand-600
            sm:text-[15px]
            lg:text-base
          "
        >
          {name}
        </h3>
      </div>
    </Link>
  );
}