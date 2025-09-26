"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { useTranslations } from "@/lib/i18n/context";
import { MapPin } from "lucide-react";

import { ContactForm } from "../forms/contact-form";

export function ContactPageContent() {
  const { contactPage, persona } = useTranslations();

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
          <div className="rounded-3xl border border-border/70 bg-card/60 p-8 shadow-glow">
            <ContactForm />
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
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
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
