"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { MagneticButton } from "@/components/bits/magnetic-button";
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

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const headerStyle = React.useMemo(() => ({ "--header-height": "72px" } as React.CSSProperties), []);
  const translations = useTranslations();
  const { persona, navLinks, contactChannels, header } = translations;
  const parts = persona.name.split(" ");
  const initials = `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`.toUpperCase();

  const nav = (
    <nav className="flex flex-1 flex-col gap-4 text-lg sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:text-sm">
      {navLinks.map((link) => {
        const isActive = link.href === "/" ? pathname === link.href : pathname?.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "relative font-medium transition-colors",
              isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
            onClick={() => setOpen(false)}
          >
            {link.label}
            {isActive ? <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-primary" /> : null}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <header className="sticky top-4 z-50" style={headerStyle}>
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-border/80 bg-background/80 px-4 py-2 shadow-lg backdrop-blur-lg">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary shadow-glow">
            {initials}
          </span>
          <span>{persona.name}</span>
        </Link>

        <div className="hidden flex-1 items-center justify-center sm:flex">{nav}</div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <div className="hidden sm:block">
            <MagneticButton asChild size="sm" variant="outline">
              <Link href={`mailto:${persona.social.email}`}>{header.contactCta}</Link>
            </MagneticButton>
          </div>
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
                {nav}
                <div className="space-y-3 text-sm text-muted-foreground">
                  {contactChannels.map((channel) => (
                    <SheetClose asChild key={channel.label}>
                      <Link
                        href={channel.href}
                        target={isExternalUrl(channel.href) ? "_blank" : undefined}
                        rel={isExternalUrl(channel.href) ? "noreferrer" : undefined}
                        className="flex flex-col"
                      >
                        <span className="text-foreground">{channel.label}</span>
                        <span>{channel.value}</span>
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
