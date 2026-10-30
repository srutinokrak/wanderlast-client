"use client";
import Link from "next/link";
import { CircleUserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Add Destination", href: "/add-destination" },
  { label: "My Bookings", href: "/bookings" },
];

const accountLinks = [
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
];

export default function Navbar() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSignout = () =>{
    authClient.signOut()
  }

  console.log(user);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <nav className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: page links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-semibold text-foreground transition-colors hover:text-primary",
                  link.label === "Home" && "text-primary",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Center: brand logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl font-bold tracking-wide text-primary"
        >
          Wanderlast
        </Link>

        {/* Right: account links */}
        <ul className="flex items-center gap-5">
          <li className="hidden sm:block">
            <Link
              href="/profile"
              className="flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              <CircleUserRound className="size-4" aria-hidden />
              Profile
            </Link>
          </li>

         {user?    <Popover>
            <PopoverTrigger render={ <Avatar>
            <AvatarImage
              referrerPolicy="no-referrer"
              src={user?.image as string}
            />
            <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
          </Avatar>}>
          
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>{user?.name}</PopoverTitle>
                <PopoverDescription>
                  <p>{user?.email}</p>
                  <Button onClick={handleSignout} variant={'destructive'}>SignOut</Button>
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover> : <>
              {accountLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
           
          </> 
           }

      

        
        </ul>
      </nav>

      {/* Mobile: page links row */}
      <ul className="flex items-center justify-between gap-4 overflow-x-auto border-t border-border/60 px-4 py-2 md:hidden">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={cn(
                "whitespace-nowrap text-sm font-semibold text-foreground",
                link.label === "Home" && "text-primary",
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
