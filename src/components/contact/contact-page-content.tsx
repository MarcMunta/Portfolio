"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { useTranslations } from "@/lib/i18n/context";
import { MapPin, Mail, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";

export function ContactPageContent() {
  const { contactPage, persona } = useTranslations();

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Contacto desde portfolio");
    window.location.href = `mailto:${persona.social.email}?subject=${subject}`;
  };

  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/80">{contactPage.eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{contactPage.title}</h1>
          <p className="max-w-3xl text-muted-foreground">
            {contactPage.description.replace("marcmclara@gmail.com", persona.social.email)}
          </p>
        </div>
      </FadeIn>
      
      <div className="grid gap-12 lg:grid-cols-2">
        <FadeIn delay={0.1}>
          <div className="space-y-6">
            {/* Email principal */}
            <div className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-8 shadow-glow transition-all hover:shadow-[0_0_40px_-12px_rgba(56,189,248,0.6)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Email</h2>
                    <p className="text-sm text-muted-foreground">Respuesta en 24-48h</p>
                  </div>
                </div>
                
                <p className="text-lg font-medium text-foreground">
                  {persona.social.email}
                </p>
                
                <button
                  onClick={handleEmailClick}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_-8px_rgba(56,189,248,0.8)]"
                >
                  <Send className="h-4 w-4" />
                  Enviar email
                </button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Se abrirá tu cliente de correo predeterminado
                </p>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href={persona.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg transition-all hover:shadow-glow"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground">
                    <Github className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">GitHub</p>
                    <p className="text-sm font-medium text-foreground">@MarcMunta</p>
                  </div>
                </div>
              </Link>

              <Link
                href={persona.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 shadow-lg transition-all hover:shadow-glow"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background/80 text-foreground">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">LinkedIn</p>
                    <p className="text-sm font-medium text-foreground">Perfil</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">{contactPage.locationTitle}</h2>
            </div>
            <p className="text-muted-foreground">
              {contactPage.locationSubtitle}
            </p>
            <div className="rounded-2xl border border-border/70 overflow-hidden shadow-glow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23759.387474646372!2d1.9638851!3d41.3445191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a496a88d5b3f1f%3A0x402e90d8b5b64b0!2sVilafranca%20del%20Pened%C3%A8s%2C%20Barcelona%2C%20Spain!5e0!3m2!1sen!2ses!4v1727171200000!5m2!1sen!2ses"
                width="100%"
                height="300"
                title="Mapa de Vilafranca del Penedès, Barcelona"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full border-0"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {contactPage.availabilityNote}
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
