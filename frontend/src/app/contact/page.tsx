import Link from "next/link";
import { Mail, Phone, MapPin, User, ChevronLeft } from "lucide-react";

export const metadata = {
  title: "Contact | SchoolNet v3.0",
  description:
    "Contact SchoolNet — Michael Stanfliet, Paarl, Western Cape.",
};

const contactItems = [
  {
    icon: <User size={18} />,
    label: "Name",
    value: "Michael Stanfliet",
    accent: "text-neon-cyan border-neon-cyan/25",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "k2020@contractor.net",
    href: "mailto:k2020@contractor.net",
    accent: "text-neon-blue border-neon-blue/25",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "061 505 1013",
    href: "tel:+27615051013",
    accent: "text-neon-green border-neon-green/25",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Paarl, Western Cape, South Africa",
    accent: "text-neon-amber border-neon-amber/25",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cyber-black text-gray-100">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-neon-cyan transition-colors mb-10"
        >
          <ChevronLeft size={14} /> Back to Home
        </Link>

        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neon-cyan/5 border border-neon-cyan/20 mb-8">
          <Mail size={14} className="text-neon-cyan" />
          <span className="text-[11px] text-neon-cyan font-medium">CONTACT</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="text-gray-100">Get in touch</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple">
            with the SchoolNet team.
          </span>
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mb-12">
          Questions about the platform, deployment, or a demo for your school? Reach out directly —
          we typically respond within one business day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {contactItems.map((item) => {
            const inner = (
              <>
                <div className={`inline-flex items-center gap-2 mb-3 text-[11px] uppercase tracking-widest ${item.accent.split(" ")[0]}`}>
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                <p className="text-sm text-gray-200 font-medium break-words">{item.value}</p>
              </>
            );
            return (
              <div key={item.label} className={`rounded-xl border bg-cyber-card p-5 ${item.accent}`}>
                {item.href ? (
                  <a href={item.href} className="block hover:opacity-80 transition-opacity">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </div>
            );
          })}
        </div>

        <div className="rounded-xl border border-cyber-border bg-cyber-card p-6 mb-10">
          <h2 className="text-sm font-semibold text-gray-100 mb-2">Prefer email?</h2>
          <p className="text-xs text-gray-500 mb-4">
            Send us a message directly — include your school name and what you&apos;d like to know.
          </p>
          <a
            href="mailto:k2020@contractor.net?subject=SchoolNet%20enquiry"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 text-xs font-medium hover:bg-neon-cyan/20 transition-all"
          >
            <Mail size={14} /> Email k2020@contractor.net
          </a>
        </div>

        <p className="text-center text-[11px] text-gray-600">
          <Link href="/about" className="hover:text-neon-cyan transition-colors">About</Link> ·{" "}
          <Link href="/privacy" className="hover:text-neon-cyan transition-colors">Privacy Policy</Link> ·{" "}
          <Link href="/terms" className="hover:text-neon-cyan transition-colors">Terms of Service</Link>
        </p>
      </div>
    </div>
  );
}
