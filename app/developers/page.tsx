// app/developers/page.tsx
import type { Metadata } from "next";
import DeveloperCard from "@/components/DeveloperCard";
import SectionHeader from "@/components/SectionHeader";
import { developers } from "@/data/developers";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the IdeaCraft team — four full-stack developers based in Delhi NCR building real products for real businesses.",
};

export default function DevelopersPage() {
  return (
    <div className="pt-24 pb-32 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-hero-gradient pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <SectionHeader
            label="The Team"
            title="Four developers,"
            titleHighlight="one focus."
            description="We're a tight team of full-stack developers based in Delhi NCR. No juniors, no outsourcing — the people you talk to are the people who build your product."
          />
        </div>

        {/* Developer cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {developers.map((dev, index) => (
            <DeveloperCard key={dev.id} developer={dev} index={index} />
          ))}
        </div>

        {/* How we work section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-center">
          <div>
            <span className="text-xs font-mono text-cyan/70 tracking-widest uppercase mb-3 block">// How We Work</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
              Small team. <span className="text-gradient-cyan">Full attention.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              We deliberately keep the team small. That means every client gets senior developers
              on their project — not handoffs to juniors after the kickoff call.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              We work in short sprints, share live preview links after every sprint, and
              are available on WhatsApp throughout the project. No mysterious silences, no
              weekly status emails that say nothing.
            </p>
            <div className="flex flex-wrap gap-2">
              {["GitHub", "Figma", "Vercel", "Notion", "Razorpay", "Supabase"].map((tool) => (
                <span key={tool} className="tag-chip">{tool}</span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {[
              {
                emoji: "🔄",
                title: "Sprint-Based Delivery",
                desc: "1–2 week sprints. Live preview after every one. You always see real progress.",
              },
              {
                emoji: "📱",
                title: "WhatsApp-Friendly",
                desc: "Reach us on WhatsApp anytime during the project. Fast, direct, no ticketing system.",
              },
              {
                emoji: "🔍",
                title: "Code Reviews on Everything",
                desc: "No code ships without a peer review. Quality control built into how we work.",
              },
              {
                emoji: "📦",
                title: "Clean Handover",
                desc: "Full code ownership, hosting setup, and documentation when we're done.",
              },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card card-hover">
                <span className="text-xl mt-0.5">{emoji}</span>
                <div>
                  <h4 className="font-bold text-white text-sm mb-0.5">{title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-xl border border-border bg-surface relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-hero-gradient opacity-50 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-2xl font-extrabold text-white mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
              Want to work with this team?
            </h3>
            <p className="text-muted text-sm mb-6 max-w-sm mx-auto">
              Tell us what you&apos;re building and we&apos;ll get back within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-bg font-bold text-sm rounded hover:bg-cyan-dim transition-all group"
            >
              Get in Touch
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}