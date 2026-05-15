"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock, MessageSquare, Briefcase, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Contact = () => {
  return (
    <section id="inquiry" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-orange" />
              <span className="text-orange font-bold tracking-[0.2em] text-xs uppercase">Connect With Us</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8">
              Let's Build <span className="text-orange">Together.</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-lg">
              Whether you're interested in distribution, bulk procurement, or joining our enterprise, our team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-900 flex items-center justify-center text-orange shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Our Headquarters</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Plot No. 45, Industrial Growth Centre,<br />
                    Malanpur, Dist. Bhind, Madhya Pradesh - 477117
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-900 flex items-center justify-center text-orange shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Business Inquiries</h4>
                  <p className="text-white/50 text-sm">Main: +91 751-2345678</p>
                  <p className="text-white/50 text-sm">Support: +91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-900 flex items-center justify-center text-orange shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email Support</h4>
                  <p className="text-white/50 text-sm">sales@siddhidatri.com</p>
                  <p className="text-white/50 text-sm">careers@siddhidatri.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-emerald-900/50 border border-white/5 flex items-center gap-6">
              <Clock className="text-orange" size={32} />
              <div>
                <p className="text-white font-bold">Office Hours</p>
                <p className="text-white/40 text-sm">Mon - Sat: 9:00 AM - 6:00 PM (IST)</p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-orange" />
              <h3 className="text-2xl font-black text-primary">Inquiry Form</h3>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-primary/40">Full Name</Label>
                  <Input id="name" placeholder="John Doe" className="bg-emerald/5 border-none h-12 px-6 rounded-xl focus:ring-2 focus:ring-emerald transition-all" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-primary/40">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="bg-emerald/5 border-none h-12 px-6 rounded-xl focus:ring-2 focus:ring-emerald transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-primary/40">Phone Number</Label>
                  <Input id="phone" placeholder="+91 00000 00000" className="bg-emerald/5 border-none h-12 px-6 rounded-xl focus:ring-2 focus:ring-emerald transition-all" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-xs font-bold uppercase tracking-widest text-primary/40">Inquiry Type</Label>
                  <select id="type" className="w-full bg-emerald/5 border-none h-12 px-6 rounded-xl focus:ring-2 focus:ring-emerald outline-none text-sm font-medium">
                    <option>Distribution Partner</option>
                    <option>Bulk Procurement</option>
                    <option>Export Inquiry</option>
                    <option>Career Opportunity</option>
                    <option>General Support</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-primary/40">Message</Label>
                <Textarea id="message" placeholder="Tell us about your requirement..." className="bg-emerald/5 border-none min-h-[120px] p-6 rounded-xl focus:ring-2 focus:ring-emerald transition-all" />
              </div>

              <Button className="w-full bg-orange hover:bg-orange/90 text-white font-black h-14 rounded-xl shadow-xl hover:shadow-2xl transition-all gap-3 text-lg">
                Send Inquiry
                <Send size={20} />
              </Button>

              <p className="text-center text-[10px] text-primary/30 uppercase tracking-[0.2em] font-bold mt-6">
                Our team typically responds within 24 business hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
