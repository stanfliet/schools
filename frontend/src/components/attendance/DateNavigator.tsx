"use client";
import { NeonButton } from "@/components/ui/NeonButton";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

interface DateNavigatorProps {
  value: string; // YYYY-MM-DD
  onChange: (date: string) => void;
}

function toISO(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function DateNavigator({ value, onChange }: DateNavigatorProps) {
  const shift = (days: number) => {
    const d = value ? new Date(value + "T00:00:00") : new Date();
    d.setDate(d.getDate() + days);
    onChange(toISO(d));
  };

  const goToday = () => onChange(toISO(new Date()));

  const display = value
    ? new Date(value + "T00:00:00").toLocaleDateString("en-ZA", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "—";

  const isToday = value === toISO(new Date());

  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-cyber-border bg-cyber-card px-3 py-2">
      <CalendarDays size={15} className="text-neon-cyan" />
      <NeonButton variant="secondary" size="sm" onClick={() => shift(-1)} icon={<ChevronLeft size={13} />}>
        Prev
      </NeonButton>
      <span className="min-w-44 text-center text-xs font-mono text-gray-200">{display}</span>
      <NeonButton variant="secondary" size="sm" onClick={() => shift(1)} icon={<ChevronRight size={13} />}>
        Next
      </NeonButton>
      {!isToday && (
        <NeonButton variant="primary" size="sm" onClick={goToday}>
          Today
        </NeonButton>
      )}
    </div>
  );
}
