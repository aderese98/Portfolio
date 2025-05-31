"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[980px] space-y-8 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>

          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold">Contact Information</h3>
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="mailto:abrahamderese98@gmail.com"
                    className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>abrahamderese98@gmail.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abraham-derese-a8577717a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href="https://github.com/aderese98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Your Message"
                    required
                    className="min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full text-sm sm:text-base">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 