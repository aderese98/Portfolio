"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center px-4 py-16 md:py-24">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center">
        {/* Profile Image */}
        <div className="relative size-32 md:size-40 rounded-full overflow-hidden ring-4 ring-primary/20 dark:ring-primary/30 transition-all duration-300 hover:ring-primary/40 dark:hover:ring-primary/50">
          <Image
            src="/profile-image.jpeg"
            alt="Abraham Derese"
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
            priority
          />
        </div>

        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Abraham Derese
        </h1>
        <h2 className="text-xl text-muted-foreground sm:text-2xl">
          Computer Engineer, Software Developer
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Building innovative solutions in Software Development, Machine Learning and Cloud Computing.
        </p>
        <div className="flex gap-4">
          <Button
            size="lg"
            className="mt-4"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            View My Work
          </Button>
        </div>
      </div>
    </main>
  );
} 