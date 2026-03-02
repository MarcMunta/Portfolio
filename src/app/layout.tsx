import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Marc Muntané Clara | Portfolio",
  description:
    "Desarrollador web y multiplataforma en formacion. React, WordPress, Flutter y documentacion tecnica.",
  authors: [{ name: "Marc Muntané Clara" }],
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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
