"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Landmark, Package, Globe2, TrendingUp, History } from "lucide-react";

const metrics = [
  {
    label: "Annual Production Capacity",
    value: "10,000+",
    suffix: "MT",
    icon: Package,
    description: "High-volume output ensuring nationwide availability.",
  },
  {
    label: "Distribution Network",
    value: "25+",
    suffix: "States",
    icon: Globe2,
    description: "Pan-India presence across all major retail hubs.",
  },
  {
    label: "Corporate Partners",
    value: "500+",
    suffix: "B2B",
    icon: Users,
    description: "Trusted by major retail chains and wholesalers.",
  },
  {
    label: "Years of Excellence",
    value: "15+",
    suffix: "Years",
    icon: History,
    description: "A legacy of quality food manufacturing.",
  },
];

export const Metrics = () => {
  return (
    <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      
      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-900 border border-white/10 flex items-center justify-center text-orange mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                <metric.icon size={32} />
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-2 font-heading">
                {metric.value}
                <span className="text-orange text-2xl ml-1">{metric.suffix}</span>
              </h3>
              <p className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-4">
                {metric.label}
              </p>
              <div className="h-px w-12 bg-orange/30 mb-4 group-hover:w-20 transition-all" />
              <p className="text-white/50 text-sm leading-relaxed max-w-[200px]">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scalable Trust Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <Landmark className="text-orange" size={40} />
            <div>
              <p className="text-white font-bold text-lg">ISO 9001:2015 & FSSAI Certified</p>
              <p className="text-white/40 text-sm">Meeting global standards for food safety and hygiene.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <TrendingUp className="text-orange" size={40} />
            <div>
              <p className="text-white font-bold text-lg">Export Quality Standards</p>
              <p className="text-white/40 text-sm">Expanding footprints across Middle East, Europe & USA.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
