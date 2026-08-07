"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LayoutDashboard, Users, CalendarCheck, AlertTriangle, Activity, TrendingUp, Loader2 } from "lucide-react";
import { getCurrentProfile, getSupabaseClient } from "@/lib/supabase";

interface DashboardStats {
  totalLearners: number;
  presentToday: number;
  absentToday: number;
  truancyAlerts: number;
  attendanceRate: number;
}

function StatCard({ icon: Icon, label, value, color }: { icon: any; label: string; value: string | number; color: string }) {
  return (
    <div className="bg-cyber-card border border-cyber-border rounded-xl p-4 flex items-start gap-3 animate-fade-in">
      <div className={`p-2 rounded-lg bg-${color}/10`}>
        <Icon size={18} className={`text-${color}`} />
      </div>
      <div>
        <p className="text-[11px] text-gray-500 font-medium">{label}</p>
        <p className="text-xl font-bold text-gray-100">{value}</p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const supabase = getSupabaseClient();
      if (!supabase) {
        setStats({ totalLearners: 0, presentToday: 0, absentToday: 0, truancyAlerts: 0, attendanceRate: 0 });
        setLoading(false);
        return;
      }

      const profile = await getCurrentProfile();
      if (!profile?.id) {
        router.push("/login");
        return;
      }

      setProfile(profile);

      const { count: totalLearners } = await supabase
        .from("learners").select("*", { count: "exact", head: true })
        .eq("school_id", profile.school_id);

      const today = new Date().toISOString().split("T")[0];
      const { count: presentToday } = await supabase
        .from("attendance").select("*", { count: "exact", head: true })
        .eq("school_id", profile.school_id).eq("date", today).eq("status", "present");

      const { count: absentToday } = await supabase
        .from("attendance").select("*", { count: "exact", head: true })
        .eq("school_id", profile.school_id).eq("date", today).eq("status", "absent");

      const { count: truancyAlerts } = await supabase
        .from("clinical_alerts").select("*", { count: "exact", head: true })
        .eq("school_id", profile.school_id)
        .neq("status", "resolved");

      const total = (presentToday || 0) + (absentToday || 0);
      const rate = total > 0 ? Math.round((presentToday || 0) / total * 100) : 0;

      setStats({
        totalLearners: totalLearners || 0,
        presentToday: presentToday || 0,
        absentToday: absentToday || 0,
        truancyAlerts: truancyAlerts || 0,
        attendanceRate: rate,
      });
      setLoading(false);
    }
    load();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cyber-black flex items-center justify-center">
        <Loader2 size={32} className="text-neon-cyan animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-black p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-100">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back, {profile?.full_name || "User"}</p>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20">
            <Activity size={14} className="text-neon-cyan" />
            <span className="text-[10px] text-neon-cyan font-medium">LIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <StatCard icon={Users} label="Total Learners" value={stats?.totalLearners || 0} color="neon-blue" />
          <StatCard icon={CalendarCheck} label="Present Today" value={stats?.presentToday || 0} color="neon-green" />
          <StatCard icon={AlertTriangle} label="Absent Today" value={stats?.absentToday || 0} color="neon-amber" />
          <StatCard icon={TrendingUp} label="Attendance Rate" value={`${stats?.attendanceRate || 0}%`} color="neon-cyan" />
          <StatCard icon={Activity} label="Truancy Alerts" value={stats?.truancyAlerts || 0} color="neon-pink" />
        </div>

        <div className="bg-cyber-card border border-cyber-border rounded-xl p-6">
          <h2 className="text-sm font-semibold text-gray-200 mb-4 flex items-center gap-2">
            <LayoutDashboard size={16} className="text-neon-cyan" /> Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button onClick={() => router.push("/teacher")}
              className="p-3 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20 text-xs text-neon-cyan font-medium hover:bg-neon-cyan/10 transition-all">
              Mark Attendance
            </button>
            <button onClick={() => router.push("/clinic")}
              className="p-3 rounded-lg bg-neon-pink/5 border border-neon-pink/20 text-xs text-neon-pink font-medium hover:bg-neon-pink/10 transition-all">
              Health Records
            </button>
            <button onClick={() => router.push("/learners")}
              className="p-3 rounded-lg bg-neon-purple/5 border border-neon-purple/20 text-xs text-neon-purple font-medium hover:bg-neon-purple/10 transition-all">
              Learner Hub
            </button>
            <button onClick={() => router.push("/billing")}
              className="p-3 rounded-lg bg-neon-green/5 border border-neon-green/20 text-xs text-neon-green font-medium hover:bg-neon-green/10 transition-all">
              Billing Desk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
