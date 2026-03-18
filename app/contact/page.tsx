// app/contact/page.tsx
import { Mail, MapPin, Twitter, Github, Linkedin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with IdeaCraft — WhatsApp or email us about your project.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-32 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-hero-gradient pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionHeader
            label="Contact"
            title="Let's build"
            titleHighlight="together."
            description="Tell us what you're working on. We'll get back within 24 hours with a clear next step — no sales pitch, no fluff."
          />
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="https://wa.me/918368317466"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl border border-lime/30 bg-lime/5 text-lime font-bold text-sm hover:bg-lime/10 hover:border-lime/50 transition-all group"
          >
            <MessageCircle size={18} />
            <span>WhatsApp Us</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="mailto:hello@ideacraft.dev"
            className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl border border-cyan/20 bg-cyan/5 text-cyan font-bold text-sm hover:bg-cyan/10 hover:border-cyan/40 transition-all group"
          >
            <Mail size={16} />
            <span>Email Us</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "+91 83683 17466",
              href: "https://wa.me/918368317466",
              sub: "Fastest way to reach us",
            },
            {
              icon: Mail,
              label: "Email",
              value: "hello@ideacraft.dev",
              href: "mailto:hello@ideacraft.dev",
              sub: "For project inquiries",
            },
            {
              icon: MapPin,
              label: "Location",
              value: "Delhi / NCR, India",
              href: null,
              sub: "Remote-friendly worldwide",
            },
            {
              icon: Clock,
              label: "Working Hours",
              value: "Mon – Fri, 10am – 7pm IST",
              href: null,
              sub: "UTC +5:30",
            },
          ].map(({ icon: Icon, label, value, href, sub }) => (
            <div key={label} className="p-5 rounded-lg border border-border bg-card flex items-start gap-4 card-hover">
              <div className="w-10 h-10 rounded-md border border-border-light bg-surface flex items-center justify-center shrink-0">
                <Icon size={16} className="text-cyan" />
              </div>
              <div>
                <p className="text-xs font-mono text-muted mb-0.5 uppercase tracking-wider">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-cyan transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-white">{value}</p>
                )}
                <p className="text-xs text-subtle mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What happens next */}
        <div className="p-6 rounded-xl border border-border bg-card mb-8">
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-5">What Happens Next</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { n: "01", text: "You message us with your idea or problem" },
              { n: "02", text: "We schedule a quick 20-min discovery call" },
              { n: "03", text: "We send a clear scoping proposal" },
              { n: "04", text: "We kick off your project" },
            ].map(({ n, text }) => (
              <li key={n} className="flex items-start gap-3">
                <span className="text-xl font-black font-mono text-cyan/20 leading-none shrink-0">{n}</span>
                <span className="text-sm text-muted leading-relaxed pt-0.5">{text}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-3">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center border border-border rounded hover:border-cyan/40 hover:text-cyan text-muted transition-all duration-200"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}