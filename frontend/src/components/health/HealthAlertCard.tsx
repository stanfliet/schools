"use client";
import { NeonCard } from "@/components/ui/NeonCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Clock, Phone, Heart, CheckCircle } from "lucide-react";

export type AlertStatus = "INBOUND" | "CONTACTED" | "ESCALATED" | "RESOLVED";

export interface HealthAlert {
  id: number | string;
  learner: string;
  school: string;
  grade: string;
  chronic: string | null;
  status: AlertStatus;
  days: number;
  contact: string;
  time: string;
}

const STATUS_UI: Record<AlertStatus, { variant: "red" | "amber" | "pink" | "green"; accent: "red" | "amber" | "pink" | "green" }> = {
  INBOUND: { variant: "red", accent: "red" },
  CONTACTED: { variant: "amber", accent: "amber" },
  ESCALATED: { variant: "pink", accent: "pink" },
  RESOLVED: { variant: "green", accent: "green" },
};

interface HealthAlertCardProps {
  alert: HealthAlert;
  onContact?: (alert: HealthAlert) => void;
  onResolve?: (alert: HealthAlert) => void;
}

export function HealthAlertCard({ alert: a, onContact, onResolve }: HealthAlertCardProps) {
  const ui = STATUS_UI[a.status];
  return (
    <NeonCard accent={ui.accent} className="animate-fade-in">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className={
              "w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold " +
              (a.status === "INBOUND"
                ? "bg-neon-red/10 text-neon-red"
                : a.status === "CONTACTED"
                ? "bg-neon-amber/10 text-neon-amber"
                : a.status === "ESCALATED"
                ? "bg-neon-pink/10 text-neon-pink"
                : "bg-neon-green/10 text-neon-green")
            }
          >
            {a.learner.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-100">{a.learner}</h3>
            <p className="text-[10px] text-gray-500">
              {a.school} · Grade {a.grade}
            </p>
          </div>
        </div>
        <StatusBadge label={a.status} variant={ui.variant} dot pulsing={a.status === "INBOUND" || a.status === "ESCALATED"} />
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Clock size={12} />
          {a.days > 0 ? `${a.days} consecutive absent` : "Resolved"}
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Phone size={12} />
          {a.contact}
        </div>
        {a.chronic && (
          <div className="col-span-2 flex items-center gap-2">
            <Heart size={12} className="text-neon-amber" />
            <StatusBadge label={`Chronic: ${a.chronic}`} variant="amber" dot />
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-cyber-border">
        <span className="text-[10px] text-gray-600">{a.time}</span>
        {a.status !== "RESOLVED" ? (
          <div className="flex gap-2">
            {onContact && (
              <NeonButton variant="amber" size="sm" icon={<Phone size={12} />} onClick={() => onContact(a)}>
                Contact
              </NeonButton>
            )}
            {onResolve && (
              <NeonButton variant="green" size="sm" icon={<CheckCircle size={12} />} onClick={() => onResolve(a)}>
                Resolve
              </NeonButton>
            )}
          </div>
        ) : (
          <StatusBadge label="Completed" variant="green" dot />
        )}
      </div>
    </NeonCard>
  );
}
