"use client";

import { useEffect, useState } from "react";
import { CreditCard, Loader2, PlusCircle, AlertCircle } from "lucide-react";
import { getCurrentProfile, getSupabaseClient } from "@/lib/supabase";

interface BillingRecord {
  id: string;
  description?: string | null;
  amount: number;
  status: string;
  due_date?: string | null;
  created_at?: string;
}

const sampleBills: BillingRecord[] = [
  { id: "bill-1", description: "Annual registration", amount: 350, status: "pending", due_date: "2026-09-15", created_at: "2026-08-01" },
  { id: "bill-2", description: "Transport levy", amount: 180, status: "paid", due_date: "2026-08-10", created_at: "2026-07-18" },
];

export default function BillingPage() {
  const [bills, setBills] = useState<BillingRecord[]>(sampleBills);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ description: "", amount: "", due_date: "" });
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
        .from("billing")
        .select("id, description, amount, status, due_date, created_at")
        .eq("school_id", profile.school_id)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setBills(data as BillingRecord[]);
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
      setMessage("Supabase is not configured yet, so the invoice was added only to the local view.");
      setBills((current) => [{ id: `local-${Date.now()}`, description: form.description, amount: Number(form.amount || 0), status: "pending", due_date: form.due_date || null, created_at: new Date().toISOString() }, ...current]);
      setSaving(false);
      setForm({ description: "", amount: "", due_date: "" });
      return;
    }

    const { error } = await supabase.from("billing").insert({
      school_id: profile.school_id,
      description: form.description,
      amount: Number(form.amount || 0),
      due_date: form.due_date || null,
      status: "pending",
    });

    if (error) {
      setMessage(`Unable to save invoice: ${error.message}`);
      setSaving(false);
      return;
    }

    setMessage("Invoice saved successfully.");
    setForm({ description: "", amount: "", due_date: "" });
    setSaving(false);
  }

  return (
    <div className="min-h-screen bg-cyber-black p-6 text-gray-100">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-neon-amber">Billing desk</p>
            <h1 className="text-2xl font-semibold">Billing</h1>
            <p className="text-sm text-gray-500">Capture and review invoices, due dates and payment progress.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-amber/20 bg-neon-amber/10 px-3 py-1 text-xs text-neon-amber">
            <CreditCard size={14} /> {bills.length} invoices
          </div>
        </div>

        {message && (
          <div className="rounded-lg border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-3 text-sm text-neon-cyan">
            {message}
          </div>
        )}

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-cyber-border bg-cyber-card p-4">
            <div className="mb-4">
              <h2 className="text-sm font-semibold">Invoice list</h2>
              <p className="text-xs text-gray-500">Pending, paid and overdue charges for the school.</p>
            </div>

            {loading ? (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Loader2 size={16} className="animate-spin" /> Loading billing records...
              </div>
            ) : bills.length === 0 ? (
              <div className="rounded-lg border border-dashed border-cyber-border p-6 text-sm text-gray-500">No invoices yet.</div>
            ) : (
              <div className="space-y-3">
                {bills.map((bill) => (
                  <div key={bill.id} className="rounded-lg border border-cyber-border bg-cyber-darker/70 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-gray-100">{bill.description || "Invoice"}</p>
                        <p className="text-xs text-gray-500">Due {bill.due_date || "TBD"}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-neon-cyan">R{Number(bill.amount || 0).toFixed(2)}</p>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">{bill.status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-xl border border-cyber-border bg-cyber-card p-4">
            <div className="mb-4 flex items-center gap-2">
              <PlusCircle size={16} className="text-neon-amber" />
              <div>
                <h2 className="text-sm font-semibold">Create invoice</h2>
                <p className="text-xs text-gray-500">Add a new billing item for a learner or parent.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input required value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Invoice description" className="w-full rounded-lg border border-cyber-border bg-cyber-darker px-3 py-2 text-sm text-gray-100" />
              <input required type="number" min="0" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} placeholder="Amount" className="w-full rounded-lg border border-cyber-border bg-cyber-darker px-3 py-2 text-sm text-gray-100" />
              <input type="date" value={form.due_date} onChange={(e) => setForm({ ...form, due_date: e.target.value })} className="w-full rounded-lg border border-cyber-border bg-cyber-darker px-3 py-2 text-sm text-gray-100" />
              <button disabled={saving} className="flex w-full items-center justify-center gap-2 rounded-lg bg-neon-amber/10 px-3 py-2 text-sm font-medium text-neon-amber transition hover:bg-neon-amber/20 disabled:opacity-60">
                {saving ? <Loader2 size={16} className="animate-spin" /> : <PlusCircle size={16} />} Save invoice
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
