"use client";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConfidenceBadgeProps {
  confidence: number;
  className?: string;
}

export function ConfidenceBadge({ confidence, className }: ConfidenceBadgeProps) {
  const tone =
    confidence >= 90
      ? "bg-neon-green/10 text-neon-green border border-neon-green/20"
      : confidence >= 80
      ? "bg-neon-amber/10 text-neon-amber border border-neon-amber/20"
      : "bg-neon-red/10 text-neon-red border border-neon-red/20";

  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium", tone, className)}>
      <Sparkles size={11} />
      AI {confidence}%
    </span>
  );
}
