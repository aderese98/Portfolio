"use client";

import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { PageTransition } from "./page-transition";
import { Header } from "./header";
import { Footer } from "./footer";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <AnimatePresence mode="wait">
      <div className="flex min-h-screen flex-col">
        <Header />
        <PageTransition>
          <main className="flex-1 pt-16">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </div>
    </AnimatePresence>
  );
} 