import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cyber-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl rounded-2xl border border-cyber-border bg-cyber-card p-8 shadow-[0_0_40px_rgba(0,229,255,0.08)]">
        <div className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-neon-cyan">
          <Compass size={14} />
          Page unavailable
        </div>

        <h1 className="mt-6 text-3xl font-semibold text-gray-100">We could not find that page.</h1>
        <p className="mt-3 text-sm leading-6 text-gray-500">
          The link may be outdated or the section has not been implemented yet. Return home to continue using the platform.
        </p>

        <div className="mt-8">
          <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-2 text-sm font-medium text-neon-cyan transition hover:bg-neon-cyan/20">
            <Home size={16} />
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
