import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
          {/* Image Column */}
          <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src="/header-image.jpg"
              alt="Abraham Derese"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>

          {/* Content Column */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                About Me
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                I'm Abraham Derese, a computer engineer with expertise in software development, cybersecurity, and AI. I specialize in building robust systems that power mission-critical operations.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Java", "Python", "C++", "JavaScript", "SQL", "React",
                  "Next.js", "Docker", "PostgreSQL", "Azure", "AWS"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 sm:px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold">Education</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-medium">University of Maryland College Park</h4>
                  <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
                    <li>M.S. Computer Science '24</li>
                    <li>B.S. Computer Science '23 (GPA 3.89)</li>
                    <li>B.S. Applied Mathematics '25</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 