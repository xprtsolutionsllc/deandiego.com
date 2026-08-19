import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://deandiego.com"),
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
        <SiteChrome>{children}</SiteChrome>
        <Toaster position="bottom-right" theme="dark" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
