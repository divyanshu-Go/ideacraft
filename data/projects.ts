// data/projects.ts
import type { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    id: 1,
    title: "ZestMart",
    description: "E-commerce platform for a local retail chain",
    longDescription:
      "A Delhi-based grocery and daily essentials retailer needed to move online fast after losing foot traffic. They had no tech team, no website, and 800+ SKUs to manage.",
    problem:
      "The client was managing orders via WhatsApp and phone calls. They had no way to track inventory, accept online payments, or manage delivery zones efficiently.",
    solution:
      "We built a full e-commerce store with product catalog management, cart, Razorpay payments, delivery zone logic, and an admin dashboard for daily operations.",
    results: [
      "₹4.2L in online sales in the first 60 days",
      "Reduced order errors by 80% vs WhatsApp ordering",
      "Owner manages everything solo via mobile dashboard",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Razorpay", "Supabase", "Vercel"],
    category: "E-commerce",
    clientType: "Local Retail Chain",
    status: "Live",
    gradient: "from-orange-400 to-rose-500",
    icon: "🛒",
    duration: "6 weeks",
  },
  {
    id: 2,
    title: "EduNest",
    description: "School management SaaS for a private school",
    longDescription:
      "A mid-sized private school in Noida was running on spreadsheets and WhatsApp groups to manage 600+ students, fees, attendance, and parent communication.",
    problem:
      "Staff spent 3+ hours daily on manual fee tracking and attendance registers. Parents had no real-time visibility into their child's progress or dues.",
    solution:
      "Built a web-based SaaS with student profiles, attendance tracking, fee collection with UPI/card, automated reminders, and a parent portal with notices and reports.",
    results: [
      "Fee collection time cut from 3 days to same-day",
      "90% reduction in manual record-keeping effort",
      "600+ students onboarded in first semester",
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe"],
    category: "SaaS",
    clientType: "Private School (K-12)",
    status: "Live",
    gradient: "from-cyan to-blue-500",
    icon: "🏫",
    duration: "10 weeks",
  },
  {
    id: 3,
    title: "StockFlow",
    description: "Inventory & billing software for a manufacturer",
    longDescription:
      "A small auto-parts manufacturer in Faridabad was tracking stock in physical registers and generating invoices manually in Word. Reconciliation was a monthly nightmare.",
    problem:
      "No real-time stock visibility meant frequent over-ordering and stockouts. Invoice errors caused payment disputes with distributors.",
    solution:
      "Custom inventory management system with barcode scanning, real-time stock alerts, GST-compliant invoice generation, and a distributor payment tracker.",
    results: [
      "Stockouts reduced by 65% in 3 months",
      "Invoice generation time: 45 min → under 2 min",
      "Saved ₹80,000/year in excess inventory costs",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Electron", "Razorpay"],
    category: "Custom Software",
    clientType: "Auto Parts Manufacturer",
    status: "Live",
    gradient: "from-lime to-emerald-400",
    icon: "🏭",
    duration: "8 weeks",
  },
  {
    id: 4,
    title: "TableReady",
    description: "Online ordering & table booking for a restaurant group",
    longDescription:
      "A multi-outlet restaurant group in Delhi with 3 locations had no online presence. Orders came through Zomato/Swiggy, eating 25–30% in commission on every order.",
    problem:
      "Heavy reliance on third-party food apps meant thin margins. No direct customer relationship, no data, and no way to run their own promotions or loyalty programs.",
    solution:
      "Built a branded ordering website with menu management, table reservations, direct UPI/card checkout, and a simple CRM to capture repeat customers.",
    results: [
      "30% of orders shifted to direct channel in 90 days",
      "Saved ~₹60,000/month in commission fees",
      "Built a repeat customer base of 400+ users",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Razorpay", "Supabase", "Vercel"],
    category: "E-commerce",
    clientType: "Restaurant Group (3 outlets)",
    status: "Live",
    gradient: "from-yellow-400 to-orange-400",
    icon: "🍽️",
    duration: "5 weeks",
  },
  {
    id: 5,
    title: "ClinicDesk",
    description: "Appointment & patient management for a clinic",
    longDescription:
      "A multi-doctor clinic in Gurugram was managing appointments over phone calls, with a receptionist spending half their day on bookings, cancellations, and reminders.",
    problem:
      "Double-bookings, missed appointments, and no digital patient history were causing daily chaos. Doctors had no quick view of a patient's past visits before a consultation.",
    solution:
      "Web app with online appointment booking, automated SMS/WhatsApp reminders, patient history records, and a doctor-facing daily schedule dashboard.",
    results: [
      "No-show rate dropped from 28% to 9%",
      "Receptionist workload cut by 50%",
      "Doctors save 5–7 min per consultation with instant patient history",
    ],
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Twilio"],
    category: "Custom Software",
    clientType: "Multi-doctor Clinic",
    status: "Live",
    gradient: "from-purple-400 to-pink-500",
    icon: "🏥",
    duration: "7 weeks",
  },
];