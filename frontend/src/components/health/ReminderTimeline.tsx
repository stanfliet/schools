"use client";
import { cn } from "@/lib/utils";

export interface ReminderStep {
  label: string;
  detail: string;
  tone: "cyan" | "green" | "amber" | "red";
}

const DOT: Record<string, string> = {
  cyan: "bg-neon-cyan",
  green: "bg-neon-green",
  amber: "bg-neon-amber",
  red: "bg-neon-red",
};

const BORDER: Record<string, string> = {
  cyan: "border-neon-cyan/30",
  green: "border-neon-green/30",
  amber: "border-neon-amber/30",
  red: "border-neon-red/30",
};

export function ReminderTimeline({ steps }: { steps: ReminderStep[] }) {
  return (
    <ol className="relative space-y-4 pl-5 before:absolute before:left-[5px] before:top-1 before:bottom-1 before:w-px before:bg-cyber-border">
      {steps.map((s, i) => (
        <li key={i} className="relative">
          <span className={cn("absolute -left-5 top-1 h-2.5 w-2.5 rounded-full border-2 border-cyber-black", DOT[s.tone])} />
          <div className={cn("rounded-lg border p-3", BORDER[s.tone])}>
            <p className="text-xs font-semibold text-gray-200">{s.label}</p>
            <p className="mt-0.5 text-[11px] text-gray-500">{s.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
