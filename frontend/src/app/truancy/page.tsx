"use client";
import { Sidebar } from "@/components/layout/Sidebar";
import { Shell } from "@/components/layout/Shell";
import { TopBar } from "@/components/layout/TopBar";
import { StatCard } from "@/components/ui/StatCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { AtRiskStudentCard } from "@/components/ai/AtRiskStudentCard";
import type { AtRiskStudent } from "@/components/ai/AtRiskStudentCard";
import { GradingSubmissionCard } from "@/components/ai/GradingSubmissionCard";
import type { GradingSubmission } from "@/components/ai/GradingSubmissionCard";
import { AlertTriangle, Brain, ClipboardCheck, RefreshCw } from "lucide-react";

const nav = [
  { label: "Attendance", href: "/attendance", icon: <ClipboardCheck size={18} /> },
  { label: "Truancy AI", href: "/truancy", icon: <AlertTriangle size={18} />, badge: "12" },
  { label: "Dashboard", href: "/dashboard", icon: <RefreshCw size={18} /> },
];

const STUDENTS: AtRiskStudent[] = [
  {
    id: "S001",
    name: "Lindiwe Nkosi",
    grade: "10",
    class: "10A",
    riskScore: 94,
    attendanceRate: 38,
    daysAbsent: 23,
    trend: "rising",
    flags: ["Chronic absenteeism", "Failing math", "No parent contact"],
    recommendedAction: "Immediate home visit + counselor referral",
  },
  {
    id: "S002",
    name: "Thato Molefe",
    grade: "9",
    class: "9B",
    riskScore: 87,
    attendanceRate: 45,
    daysAbsent: 19,
    trend: "rising",
    flags: ["Frequent late arrivals", "Disengaged in class"],
    recommendedAction: "Parent-teacher conference this week",
  },
  {
    id: "S003",
    name: "Zanele Khumalo",
    grade: "11",
    class: "11C",
    riskScore: 78,
    attendanceRate: 52,
    daysAbsent: 15,
    trend: "stable",
    flags: ["Illness pattern (Mon/Fri)", "Drop in grades"],
    recommendedAction: "School nurse assessment + academic support",
  },
  {
    id: "S004",
    name: "Sipho Dlamini",
    grade: "8",
    class: "8A",
    riskScore: 72,
    attendanceRate: 58,
    daysAbsent: 12,
    trend: "declining",
    flags: ["Recent change in behavior"],
    recommendedAction: "Mentor assignment + weekly check-ins",
  },
  {
    id: "S005",
    name: "Amara Okafor",
    grade: "12",
    class: "12B",
    riskScore: 61,
    attendanceRate: 66,
    daysAbsent: 8,
    trend: "stable",
    flags: ["Late to first period"],
    recommendedAction: "Morning check-in program",
  },
  {
    id: "S006",
    name: "Bongani Zulu",
    grade: "9",
    class: "9A",
    riskScore: 34,
    attendanceRate: 84,
    daysAbsent: 3,
    trend: "declining",
    flags: [],
    recommendedAction: "No intervention required — monitoring only",
  },
];

const SUBMISSIONS: GradingSubmission[] = [
  {
    id: "GRD-001",
    studentName: "Lindiwe Nkosi",
    subject: "Mathematics",
    assignmentTitle: "Algebra Quiz Term 2",
    submittedAt: "2026-08-04T08:30:00Z",
    status: "completed",
    score: 34,
    maxScore: 50,
    confidence: 96,
    rubricScore: [
      { category: "Correctness", earned: 18, max: 25 },
      { category: "Method", earned: 10, max: 15 },
      { category: "Presentation", earned: 6, max: 10 },
    ],
    feedback: "Well structured. Review quadratic formula steps 4–7.",
  },
  {
    id: "GRD-002",
    studentName: "Thato Molefe",
    subject: "English",
    assignmentTitle: "Essay: SA Identity",
    submittedAt: "2026-08-04T09:15:00Z",
    status: "manual_review",
    score: null,
    maxScore: 50,
    confidence: 74,
    rubricScore: [
      { category: "Content", earned: 22, max: 25 },
      { category: "Grammar", earned: 12, max: 15 },
      { category: "Structure", earned: 8, max: 10 },
    ],
    feedback: "Handwriting ambiguous in section B — queued for manual review.",
  },
];

export default function TruancyPage() {
  const critical = STUDENTS.filter((s) => s.riskScore >= 85).length;
  const high = STUDENTS.filter((s) => s.riskScore >= 70 && s.riskScore < 85).length;
  const avg = Math.round(STUDENTS.reduce((acc, s) => acc + s.riskScore, 0) / STUDENTS.length);

  return (
    <div className="min-h-screen bg-cyber-black">
      <Sidebar items={nav} role="TEACHER" userName="Mrs. Dlamini" schoolName="Soweto High" />
      <Shell>
        <TopBar
          title="Predictive Truancy AI"
          subtitle="ML early-warning — flags at-risk students 2 weeks before chronic absence triggers"
          actions={
            <NeonButton variant="secondary" size="sm" icon={<RefreshCw size={13} />}>
              Retrain Model
            </NeonButton>
          }
        />
        <div className="p-6 space-y-6 animate-fade-in">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
            <StatCard label="Critical Risk" value={String(critical)} change="Immediate action needed" changeType="increase" accent="red" icon={<AlertTriangle size={16} />} />
            <StatCard label="High Risk" value={String(high)} change="Intervention this week" changeType="increase" accent="amber" icon={<AlertTriangle size={16} />} />
            <StatCard label="Avg Risk Score" value={`${avg}%`} change="Across monitored students" changeType="neutral" accent="purple" trend={avg} />
            <StatCard label="Model Accuracy" value="89.3%" change="92.1% recall · retrained 02:00" changeType="increase" accent="cyan" trend={89} />
          </div>

          <div className="flex items-center gap-2">
            <Brain size={15} className="text-neon-cyan" />
            <h2 className="text-sm font-semibold text-gray-200 tracking-wide">AT-RISK STUDENTS</h2>
            <span className="text-[10px] text-gray-600">Ensemble Gradient Boosted Trees + LSTM</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {STUDENTS.map((s) => (
              <AtRiskStudentCard key={s.id} student={s} />
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2">
            <Brain size={15} className="text-neon-purple" />
            <h2 className="text-sm font-semibold text-gray-200 tracking-wide">RECENT AI-GRADED SUBMISSIONS</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {SUBMISSIONS.map((s) => (
              <GradingSubmissionCard key={s.id} submission={s} />
            ))}
          </div>
        </div>
      </Shell>
    </div>
  );
}
