import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marc Muntané Clarà | Full-Stack Junior · Java, UI/UX e IA & Big Data",
  description:
    "Portfolio de Marc Muntané, desarrollador Full-Stack Junior centrado en Java, UI/UX, IA & Big Data, APIs REST, bases de datos y frontend moderno.",
  authors: [{ name: "Marc Muntané Clarà" }],
  keywords: [
    "Marc Muntané",
    "Junior Full-Stack Developer",
    "Java",
    "Spring Boot",
    "UI/UX",
    "IA",
    "Big Data",
    "Backend",
    "REST APIs",
    "React",
    "Barcelona",
  ],
  openGraph: {
    title: "Marc Muntané Clarà | Full-Stack Junior · Java, UI/UX e IA & Big Data",
    description:
      "Portfolio de Marc Muntané, desarrollador Full-Stack Junior centrado en Java, UI/UX, IA & Big Data, APIs REST, bases de datos y frontend moderno.",
    url: "https://marcmunta.github.io/Portfolio/",
    siteName: "Portfolio Marc Muntané",
    locale: "es_ES",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('portfolio-theme');
                  if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
