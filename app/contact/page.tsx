// app/contact/page.tsx
"use client";
import { useState } from "react";
import { Mail, MapPin, Twitter, Github, Linkedin, Send, Clock, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-24 pb-32 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-hero-gradient pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionHeader
            label="Contact"
            title="Let's build"
            titleHighlight="together."
            description="Tell us about your project and we'll get back to you within 24 hours. Prefer WhatsApp? We're on that too."
          />
        </div>

        {/* WhatsApp CTA — prominent */}
        <div className="max-w-2xl mx-auto mb-10">
          <a
            href="https://wa.me/918368317466"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-lime/30 bg-lime/5 text-lime font-bold text-sm hover:bg-lime/10 hover:border-lime/50 transition-all group"
          >
            <MessageCircle size={18} />
            Message us on WhatsApp — +91 83683 17466
          </a>
          <p className="text-center text-xs text-subtle mt-2 font-mono">Fastest way to reach us · Usually reply within a few hours</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* ── Contact Form ── */}
          <div className="lg:col-span-3 bg-card border border-border rounded-xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="w-16 h-16 rounded-full border border-lime/30 bg-lime/10 flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-muted text-sm max-w-xs leading-relaxed">
                  We&apos;ll review your project and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", budget: "", message: "" }); }}
                  className="mt-2 text-xs font-mono text-cyan hover:text-white transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="mb-1">
                  <h2 className="text-lg font-bold text-white">Start a Project</h2>
                  <p className="text-xs text-muted mt-1">
                    Fill this in and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { id: "name", label: "Full Name", placeholder: "Rahul Sharma", type: "text" },
                    { id: "email", label: "Email Address", placeholder: "rahul@company.com", type: "email" },
                  ].map(({ id, label, placeholder, type }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-xs font-mono text-muted mb-2 uppercase tracking-widest">
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[id as keyof typeof form]}
                        onChange={(e) => setForm((p) => ({ ...p, [id]: e.target.value }))}
                        className="w-full bg-surface border border-border rounded px-4 py-3 text-sm text-white placeholder-subtle focus:border-cyan/40 focus:outline-none focus:ring-1 focus:ring-cyan/20 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-mono text-muted mb-2 uppercase tracking-widest">
                    Company{" "}
                    <span className="normal-case tracking-normal text-subtle">(optional)</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Your business or startup name"
                    value={form.company}
                    onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-sm text-white placeholder-subtle focus:border-cyan/40 focus:outline-none focus:ring-1 focus:ring-cyan/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-xs font-mono text-muted mb-2 uppercase tracking-widest">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value }))}
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-sm text-white focus:border-cyan/40 focus:outline-none focus:ring-1 focus:ring-cyan/20 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a range...</option>
                    <option>Under ₹25,000</option>
                    <option>₹25,000 – ₹60,000</option>
                    <option>₹60,000 – ₹1,50,000</option>
                    <option>₹1,50,000 – ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-muted mb-2 uppercase tracking-widest">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="What are you building? Who is it for? What's your timeline?"
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="w-full bg-surface border border-border rounded px-4 py-3 text-sm text-white placeholder-subtle focus:border-cyan/40 focus:outline-none focus:ring-1 focus:ring-cyan/20 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-cyan text-bg font-bold text-sm rounded hover:bg-cyan-dim transition-all shadow-cyan-sm hover:shadow-cyan-glow group"
                >
                  Send Message
                  <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <p className="text-xs text-center text-subtle">
                  We respond within 24 hours · No spam, ever
                </p>
              </form>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: "hello@ideacraft.dev",
                href: "mailto:hello@ideacraft.dev",
                sub: "For project inquiries",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+91 83683 17466",
                href: "https://wa.me/918368317466",
                sub: "Fastest way to reach us",
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
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-white hover:text-cyan transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-white">{value}</p>
                  )}
                  <p className="text-xs text-subtle mt-0.5">{sub}</p>
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="p-5 rounded-lg border border-border bg-card card-hover">
              <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
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

            {/* What happens next */}
            <div className="p-5 rounded-lg border border-border bg-card">
              <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">What Happens Next</p>
              <ol className="flex flex-col gap-3">
                {[
                  "We review your project brief",
                  "Schedule a quick 20-min call",
                  "Send you a clear scoping proposal",
                  "Kick off your project",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full border border-border-light bg-surface flex items-center justify-center text-[10px] font-mono text-cyan shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-xs text-muted leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}