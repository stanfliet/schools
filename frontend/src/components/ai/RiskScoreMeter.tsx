"use client";
import { cn } from "@/lib/utils";

interface RiskScoreMeterProps {
  score: number;
  size?: number;
  showLabel?: boolean;
}

function tone(score: number) {
  if (score >= 85) return { stroke: "stroke-neon-red", text: "text-neon-red", label: "CRITICAL", dot: "bg-neon-red" };
  if (score >= 70) return { stroke: "stroke-neon-amber", text: "text-neon-amber", label: "HIGH", dot: "bg-neon-amber" };
  if (score >= 55) return { stroke: "stroke-neon-purple", text: "text-neon-purple", label: "MODERATE", dot: "bg-neon-purple" };
  return { stroke: "stroke-neon-green", text: "text-neon-green", label: "LOW", dot: "bg-neon-green" };
}

export function RiskScoreMeter({ score, size = 84, showLabel = true }: RiskScoreMeterProps) {
  const t = tone(score);
  const clamped = Math.max(0, Math.min(100, score));
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 100 100" className="-rotate-90">
        <circle cx="50" cy="50" r={radius} fill="none" strokeWidth="7" className="stroke-cyber-mid" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth="7"
          strokeLinecap="round"
          className={cn(t.stroke, "transition-all duration-700")}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={cn("font-mono font-bold", t.text)} style={{ fontSize: size * 0.24 }}>
          {clamped}
        </span>
        <span className="text-[8px] text-gray-500 font-mono">RISK</span>
      </div>
      {showLabel && (
        <span className={cn("absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[9px] font-semibold tracking-widest whitespace-nowrap", t.text)}>
          <span className={cn("w-1 h-1 rounded-full animate-pulse", t.dot)} />
          {t.label}
        </span>
      )}
    </div>
  );
}
