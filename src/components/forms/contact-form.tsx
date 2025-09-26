"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
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

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { contactForm } = useTranslations();
  const schema = React.useMemo(() => createContactSchema(contactForm), [contactForm]);

  const [status, setStatus] = React.useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [lastSubmission, setLastSubmission] = React.useState<ContactFormValues | null>(null);
  const resetTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleReset = React.useCallback((delay: number) => {
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }

    resetTimer.current = setTimeout(() => {
      setStatus("idle");
      setErrorMessage(null);
      resetTimer.current = null;
    }, delay);
  }, []);

  React.useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("sending");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: unknown } | null;
        const rawMessage = typeof data?.error === "string" ? data.error : "";
        
        // Mensaje más específico basado en el código de estado
        if (response.status === 500 && rawMessage.includes("not configured")) {
          throw new Error("Servicio de email en configuración. Por favor, contacta directamente en marcmclara@gmail.com");
        }
        
        throw new Error(rawMessage || "Error al enviar el mensaje. Inténtalo de nuevo.");
      }

      setStatus("success");
      setLastSubmission(values);
      form.reset();
      scheduleReset(4000);
    } catch (error) {
      console.error("Contact form submission failed", error);
      const rawMessage = error instanceof Error && error.message !== "Failed to send message" ? error.message : "";
      const message = rawMessage && rawMessage !== "Email service not configured" ? rawMessage : contactForm.feedback.error;
      setErrorMessage(message);
      setStatus("error");
      scheduleReset(5000);
    }
  };

  const isSubmitting = form.formState.isSubmitting || status === "sending";
  const successFeedback = React.useMemo(() => {
    if (!lastSubmission) return "";
    const firstName = lastSubmission.name.split(" ")[0] ?? "";
    return contactForm.feedback.success.replace("{{name}}", firstName);
  }, [contactForm.feedback.success, lastSubmission]);

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
        <Button type="submit" disabled={isSubmitting} className="min-w-[160px]">
          {status === "sending"
            ? contactForm.submitSending
            : status === "success"
              ? contactForm.submitSuccess
              : contactForm.submitIdle}
        </Button>
        <motion.span
          role="status"
          aria-live="polite"
          initial={false}
          animate={{ opacity: status === "idle" ? 0 : 1, y: status === "idle" ? -6 : 0 }}
          className="text-sm text-muted-foreground"
        >
          {status === "success"
            ? successFeedback
            : status === "error"
              ? errorMessage ?? contactForm.feedback.error
              : status === "sending"
                ? contactForm.feedback.sending
                : ""}
        </motion.span>
      </div>
    </form>
  );
}
