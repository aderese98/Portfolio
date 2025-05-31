export function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[980px] space-y-8 sm:space-y-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center">
            Experience
          </h2>
          
          <div className="space-y-8 sm:space-y-12">
            {/* Computer Engineer Role */}
            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-semibold">Computer Engineer</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  Bowler Pons Solutions Consultants, LLC | Jun 2023 – May 2025
                </p>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Developed full-lifecycle software in Python and C++ for national security, cybersecurity, and threat detection.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Engineered hardware-software integrations for mission-critical operations.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Collaborated with agile teams to prototype robotics and electronics-based innovations.</span>
                </li>
              </ul>
            </div>

            {/* Java Tutor Role */}
            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-semibold">Java Summer Programming Tutor</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  University of Maryland Global Campus | Jul 2022 – Sep 2022
                </p>
              </div>
              <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tutored students in Java fundamentals, data structures, and algorithm design.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Supported students in machine learning concepts, recursion, and OOP design.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 