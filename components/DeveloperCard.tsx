// components/DeveloperCard.tsx
import { Github, Linkedin, Twitter } from "lucide-react";

export interface Developer {
  id: number;
  name: string;
  role: string;
  bio: string;
  techStack: string[];
  initials: string;
  avatarGradient: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

interface DeveloperCardProps {
  developer: Developer;
  index?: number;
}

export default function DeveloperCard({
  developer,
  index = 0,
}: DeveloperCardProps) {
  return (
    <div
      className="card-hover group relative bg-card border border-border rounded-lg p-6 flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Avatar */}
      <div className="flex items-start gap-4 mb-5">
        <div
          className={`w-14 h-14 rounded-lg flex items-center justify-center text-xl font-bold text-bg shrink-0 bg-gradient-to-br ${developer.avatarGradient} shadow-lg`}
        >
          {developer.initials}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white text-base group-hover:text-cyan transition-colors truncate">
            {developer.name}
          </h3>
          <p className="text-xs font-mono text-cyan/70 mt-0.5">{developer.role}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{developer.bio}</p>

      {/* Tech stack */}
      <div className="mb-5">
        <p className="text-xs font-mono text-subtle uppercase tracking-widest mb-2">
          Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {developer.techStack.map((tech) => (
            <span key={tech} className="tag-chip tag-chip-lime">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-2 pt-4 border-t border-border">
        {developer.social.github && (
          <a
            href={developer.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center border border-border rounded hover:border-cyan/40 hover:text-cyan text-muted transition-all"
            aria-label={`${developer.name} GitHub`}
          >
            <Github size={13} />
          </a>
        )}
        {developer.social.linkedin && (
          <a
            href={developer.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center border border-border rounded hover:border-cyan/40 hover:text-cyan text-muted transition-all"
            aria-label={`${developer.name} LinkedIn`}
          >
            <Linkedin size={13} />
          </a>
        )}
        {developer.social.twitter && (
          <a
            href={developer.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center border border-border rounded hover:border-cyan/40 hover:text-cyan text-muted transition-all"
            aria-label={`${developer.name} Twitter`}
          >
            <Twitter size={13} />
          </a>
        )}
      </div>
    </div>
  );
}
