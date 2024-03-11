import Hero from "@/components/landing/Hero";
import CTA from "@/components/landing/CTA";
import WhatDoTo from "@/components/landing/WhatToDo";
import Adventures from "@/components/landing/Adventures";
import CTA2 from "@/components/landing/CTA2";
import BlogSection from "@/components/landing/BlogSection";
import Sponsors from "@/components/landing/Sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <CTA />
      <WhatDoTo />
      <Adventures />
      <CTA2 />
      <BlogSection />
      <Sponsors />
    </>
  );
}
