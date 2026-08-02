import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marc Muntané Clarà | Producto, IA y desarrollo full-stack",
  description:
    "Portfolio de Marc Muntané: productos web y mobile, IA local, React y TypeScript, y backend Java con Spring Boot.",
  authors: [{ name: "Marc Muntané Clarà" }],
  creator: "Marc Muntané Clarà",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://marcmunta.github.io/Portfolio/" },
  keywords: [
    "Marc Muntané",
    "Product developer",
    "React",
    "TypeScript",
    "Local AI",
    "RAG",
    "Java",
    "Spring Boot",
    "Barcelona",
  ],
  openGraph: {
    title: "Marc Muntané Clarà | Portfolio",
    description:
      "Productos digitales verificables: Klime, ATLAS, Vortex y Fichestu.",
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
  themeColor: "#0b0d10",
};

const selectedWork = [
  {
    "@type": "CreativeWork",
    name: "Klime",
    description:
      "Editorial ecommerce prototype with a multilingual catalogue, persistent cart, product community, and a production-oriented commerce architecture.",
    url: "https://marcmunta.github.io/Klime/",
  },
  {
    "@type": "SoftwareApplication",
    name: "ATLAS",
    applicationCategory: "HealthApplication",
    description:
      "Local-first training planning and progress PWA built with Expo, React Native Web, TypeScript, and IndexedDB.",
    url: "https://marcmunta.github.io/Atlas/",
  },
  {
    "@type": "SoftwareSourceCode",
    name: "Vortex",
    programmingLanguage: ["Python", "TypeScript"],
    description:
      "Local AI support system with semantic retrieval, bounded answers, and human escalation.",
    url: "https://github.com/MarcMunta/Vortex",
  },
  {
    "@type": "SoftwareSourceCode",
    name: "Fichestu",
    programmingLanguage: ["Kotlin", "Java"],
    description:
      "Native Android client and Spring Boot backend with authentication, realtime communication, and persistent data.",
    url: "https://github.com/MarcMunta/Fichestu-Backend",
  },
];

const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://marcmunta.github.io/Portfolio/#marc-muntane",
      name: "Marc Muntané Clarà",
      url: "https://marcmunta.github.io/Portfolio/",
      email: "mailto:marcmclara@gmail.com",
      jobTitle: "Junior product-minded software developer",
      description:
        "Developer focused on usable digital products, React and TypeScript interfaces, local AI systems, and Java Spring Boot backends.",
      seeks: {
        "@type": "Demand",
        name: "Junior software development opportunity",
      },
      knowsAbout: [
        "Product development",
        "React",
        "TypeScript",
        "Responsive design",
        "Local AI",
        "RAG",
        "Python",
        "Java",
        "Spring Boot",
        "REST APIs",
        "SQL",
      ],
      sameAs: [
        "https://github.com/MarcMunta",
        "https://www.linkedin.com/in/marc-muntan%C3%A9-clar%C3%A0-ab6a0a276/",
      ],
      workExample: selectedWork,
      mainEntityOfPage: {
        "@id": "https://marcmunta.github.io/Portfolio/#profile-page",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://marcmunta.github.io/Portfolio/#profile-page",
      url: "https://marcmunta.github.io/Portfolio/",
      name: "Marc Muntané Clarà Portfolio",
      about: { "@id": "https://marcmunta.github.io/Portfolio/#marc-muntane" },
      description: "Selected software product work by Marc Muntané Clarà.",
      inLanguage: ["es", "ca", "en"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileStructuredData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme');
                  if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
                } catch (error) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
