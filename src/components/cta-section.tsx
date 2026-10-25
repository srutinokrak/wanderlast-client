import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-32 text-center sm:py-40">
      {/* Background image with dark overlay */}
      <Image
        src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop"
        alt="Aerial view of an airplane flying over tropical islands"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-6 text-base text-white/85 sm:text-lg">
          Join thousands of travelers who have discovered the world with us
        </p>

        <Button className="mt-10 h-12 gap-2 rounded-lg bg-white px-10 text-sm font-semibold tracking-widest text-foreground uppercase hover:bg-white/90">
          Book Your Trip Today
          <ArrowRight data-icon="inline-end" className="size-4" aria-hidden />
        </Button>
      </div>
    </section>
  );
}
