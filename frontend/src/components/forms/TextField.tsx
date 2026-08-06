"use client";
import { cn } from "@/lib/utils";
import { useId } from "react";

interface TextFieldProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  icon?: React.ReactNode;
  error?: string;
  hint?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
}

export function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon,
  error,
  hint,
  disabled,
  required,
  name,
}: TextFieldProps) {
  const id = useId();
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-[11px] font-medium text-gray-400 uppercase tracking-widest">
          {label}
          {required && <span className="text-neon-red ml-0.5">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">{icon}</span>}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "w-full rounded-lg border bg-cyber-dark px-3.5 py-2.5 text-sm text-gray-100 placeholder:text-gray-600 outline-none transition-all",
            icon ? "pl-9" : "",
            error
              ? "border-neon-red/50 focus:border-neon-red focus:shadow-neon-red"
              : "border-cyber-border focus:border-neon-cyan/50 focus:shadow-neon-cyan",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        />
      </div>
      {error ? (
        <p className="text-[11px] text-neon-red">{error}</p>
      ) : hint ? (
        <p className="text-[11px] text-gray-600">{hint}</p>
      ) : null}
    </div>
  );
}
