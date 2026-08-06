"use client";
import { NeonCard } from "@/components/ui/NeonCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Syringe, MapPin, CalendarDays, StickyNote } from "lucide-react";

export type VaccinationStatus = "completed" | "overdue" | "upcoming" | "pending_reminder";

export interface VaccinationRecord {
  id: string;
  learnerName: string;
  grade: string;
  school: string;
  vaccine: string;
  dose: string;
  dueDate: string;
  administeredDate: string | null;
  status: VaccinationStatus;
  clinic: string;
  notes: string;
}

const STATUS: Record<VaccinationStatus, { label: string; variant: "green" | "red" | "cyan" | "amber" }> = {
  completed: { label: "Completed", variant: "green" },
  overdue: { label: "Overdue", variant: "red" },
  upcoming: { label: "Upcoming", variant: "cyan" },
  pending_reminder: { label: "Reminder Pending", variant: "amber" },
};

export function VaccinationCard({ record: r }: { record: VaccinationRecord }) {
  const st = STATUS[r.status];
  const accent = r.status === "overdue" ? "red" : r.status === "completed" ? "green" : r.status === "upcoming" ? "cyan" : "amber";

  return (
    <NeonCard accent={accent} className="animate-fade-in">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-cyber-mid flex items-center justify-center flex-shrink-0 border border-cyber-border">
            <Syringe size={15} className="text-neon-cyan" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-gray-100 truncate">{r.vaccine}</h3>
            <p className="text-[10px] text-gray-500 mt-0.5">
              {r.learnerName} · Grade {r.grade}
            </p>
          </div>
        </div>
        <StatusBadge label={st.label} variant={st.variant} dot />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-lg bg-cyber-dark border border-cyber-border p-2.5">
          <p className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest">
            <CalendarDays size={11} /> Due
          </p>
          <p className="mt-1 text-xs font-mono text-gray-200">{new Date(r.dueDate).toLocaleDateString("en-ZA")}</p>
        </div>
        <div className="rounded-lg bg-cyber-dark border border-cyber-border p-2.5">
          <p className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest">
            <Syringe size={11} /> Dose
          </p>
          <p className="mt-1 text-xs font-mono text-gray-200">{r.dose}</p>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <p className="flex items-center gap-1.5 text-[10px] text-gray-500">
          <MapPin size={11} className="text-neon-cyan" />
          {r.clinic}
        </p>
        <p className="text-[10px] text-gray-600 font-mono">{r.school}</p>
      </div>

      {r.administeredDate && (
        <p className="mt-1 text-[10px] text-neon-green">Administered {new Date(r.administeredDate).toLocaleDateString("en-ZA")}</p>
      )}

      {r.notes && (
        <p className="mt-3 flex items-start gap-1.5 rounded-lg border border-cyber-border bg-cyber-dark/60 p-2 text-[10px] text-gray-400">
          <StickyNote size={11} className="mt-0.5 flex-shrink-0 text-neon-amber" />
          {r.notes}
        </p>
      )}
    </NeonCard>
  );
}
