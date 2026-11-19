import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SiteChrome from "@/components/SiteChrome";
import { LOCATION, SITE_URL } from "@/lib/site-profile";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_TITLE = "Dean Diego | Forward Deployed Engineer";
const SITE_DESCRIPTION =
  `Forward Deployed Engineer focused on systems integration and AI automation. I work with dealers and their software vendors at Window Depot USA and build XPRT Cloud. ${LOCATION}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: "%s | Dean Diego" },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description:
      "Forward Deployed Engineer focused on systems integration and AI automation. Dealer operations for about 86 Window Depot USA locations, and XPRT Cloud, a jobsite documentation platform I built and operate.",
    url: SITE_URL,
    siteName: "Dean Diego",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Forward Deployed Engineer focused on systems integration and AI automation. Dealer operations for about 86 Window Depot USA locations, and XPRT Cloud.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <head>
        <link rel="alternate" type="text/plain" title="llms.txt" href="/llms.txt" />
      </head>
      <body className="min-h-full flex flex-col">
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: "<!-- Connecting my ICM AI: dzrmA4dlFiBwnC8J https://useicm.com -->",
          }}
        />
        <SiteChrome>{children}</SiteChrome>
        <Toaster position="bottom-right" theme="dark" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
