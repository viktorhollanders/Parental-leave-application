import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "inactive" | "ghost";
type Size = "sm" | "md" | "lg" | "icon";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...rest
}: ButtonProps) {
  const base = "border rounded-full";

  const variants: Record<Variant, string> = {
    primary:
      "bg-brand-primary hover:bg-brand-primary-dark text-brand-gray-100 border-brand-primary hover:border-brand-primary-dark",
    secondary:
      "hover:border-brand-primary bg-brand-secondary border-brand-primary hover:bg-brand-primary hover:text-brand-gray-100 text-brand-primary",
    inactive: "border-brand-gray-600 text-brand-gray-600",
    ghost: "bg-transparent",
  };
  const sizes: Record<Size, string> = {
    sm: "px-3 py-2",
    md: "px-6 py-2",
    lg: "px-8 py-2.5",
    icon: "border-none rounded-none flex justify-center items-center w-9 h-9",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
