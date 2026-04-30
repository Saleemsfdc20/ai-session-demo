"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Cloud } from "lucide-react";
import { Button } from "./ui/Button";
import { cn, openSalesforceChat } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Projects" },
  { href: "#innovation", label: "Innovation" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-salesforce/20 p-2 rounded-lg group-hover:bg-brand-salesforce/40 transition-colors">
            <Cloud className="w-5 h-5 text-brand-salesforce" />
          </div>
          <span className="text-xl font-bold tracking-tight">Saleem<span className="text-brand-salesforce">.Cloud</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" onClick={openSalesforceChat}>
            Start a Project
          </Button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-3xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-neutral-300 hover:text-white py-2"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" className="mt-4 w-full" onClick={() => { setIsMenuOpen(false); openSalesforceChat(); }}>
            Start a Project
          </Button>
        </div>
      )}
    </header>
  );
}
