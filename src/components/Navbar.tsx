"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Products", href: "#products" },
  { name: "Manufacturing", href: "#manufacturing" },
  { name: "About Us", href: "#about" },
  { name: "Distribution", href: "#distribution" },
  { name: "Careers", href: "#careers" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12",
        scrolled
          ? "py-4 bg-white/90 backdrop-blur-md shadow-sm border-b border-emerald/10"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-emerald rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            S
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-heading font-bold text-lg leading-none transition-colors",
              scrolled ? "text-primary" : "text-primary md:text-white lg:text-primary" 
              /* Since background might be cinematic dark in hero, I'll use a mix or just solid if scrolled */
            )}>
              SIDDHIDATRI
            </span>
            <span className={cn(
              "text-[10px] font-medium tracking-[0.2em] transition-colors",
              scrolled ? "text-orange" : "text-orange/80"
            )}>
              AAHAR PVT LTD
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold tracking-wide hover:text-orange transition-colors relative group",
                scrolled ? "text-primary" : "text-primary"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-primary font-semibold gap-2 hover:bg-emerald/5"
          >
            <Globe className="w-4 h-4" />
            EN
          </Button>
          <Button
            size="sm"
            className="bg-emerald hover:bg-emerald/90 text-white font-bold px-6 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Inquiry
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-emerald/10 shadow-xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-primary hover:text-orange transition-colors flex items-center justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ArrowRight size={18} className="text-orange" />
                </Link>
              ))}
              <hr className="border-emerald/5 my-2" />
              <Button className="w-full bg-emerald text-white font-bold py-6 text-lg">
                Business Inquiry
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
