"use client";
import { cn } from "@/lib/utils";
import { useId } from "react";

interface TextAreaProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  error?: string;
  hint?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
}

export function TextArea({ label, value, onChange, placeholder, rows = 4, error, hint, disabled, required, name }: TextAreaProps) {
  const id = useId();
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-[11px] font-medium text-gray-400 uppercase tracking-widest">
          {label}
          {required && <span className="text-neon-red ml-0.5">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full resize-y rounded-lg border bg-cyber-dark px-3.5 py-2.5 text-sm text-gray-100 placeholder:text-gray-600 outline-none transition-all",
          error
            ? "border-neon-red/50 focus:border-neon-red focus:shadow-neon-red"
            : "border-cyber-border focus:border-neon-cyan/50 focus:shadow-neon-cyan",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      />
      {error ? (
        <p className="text-[11px] text-neon-red">{error}</p>
      ) : hint ? (
        <p className="text-[11px] text-gray-600">{hint}</p>
      ) : null}
    </div>
  );
}
