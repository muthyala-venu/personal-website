import Image from "next/image";
import { siteConfig } from "@/data/site";

interface PortraitImageProps {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg" | "hero";
}

const containerSizes = {
  sm: "h-16 w-16",
  md: "h-32 w-32",
  lg: "h-48 w-48",
  hero: "h-80 w-full max-w-xs",
};

export function PortraitImage({ className = "", priority = false, size = "md" }: PortraitImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${containerSizes[size]} ${className}`}>
      <Image
        src={siteConfig.images.portrait}
        alt={`${siteConfig.name} — ${siteConfig.designation}`}
        width={400}
        height={500}
        priority={priority}
        className="absolute left-0 top-0 h-[200%] w-full object-cover object-top"
      />
    </div>
  );
}
