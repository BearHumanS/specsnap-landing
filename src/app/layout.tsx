import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Keep Geist, it's nice
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpecSnap - Beautiful Screen Recordings & Screenshots",
  description: "Create professional-grade screen recordings and screenshots in seconds. Browser extension for creators, developers, and teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}