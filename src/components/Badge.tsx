import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "warning" | "default";
}

export function Badge({ children, variant = "default", className, ...props }: BadgeProps) {
  const variantStyles = {
    success: "bg-accent-success/10 text-accent-success border-accent-success/20",
    error: "bg-accent-error/10 text-accent-error border-accent-error/20",
    warning: "bg-accent-warning/10 text-accent-warning border-accent-warning/20",
    default: "bg-bg-secondary text-text-secondary border-border-primary",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
