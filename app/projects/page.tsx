"use client";

import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const categories = ["All", "E-commerce", "SaaS", "Custom Software"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-24 pb-32 px-6 relative">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-96 bg-hero-gradient pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionHeader
            label="Case Studies"
            title="Problems solved,"
            titleHighlight="results delivered."
            description="Each project starts with a real business problem. Here's what we built, how we built it, and what changed for the client."
          />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-xs font-mono rounded border transition-all ${
                active === cat
                  ? "border-cyan/40 bg-cyan/10 text-cyan"
                  : "border-border text-muted hover:border-cyan/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-10 rounded-xl border border-border bg-surface text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient opacity-50" />
          <div className="relative z-10">
            <p className="text-xs font-mono text-cyan/70 tracking-widest uppercase mb-3">
              // Your project next?
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Let&apos;s solve your problem.
            </h3>
            <p className="text-muted mb-6 max-w-md mx-auto text-sm leading-relaxed">
              Tell us what you&apos;re working on. We&apos;ll get back within 24 hours
              with a clear proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-bg font-bold text-sm rounded hover:bg-cyan-dim transition-all shadow-cyan-sm group"
              >
                Start a Conversation
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
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