import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HealthGen | Modern Healthcare Booking Platform",
  description:
    "Book appointments with top doctors easily and efficiently with HealthGen's modern healthcare platform.",
  keywords: [
    "healthcare",
    "doctor booking",
    "medical appointments",
    "health platform",
  ],
  authors: [{ name: "HealthGen Team" }],
  creator: "HealthGen",
  publisher: "HealthGen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healthgen.vercel.app",
    title: "HealthGen | Modern Healthcare Booking Platform",
    description:
      "Book appointments with top doctors easily and efficiently with HealthGen's modern healthcare platform.",
    siteName: "HealthGen",
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthGen | Modern Healthcare Booking Platform",
    description:
      "Book appointments with top doctors easily and efficiently with HealthGen's modern healthcare platform.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
