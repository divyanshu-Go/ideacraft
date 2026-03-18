// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Heart, Cpu, Globe } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the IdeaCraft team — a small, senior software studio based in Delhi NCR building real products for real businesses.",
};

const values = [
  {
    icon: Target,
    title: "Outcome-Focused",
    desc: "We measure success by what your business achieves — not by how many features we shipped.",
    color: "text-cyan",
    border: "border-cyan/20",
    bg: "bg-cyan/5",
  },
  {
    icon: Heart,
    title: "Client-First",
    desc: "We work with a small number of clients at a time so every project gets real attention.",
    color: "text-rose-400",
    border: "border-rose-400/20",
    bg: "bg-rose-400/5",
  },
  {
    icon: Cpu,
    title: "No Shortcuts",
    desc: "Clean code, proper testing, scalable architecture. We build things that last.",
    color: "text-lime",
    border: "border-lime/20",
    bg: "bg-lime/5",
  },
  {
    icon: Globe,
    title: "Honest Communication",
    desc: "If something will take longer or cost more, we tell you upfront. No surprises at the end.",
    color: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5",
  },
];

const timeline = [
  {
    year: "2022",
    title: "Started in Delhi",
    desc: "IdeaCraft began as a small freelance collective in Delhi NCR — four developers who wanted to build real products for local businesses instead of working for big agencies.",
  },
  {
    year: "2023",
    title: "First Client Products",
    desc: "Shipped our first two client projects — an e-commerce store and a school management system. Both still live and growing.",
  },
  {
    year: "2023",
    title: "Expanded to SaaS",
    desc: "Started taking on SaaS and custom software projects. Added Divyanshu's blockchain expertise to the offering — opening doors to Web3 projects.",
  },
  {
    year: "2024",
    title: "5 Products Live",
    desc: "Crossed 5 live products across e-commerce, SaaS, and custom software. Clients across Delhi, Noida, Gurugram, and Faridabad.",
  },
  {
    year: "2025",
    title: "Growing Intentionally",
    desc: "Staying small on purpose. We take on projects we can genuinely do well — and turn down ones we can't. Quality over volume.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-32 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-hero-gradient pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <SectionHeader
            label="About Us"
            title="Small team,"
            titleHighlight="serious work."
            description="IdeaCraft is a four-person software studio based in Delhi NCR. We build e-commerce stores, SaaS products, and custom business software for companies that need real solutions — not generic templates."
          />
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="tag-chip">Delhi / NCR</span>
            <span className="tag-chip">Founded 2022</span>
            <span className="tag-chip">4 Developers</span>
            <span className="tag-chip">5+ Products Live</span>
          </div>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24 items-center">
          <div>
            <span className="text-xs font-mono text-cyan/70 tracking-widest uppercase mb-3 block">
              // Why We Started
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
              We got tired of seeing <span className="text-gradient-cyan">good businesses stuck.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-5">
              Most software agencies around us were either too expensive for small businesses
              or too unreliable to trust with something important. We started IdeaCraft
              to fix that — a small team that moves fast, communicates clearly, and
              actually delivers what it promises.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              We work with restaurant owners, school principals, manufacturers, and startup
              founders — anyone who has a real problem that the right software can solve.
              We keep our team small so every client gets senior attention, not a junior
              developer who just learned React last month.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-white transition-colors group"
            >
              Work with us
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { num: "25+", label: "Products Shipped" },
              { num: "6", label: "Industries" },
              { num: "100%", label: "Client Retention" },
              { num: "4+", label: "Yrs Combined Exp." },
            ].map(({ num, label }) => (
              <div key={label} className="p-6 rounded-lg border border-border bg-card text-center card-hover">
                <div className="text-3xl font-extrabold text-gradient-cyan mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                  {num}
                </div>
                <div className="text-xs font-mono text-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-cyan/70 tracking-widest uppercase mb-3 block">// How We Work</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              What we stand for.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc, color, border, bg }) => (
              <div key={title} className={`p-6 rounded-lg border ${border} ${bg} card-hover`}>
                <div className={`w-10 h-10 rounded-md flex items-center justify-center border ${border} bg-bg mb-4`}>
                  <Icon size={18} className={color} />
                </div>
                <h3 className={`font-bold mb-2 ${color}`} style={{ fontFamily: "'Fraunces', serif" }}>{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-cyan/70 tracking-widest uppercase mb-3 block">// Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              How we got here.
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[calc(50%-0.5px)] top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="flex flex-col gap-8">
              {timeline.map(({ year, title, desc }, i) => (
                <div
                  key={year}
                  className={`flex gap-6 items-start ${i % 2 === 0 ? "md:flex-row md:text-right" : "md:flex-row-reverse md:text-left"}`}
                >
                  <div className="flex-1 p-5 rounded-lg border border-border bg-card card-hover">
                    <p className="text-xs font-mono text-cyan mb-1">{year}</p>
                    <h4 className="font-bold text-white mb-1" style={{ fontFamily: "'Fraunces', serif" }}>{title}</h4>
                    <p className="text-sm text-muted leading-relaxed">{desc}</p>
                  </div>
                  <div className="hidden md:flex w-4 shrink-0 justify-center pt-6">
                    <div className="w-3 h-3 rounded-full bg-cyan border-2 border-bg shadow-cyan-sm" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-xl border border-border bg-surface relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient opacity-50" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
              Want to work with us?
            </h3>
            <p className="text-muted mb-6 max-w-sm mx-auto text-sm">
              We&apos;d love to hear about your project. Drop us a message and we&apos;ll get back within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-bg font-bold text-sm rounded hover:bg-cyan-dim transition-all group"
              >
                Get in Touch
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/918368317466"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-lime/30 text-lime font-bold text-sm rounded hover:bg-lime/10 transition-all"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}