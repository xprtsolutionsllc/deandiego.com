import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Dean Diego · Software Engineer & AI Systems Builder", template: "%s | Dean Diego" },
  description: "Software engineer who builds full-stack applications, AI systems, and data pipelines end to end. Founder of XPRT Solutions LLC. Open to senior and founding engineer roles.",
  openGraph: {
    title: "Dean Diego · Software Engineer & AI Systems Builder",
    description: "Full-stack applications, AI systems, and data pipelines, built end to end. Open to senior and founding engineer roles.",
    url: "https://deandiego.com",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Toaster position="bottom-right" theme="dark" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
