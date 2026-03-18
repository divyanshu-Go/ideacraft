// components/Footer.tsx
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Company: [
    { href: "/about", label: "About" },
    { href: "/developers", label: "Developers" },
    { href: "/projects", label: "Projects" },
  ],
  Build: [
    { href: "/contact", label: "Start a Project" },
    { href: "/contact", label: "Get a Quote" },
    { href: "/contact", label: "Partnership" },
  ],
  Legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ],
};

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@ideacraft.dev", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 border border-cyan rounded-sm rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
                <div className="absolute inset-[3px] bg-cyan rounded-[1px] rotate-45 transition-all duration-500 group-hover:bg-lime" />
              </div>
              <span className="font-bold text-base tracking-tight">
                Idea<span className="text-cyan">Craft</span>
              </span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-6 font-light">
              We partner with founders and companies to turn ideas into
              production-ready SaaS products.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-border rounded hover:border-cyan/40 hover:text-cyan text-muted transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold tracking-widest text-subtle uppercase mb-4 font-mono">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-white transition-colors link-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-subtle font-mono">
            © {new Date().getFullYear()} IdeaCraft. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-subtle font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse-slow inline-block" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
