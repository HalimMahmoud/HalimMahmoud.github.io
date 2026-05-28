import "./globals.css";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdel-Halim Mahmoud Nasr | Full-Stack Developer (React & Next.js)",
  description: "Full-Stack Developer specializing in React, Next.js, and Node.js. I build secure, high-performance web systems and interactive digital interfaces.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased selection:bg-brand-cyan/20 selection:text-brand-cyan`}>
        {children}
      </body>
    </html>
  );
}
