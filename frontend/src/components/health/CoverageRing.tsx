"use client";
import { cn } from "@/lib/utils";

interface CoverageRingProps {
  value: number;
  label?: string;
  sublabel?: string;
  size?: number;
}

export function CoverageRing({ value, label = "Coverage", sublabel, size = 120 }: CoverageRingProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);
  const stroke = clamped >= 80 ? "stroke-neon-green" : clamped >= 60 ? "stroke-neon-amber" : "stroke-neon-red";

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 100 100" className="-rotate-90">
        <circle cx="50" cy="50" r={radius} fill="none" strokeWidth="8" className="stroke-cyber-mid" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          className={cn(stroke, "transition-all duration-700")}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="font-mono font-bold text-gray-100" style={{ fontSize: size * 0.2 }}>
          {clamped}%
        </span>
        <span className="text-[9px] text-gray-500 uppercase tracking-widest">{label}</span>
        {sublabel && <span className="text-[8px] text-gray-600 mt-0.5">{sublabel}</span>}
      </div>
    </div>
  );
}
