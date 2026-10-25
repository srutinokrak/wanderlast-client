import Image from "next/image";
import {
  ArrowRight,
  CalendarRange,
  CircleDollarSign,
  MapPin,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const searchFields = [
  {
    icon: MapPin,
    label: "Location",
    placeholder: "Address, City Or Zip",
  },
  {
    icon: CalendarRange,
    label: "Date/Duration",
    placeholder: "Anytime / 3 Days",
  },
  {
    icon: CircleDollarSign,
    label: "Budget",
    placeholder: "$0 - $3000",
  },
  {
    icon: Users,
    label: "People",
    placeholder: "5-10",
  },
];

export default function Banner() {
  return (
    <section className="relative flex min-h-[calc(100svh-3.5rem)] flex-col overflow-hidden">
      {/* Background image with dark overlay */}
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop"
        alt="Aerial view of a coastal destination"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-24 text-center text-white">
        <h1 className="max-w-4xl text-5xl leading-tight font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Discover Your Next Adventure
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button className="h-12 gap-2 rounded-lg bg-sky-500 px-8 text-sm font-semibold tracking-widest text-white uppercase hover:bg-sky-600">
            Explore Now
            <ArrowRight data-icon="inline-end" className="size-4" aria-hidden />
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-lg border-white/60 bg-white/10 px-8 text-sm font-semibold tracking-widest text-white uppercase hover:bg-white hover:text-foreground"
          >
            View Destination
          </Button>
        </div>
      </div>

      {/* Search bar */}
      <form className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-border/20 overflow-hidden rounded-lg bg-card/80 backdrop-blur sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-[repeat(4,1fr)_auto]">
          {searchFields.map(({ icon: Icon, label, placeholder }) => (
            <div
              key={label}
              className="flex flex-col justify-center gap-1 border-border/20 px-5 py-3 lg:border-l"
            >
              <label
                htmlFor={label}
                className="flex items-center gap-1.5 text-sm font-semibold text-white"
              >
                <Icon className="size-4 text-white/70" aria-hidden />
                {label}
              </label>
              <Input
                id={label}
                name={label.toLowerCase().replace(/[^a-z]/g, "")}
                placeholder={placeholder}
                className="h-6 rounded-none border-0 bg-transparent px-0 text-xs text-white placeholder:text-white/60 focus-visible:ring-0 dark:bg-transparent"
              />
            </div>
          ))}

          <Button
            type="submit"
            className="h-auto rounded-none bg-sky-500 px-10 py-4 text-base font-semibold text-white uppercase hover:bg-sky-600"
          >
            Search
          </Button>
        </div>
      </form>
    </section>
  );
}
