"use client";
import { cn } from "@/lib/utils";
import { useId } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  hint?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
}

export function SelectField({ label, value, onChange, options, placeholder, error, hint, disabled, required, name }: SelectFieldProps) {
  const id = useId();
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-[11px] font-medium text-gray-400 uppercase tracking-widest">
          {label}
          {required && <span className="text-neon-red ml-0.5">*</span>}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        required={required}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full appearance-none rounded-lg border bg-cyber-dark px-3.5 py-2.5 text-sm text-gray-100 outline-none transition-all cursor-pointer",
          "bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[right_0.75rem_center] bg-no-repeat pr-9",
          value === "" && "text-gray-600",
          error
            ? "border-neon-red/50 focus:border-neon-red focus:shadow-neon-red"
            : "border-cyber-border focus:border-neon-cyan/50 focus:shadow-neon-cyan",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        {placeholder !== undefined && <option value="">{placeholder}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-cyber-dark">
            {o.label}
          </option>
        ))}
      </select>
      {error ? (
        <p className="text-[11px] text-neon-red">{error}</p>
      ) : hint ? (
        <p className="text-[11px] text-gray-600">{hint}</p>
      ) : null}
    </div>
  );
}
