import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { LenisProvider } from "@/components/lenis-provider";
import { MotionProvider } from "@/components/motion/motion-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n/context";
import { defaultLocale, persona } from "@/lib/data";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const title = `${persona.name} · ${persona.title}`;
const description = `${persona.shortBio} ${persona.availability}`;

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: persona.name }],
  icons: {
    // Nota: en GitHub Pages servimos bajo /Portfolio, por eso fijamos el basePath aquí
    icon: "/Portfolio/favicon.svg",
    shortcut: "/Portfolio/favicon.svg",
    apple: "/Portfolio/favicon.svg",
  },
  openGraph: {
    title,
    description,
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f6ff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1020" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <LanguageProvider initialLocale={defaultLocale}>
            <MotionProvider>
              <LenisProvider>{children}</LenisProvider>
            </MotionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
