import { cn } from "../lib/utils";

interface BadgeListProps {
  items: string[];
  variant?: "default" | "success" | "warning";
  className?: string;
}

export function BadgeList({ items, variant = "default", className }: BadgeListProps) {
  const variantStyles = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-amber-100 text-amber-700",
  };

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {items.map((item, index) => (
        <span
          key={index}
          className={cn(
            "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
            variantStyles[variant]
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
