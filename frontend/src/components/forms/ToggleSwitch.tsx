"use client";
import { cn } from "@/lib/utils";
import { useId } from "react";

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
  accent?: "cyan" | "green" | "purple";
  disabled?: boolean;
  name?: string;
}

const accents: Record<string, string> = {
  cyan: "bg-neon-cyan",
  green: "bg-neon-green",
  purple: "bg-neon-purple",
};

export function ToggleSwitch({ label, checked, onChange, description, accent = "cyan", disabled, name }: ToggleSwitchProps) {
  const id = useId();
  return (
    <label htmlFor={id} className={cn("flex items-start justify-between gap-4 cursor-pointer select-none", disabled && "opacity-50 cursor-not-allowed")}>
      <span>
        <span className="block text-sm font-medium text-gray-200">{label}</span>
        {description && <span className="block text-[11px] text-gray-600 mt-0.5">{description}</span>}
      </span>
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span
        className={cn(
          "relative inline-flex h-5 w-9 flex-shrink-0 items-center rounded-full border transition-colors",
          checked ? cn(accents[accent], "border-transparent") : "bg-cyber-mid border-cyber-border"
        )}
      >
        <span
          className={cn(
            "inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform",
            checked ? "translate-x-[18px]" : "translate-x-0.5"
          )}
        />
      </span>
    </label>
  );
}
