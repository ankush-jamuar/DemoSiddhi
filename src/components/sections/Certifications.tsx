"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck, CheckCircle, Verified } from "lucide-react";

const certs = [
  {
    name: "FSSAI Licensed",
    id: "Lic No. 12345678901234",
    desc: "Meeting strict Indian food safety and standard authority regulations.",
    icon: FileCheck,
  },
  {
    name: "ISO 9001:2015",
    id: "Quality Management",
    desc: "Certified for maintaining consistent quality and customer satisfaction standards.",
    icon: Verified,
  },
  {
    name: "ISO 22000:2018",
    id: "Food Safety",
    desc: "International standard for food safety management across the supply chain.",
    icon: ShieldCheck,
  },
  {
    name: "HACCP Certified",
    id: "Hazard Analysis",
    desc: "Systematic preventive approach to food safety from biological, chemical, and physical hazards.",
    icon: CheckCircle,
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative background logo or text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-primary/[0.02] select-none pointer-events-none uppercase">
        Certified
      </div>

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-orange" />
            <span className="text-orange font-bold tracking-[0.2em] text-xs uppercase">Compliance & Trust</span>
            <span className="h-px w-8 bg-orange" />
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-primary max-w-3xl">
            Global Standards. <br /><span className="text-orange">Local Authenticity.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/50 backdrop-blur-sm p-10 rounded-[2rem] border border-emerald/10 hover:bg-white hover:shadow-2xl transition-all group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-emerald/5 flex items-center justify-center text-emerald mb-8 group-hover:scale-110 transition-transform">
                <cert.icon size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-2 uppercase tracking-wide">{cert.name}</h4>
              <p className="text-orange font-bold text-[10px] uppercase tracking-widest mb-4">{cert.id}</p>
              <p className="text-primary/60 text-sm leading-relaxed">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Export Compliance Message */}
        <div className="mt-20 p-10 rounded-3xl bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-emerald-900 rounded-2xl flex items-center justify-center text-orange shrink-0">
              <Award size={32} />
            </div>
            <div>
              <p className="text-xl font-bold">Export Ready Manufacturing</p>
              <p className="text-white/50 text-sm">Our processes are fully compliant with EU, GCC, and North American food safety standards.</p>
            </div>
          </div>
          <button className="bg-orange hover:bg-orange/90 text-white font-bold px-10 py-4 rounded-xl transition-all whitespace-nowrap shadow-lg">
            Download Certifications
          </button>
        </div>
      </div>
    </section>
  );
};
