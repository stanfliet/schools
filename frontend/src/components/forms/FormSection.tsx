"use client";
import { NeonCard } from "@/components/ui/NeonCard";

interface FormSectionProps {
  title: string;
  subtitle?: string;
  accent?: "cyan" | "blue" | "purple" | "pink" | "green" | "amber" | "red" | "teal";
  children: React.ReactNode;
  className?: string;
}

export function FormSection({ title, subtitle, accent = "cyan", children, className }: FormSectionProps) {
  return (
    <NeonCard title={title} subtitle={subtitle} accent={accent} className={className}>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </NeonCard>
  );
}
