"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Factory, History, Target, Eye } from "lucide-react";
import Image from "next/image";

const values = [
  {
    title: "Our Mission",
    desc: "To deliver the most authentic, hygienic, and high-quality traditional snacks to every Indian household and global palate.",
    icon: Target,
  },
  {
    title: "Our Vision",
    desc: "To become a globally recognized FMCG leader, setting new benchmarks in automated food manufacturing and quality standards.",
    icon: Eye,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[650px] rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
              <Image 
                src="/about_visual.png" 
                alt="Siddhidatri Aahar Corporate HQ"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald/40 to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-orange p-8 rounded-[2rem] shadow-2xl z-20 text-white max-w-[200px]">
              <History size={40} className="mb-4 text-white/50" />
              <p className="text-4xl font-black mb-1">15+</p>
              <p className="text-xs font-bold uppercase tracking-widest leading-tight">Years of Manufacturing Excellence</p>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald/5 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-emerald/5 rounded-full -z-10" />
          </motion.div>

          {/* Text Side */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-orange" />
              <span className="text-orange font-bold tracking-[0.2em] text-xs uppercase">Corporate Profile</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-primary leading-tight mb-8">
              A Legacy of <span className="text-orange">Trust & Quality.</span>
            </h2>
            <p className="text-primary/60 text-lg leading-relaxed mb-10">
              Siddhidatri Aahar Private Limited was founded with a singular focus: to blend the rich culinary heritage of India with modern, automated manufacturing technology. Today, we stand as a cornerstone of the FMCG industry, producing millions of packs of snacks every month with uncompromising hygiene standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {values.map((value, i) => (
                <div key={i} className="p-8 rounded-3xl bg-emerald/[0.03] border border-emerald/5 hover:border-emerald/10 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-emerald shadow-sm mb-6">
                    <value.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">{value.title}</h4>
                  <p className="text-primary/60 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 p-8 rounded-3xl border border-dashed border-emerald/20 bg-emerald/5">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-emerald/10 flex items-center justify-center text-emerald font-bold text-xs">
                    {i === 4 ? "50+" : ""}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-primary font-bold text-lg">Awarded for Innovation</p>
                <p className="text-primary/60 text-sm">Recognized as a leading export-ready manufacturer in central India.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
