"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Factory, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald/[0.02] -skew-x-12 transform origin-top-right" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange/[0.03] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-orange" />
            <span className="text-orange font-bold tracking-[0.3em] text-xs uppercase">
              Nationwide FMCG Leader
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-black text-primary leading-[1.1] mb-8">
            Crafting Crunch.<br />
            <span className="text-orange">Delivering Happiness.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary/70 leading-relaxed mb-10 max-w-xl">
            Siddhidatri Aahar is a large-scale food manufacturing enterprise 
            committed to producing premium, export-quality snacks with 
            state-of-the-art automated production capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-emerald hover:bg-emerald/90 text-white font-bold h-14 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all group">
              Explore Our Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-emerald/20 text-emerald font-bold h-14 px-8 rounded-full hover:bg-emerald/5 transition-all">
              Become a Distributor
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-emerald/10">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-primary leading-none">250+</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-emerald/60 mt-1">Distributors</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-primary leading-none">50+</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-emerald/60 mt-1">Product Lines</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-primary leading-none">15+</span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-emerald/60 mt-1">Export Markets</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[500px] md:h-[600px] w-full"
        >
          {/* Main Visual Frame */}
          <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white group">
            {/* Using a placeholder for the actual generated image */}
            <div className="relative w-full h-full bg-emerald/5">
              <Image 
                src="/hero_visual.png" /* This should map to the generated image */
                alt="Siddhidatri Aahar Premium Snacks"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald/40 to-transparent" />
            </div>

            {/* Floating Info Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/50"
            >
              <div className="w-10 h-10 bg-emerald/10 rounded-xl flex items-center justify-center text-emerald">
                <ShieldCheck size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-emerald/60 uppercase tracking-widest">Quality Assurance</span>
                <span className="text-xs font-bold text-primary">ISO & FSSAI Certified</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/50"
            >
              <div className="w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center text-orange">
                <Factory size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-orange/60 uppercase tracking-widest">Manufacturing</span>
                <span className="text-xs font-bold text-primary">100% Automated Facility</span>
              </div>
            </motion.div>
          </div>

          {/* Decorative Background circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-orange/10 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 border-[15px] border-emerald/10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
