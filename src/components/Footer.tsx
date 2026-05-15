import React from "react";
import Link from "next/link";
import { Globe, ShieldCheck, Zap, Heart, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Our History", href: "#history" },
    { name: "Certifications", href: "#certifications" },
    { name: "Sustainability", href: "#sustainability" },
  ],
  Products: [
    { name: "Traditional Snacks", href: "#products" },
    { name: "Potato Chips", href: "#products" },
    { name: "Healthy Bites", href: "#products" },
    { name: "Export Range", href: "#products" },
  ],
  Business: [
    { name: "Become Distributor", href: "#inquiry" },
    { name: "Private Labeling", href: "#inquiry" },
    { name: "Supply Chain", href: "#distribution" },
    { name: "Bulk Orders", href: "#inquiry" },
  ],
  Resources: [
    { name: "Careers", href: "#careers" },
    { name: "Media Kit", href: "#media" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6 md:px-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary font-bold text-2xl shadow-xl">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight leading-none text-white">
                  SIDDHIDATRI
                </span>
                <span className="text-xs font-medium tracking-[0.3em] text-orange">
                  AAHAR PVT LTD
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm">
              Empowering global palates with authentic Indian flavors. 
              Siddhidatri Aahar is a leading FMCG manufacturer dedicated to quality, 
              hygiene, and innovation in every crunch.
            </p>
            <div className="flex gap-4">
              {[Globe, ShieldCheck, Zap, Heart].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-white mb-6 tracking-wide uppercase text-xs">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-orange text-sm transition-colors flex items-center group"
                    >
                      {link.name}
                      <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-white/10 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center text-orange">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Email Us</p>
              <p className="font-semibold">info@siddhidatri.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center text-orange">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Call Us</p>
              <p className="font-semibold">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-900/50 flex items-center justify-center text-orange">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Location</p>
              <p className="font-semibold text-sm">Industrial Hub, Madhya Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
            © 2026 Siddhidatri Aahar Private Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-white/40 hover:text-white text-[10px] uppercase tracking-[0.2em] transition-colors">
              ISO 9001:2015 Certified
            </Link>
            <Link href="#" className="text-white/40 hover:text-white text-[10px] uppercase tracking-[0.2em] transition-colors">
              FSSAI Licensed
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
