import { type ReactNode } from "react";

type SectionBadgeProps = {
  icon?: ReactNode;
  children: ReactNode;
  tone?: "sky" | "violet" | "mint";
};

const toneClasses: Record<NonNullable<SectionBadgeProps["tone"]>, string> = {
  sky: "text-sky-200/90 bg-sky-500/10 border-sky-400/30",
  violet: "text-violet-200/90 bg-violet-500/10 border-violet-400/30",
  mint: "text-emerald-200/90 bg-emerald-500/10 border-emerald-400/30",
};

export function SectionBadge({ icon, children, tone = "sky" }: SectionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] ${toneClasses[tone]}`}
    >
      {icon}
      {children}
    </span>
  );
}
