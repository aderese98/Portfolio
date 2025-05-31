"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with theme toggle */}
      <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-end">
          <ModeToggle />
        </div>
      </header>

      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
