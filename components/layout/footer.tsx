"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/devabe-code",
    label: "GitHub Profile",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abraham-derese-a8577717a/",
    label: "LinkedIn Profile",
  },
  {
    icon: Mail,
    href: "mailto:abrahamderese98@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abraham Derese. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 