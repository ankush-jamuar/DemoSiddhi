"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";

const testimonials = [
  {
    text: "Partnering with Siddhidatri Aahar has been a game-changer for our retail chain. Their consistent quality and timely deliveries are unmatched in the industry.",
    author: "Rajesh Sharma",
    role: "MD, Regional Retail Group",
  },
  {
    text: "The hygiene standards and automated manufacturing process at their facility gave us the confidence to launch our private label snacks through them.",
    author: "Anita Desai",
    role: "Procurement Head, Global Foods",
  },
  {
    text: "Their traditional flavors are exactly what our customers were looking for. The packaging is premium and shelf-ready, making our job much easier.",
    author: "Vikram Mehta",
    role: "Wholesale Distributor",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-emerald/[0.02]">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <Quote className="mx-auto text-orange mb-6" size={48} fill="currentColor" opacity={0.2} />
          <h2 className="text-4xl md:text-6xl font-heading font-black text-primary">
            Trusted by the <span className="text-orange">Industry Leaders.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-white border border-emerald/5 shadow-xl relative group hover:shadow-2xl transition-all"
            >
              <div className="flex gap-1 mb-6 text-orange">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-primary/70 italic text-lg leading-relaxed mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-emerald/5">
                <div className="w-12 h-12 rounded-full bg-emerald/5 flex items-center justify-center text-emerald">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="text-primary font-black">{t.author}</h4>
                  <p className="text-primary/40 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
