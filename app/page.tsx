// app/page.tsx
import Link from "next/link";
import { ArrowRight, Zap, Code2, Rocket, Lightbulb, ChevronRight, Check } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Discovery",
    description:
      "We listen first. You walk us through your idea, your users, and the problem you're solving. We ask the hard questions so nothing gets missed.",
    color: "text-yellow-400",
    borderColor: "border-yellow-400/20",
    bgColor: "bg-yellow-400/5",
  },
  {
    icon: Code2,
    step: "02",
    title: "Design",
    description:
      "We design the screens and user flows before writing any code. You see and approve every interaction — no surprises later.",
    color: "text-purple-400",
    borderColor: "border-purple-400/20",
    bgColor: "bg-purple-400/5",
  },
  {
    icon: Zap,
    step: "03",
    title: "Development",
    description:
      "We build in short sprints. You get a live preview link after every sprint — always in the loop, never waiting in the dark.",
    color: "text-cyan",
    borderColor: "border-cyan/20",
    bgColor: "bg-cyan/5",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description:
      "We deploy, test, and hand over full ownership — code, domain, hosting. Plus 30 days of free support after you go live.",
    color: "text-lime",
    borderColor: "border-lime/20",
    bgColor: "bg-lime/5",
  },
];

const stats = [
  { value: "25+", label: "Products Shipped" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "6", label: "Industries Served" },
  { value: "5 wks", label: "Avg Time to MVP" },
];

const techBadges = [
  "Next.js", "TypeScript", "React", "Node.js",
  "PostgreSQL", "Supabase", "Razorpay", "AWS",
  "Tailwind CSS", "Prisma", "Figma", "Vercel",
];

const testimonials = [
  {
    name: "Rajeev Arora",
    role: "Owner, ZestMart",
    location: "Delhi",
    quote:
      "We had zero online presence and were managing everything on WhatsApp. IdeaCraft built our full store in 6 weeks. In the first two months we crossed ₹4 lakh in online sales. Honestly didn't expect results this fast.",
    initials: "RA",
    gradient: "from-orange-400 to-rose-500",
  },
  {
    name: "Sunita Malhotra",
    role: "Principal, Greenfield School",
    location: "Noida",
    quote:
      "Fee collection used to take 3 days every month with endless follow-up calls. Now parents pay online and we get it same day. The parent portal has been a big hit — teachers love it too.",
    initials: "SM",
    gradient: "from-cyan to-blue-500",
  },
  {
    name: "Harish Verma",
    role: "MD, Verma Auto Parts",
    location: "Faridabad",
    quote:
      "Before StockFlow, we had no idea what was in stock without physically checking. Now every team member can see inventory live. The billing module alone saves us hours every week.",
    initials: "HV",
    gradient: "from-lime to-emerald-400",
  },
];

