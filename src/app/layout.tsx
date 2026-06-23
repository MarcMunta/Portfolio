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
  title: "Marc Muntané Clarà | IA & Big Data · React UI/UX · Java Spring Boot",
  description:
    "Portfolio de Marc Muntané, perfil junior centrado en IA & Big Data, React UI/UX, Java Spring Boot, APIs REST y frontend moderno.",
  authors: [{ name: "Marc Muntané Clarà" }],
  creator: "Marc Muntané Clarà",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://marcmunta.github.io/Portfolio/",
  },
  keywords: [
    "Marc Muntané",
    "Junior Developer",
    "AI and Big Data",
    "Java",
    "Spring Boot",
    "React",
    "UI/UX",
    "IA",
    "Big Data",
    "Backend",
    "REST APIs",
    "Barcelona",
  ],
  openGraph: {
    title: "Marc Muntané Clarà | IA & Big Data · React UI/UX · Java Spring Boot",
    description:
      "Portfolio de Marc Muntané, perfil junior centrado en IA & Big Data, React UI/UX, Java Spring Boot, APIs REST y frontend moderno.",
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

const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://marcmunta.github.io/Portfolio/#marc-muntane",
      name: "Marc Muntané Clarà",
      url: "https://marcmunta.github.io/Portfolio/",
      email: "mailto:marcmclara@gmail.com",
      jobTitle: "Junior developer focused on AI & Big Data, React UI/UX, and Java Spring Boot",
      description:
        "Junior candidate focused on applied AI, Big Data training, React UI/UX, Java Spring Boot, REST APIs, clear interfaces, and organized technical work.",
      seeks: {
        "@type": "Demand",
        name: "Internship or junior opportunity in AI & Big Data, React UI/UX, or Java Spring Boot",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "AI & Big Data training",
          credentialCategory: "Technical training",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "DAW/DAM technical training",
          credentialCategory: "Software development training",
        },
      ],
      knowsAbout: [
        "AI & Big Data",
        "Applied AI",
        "Prompt engineering",
        "RAG",
        "React",
        "UI/UX",
        "Next.js",
        "Java",
        "Spring Boot",
        "REST APIs",
        "JPA/Hibernate",
        "MySQL",
      ],
      sameAs: [
        "https://github.com/MarcMunta",
        "https://www.linkedin.com/in/marc-muntan%C3%A9-clar%C3%A0-ab6a0a276/",
      ],
      workExample: [
        {
          "@type": "CreativeWork",
          name: "Vortex",
          description: "Local AI project with React frontend, Python API, basic RAG, local memory, visible permissions, and agent mode.",
          url: "https://github.com/MarcMunta/Vortex",
        },
        {
          "@type": "CreativeWork",
          name: "Portfolio",
          description: "Next.js, React, Tailwind CSS, GSAP, multilingual content, SEO, structured data, and GitHub Pages deployment.",
          url: "https://github.com/MarcMunta/Portfolio",
        },
        {
          "@type": "CreativeWork",
          name: "Fichestu Backend",
          description: "Java Spring Boot backend with REST API, JWT/Google Sign-In, WebSocket, JPA/Flyway, MySQL/Supabase, Docker, and deployment.",
          url: "https://github.com/MarcMunta/Fichestu-Backend",
        },
        {
          "@type": "CreativeWork",
          name: "Acceso Datos Tienda",
          description: "Java 17 academic e-commerce backend with JSP, Servlets, Hibernate/JPA, MySQL, MongoDB, ObjectDB, Maven, JUnit, and Tomcat WAR.",
          url: "https://github.com/MarcMunta/Acceso_Datos_Tienda",
        },
      ],
      mainEntityOfPage: {
        "@id": "https://marcmunta.github.io/Portfolio/#profile-page",
      },
      subjectOf: [
        {
          "@type": "DigitalDocument",
          name: "LLM-readable candidate summary",
          url: "https://marcmunta.github.io/Portfolio/llms.txt",
        },
        {
          "@type": "DigitalDocument",
          name: "Structured candidate profile",
          url: "https://marcmunta.github.io/Portfolio/candidate-profile.json",
        },
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://marcmunta.github.io/Portfolio/#profile-page",
      url: "https://marcmunta.github.io/Portfolio/",
      name: "Marc Muntané Clarà Portfolio",
      about: {
        "@id": "https://marcmunta.github.io/Portfolio/#marc-muntane",
      },
      description:
        "Portfolio for AI & Big Data, React UI/UX, and Java Spring Boot junior opportunities.",
      inLanguage: "es",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profileStructuredData),
          }}
        />
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
