import Link from "next/link";
import { Shield, ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | SchoolNet v3.0",
  description:
    "SchoolNet Privacy Policy — how we collect, use and protect school and learner data (POPIA compliant).",
};

const sections = [
  {
    title: "1. Introduction",
    body: "This Privacy Policy explains how SchoolNet ('we', 'our') collects, uses, stores and protects personal information through the SchoolNet platform. We are committed to protecting personal information in line with the Protection of Personal Information Act 4 of 2013 (POPIA) and the South African schools environment in which we operate.",
  },
  {
    title: "2. Information We Collect",
    body: "We collect information provided by schools and their users, including: school and principal details; teacher, staff and parent names, email addresses and phone numbers; learner records such as names, grades, attendance history, health notes and immunization records; and technical data such as device type, browser and usage logs. Learner data is only collected with the authority of the relevant school, which acts as the responsible party.",
  },
  {
    title: "3. How We Use Information",
    body: "Information is used to operate and improve the platform: recording and reporting attendance; generating truancy alerts; managing clinic and immunization cases; processing billing; providing role-based dashboards; and fulfilling legal and audit obligations. We do not sell personal information to third parties.",
  },
  {
    title: "4. Storage & Security",
    body: "Data is stored on Supabase (PostgreSQL) with row-level security (RLS) isolating each school tenant. Access is role-based (SuperAdmin, SchoolAdmin, Teacher, Parent, Clinic) and every action is written to an immutable POPIA audit trail. Data is hosted in secure data centres and transmitted over TLS-encrypted connections.",
  },
  {
    title: "5. Cookies & Analytics",
    body: "The platform uses only essential cookies for authentication and session management. We do not use third-party advertising trackers. Optional analytics, where enabled by the school, are aggregated and de-identified.",
  },
  {
    title: "6. Your Rights (POPIA)",
    body: "Data subjects have the right to access, correct, delete and object to the processing of their personal information, and to lodge a complaint with the Information Regulator (South Africa). Schools may export or delete their data at any time by contacting us.",
  },
  {
    title: "7. Children's Data",
    body: "SchoolNet processes learner data solely under the instruction and authority of the learner's school and its guardians. Parents or guardians may request access to or correction of a learner's records through the school. We do not knowingly process learner data outside the school's lawful mandate.",
  },
  {
    title: "8. Contact",
    body: "For privacy enquiries, contact: Michael Stanfliet, k2020@contractor.net, 061 505 1013, Paarl, Western Cape, South Africa.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cyber-black text-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-neon-cyan transition-colors mb-10"
        >
          <ChevronLeft size={14} /> Back to Home
        </Link>

        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neon-green/5 border border-neon-green/20 mb-8">
          <Shield size={14} className="text-neon-green" />
          <span className="text-[11px] text-neon-green font-medium">PRIVACY POLICY</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green via-neon-cyan to-neon-blue">
            Privacy Policy
          </span>
        </h1>
        <p className="text-gray-600 text-xs mb-12">
          Last updated: 6 August 2026 · POPIA Compliant
        </p>

        <div className="space-y-6">
          {sections.map((s) => (
            <section key={s.title} className="rounded-xl border border-cyber-border bg-cyber-card p-6">
              <h2 className="text-sm font-semibold text-neon-cyan mb-2">{s.title}</h2>
              <p className="text-xs text-gray-500 leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

        <p className="text-center text-[11px] text-gray-600 mt-10">
          <Link href="/about" className="hover:text-neon-cyan transition-colors">About</Link> ·{" "}
          <Link href="/contact" className="hover:text-neon-cyan transition-colors">Contact</Link> ·{" "}
          <Link href="/terms" className="hover:text-neon-cyan transition-colors">Terms of Service</Link>
        </p>
      </div>
    </div>
  );
}
