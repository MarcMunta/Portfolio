"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTranslations } from "@/lib/i18n/context";
import { cn, isExternalUrl } from "@/lib/utils";
import { GlassPanel } from "@/components/ui/glass-panel";
import { HoverBubbleGroup, HoverBubbleItem } from "@/components/ui/hover-bubble-group";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const translations = useTranslations();
  const { persona, navLinks, contactChannels, header } = translations;
  const parts = persona.name.split(" ");
  const initials = `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`.toUpperCase();
  const navItems = navLinks.map((link) => {
    const isActive = link.href === "/" ? pathname === link.href : Boolean(pathname?.startsWith(link.href));
    return { ...link, isActive };
  });

  return (
    <header className="sticky top-4 z-50 relative flex justify-center px-4">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        {/* glow backdrop - toned down for solid header */}
        <div className="h-full w-[min(100%,46rem)] -translate-y-4 rounded-2xl bg-primary/10 blur-2xl opacity-20 dark:bg-primary/25 dark:opacity-25" />
      </div>
      <GlassPanel
        intensity="lg"
        animated
        className="relative mx-auto w-full max-w-5xl rounded-2xl before:opacity-0 after:ring-white/30 dark:after:ring-white/25 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/15 shadow-sm"
        contentClassName="flex items-center gap-4 px-5 py-2.5 backdrop-saturate-150"
      >
        <Link href="/" className="group flex items-center text-sm font-semibold tracking-tight">
          <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary to-indigo-600 text-white shadow-md ring-1 ring-primary/40 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:brightness-110 dark:from-primary dark:to-indigo-500 dark:shadow-glow">
            {initials}
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
          </span>
        </Link>

        <HoverBubbleGroup
          className="hidden flex-1 items-center justify-center gap-1 rounded-full border border-black/10 bg-white px-1.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] sm:flex dark:border-white/15 dark:bg-neutral-900/70 dark:shadow-none"
          bubbleClassName="rounded-full bg-primary/15 backdrop-blur-sm border border-primary/40 shadow-[0_4px_18px_-4px_rgba(99,102,241,0.45)] dark:bg-primary/25 dark:border-white/20 dark:shadow-[0_12px_34px_-14px_rgba(99,102,241,0.7)]"
          padding={0}
        >
          {navItems.map((item) => (
            <HoverBubbleItem key={item.href} active={item.isActive}>
              <Link
                href={item.href}
                className={cn(
                  "relative block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-300",
                  item.isActive
                    ? "font-semibold text-black dark:text-white"
                    : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white",
                )}
              >
                {item.label}
              </Link>
            </HoverBubbleItem>
          ))}
        </HoverBubbleGroup>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="sm:hidden" aria-label={header.mobileMenuAria}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetHeader>
                <SheetTitle>{header.menuTitle}</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-6">
                <nav className="flex flex-col gap-4 text-base">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded-full px-3 py-2 text-sm font-medium",
                          item.isActive ? "bg-primary/15 font-semibold text-black dark:text-white" : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white",
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-white p-4 backdrop-blur-xl dark:border-white/15 dark:bg-neutral-900">
                  <ThemeToggle />
                  <LanguageSwitcher />
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {contactChannels.map((channel) => (
                    <SheetClose asChild key={channel.label}>
                      <Link
                        href={channel.href}
                        target={isExternalUrl(channel.href) ? "_blank" : undefined}
                        rel={isExternalUrl(channel.href) ? "noreferrer" : undefined}
                        className="flex flex-col"
                      >
                        <span className="text-black dark:text-white">{channel.label}</span>
                        <span>{channel.value}</span>
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </GlassPanel>
    </header>
  );
}
