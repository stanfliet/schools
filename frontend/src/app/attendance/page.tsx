"use client";
import { useState, useCallback } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Shell } from "@/components/layout/Shell";
import { TopBar } from "@/components/layout/TopBar";
import { AttendanceSummary } from "@/components/attendance/AttendanceSummary";
import { AttendanceTable } from "@/components/attendance/AttendanceTable";
import { DateNavigator } from "@/components/attendance/DateNavigator";
import { NeonButton } from "@/components/ui/NeonButton";
import { useAttendance } from "@/hooks/useAttendance";
import { AlertTriangle, ClipboardCheck, RefreshCw } from "lucide-react";

const nav = [
  { label: "Attendance", href: "/attendance", icon: <ClipboardCheck size={18} /> },
  { label: "Truancy AI", href: "/truancy", icon: <AlertTriangle size={18} /> },
  { label: "Dashboard", href: "/dashboard", icon: <RefreshCw size={18} /> },
];

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function AttendancePage() {
  const [date, setDate] = useState(todayISO());
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const { records, stats, loading, error, fetchAttendance, updateAttendance } = useAttendance();

  const changeDate = useCallback(
    (d: string) => {
      setDate(d);
      fetchAttendance({ date: d });
    },
    [fetchAttendance]
  );

  const handleUpdate = useCallback(
    async (id: string, status: string) => {
      setUpdatingId(id);
      await updateAttendance(id, status);
      setUpdatingId(null);
    },
    [updateAttendance]
  );

  return (
    <div className="min-h-screen bg-cyber-black">
      <Sidebar items={nav} role="TEACHER" userName="Mrs. Dlamini" schoolName="Soweto High" />
      <Shell>
        <TopBar
          title="Attendance Register"
          subtitle="Daily roll-call capture · QR & biometric support"
          actions={
            <NeonButton variant="secondary" size="sm" icon={<RefreshCw size={13} />} onClick={() => changeDate(date)} disabled={loading}>
              {loading ? "Syncing…" : "Refresh"}
            </NeonButton>
          }
        />
        <div className="p-6 space-y-6 animate-fade-in">
          <DateNavigator value={date} onChange={changeDate} />

          {error && (
            <div className="flex items-center justify-between rounded-xl border border-neon-red/30 bg-neon-red/5 p-4">
              <p className="flex items-center gap-2 text-xs text-neon-red">
                <AlertTriangle size={14} />
                {error}
              </p>
              <NeonButton variant="red" size="sm" onClick={() => changeDate(date)}>
                Retry
              </NeonButton>
            </div>
          )}

          <AttendanceSummary stats={stats} />

          {loading && records.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyber-border border-t-neon-cyan" />
            </div>
          ) : (
            <AttendanceTable records={records} onUpdateStatus={handleUpdate} updatingId={updatingId} />
          )}
        </div>
      </Shell>
    </div>
  );
}
