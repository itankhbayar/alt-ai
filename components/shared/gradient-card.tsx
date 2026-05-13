import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "ember" | "gold";
  className?: string;
};

export function GradientCard({
  children,
  variant = "ember",
  className = "",
}: Props) {
  const bg =
    variant === "ember"
      ? "bg-[linear-gradient(160deg,rgba(10,10,10,1)_0%,rgba(45,25,10,0.9)_50%,rgba(234,88,12,0.22)_100%)]"
      : "bg-[linear-gradient(160deg,rgba(10,10,10,1)_0%,rgba(50,40,15,0.9)_50%,rgba(212,167,44,0.2)_100%)]";

  return (
    <div
      className={`rounded-2xl border border-white/[0.08] p-6 md:p-8 ${bg} ${className}`}
    >
      {children}
    </div>
  );
}
