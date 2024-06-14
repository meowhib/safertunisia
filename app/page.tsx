import Hero from "@/components/landing/Hero";
import CTA from "@/components/landing/CTA";
import WhatDoTo from "@/components/landing/WhatToDo";
import Adventures from "@/components/landing/Adventures";
import CTA2 from "@/components/landing/CTA2";
import BlogSection from "@/components/landing/BlogSection";
import Sponsors from "@/components/landing/Sponsors";
import { type Metadata } from "next";
import ChatBanner from "@/components/ChatBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Safer Tunisia",
  description: "Live your nomad life in Tunisia",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CTA />
      <WhatDoTo />
      <ChatBanner />
      <Adventures />
      <CTA2 />
      <BlogSection />
      <Sponsors />
      <Footer />
    </>
  );
}
