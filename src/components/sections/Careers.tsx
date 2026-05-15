"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Star, ArrowRight, Zap, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  { title: "Growth Driven", icon: Zap },
  { title: "Inclusive Culture", icon: Users },
  { title: "Innovation Led", icon: Star },
  { title: "Great Workspace", icon: Coffee },
];

const jobs = [
  { title: "Production Manager", type: "Full-Time", location: "Malanpur Facility" },
  { title: "Quality Assurance Specialist", type: "Full-Time", location: "Malanpur Facility" },
  { title: "Regional Sales Head", type: "Full-Time", location: "Pan-India" },
  { title: "Supply Chain Coordinator", type: "Full-Time", location: "Madhya Pradesh" },
];

export const Careers = () => {
  return (
    <section id="careers" className="py-24 md:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Side */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-orange" />
              <span className="text-orange font-bold tracking-[0.2em] text-xs uppercase">Join Our Team</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-primary leading-tight mb-8">
              Grow With the <br /><span className="text-orange">FMCG Visionaries.</span>
            </h2>
            <p className="text-primary/60 text-lg leading-relaxed mb-10">
              At Siddhidatri Aahar, we don't just manufacture snacks; we build careers. Join a team that values innovation, hygiene, and the art of delivering happiness at scale.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-emerald/[0.03] border border-emerald/5">
                  <perk.icon size={20} className="text-orange" />
                  <span className="text-sm font-bold text-primary">{perk.title}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-emerald text-white font-bold px-10 h-14 rounded-full shadow-xl group">
              View All Openings
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          {/* Job List Side */}
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-cream border border-emerald/5 hover:border-emerald/20 hover:bg-white hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-emerald shadow-sm group-hover:bg-emerald group-hover:text-white transition-all">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-primary mb-1">{job.title}</h4>
                      <div className="flex items-center gap-4 text-xs font-bold text-primary/40 uppercase tracking-widest">
                        <span>{job.type}</span>
                        <span className="w-1 h-1 rounded-full bg-orange" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-emerald/10 flex items-center justify-center text-primary group-hover:bg-orange group-hover:text-white group-hover:border-orange transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
