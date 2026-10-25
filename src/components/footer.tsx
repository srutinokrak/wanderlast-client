import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const socialIconProps = {
  className: "size-4",
  fill: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": true as const,
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "My Profile", href: "/profile" },
];

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const columns = [
  { title: "Quick Links", links: quickLinks },
  { title: "Support", links: supportLinks },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        {/* Brand */}
        <div>
          <p className="font-serif text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Wanderlast
          </p>
          <p className="mt-5 text-base text-white/70 sm:text-lg">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        {/* Columns */}
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          {/* Newsletter */}
          <div className="max-w-sm">
            <h3 className="font-serif text-lg font-semibold tracking-wide uppercase">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Subscribe for exclusive travel deals and inspiration
            </p>
            <form className="mt-5 flex h-11 items-center rounded-md bg-white/5 ring-1 ring-white/15 transition-colors focus-within:ring-white/40">
              <Input
                type="email"
                name="email"
                placeholder="Enter email"
                className="h-full flex-1 rounded-none border-0 bg-transparent text-sm text-white placeholder:text-white/50 focus-visible:ring-0 focus-visible:border-0 dark:bg-transparent"
                aria-label="Email address"
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="mr-1 size-9 shrink-0 rounded text-white hover:bg-white/10"
                aria-label="Subscribe"
              >
                <ArrowRight />
              </Button>
            </form>
          </div>

          {/* Link columns */}
          {columns.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h3 className="font-serif text-lg font-semibold tracking-wide uppercase">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold tracking-wide uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li>
                <a
                  href="tel:+17859011622"
                  className="transition-colors hover:text-white"
                >
                  785 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wanderlast.com"
                  className="transition-colors hover:text-white"
                >
                  info@wanderlast.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Wanderlast. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-white/70 transition-colors hover:text-white"
            >
              <svg {...socialIconProps}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/70 transition-colors hover:text-white"
            >
              <svg {...socialIconProps}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 transition-colors hover:text-white"
            >
              <svg {...socialIconProps} fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
