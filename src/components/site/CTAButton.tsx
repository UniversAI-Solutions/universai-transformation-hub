import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
};

export function CTAButton({ to, children, variant = "primary" }: Props) {
  const base =
    "group inline-flex items-center gap-3 rounded-full text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 pl-6 pr-3 py-3";
  const styles = {
    primary:
      "bg-foreground text-background hover:bg-primary-glow hover:shadow-[0_0_40px_oklch(0.7_0.18_250/60%)]",
    outline:
      "border border-border text-foreground hover:bg-foreground/5 hover:border-primary-glow",
    ghost: "text-foreground hover:text-primary-glow",
  } as const;

  return (
    <Link to={to} className={`${base} ${styles[variant]}`}>
      {children}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background/15 group-hover:translate-x-1 transition-transform">
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
