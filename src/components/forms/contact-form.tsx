"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useTranslations } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const createContactSchema = (messages: { errors: { name: string; email: string; message: string } }) =>
  z.object({
    name: z.string().min(2, messages.errors.name),
    email: z.string().email(messages.errors.email),
    message: z.string().min(12, messages.errors.message),
  });

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>;

const CONTACT_EMAIL = "marcmclara@gmail.com";

export function ContactForm() {
  const { contactForm } = useTranslations();
  const schema = React.useMemo(() => createContactSchema(contactForm), [contactForm]);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    // Construir el mailto con los datos del formulario
    const subject = encodeURIComponent(`Contacto desde portfolio - ${values.name}`);
    const body = encodeURIComponent(
      `Nombre: ${values.name}\nEmail: ${values.email}\n\nMensaje:\n${values.message}`
    );
    
    // Abrir el cliente de correo con los datos prellenados
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    
    // Limpiar el formulario después de abrir mailto
    setTimeout(() => {
      form.reset();
    }, 500);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{contactForm.nameLabel}</Label>
          <Input
            id="name"
            placeholder={contactForm.namePlaceholder}
            {...form.register("name")}
            aria-invalid={form.formState.errors.name ? "true" : "false"}
          />
          {form.formState.errors.name ? (
            <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{contactForm.emailLabel}</Label>
          <Input
            id="email"
            type="email"
            placeholder={contactForm.emailPlaceholder}
            {...form.register("email")}
            aria-invalid={form.formState.errors.email ? "true" : "false"}
          />
          {form.formState.errors.email ? (
            <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{contactForm.messageLabel}</Label>
        <Textarea
          id="message"
          placeholder={contactForm.messagePlaceholder}
          rows={5}
          {...form.register("message")}
          aria-invalid={form.formState.errors.message ? "true" : "false"}
        />
        {form.formState.errors.message ? (
          <p className="text-xs text-red-500">{form.formState.errors.message.message}</p>
          ) : null}
      </div>
      <div className="flex items-center justify-between gap-4">
        <Button type="submit" className="min-w-[160px] gap-2">
          <Mail className="h-4 w-4" />
          {contactForm.submitIdle}
        </Button>
        <span className="text-xs text-muted-foreground">
          Se abrirá tu cliente de correo
        </span>
      </div>
    </form>
  );
}
