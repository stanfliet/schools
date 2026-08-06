"use client";
import { NeonCard } from "@/components/ui/NeonCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { RiskScoreMeter } from "./RiskScoreMeter";
import { TrendingUp, TrendingDown, Minus, AlertTriangle, CalendarX } from "lucide-react";

export type RiskTrend = "rising" | "stable" | "declining";

export interface AtRiskStudent {
  id: string;
  name: string;
  grade: string;
  class: string;
  riskScore: number;
  attendanceRate: number;
  daysAbsent: number;
  trend: RiskTrend;
  flags: string[];
  recommendedAction: string;
}

const TREND_MAP: Record<RiskTrend, { label: string; variant: "red" | "amber" | "green"; icon: React.ReactNode }> = {
  rising: { label: "Rising", variant: "red", icon: <TrendingUp size={11} /> },
  stable: { label: "Stable", variant: "amber", icon: <Minus size={11} /> },
  declining: { label: "Improving", variant: "green", icon: <TrendingDown size={11} /> },
};

function accentFor(score: number) {
  if (score >= 85) return "red" as const;
  if (score >= 70) return "amber" as const;
  if (score >= 55) return "purple" as const;
  return "green" as const;
}

export function AtRiskStudentCard({ student }: { student: AtRiskStudent }) {
  const t = TREND_MAP[student.trend];
  return (
    <NeonCard accent={accentFor(student.riskScore)} interactive className="h-full animate-slide-up">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyber-mid flex items-center justify-center text-xs font-bold font-mono text-neon-cyan border border-cyber-border">
            {student.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-100">{student.name}</h3>
            <p className="text-[10px] text-gray-500 font-mono">
              {student.id} · Grade {student.grade} · {student.class}
            </p>
          </div>
        </div>
        <StatusBadge label={t.label} variant={t.variant} icon={t.icon} />
      </div>

      <div className="mt-4 flex items-center justify-center">
        <RiskScoreMeter score={student.riskScore} />
      </div>

      <div className="mt-6 space-y-3">
        <div>
          <div className="flex items-center justify-between text-[10px] text-gray-500 mb-1">
            <span>ATTENDANCE RATE</span>
            <span className="font-mono text-gray-300">{student.attendanceRate}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-cyber-mid overflow-hidden">
            <div
              className={
                "h-full rounded-full transition-all duration-500 " +
                (student.attendanceRate < 50 ? "bg-neon-red" : student.attendanceRate < 65 ? "bg-neon-amber" : "bg-neon-green")
              }
              style={{ width: `${student.attendanceRate}%` }}
            />
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <CalendarX size={13} className="text-neon-amber" />
          <span className="font-mono">{student.daysAbsent}</span> days absent
        </div>
      </div>

      {student.flags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {student.flags.map((f, i) => (
            <span key={i} className="px-2 py-0.5 rounded bg-cyber-mid text-[9px] text-gray-300 border border-cyber-border">
              {f}
            </span>
          ))}
        </div>
      )}

      <div className="mt-3 flex items-start gap-2 rounded-lg border border-cyber-border bg-cyber-dark/60 p-2.5">
        <AlertTriangle size={13} className="mt-0.5 flex-shrink-0 text-neon-amber" />
        <p className="text-[10px] text-gray-400 leading-relaxed">{student.recommendedAction}</p>
      </div>
    </NeonCard>
  );
}