const pricingPlans = [
  {
    title: "E-commerce Store",
    icon: "🛒",
    range: "₹15,000 – ₹60,000",
    priceSub: "Varies by catalog size, payment setup & features",
    description: "For businesses ready to sell online — retail, food, services.",
    features: [
      "Product catalog & admin dashboard",
      "Razorpay / UPI payment integration",
      "Mobile-responsive design",
      "Order & delivery management",
      "Basic SEO setup",
    ],
    note: "A simple store with a few products sits at the lower end. A multi-category catalog with delivery zones and custom logic will be higher.",
    color: "border-orange-400/20",
    accentColor: "text-orange-400",
    bgColor: "bg-orange-400/5",
  },
  {
    title: "SaaS / Web App",
    icon: "⚡",
    range: "₹40,000 – ₹2,50,000",
    priceSub: "Varies by feature count, roles & integrations",
    description: "Custom web applications — from MVPs to production-grade SaaS.",
    features: [
      "Full-stack web application",
      "User auth & role management",
      "Database design & APIs",
      "Admin + user dashboards",
      "Deployment & hosting setup",
    ],
    note: "A lean MVP with 3 core features is at the lower end. A multi-tenant SaaS with complex workflows is higher. We scope it together.",
    color: "border-cyan/30",
    accentColor: "text-cyan",
    bgColor: "bg-cyan/5",
    highlight: true,
  },
  {
    title: "Custom Business Software",
    icon: "🏗️",
    range: "₹50,000 – ₹3,00,000",
    priceSub: "Varies by modules, complexity & team size",
    description: "Internal tools, automation, and systems built around your workflow.",
    features: [
      "Process analysis & scoping",
      "Custom modules & workflows",
      "Third-party integrations",
      "Staff training & handover",
      "Ongoing support available",
    ],
    note: "A single-module internal tool is much simpler than a full ERP-style system. We map your workflow first, then give you a clear quote.",
    color: "border-lime/20",
    accentColor: "text-lime",
    bgColor: "bg-lime/5",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* ─────────── HERO ─────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid opacity-100" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-slow" />
            <span className="text-xs font-mono text-cyan tracking-wider">
              Based in Delhi / NCR · Available for new projects
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
            <span className="block text-white">Software that</span>
            <span className="block text-gradient-cyan">actually ships</span>
            <span className="block text-white">for your business
              <span className="text-cyan cursor-blink"> </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We build e-commerce stores, SaaS apps, and custom software for small businesses
            and startups — on time, on budget, and without the jargon.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-7 py-3.5 bg-cyan text-bg font-bold rounded hover:bg-cyan-dim transition-all duration-200 shadow-cyan-sm hover:shadow-cyan-glow text-sm"
            >
              See Our Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/918368317466"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-7 py-3.5 border border-border-light text-muted hover:border-lime/40 hover:text-white rounded transition-all duration-200 text-sm font-medium"
            >
              WhatsApp Us
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Tech strip */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto opacity-50">
            {techBadges.map((t) => (
              <span key={t} className="tag-chip text-[0.65rem]">{t}</span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-xs font-mono text-muted">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </section>

      {/* ─────────── STATS ─────────── */}
      <section className="py-16 border-y border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold text-gradient-cyan mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                  {value}
                </div>
                <div className="text-sm text-muted font-mono">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PROCESS ─────────── */}
      <section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-lime-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-mono text-cyan/70 tracking-widest uppercase mb-3 block">// How We Work</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
              From first call <br />
              <span className="text-gradient-cyan">to live product.</span>
            </h2>
            <p className="text-muted leading-relaxed">
              A clear, repeatable process so you always know where things stand — and nothing falls through the cracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ icon: Icon, step, title, description, color, borderColor, bgColor }, i) => (
              <div
                key={step}
                className={`relative p-6 rounded-lg border ${borderColor} ${bgColor} card-hover group`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-10 h-10 rounded-md flex items-center justify-center border ${borderColor} bg-bg`}>
                    <Icon size={18} className={color} />
                  </div>
                  <span className={`text-3xl font-black ${color} opacity-20 font-mono`}>{step}</span>
                </div>
                <h3 className={`text-lg font-bold mb-2 ${color}`} style={{ fontFamily: "'Fraunces', serif" }}>{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{description}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight size={16} className="text-subtle" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PRICING ─────────── */}
      <section className="py-24 px-6 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan/70 tracking-widest uppercase mb-3 block">// Pricing</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
              Transparent pricing,{" "}
              <span className="text-gradient-cyan">no surprises.</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto text-sm leading-relaxed">
              Every project is scoped individually. These are starting points — final pricing depends on features, complexity, and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {pricingPlans.map(({ title, icon, range, priceSub, description, features, note, color, accentColor, bgColor, highlight }) => (
              <div
                key={title}
                className={`relative p-7 rounded-xl border ${color} ${bgColor} flex flex-col ${highlight ? "ring-1 ring-cyan/20 shadow-cyan-sm" : ""} card-hover`}
              >
                {highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-[10px] font-mono font-bold bg-cyan text-bg rounded-full tracking-widest uppercase">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-2xl mb-4">{icon}</div>
                <h3 className="font-bold text-white text-lg mb-1">{title}</h3>
                <p className="text-sm text-muted mb-5 leading-relaxed">{description}</p>

                <div className="mb-6 p-3 rounded-lg border border-border bg-bg/50">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className={`text-lg font-extrabold ${accentColor}`}>{range}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border text-subtle bg-surface">
                      flexible
                    </span>
                  </div>
                  <p className="text-xs text-subtle mt-1">{priceSub}</p>
                </div>

                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted">
                      <Check size={14} className={`${accentColor} mt-0.5 shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-subtle leading-relaxed border-t border-border pt-4 mt-auto italic">
                  {note}
                </p>
              </div>
            ))}
          </div>

          {/* Maintenance add-on */}
          <div className="p-5 rounded-lg border border-border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-xl">🔧</span>
              <div>
                <h4 className="text-sm font-bold text-white">Monthly Maintenance & Support</h4>
                <p className="text-xs text-muted mt-0.5">Bug fixes, updates, hosting help, and minor feature additions.</p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="flex items-center gap-2 justify-end">
                <span className="text-lime font-bold font-mono text-sm">₹3,000 – ₹15,000 / mo</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-border text-subtle bg-surface">flexible</span>
              </div>
              <p className="text-xs text-subtle font-mono mt-0.5">Depends on scope of support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-96 h-96 bg-cyan/3 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan/70 tracking-widest uppercase mb-3 block">// Clients</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              What our clients{" "}
              <span className="text-gradient-cyan">actually say.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map(({ name, role, location, quote, initials, gradient }) => (
              <div key={name} className="p-6 rounded-xl border border-border bg-card card-hover flex flex-col">
                {/* Quote */}
                <div className="text-3xl text-cyan/30 font-serif leading-none mb-4">&ldquo;</div>
                <p className="text-sm text-muted leading-relaxed flex-1 mb-6">{quote}</p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center text-sm font-bold text-bg bg-gradient-to-br ${gradient}`}>
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{name}</p>
                    <p className="text-xs text-muted font-mono">{role} · {location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── WHY IDEACRAFT ─────────── */}
      <section className="py-24 px-6 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan/70 tracking-widest uppercase mb-3 block">// Why IdeaCraft</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              Built different,{" "}
              <span className="text-gradient-cyan">by design.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                emoji: "🇮🇳",
                title: "Delhi-Based, Remote-Ready",
                desc: "We work with clients across India and handle remote projects seamlessly — but if you're in NCR, we're happy to meet in person.",
              },
              {
                emoji: "⚡",
                title: "MVPs in 4–6 Weeks",
                desc: "We move fast without cutting corners. You get a working product faster than most agencies finish their proposal.",
              },
              {
                emoji: "🔒",
                title: "You Own Everything",
                desc: "Code, domain, hosting — 100% yours from day one. No lock-in, no licensing fees, no surprises.",
              },
              {
                emoji: "📡",
                title: "Full Transparency",
                desc: "Live preview links after every sprint. You're never waiting for a demo — just click and see the latest build.",
              },
              {
                emoji: "📱",
                title: "Mobile-First Always",
                desc: "Most of your users are on phones. Every product we build is designed and tested for mobile from the start.",
              },
              {
                emoji: "🤝",
                title: "30 Days Free Support",
                desc: "We stay on after launch. Bugs, tweaks, small changes — all covered for 30 days at no extra cost.",
              },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="p-6 rounded-lg border border-border bg-card card-hover group">
                <div className="text-2xl mb-4">{emoji}</div>
                <h3 className="font-bold text-white mb-2 group-hover:text-cyan transition-colors" style={{ fontFamily: "'Fraunces', serif" }}>
                  {title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA BANNER ─────────── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
            Have an idea? <br />
            <span className="text-gradient-cyan">Let&apos;s talk about it.</span>
          </h2>
          <p className="text-muted mb-8 text-lg leading-relaxed">
            No lengthy forms or sales calls. Just tell us what you&apos;re building — we&apos;ll get back within 24 hours with a clear next step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/918368317466"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 bg-lime text-bg font-bold rounded hover:bg-lime-dim transition-all text-sm"
            >
              WhatsApp Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted hover:text-white transition-colors flex items-center gap-1"
            >
              Or fill a contact form <ChevronRight size={14} />
            </Link>
          </div>
          <p className="mt-6 text-xs text-subtle font-mono">
            +91 83683 17466 · hello@ideacraft.dev
          </p>
        </div>
      </section>
    </div>
  );
}