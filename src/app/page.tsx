import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Features } from "@/components/sections/Features";
import { Manufacturing } from "@/components/sections/Manufacturing";
import { Certifications } from "@/components/sections/Certifications";
import { Testimonials } from "@/components/sections/Testimonials";
import { Careers } from "@/components/sections/Careers";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Metrics />
      <About />
      <Products />
      <Features />
      <Manufacturing />
      <Certifications />
      <Testimonials />
      <Careers />
      <Contact />
    </main>
  );
}
