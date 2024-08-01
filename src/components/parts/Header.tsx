"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from "next/link";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between py-4 max-w-full overflow-x-hidden">
      <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl ml-2 sm:ml-4 md:ml-6 lg:ml-8">
        ppc pros
      </h1>
      <Navbar className="hidden md:flex top-2" />
      <div className="flex space-x-2 sm:space-x-4 md:space-x-6">
        <button className="px-3 sm:px-5 md:px-6 lg:px-8 py-1 sm:py-2 md:py-3 lg:py-4 text-white text-xs sm:text-sm md:text-base lg:text-lg rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg hidden md:inline">
          Contact us
        </button>
        <button className="h-9 sm:h-11 md:h-12 lg:h-14 animate-shimmer items-center justify-center rounded-xl bg-[linear-gradient(110deg,#916CE7,45%,#AC96EF,55%,#916CE7)] bg-[length:200%_100%] px-3 sm:px-5 md:px-6 lg:px-8 font-medium text-white transition-colors hidden md:inline">
          Book a call
        </button>
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
      </div>
      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("inset-x-0 lg:max-w-2xl mx-auto z-50 py-2", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Who We Are">
          <div className="flex flex-col space-y-1 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="text-xs sm:text-sm md:text-base grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 p-2 sm:p-3 md:p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Portfolio">
          <div className="flex flex-col space-y-1 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Case-Studies">
          <div className="flex flex-col space-y-1 sm:space-y-2 md:space-y-3 text-xs sm:text-sm md:text-base">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

function MobileMenu({ setMenuOpen }: { setMenuOpen: (open: boolean) => void }) {
  return (
    <div className="fixed inset-0 h-full z-50 flex flex-col text-black bg-white p-4 max-w-full overflow-x-hidden">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl">ppc pros</h1>
        <button className="text-2xl" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </button>
      </div>
      <div className="flex flex-col items-center text-black space-y-3 sm:space-y-4 md:space-y-5 w-full">
        <Link className="w-full text-center text-sm sm:text-base md:text-lg" href="/web-dev" onClick={() => setMenuOpen(false)}>Who We Are</Link>
        <Link className="w-full text-center text-sm sm:text-base md:text-lg" href="/interface-design" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link className="w-full text-center text-sm sm:text-base md:text-lg" href="/seo" onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link className="w-full text-center text-sm sm:text-base md:text-lg" href="/branding" onClick={() => setMenuOpen(false)}>Case Studies</Link>
        <Link className="w-full text-center text-sm sm:text-base md:text-lg" href="/hobby" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </div>
    </div>
  );
}
