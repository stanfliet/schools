"use client";
import { StatCard } from "@/components/ui/StatCard";
import { CheckCircle2, XCircle, Clock3, FileQuestion } from "lucide-react";
import type { AttendanceStats } from "@/types";

const EMPTY: AttendanceStats = { present: 0, absent: 0, late: 0, excused: 0, total: 0, percentage: 0 };

export function AttendanceSummary({ stats }: { stats: AttendanceStats }) {
  const s = stats ?? EMPTY;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      <StatCard
        label="Present"
        value={String(s.present)}
        change={s.total > 0 ? `${Math.round((s.present / s.total) * 100)}% of roll` : "No records"}
        changeType="increase"
        accent="green"
        icon={<CheckCircle2 size={16} />}
      />
      <StatCard
        label="Absent"
        value={String(s.absent)}
        change="Unaccounted"
        changeType="decrease"
        accent="red"
        icon={<XCircle size={16} />}
      />
      <StatCard
        label="Late"
        value={String(s.late)}
        change="Arrived after start"
        changeType="neutral"
        accent="amber"
        icon={<Clock3 size={16} />}
      />
      <StatCard
        label="Excused"
        value={String(s.excused)}
        change="Valid reason on file"
        changeType="neutral"
        accent="purple"
        icon={<FileQuestion size={16} />}
      />
      <StatCard
        label="Attendance Rate"
        value={`${s.percentage}%`}
        change={s.total > 0 ? `${s.total} total marks` : "Awaiting data"}
        changeType={s.percentage >= 85 ? "increase" : s.percentage >= 70 ? "neutral" : "decrease"}
        accent={s.percentage >= 85 ? "green" : s.percentage >= 70 ? "amber" : "red"}
        trend={s.percentage}
      />
    </div>
  );
}
