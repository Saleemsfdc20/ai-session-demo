import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "brand" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-white/10 text-white": variant === "default",
          "bg-brand-salesforce/20 text-brand-salesforce border border-brand-salesforce/50": variant === "brand",
          "border border-white/20 text-white": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
