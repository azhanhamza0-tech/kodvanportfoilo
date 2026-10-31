"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Architecture } from "@/components/sections/Architecture";
import { CodeLab } from "@/components/sections/CodeLab";
import { Principles } from "@/components/sections/Principles";
import { Journal } from "@/components/sections/Journal";
import { Evidence } from "@/components/sections/Evidence";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Desktop Ambient Light Follower */}
      <CursorGlow />

      {/* Main Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Architecture />
        <CodeLab />
        <Principles />
        <Journal />
        <Evidence />
        <Experience />
        <Contact />
      </main>

      {/* Floating Return to Top */}
      <ScrollToTop />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
