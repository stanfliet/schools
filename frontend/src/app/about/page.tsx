import Link from "next/link";
import {
  Shield,
  Bell,
  Brain,
  Syringe,
  CreditCard,
  Map,
  Fingerprint,
  Heart,
  BarChart3,
  ChevronLeft,
} from "lucide-react";

export const metadata = {
  title: "About | SchoolNet v3.0",
  description:
    "About SchoolNet — the school health & LMS platform for South African schools.",
};

const pillars = [
  {
    icon: <Shield size={20} />,
    title: "Multi-Tenant Security",
    desc: "Supabase RLS isolates every school's data with zero-trust boundaries.",
    accent: "text-neon-cyan border-neon-cyan/25",
  },
  {
    icon: <Bell size={20} />,
    title: "Truancy Watchdog",
    desc: "Three consecutive ABSENT days trigger an automated clinical alert.",
    accent: "text-neon-amber border-neon-amber/25",
  },
  {
    icon: <Brain size={20} />,
    title: "Predictive Truancy AI",
    desc: "ML scans flag at-risk patterns before they escalate into dropouts.",
    accent: "text-neon-purple border-neon-purple/25",
  },
  {
    icon: <Syringe size={20} />,
    title: "Immunization Tracker",
    desc: "Vaccine schedule, compliance monitoring and reminder timelines.",
    accent: "text-neon-green border-neon-green/25",
  },
  {
    icon: <CreditCard size={20} />,
    title: "Automated Billing",
    desc: "Multi-currency billing with PayFast for dual fee structures.",
    accent: "text-neon-pink border-neon-pink/25",
  },
  {
    icon: <Map size={20} />,
    title: "Real-Time Heat Maps",
    desc: "Geo-spatial attendance and alert-density visualisation.",
    accent: "text-neon-blue border-neon-blue/25",
  },
  {
    icon: <Heart size={20} />,
    title: "Clinic Case Management",
    desc: "Chronic-condition tracking with escalation workflows.",
    accent: "text-neon-red border-neon-red/25",
  },
  {
    icon: <Fingerprint size={20} />,
    title: "Biometric SSO",
    desc: "FIDO2 WebAuthn zero-trust authentication for staff.",
    accent: "text-neon-cyan border-neon-cyan/25",
  },
  {
    icon: <BarChart3 size={20} />,
    title: "Power BI Export",
    desc: "One-click analytics export for district reporting.",
    accent: "text-neon-green border-neon-green/25",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cyber-black text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-neon-cyan transition-colors mb-10"
        >
          <ChevronLeft size={14} /> Back to Home
        </Link>

        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neon-cyan/5 border border-neon-cyan/20 mb-8">
          <Shield size={14} className="text-neon-cyan" />
          <span className="text-[11px] text-neon-cyan font-medium">ABOUT SCHOOLNET</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="text-gray-100">Built for South African schools,</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple">
            run from a command center.
          </span>
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mb-12">
          SchoolNet is a multi-tenant school health and learning-management platform that unifies
          attendance, truancy detection, clinic case management, billing and AI dashboards into one
          secure, real-time system. It is designed for South African schools and is fully POPIA
          compliant, with audit trails on every action.
        </p>

        <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-5">Platform Pillars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`rounded-xl border bg-cyber-card p-5 ${p.accent}`}
            >
              <div className="mb-3">{p.icon}</div>
              <h3 className="text-sm font-semibold text-gray-100 mb-1">{p.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-cyber-border bg-cyber-card p-6">
          <h2 className="text-sm font-semibold text-gray-100 mb-3">Our Commitment</h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            Every learner deserves to be seen. SchoolNet&apos;s truancy watchdog and clinic
            workflows make sure no child falls through the cracks — while principals, teachers,
            parents and clinic staff get the real-time visibility they need to act early.
          </p>
        </div>

        <p className="text-center text-[11px] text-gray-600 mt-10">
          <Link href="/contact" className="hover:text-neon-cyan transition-colors">
            Contact us
          </Link>{" "}
          ·{" "}
          <Link href="/privacy" className="hover:text-neon-cyan transition-colors">
            Privacy Policy
          </Link>{" "}
          ·{" "}
          <Link href="/terms" className="hover:text-neon-cyan transition-colors">
            Terms of Service
          </Link>
        </p>
      </div>
    </div>
  );
}
