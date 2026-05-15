"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Wind, ShieldCheck, Zap, ThermometerSnowflake } from "lucide-react";
import Image from "next/image";

const processes = [
  {
    title: "Raw Material Sourcing",
    desc: "Direct procurement from certified farms ensuring the highest quality base ingredients.",
    icon: Wind,
  },
  {
    title: "Automated Cleaning",
    desc: "Multi-stage automated cleaning and sorting using laser-sorting technology.",
    icon: Cpu,
  },
  {
    title: "Hygienic Processing",
    desc: "100% touch-free manufacturing in a temperature-controlled, sterile environment.",
    icon: ThermometerSnowflake,
  },
  {
    title: "Quality Inspection",
    desc: "Continuous lab testing for moisture, oil content, and nutritional consistency.",
    icon: ShieldCheck,
  },
];

export const Manufacturing = () => {
  return (
    <section id="manufacturing" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-orange" />
              <span className="text-orange font-bold tracking-[0.2em] text-xs uppercase">Manufacturing Excellence</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-primary leading-tight">
              Where Technology Meets <span className="text-orange">Traditional Taste.</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-primary/60 text-lg max-w-md border-l-4 border-emerald pl-6">
              Our state-of-the-art facility is engineered for scale, maintaining the highest global standards of food safety and hygiene.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Image 
              src="/manufacturing_visual.png" 
              alt="Advanced Manufacturing Facility"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            
            {/* Live Stats Overlay */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Facility Size</p>
                <p className="text-white text-xl font-black">50,000+ Sq.Ft</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Automation</p>
                <p className="text-white text-xl font-black">Fully Integrated</p>
              </div>
            </div>
          </motion.div>

          {/* Process Timeline */}
          <div className="flex flex-col gap-8">
            {processes.map((process, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-emerald/5 flex items-center justify-center text-emerald group-hover:bg-emerald group-hover:text-white transition-all shadow-sm">
                    <process.icon size={24} />
                  </div>
                  {i !== processes.length - 1 && <div className="w-px h-full bg-emerald/10 my-2" />}
                </div>
                <div className="pb-8">
                  <h4 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                    {process.title}
                    <CheckCircle2 size={16} className="text-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-primary/60 text-sm leading-relaxed">
                    {process.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="mt-4">
              <div className="p-8 rounded-3xl bg-emerald text-white flex items-center justify-between shadow-xl">
                <div>
                  <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest mb-1">Production Capability</p>
                  <p className="text-2xl font-black italic">"Unmatched Quality at Scale"</p>
                </div>
                <Zap size={40} className="text-orange animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
