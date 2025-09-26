"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  items: { src: string; alt: string }[];
  labels: {
    previous: string;
    next: string;
    goTo: string;
  };
}

export function ProjectGallery({ items, labels }: ProjectGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: items.length > 1, align: "start" });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = React.useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  React.useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/70">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {items.map((media) => (
              <div key={media.src} className="relative min-w-0 flex-[0_0_100%]">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {items.length > 1 ? (
          <>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/70 shadow-lg backdrop-blur"
              onClick={scrollPrev}
              aria-label={labels.previous}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/70 shadow-lg backdrop-blur"
              onClick={scrollNext}
              aria-label={labels.next}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        ) : null}
      </div>
      {items.length > 1 ? (
        <div className="flex items-center justify-center gap-2">
          {items.map((media, index) => (
            <button
              key={media.src}
              type="button"
              onClick={() => scrollTo(index)}
              className="group"
              aria-label={labels.goTo.replace("{{index}}", String(index + 1))}
            >
              <span
                className={cn(
                  "block h-2.5 w-2.5 rounded-full border border-border/60 transition-all",
                  selectedIndex === index ? "scale-110 border-primary bg-primary/80" : "bg-border/60",
                )}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
