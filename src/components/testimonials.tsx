"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  photo: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      '"The Bali trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable."',
    name: "Michael Chen",
    location: "Tokyo, Japan",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      '"Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable. Highly recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      '"The Patagonia trek was life-changing. Glaciers, campsites and views I\'ll never forget. Everything was organized down to the smallest detail."',
    name: "Emily Rodriguez",
    location: "London, UK",
    photo:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      '"Our Japan tour was flawless. Cherry blossoms, temples and amazing food at every stop. Wanderlust made the whole trip effortless."',
    name: "David Kim",
    location: "Toronto, Canada",
    photo:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
  },
];

function CarouselArrows() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        size="icon"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="size-11 rounded-full border-border text-foreground"
        aria-label="Previous testimonials"
      >
        <ArrowLeft />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="size-11 rounded-full border-border text-foreground"
        aria-label="Next testimonials"
      >
        <ArrowRight />
      </Button>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{ align: "start", slidesToScroll: 1 }}
          className="w-full"
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What Travelers Say
              </h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">
                Real experiences from our happy travelers.
              </p>
            </div>
            <CarouselArrows />
          </div>

          <CarouselContent className="mt-10">
            {testimonials.map(({ quote, name, location, photo }) => (
              <CarouselItem
                key={name}
                className="basis-full sm:basis-1/2 lg:basis-1/2"
              >
                <figure className="grid h-full grid-cols-1 items-stretch gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
                  <div className="flex h-full flex-col justify-between gap-6">
                    <blockquote className="text-xl leading-snug font-medium tracking-tight text-foreground sm:text-2xl">
                      {quote}
                    </blockquote>
                    <figcaption>
                      <p className="text-lg font-semibold text-primary">
                        — {name}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {location}
                      </p>
                    </figcaption>
                  </div>

                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={photo}
                      alt={`Portrait of ${name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
