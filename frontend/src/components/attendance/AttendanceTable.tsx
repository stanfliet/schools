"use client";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { StatusSelect } from "./StatusSelect";
import { EmptyState } from "@/components/dashboard/LoadingState";
import type { AttendanceRecord, AttendanceStatus } from "@/types";

interface AttendanceTableProps {
  records: AttendanceRecord[];
  onUpdateStatus?: (id: string, status: AttendanceStatus) => void;
  updatingId?: string | null;
}

const STATUS_UI: Record<AttendanceStatus, { variant: "green" | "red" | "amber" | "purple"; label: string }> = {
  present: { variant: "green", label: "Present" },
  absent: { variant: "red", label: "Absent" },
  late: { variant: "amber", label: "Late" },
  excused: { variant: "purple", label: "Excused" },
};

export function AttendanceTable({ records, onUpdateStatus, updatingId }: AttendanceTableProps) {
  if (!records || records.length === 0) {
    return <EmptyState title="No attendance records yet" description="Marks appear here once attendance is captured" />;
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-cyber-border bg-cyber-card">
      <table className="min-w-full divide-y divide-cyber-border text-sm">
        <thead>
          <tr className="bg-cyber-dark">
            <th className="px-4 py-3 text-left font-medium text-gray-500 text-[10px] uppercase tracking-widest">Learner</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 text-[10px] uppercase tracking-widest">Grade</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 text-[10px] uppercase tracking-widest">Date</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 text-[10px] uppercase tracking-widest">Status</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500 text-[10px] uppercase tracking-widest">Method</th>
            {onUpdateStatus && <th className="px-4 py-3 text-right font-medium text-gray-500 text-[10px] uppercase tracking-widest">Update</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-cyber-border">
          {records.map((r) => {
            const ui = STATUS_UI[r.status] ?? STATUS_UI.present;
            return (
              <tr key={r.id} className="hover:bg-cyber-dark/50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-100">
                  {r.learner_name || r.learner_id}
                  <span className="block text-[10px] text-gray-600 font-mono">{r.id}</span>
                </td>
                <td className="px-4 py-3 text-gray-400">{r.grade || "—"}</td>
                <td className="px-4 py-3 text-gray-400 font-mono text-xs">
                  {new Date(r.date).toLocaleDateString("en-ZA")}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge label={ui.label} variant={ui.variant} dot />
                </td>
                <td className="px-4 py-3 text-xs text-gray-500 font-mono">{r.method || "roll-call"}</td>
                {onUpdateStatus && (
                  <td className="px-4 py-3 text-right">
                    <StatusSelect
                      value={r.status}
                      disabled={updatingId === r.id}
                      onChange={(status) => onUpdateStatus(r.id, status)}
                    />
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
