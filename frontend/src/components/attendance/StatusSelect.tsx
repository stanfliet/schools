"use client";
import { cn } from "@/lib/utils";
import type { AttendanceStatus } from "@/types";

const STATUSES: { value: AttendanceStatus; label: string; active: string }[] = [
  { value: "present", label: "P", active: "bg-neon-green/10 text-neon-green border-neon-green/40" },
  { value: "absent", label: "A", active: "bg-neon-red/10 text-neon-red border-neon-red/40" },
  { value: "late", label: "L", active: "bg-neon-amber/10 text-neon-amber border-neon-amber/40" },
  { value: "excused", label: "E", active: "bg-neon-purple/10 text-neon-purple border-neon-purple/40" },
];

interface StatusSelectProps {
  value: AttendanceStatus;
  onChange: (status: AttendanceStatus) => void;
  disabled?: boolean;
}

export function StatusSelect({ value, onChange, disabled }: StatusSelectProps) {
  return (
    <div className="inline-flex rounded-lg border border-cyber-border bg-cyber-dark overflow-hidden" role="radiogroup" aria-label="Attendance status">
      {STATUSES.map((s) => (
        <button
          key={s.value}
          type="button"
          disabled={disabled}
          onClick={() => onChange(s.value)}
          title={s.value}
          className={cn(
            "w-8 h-7 text-[10px] font-bold font-mono transition-all cursor-pointer border-r border-cyber-border last:border-r-0",
            value === s.value ? s.active : "text-gray-600 hover:text-gray-300 hover:bg-cyber-mid",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
