// data/developers.ts
import type { Developer } from "@/components/DeveloperCard";

export const developers: Developer[] = [
  {
    id: 1,
    name: "Keshav Singhal",
    role: "Founder & Full-Stack Lead",
    bio: "Founded IdeaCraft to bring quality software to businesses that deserve better than off-the-shelf tools. Leads architecture decisions and client strategy across every project.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    initials: "KS",
    avatarGradient: "from-cyan to-blue-500",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 2,
    name: "Divyanshu Sharma",
    role: "Full-Stack + Blockchain Developer",
    bio: "Builds everything from fast web apps to decentralized applications. Has shipped DeFi protocols and NFT platforms alongside production SaaS products.",
    techStack: ["React", "Solidity", "Ethers.js", "Node.js", "Hardhat"],
    initials: "DS",
    avatarGradient: "from-purple-400 to-pink-500",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 3,
    name: "Shivam Singh",
    role: "Full-Stack + UI/UX Engineer",
    bio: "Bridges the gap between great design and clean code. Leads frontend architecture and makes sure every interface feels intuitive before a single line ships to production.",
    techStack: ["Next.js", "Figma", "Tailwind CSS", "Framer", "TypeScript"],
    initials: "SS",
    avatarGradient: "from-lime to-emerald-400",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 4,
    name: "Abhishek Sharma",
    role: "Full-Stack + Product Designer",
    bio: "Thinks in user flows and systems. Designs the product experience end-to-end — from wireframes to working features — with a strong eye for what actually converts.",
    techStack: ["React", "Figma", "Node.js", "Webflow", "Supabase"],
    initials: "AS",
    avatarGradient: "from-yellow-400 to-orange-400",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];