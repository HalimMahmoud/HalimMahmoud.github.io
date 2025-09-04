import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdel-Halim Mahmoud Nasr | Front-End Developer",
  description: "React & Node.js developer portfolio for Abdel-Halim Mahmoud Nasr (Halim).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
