"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Zap, Heart, Globe, Award } from "lucide-react";

const features = [
  {
    title: "Uncompromising Quality",
    desc: "Rigorous 24/7 quality monitoring across all production stages to ensure export-grade consistency.",
    icon: ShieldCheck,
  },
  {
    title: "100% Automated Facility",
    desc: "Leveraging state-of-the-art European machinery for human-touch-free, hygienic manufacturing.",
    icon: Zap,
  },
  {
    title: "Pan-India Logistics",
    desc: "A robust distribution network ensuring our products reach every corner of the nation fresh.",
    icon: Truck,
  },
  {
    title: "Export Readiness",
    desc: "Fully compliant with international food safety standards for global market penetration.",
    icon: Globe,
  },
  {
    title: "Consumer Trust",
    desc: "Millions of satisfied customers who trust Siddhidatri for authentic traditional flavors.",
    icon: Heart,
  },
  {
    title: "Global Certifications",
    desc: "Proudly holding FSSAI, ISO, and other key certifications for total operational transparency.",
    icon: Award,
  },
];

export const Features = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-orange" />
            <span className="text-orange font-bold tracking-[0.2em] text-xs uppercase">Why Siddhidatri Aahar?</span>
            <span className="h-px w-8 bg-orange" />
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-primary max-w-4xl">
            Setting the Benchmark in <span className="text-orange">FMCG Excellence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-cream border border-emerald/5 hover:border-orange/20 transition-all group hover:shadow-2xl hover:shadow-orange/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-emerald mb-8 group-hover:bg-emerald group-hover:text-white transition-all shadow-sm">
                <feature.icon size={32} />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4 group-hover:text-emerald transition-colors">
                {feature.title}
              </h3>
              <p className="text-primary/60 text-sm leading-relaxed mb-6">
                {feature.desc}
              </p>
              <div className="flex items-center gap-2 text-orange font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <span className="w-8 h-px bg-orange" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
