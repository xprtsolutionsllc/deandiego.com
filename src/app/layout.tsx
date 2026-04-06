import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dean Diego — AI Solutions Architect",
  description: "I build what others plan. Full-stack platforms, autonomous drone systems, and AI integrations — shipped in days, not months.",
  openGraph: {
    title: "Dean Diego — AI Solutions Architect",
    description: "Full-stack platforms, autonomous drone systems, and AI integrations — shipped in days, not months.",
    url: "https://deandiego.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="bottom-right" theme="dark" />
      </body>
    </html>
  );
}
