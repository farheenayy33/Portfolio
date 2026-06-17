import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { ResumeBar } from "@/components/layout/ResumeBar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Farheen Laraib — Frontend Developer",
  description:
    "Frontend developer building intelligent digital experiences. React, TypeScript, Three.js. Open to opportunities.",
  keywords: [
    "Farheen Laraib",
    "Frontend Developer",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Farheen Laraib" }],
  openGraph: {
    title: "Farheen Laraib — Frontend Developer",
    description: "Building intelligent digital experiences.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${syne.variable}`}
    >
      <body className="min-h-screen font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <Navbar />
        <ResumeBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
