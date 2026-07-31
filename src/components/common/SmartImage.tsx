import { useState } from "react";
import type { LucideIcon } from "lucide-react";

import type { MediaVariant } from "@/types";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { cn } from "@/lib/utils";

interface SmartImageProps {
  src?: string;
  alt: string;

  // Optional because it's only needed for the placeholder
  variant?: MediaVariant;

  icon?: LucideIcon;
  className?: string;
  iconClassName?: string;
  imgClassName?: string;
  eager?: boolean;
}

/**
 * Displays a real image when `src` exists.
 * Falls back to a themed placeholder if the image is missing or fails to load.
 */
export function SmartImage({
  src,
  alt,
  variant = "water",
  icon,
  className,
  iconClassName,
  imgClassName,
  eager,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <MediaPlaceholder
        variant={variant}
        icon={icon}
        className={className}
        iconClassName={iconClassName}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-soft", className)}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onError={() => setFailed(true)}
        className={cn("size-full object-cover", imgClassName)}
      />
    </div>
  );
}