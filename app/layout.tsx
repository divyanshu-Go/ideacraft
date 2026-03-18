// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "IdeaCraft — We Turn Ideas Into SaaS Products",
    template: "%s | IdeaCraft",
  },
  description:
    "IdeaCraft is a SaaS development studio that takes your idea from concept to launch. Custom software built by experts.",
  keywords: [
    "SaaS development",
    "custom software",
    "startup studio",
    "web applications",
    "IdeaCraft",
  ],
  openGraph: {
    title: "IdeaCraft — We Turn Ideas Into SaaS Products",
    description:
      "Custom SaaS development studio. We take your idea and build it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg text-white antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
