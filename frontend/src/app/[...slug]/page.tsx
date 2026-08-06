import Link from "next/link";
import { Compass, Home, ArrowLeft } from "lucide-react";

export default function CatchAllPage() {
  return (
    <div className="min-h-screen bg-cyber-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl rounded-2xl border border-cyber-border bg-cyber-card p-8 shadow-[0_0_40px_rgba(0,229,255,0.08)]">
        <div className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-neon-cyan">
          <Compass size={14} />
          Route fallback
        </div>

        <h1 className="mt-6 text-3xl font-semibold text-gray-100">
          This section is still being prepared.
        </h1>
        <p className="mt-3 text-sm leading-6 text-gray-500">
          The requested route is not available yet, but the platform is still healthy. You can return to the main dashboard or explore the core modules from the home screen.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-2 text-sm font-medium text-neon-cyan transition hover:bg-neon-cyan/20">
            <Home size={16} />
            Home
          </Link>
          <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-lg border border-cyber-border bg-cyber-dark px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-neon-cyan/30 hover:text-neon-cyan">
            <ArrowLeft size={16} />
            Go to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
