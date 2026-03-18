// components/ProjectCard.tsx
import { Clock, Users } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  results: string[];
  techStack: string[];
  category: string;
  clientType: string;
  status: "Live" | "Beta" | "In Progress";
  gradient: string;
  icon: string;
  duration: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const statusColors = {
  Live: "bg-lime/10 border-lime/30 text-lime",
  Beta: "bg-cyan/10 border-cyan/30 text-cyan",
  "In Progress": "bg-yellow-400/10 border-yellow-400/30 text-yellow-400",
};

const categoryColors: Record<string, string> = {
  "E-commerce": "text-orange-400",
  "SaaS": "text-cyan",
  "Custom Software": "text-lime",
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <div
      className="card-hover group relative bg-card border border-border rounded-xl overflow-hidden flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Top gradient bar */}
      <div
        className={`h-[2px] w-full bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Header */}
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg flex items-center justify-center text-xl border border-border-light bg-surface shrink-0">
              {project.icon}
            </div>
            <div>
              <span className={`text-xs font-mono font-semibold ${categoryColors[project.category] ?? "text-muted"}`}>
                {project.category}
              </span>
              <h3 className="text-base font-bold text-white group-hover:text-cyan transition-colors leading-tight">
                {project.title}
              </h3>
            </div>
          </div>
          <span className={`text-xs font-mono font-medium px-2 py-1 rounded border shrink-0 ml-2 ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </div>

        {/* Client + Duration meta */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-muted font-mono">
            <Users size={11} className="text-subtle" />
            {project.clientType}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted font-mono">
            <Clock size={11} className="text-subtle" />
            {project.duration}
          </div>
        </div>
      </div>

      {/* Case study body */}
      <div className="px-6 pb-2 flex-1 flex flex-col gap-4">
        {/* Problem */}
        <div>
          <p className="text-[10px] font-mono text-subtle uppercase tracking-widest mb-1">Problem</p>
          <p className="text-sm text-muted leading-relaxed">{project.problem}</p>
        </div>

        {/* Solution */}
        <div>
          <p className="text-[10px] font-mono text-subtle uppercase tracking-widest mb-1">Solution</p>
          <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
        </div>

        {/* Results */}
        <div>
          <p className="text-[10px] font-mono text-subtle uppercase tracking-widest mb-2">Results</p>
          <ul className="flex flex-col gap-1.5">
            {project.results.map((result) => (
              <li key={result} className="flex items-start gap-2 text-sm text-white">
                <span className="text-lime mt-0.5 shrink-0">↗</span>
                <span className="leading-snug">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech stack footer */}
      <div className="px-6 py-4 mt-2 border-t border-border">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag-chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}