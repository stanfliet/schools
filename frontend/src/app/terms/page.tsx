import Link from "next/link";
import { FileText, ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | SchoolNet v3.0",
  description:
    "SchoolNet Terms of Service — conditions for using the SchoolNet school management platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using SchoolNet ('the platform'), you agree to be bound by these Terms of Service and all applicable laws and regulations of the Republic of South Africa. If you do not agree with any part of these terms, you may not use the platform.",
  },
  {
    title: "2. Accounts & Access",
    body: "Accounts are provisioned by the school or by SchoolNet administrators. You are responsible for safeguarding your credentials and for all activity under your account. Role-based access (SuperAdmin, SchoolAdmin, Teacher, Parent, Clinic) must reflect your actual role in the school. Notify us immediately of any unauthorised use.",
  },
  {
    title: "3. Acceptable Use",
    body: "You agree not to misuse the platform: no unauthorised access, scraping, reverse engineering, or attempts to bypass security or row-level isolation between tenants. You may not upload malicious content or use the platform to process data outside your school's lawful mandate.",
  },
  {
    title: "4. Learner Data & POPIA",
    body: "Schools act as the responsible party for learner data captured in the platform. SchoolNet acts as an operator, processing data under the school's instruction. Both parties must comply with POPIA, including lawful processing, security safeguards, and data-subject rights. Schools retain ownership of their data and may export or delete it on request.",
  },
  {
    title: "5. Intellectual Property",
    body: "The platform, including its software, design, brand and documentation, is the property of SchoolNet and its licensors. You receive a limited, non-exclusive, non-transferable licence to use the platform for your school's operations. No other rights are granted.",
  },
  {
    title: "6. Disclaimers & Liability",
    body: "The platform is provided 'as is' without warranties of any kind, express or implied. To the maximum extent permitted by law, SchoolNet shall not be liable for indirect, incidental or consequential damages, including lost data or profits, arising from use of the platform. Truancy alerts and clinical information are advisory and do not replace professional medical or legal judgement.",
  },
  {
    title: "7. Changes to Terms",
    body: "We may update these Terms from time to time. Material changes will be notified through the platform. Continued use after changes take effect constitutes acceptance of the revised terms.",
  },
  {
    title: "8. Governing Law",
    body: "These Terms are governed by the laws of the Republic of South Africa. Disputes fall under the jurisdiction of the courts of the Western Cape Division, Cape Town.",
  },
  {
    title: "9. Contact",
    body: "Questions about these Terms: Michael Stanfliet, k2020@contractor.net, 061 505 1013, Paarl, Western Cape, South Africa.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cyber-black text-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-neon-cyan transition-colors mb-10"
        >
          <ChevronLeft size={14} /> Back to Home
        </Link>

        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neon-purple/5 border border-neon-purple/20 mb-8">
          <FileText size={14} className="text-neon-purple" />
          <span className="text-[11px] text-neon-purple font-medium">TERMS OF SERVICE</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-pink to-neon-amber">
            Terms of Service
          </span>
        </h1>
        <p className="text-gray-600 text-xs mb-12">
          Last updated: 6 August 2026 · Republic of South Africa
        </p>

        <div className="space-y-6">
          {sections.map((s) => (
            <section key={s.title} className="rounded-xl border border-cyber-border bg-cyber-card p-6">
              <h2 className="text-sm font-semibold text-neon-purple mb-2">{s.title}</h2>
              <p className="text-xs text-gray-500 leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

        <p className="text-center text-[11px] text-gray-600 mt-10">
          <Link href="/about" className="hover:text-neon-cyan transition-colors">About</Link> ·{" "}
          <Link href="/contact" className="hover:text-neon-cyan transition-colors">Contact</Link> ·{" "}
          <Link href="/privacy" className="hover:text-neon-cyan transition-colors">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
