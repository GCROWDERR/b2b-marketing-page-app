import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

import "@/index.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bankrate B2B — Partnerships",
  description:
    "Partner with Bankrate to reach millions of financial decision-makers through supply, demand, and enterprise programs.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSans.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://www.bankrate.com" />
        <link
          rel="preload"
          href="https://www.bankrate.com/static/fonts/RecifeText-VF.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
