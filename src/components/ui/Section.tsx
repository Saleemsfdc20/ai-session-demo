import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  id,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section id={id} className={cn("py-20 md:py-32", className)} {...props}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
