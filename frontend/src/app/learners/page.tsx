"use client";

import { useEffect, useState } from "react";
import { GraduationCap, PlusCircle, Loader2, AlertCircle } from "lucide-react";
import { getCurrentProfile, getSupabaseClient } from "@/lib/supabase";

interface LearnerRecord {
  id: string;
  full_name: string;
  grade: string;
  class_name?: string | null;
  emergency_contact?: string | null;
  emergency_phone?: string | null;
  chronic_conditions?: string[] | null;
  created_at?: string;
}

const sampleLearners: LearnerRecord[] = [
  { id: "sample-1", full_name: "Lerato Mokoena", grade: "10", class_name: "10A", emergency_contact: "Mpho Mokoena", emergency_phone: "0712345678", chronic_conditions: ["Asthma"], created_at: "2026-01-15" },
  { id: "sample-2", full_name: "Sipho Khumalo", grade: "9", class_name: "9B", emergency_contact: "Nokhuthula Khumalo", emergency_phone: "0823456789", chronic_conditions: [], created_at: "2026-01-20" },
];

export default function LearnersPage() {
  const [learners, setLearners] = useState<LearnerRecord[]>(sampleLearners);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ full_name: "", grade: "", class_name: "", emergency_contact: "", emergency_phone: "" });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const supabase = getSupabaseClient();
      if (!supabase) {
        setLoading(false);
        return;
      }

      const profile = await getCurrentProfile();
      if (!profile?.school_id) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("learners")
        .select("id, full_name, grade, class_name, emergency_contact, emergency_phone, chronic_conditions, created_at")
        .eq("school_id", profile.school_id)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setLearners(data as LearnerRecord[]);
      }
      setLoading(false);
    }
    load();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    const supabase = getSupabaseClient();
    const profile = await getCurrentProfile();

    if (!supabase || !profile?.school_id) {
      setMessage("Supabase is not configured yet, so the learner was added only to the local view.");
      setLearners((current) => [{
        id: `local-${Date.now()}`,
        full_name: form.full_name,
        grade: form.grade,
        class_name: form.class_name,
        emergency_contact: form.emergency_contact,
        emergency_phone: form.emergency_phone,
        chronic_conditions: [],
        created_at: new Date().toISOString(),
      }, ...current]);
      setSaving(false);
      setForm({ full_name: "", grade: "", class_name: "", emergency_contact: "", emergency_phone: "" });
      return;
    }

    const { error } = await supabase.from("learners").insert({
      school_id: profile.school_id,
      full_name: form.full_name,
      grade: form.grade,
      class_name: form.class_name || null,
      emergency_contact: form.emergency_contact || null,
      emergency_phone: form.emergency_phone || null,
    });

    if (error) {
      setMessage(`Unable to save learner: ${error.message}`);
      setSaving(false);
      return;
    }

    setMessage("Learner saved successfully.");
    setForm({ full_name: "", grade: "", class_name: "", emergency_contact: "", emergency_phone: "" });
    setSaving(false);
  }

  return (
    <div className="min-h-screen bg-cyber-black p-6 text-gray-100">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-neon-cyan">Learner management</p>
            <h1 className="text-2xl font-semibold">Learners</h1>
            <p className="text-sm text-gray-500">Track active learners, emergencies and class placements in one place.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-1 text-xs text-neon-cyan">
            <GraduationCap size={14} /> {learners.length} active learners
          </div>
        </div>

        {message && (
          <div className="rounded-lg border border-neon-amber/20 bg-neon-amber/10 px-4 py-3 text-sm text-neon-amber">
            {message}
          </div>
        )}

        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-xl border border-cyber-border bg-cyber-card p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold">Learner roster</h2>
                <p className="text-xs text-gray-500">Recent learners and their support contacts.</p>
              </div>
            </div>

            {loading ? (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Loader2 size={16} className="animate-spin" /> Loading learner records...
              </div>
            ) : learners.length === 0 ? (
              <div className="rounded-lg border border-dashed border-cyber-border p-6 text-sm text-gray-500">
                No learners have been created yet.
              </div>
            ) : (
              <div className="space-y-3">
                {learners.map((learner) => (
                  <div key={learner.id} className="rounded-lg border border-cyber-border bg-cyber-darker/70 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-gray-100">{learner.full_name}</p>
                        <p className="text-xs text-gray-500">Grade {learner.grade} · {learner.class_name || "No class assigned"}</p>
                      </div>
                      <span className="rounded-full border border-neon-green/20 bg-neon-green/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-neon-green">Active</span>
                    </div>
                    <div className="mt-3 grid gap-2 text-sm text-gray-400 md:grid-cols-2">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600">Emergency contact</span>
                        <p>{learner.emergency_contact || "Not provided"}</p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600">Emergency phone</span>
                        <p>{learner.emergency_phone || "Not provided"}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-xl border border-cyber-border bg-cyber-card p-4">
            <div className="mb-4 flex items-center gap-2">
              <PlusCircle size={16} className="text-neon-cyan" />
              <div>
                <h2 className="text-sm font-semibold">Add learner</h2>
                <p className="text-xs text-gray-500">Quickly enrol a new learner into the school roster.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} placeholder="Full name" className="w-full rounded-lg border border-cyber-border bg-cyber-darker px-3 py-2 text-sm text-gray-100" />
              <input required value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })} placeholder="Grade" className="w-full rounded-lg border border-cyber-border bg-cyber-darker px-3 py-2 text-sm text-gray-100" />
              <input value={form.class_name} onChange={(e) => setForm({ ...form, class_name: e.target.value })} placeholder="Class name" className="w-full rounded-lg border border-cyber-border bg-cyber-darker px-3 py-2 text-sm text-gray-100" />
              <input value={form.emergency_contact} onChange={(e) => setForm({ ...form, emergency_contact: e.target.value })} placeholder="Emergency contact" className="w-full rounded-lg border border-cyber-border bg-cyber-darker px-3 py-2 text-sm text-gray-100" />
              <input value={form.emergency_phone} onChange={(e) => setForm({ ...form, emergency_phone: e.target.value })} placeholder="Emergency phone" className="w-full rounded-lg border border-cyber-border bg-cyber-darker px-3 py-2 text-sm text-gray-100" />
              <button disabled={saving} className="flex w-full items-center justify-center gap-2 rounded-lg bg-neon-cyan/10 px-3 py-2 text-sm font-medium text-neon-cyan transition hover:bg-neon-cyan/20 disabled:opacity-60">
                {saving ? <Loader2 size={16} className="animate-spin" /> : <PlusCircle size={16} />} Save learner
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
