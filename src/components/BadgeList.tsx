import { cn } from "../lib/utils";

interface BadgeListProps {
  items: string[];
  variant?: "default" | "success" | "warning";
  className?: string;
}

export function BadgeList({ items, variant = "default", className }: BadgeListProps) {
  const variantStyles = {
    default: "bg-[rgb(122_158_141_/_0.12)] text-[#4f6d5f] border-[rgb(79_109_95_/_0.22)]",
    success: "bg-[rgb(122_158_141_/_0.16)] text-[#2f453d] border-[rgb(79_109_95_/_0.26)]",
    warning: "bg-[rgb(248_245_236_/_0.9)] text-[#6f6246] border-[#dadcd6]",
  };

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item, index) => (
        <span
          key={index}
          className={cn(
            "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
            "border",
            variantStyles[variant]
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
