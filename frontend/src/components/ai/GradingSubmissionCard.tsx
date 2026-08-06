"use client";
import { NeonCard } from "@/components/ui/NeonCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ConfidenceBadge } from "./ConfidenceBadge";
import { FileText, Clock } from "lucide-react";

export type SubmissionStatus = "pending" | "processing" | "completed" | "manual_review";

export interface RubricScore {
  category: string;
  earned: number;
  max: number;
}

export interface GradingSubmission {
  id: string;
  studentName: string;
  subject: string;
  assignmentTitle: string;
  submittedAt: string;
  status: SubmissionStatus;
  score: number | null;
  maxScore: number;
  confidence: number | null;
  rubricScore: RubricScore[];
  feedback: string;
}

const STATUS: Record<SubmissionStatus, { label: string; variant: "cyan" | "green" | "amber" | "pink" }> = {
  pending: { label: "Pending", variant: "cyan" },
  processing: { label: "Processing…", variant: "amber" },
  completed: { label: "Graded ✓", variant: "green" },
  manual_review: { label: "Manual Review", variant: "pink" },
};

export function GradingSubmissionCard({ submission: s }: { submission: GradingSubmission }) {
  const st = STATUS[s.status];
  const pct = s.score !== null && s.maxScore > 0 ? Math.round((s.score / s.maxScore) * 100) : null;

  return (
    <NeonCard accent={s.status === "completed" ? "green" : s.status === "manual_review" ? "pink" : "cyan"} className="animate-fade-in">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-cyber-mid flex items-center justify-center flex-shrink-0 border border-cyber-border">
            <FileText size={15} className="text-neon-cyan" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-gray-100 truncate">{s.assignmentTitle}</h3>
            <p className="text-[10px] text-gray-500 mt-0.5">
              {s.studentName} · {s.subject}
            </p>
            <p className="flex items-center gap-1 text-[10px] text-gray-600 mt-0.5">
              <Clock size={10} />
              {new Date(s.submittedAt).toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}
            </p>
          </div>
        </div>
        <StatusBadge label={st.label} variant={st.variant} dot={s.status !== "completed"} />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Score</p>
          {s.score !== null ? (
            <p className="text-xl font-bold font-mono text-gray-100">
              {s.score}
              <span className="text-xs text-gray-500">/{s.maxScore}</span>
              {pct !== null && <span className="ml-2 text-xs text-neon-cyan">{pct}%</span>}
            </p>
          ) : (
            <p className="text-sm text-gray-500">—</p>
          )}
        </div>
        {s.confidence !== null && s.status === "completed" && <ConfidenceBadge confidence={s.confidence} />}
      </div>

      {s.rubricScore.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
          {s.rubricScore.map((r) => (
            <div key={r.category} className="rounded-lg bg-cyber-dark border border-cyber-border p-2.5">
              <p className="text-[10px] text-gray-500">{r.category}</p>
              <div className="mt-1.5 flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-cyber-mid overflow-hidden">
                  <div
                    className="h-full rounded-full bg-neon-purple"
                    style={{ width: `${r.max > 0 ? (r.earned / r.max) * 100 : 0}%` }}
                  />
                </div>
                <span className="font-mono text-[10px] text-gray-300">
                  {r.earned}/{r.max}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {s.feedback && (
        <div className="mt-3 rounded-lg border border-neon-cyan/20 bg-neon-cyan/5 p-2.5 text-[11px] text-gray-300">
          {s.feedback}
        </div>
      )}
    </NeonCard>
  );
}
