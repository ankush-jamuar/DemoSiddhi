"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingCart, Info, Star } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["Namkeen", "Potato Chips", "Healthy Snacks", "Festive Packs"];

const products = [
  {
    name: "Classic Aloo Bhujia",
    category: "Namkeen",
    price: "₹45",
    weight: "200g",
    rating: 4.9,
    image: "/products_visual.png",
    tags: ["Best Seller", "Traditional"],
  },
  {
    name: "Spicy Masala Chips",
    category: "Potato Chips",
    price: "₹35",
    weight: "150g",
    rating: 4.8,
    image: "/products_visual.png",
    tags: ["New Launch", "Hot"],
  },
  {
    name: "Roasted Multigrain Mix",
    category: "Healthy Snacks",
    price: "₹65",
    weight: "180g",
    rating: 4.7,
    image: "/products_visual.png",
    tags: ["Premium", "Zero Oil"],
  },
  {
    name: "Royal Celebration Box",
    category: "Festive Packs",
    price: "₹499",
    weight: "1.2kg",
    rating: 5.0,
    image: "/products_visual.png",
    tags: ["Gift Pack", "Limited"],
  },
  // Adding duplicates for grid richness
  {
    name: "Moong Dal Magic",
    category: "Namkeen",
    price: "₹40",
    weight: "150g",
    rating: 4.8,
    image: "/products_visual.png",
    tags: ["Crunchy"],
  },
  {
    name: "Tangy Tomato Slices",
    category: "Potato Chips",
    price: "₹35",
    weight: "150g",
    rating: 4.6,
    image: "/products_visual.png",
    tags: ["Classic"],
  },
];

export const Products = () => {
  const [activeTab, setActiveTab] = useState("Namkeen");

  return (
    <section id="products" className="py-24 md:py-32 bg-cream">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-orange" />
            <span className="text-orange font-bold tracking-[0.2em] text-xs uppercase">Our Product Portfolio</span>
            <span className="h-px w-8 bg-orange" />
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-primary mb-6">
            Purity in Every <span className="text-orange">Crunch.</span>
          </h2>
          <p className="text-primary/60 text-lg max-w-2xl mx-auto">
            From traditional Indian namkeens to modern health-conscious snacks, 
            our diverse portfolio is crafted for global taste standards.
          </p>
        </div>

        <Tabs defaultValue="Namkeen" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-emerald/5 p-1 rounded-full border border-emerald/10 h-14">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-full px-8 data-[state=active]:bg-emerald data-[state=active]:text-white font-bold transition-all h-full"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <AnimatePresence mode="wait">
            <TabsContent value={activeTab} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {products
                  .filter((p) => p.category === activeTab)
                  .map((product, i) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white rounded-[2rem] overflow-hidden border border-emerald/5 shadow-xl hover:shadow-2xl transition-all group flex flex-col h-full"
                    >
                      {/* Product Image Frame */}
                      <div className="relative h-72 w-full bg-emerald/[0.02] p-8 overflow-hidden">
                        <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="absolute top-6 left-6 flex flex-col gap-2">
                          {product.tags.map((tag) => (
                            <Badge key={tag} className="bg-orange/10 text-orange border-none font-bold text-[10px] uppercase tracking-wider">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <button className="absolute top-6 right-6 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary hover:bg-emerald hover:text-white transition-all shadow-md">
                          <Star size={18} fill="currentColor" className={product.rating > 4 ? "text-yellow-400" : ""} />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="text-[10px] font-bold text-orange uppercase tracking-widest mb-1">{product.category}</p>
                            <h3 className="text-2xl font-black text-primary leading-tight group-hover:text-emerald transition-colors">
                              {product.name}
                            </h3>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-black text-emerald">{product.price}</p>
                            <p className="text-[10px] font-bold text-primary/40">{product.weight}</p>
                          </div>
                        </div>

                        <p className="text-primary/60 text-sm mb-8 line-clamp-2">
                          Premium ingredients blended with authentic spices for an unforgettable traditional experience.
                        </p>

                        <div className="mt-auto flex gap-3">
                          <Button className="flex-grow bg-emerald hover:bg-emerald/90 text-white font-bold h-12 rounded-xl shadow-lg group/btn">
                            Product Details
                            <Info className="ml-2 w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                          </Button>
                          <Button variant="outline" className="w-12 h-12 p-0 border-emerald/10 text-emerald hover:bg-emerald hover:text-white rounded-xl transition-all">
                            <ShoppingCart size={20} />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>

        {/* Catalog CTA */}
        <div className="mt-20 text-center">
          <Button variant="ghost" className="text-primary font-black group">
            View Complete Product Catalog
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
