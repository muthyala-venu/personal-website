import Image from "next/image";
import { siteConfig } from "@/data/site";

interface OrgLogoProps {
  className?: string;
  showName?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light";
}

const sizeMap = {
  sm: { width: 40, height: 40, className: "h-10 w-10" },
  md: { width: 80, height: 80, className: "h-16 w-16" },
  lg: { width: 120, height: 120, className: "h-24 w-24" },
};

export function OrgLogo({
  className = "",
  showName = false,
  size = "md",
  variant = "default",
}: OrgLogoProps) {
  const dimensions = sizeMap[size];
  const textPrimary = variant === "light" ? "text-white" : "text-primary";
  const textSecondary = variant === "light" ? "text-blue-100" : "text-muted";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src={siteConfig.images.orgLogo}
        alt={`${siteConfig.organization.name} logo`}
        width={dimensions.width}
        height={dimensions.height}
        className={`${dimensions.className} shrink-0 rounded-md bg-white object-contain p-1`}
      />
      {showName && (
        <div>
          <p className={`text-sm font-semibold leading-tight ${textPrimary}`}>
            {siteConfig.organization.shortName}
          </p>
          <p className={`text-xs ${textSecondary}`}>{siteConfig.organization.name}</p>
        </div>
      )}
    </div>
  );
}
