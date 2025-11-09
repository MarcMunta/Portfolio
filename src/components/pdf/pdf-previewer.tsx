"use client";

import * as React from "react";
import { ExternalLink, Download, Printer, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

function isPdfHref(href: string | null): href is string {
  if (!href) return false;
  try {
    const url = new URL(href, window.location.href);
    return /\.pdf($|[?#])/i.test(url.pathname);
  } catch {
    return false;
  }
}

export function PdfPreviewer() {
  const [open, setOpen] = React.useState(false);
  const [src, setSrc] = React.useState<string | null>(null);
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // Only left-click without modifiers
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!isPdfHref(href)) return;

      // Prevent navigation and open previewer
      e.preventDefault();
      const url = new URL(href!, window.location.href);
      setSrc(url.toString());
      setOpen(true);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  const title = React.useMemo(() => {
    if (!src) return "Documento";
    try {
      const { pathname } = new URL(src);
      const file = pathname.split("/").pop() || "Documento";
      return decodeURIComponent(file);
    } catch {
      return "Documento";
    }
  }, [src]);

  function handlePrint() {
    try {
      const win = iframeRef.current?.contentWindow;
      win?.focus();
      win?.print();
    } catch {
      // Ignore printing errors (e.g., cross-origin)
    }
  }

  return (
    <Dialog open={open} onOpenChange={(v) => (setOpen(v), !v && setSrc(null))}>
      <DialogContent
        overlayClassName="bg-black/80 backdrop-blur-[2px]"
        className={cn(
          "w-[95vw] max-w-[1400px] h-[92vh] p-0 overflow-hidden rounded-[2rem]",
          "border border-white/10 bg-gradient-to-b from-white/10 to-white/5 dark:from-white/10 dark:to-white/[0.06]",
          "shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)]",
        )}
      >
        <div className="flex items-center justify-between gap-2 border-b border-white/10 bg-black/30 px-4 py-3 text-white">
          <div className="truncate text-sm font-medium opacity-90">{title}</div>
          <div className="flex items-center gap-1.5">
            {src ? (
              <a
                href={src}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium hover:bg-white/15"
                title="Abrir en pestaña nueva"
              >
                <ExternalLink className="h-4 w-4" />
                Abrir
              </a>
            ) : null}
            {src ? (
              <a
                href={src}
                download
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium hover:bg-white/15"
                title="Descargar PDF"
              >
                <Download className="h-4 w-4" />
                Descargar
              </a>
            ) : null}
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium hover:bg-white/15"
              title="Imprimir"
            >
              <Printer className="h-4 w-4" />
              Imprimir
            </button>
            <DialogClose asChild>
              <button
                type="button"
                aria-label="Cerrar"
                className="inline-flex items-center justify-center rounded-full bg-white/10 p-2 hover:bg-white/15"
              >
                <X className="h-4 w-4" />
              </button>
            </DialogClose>
          </div>
        </div>
        <div className="relative h-[calc(100%-52px)] w-full bg-black/60">
          {src && (
            <iframe
              ref={iframeRef}
              title={title}
              src={src}
              className="absolute inset-0 h-full w-full rounded-b-[2rem]"
            />
          )}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.25)_0%,transparent_60%)]" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
