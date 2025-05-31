import { ProjectCard } from "@/components/ui/project-card";

const projects = [
  {
    title: "Loyalty Platform",
    description: "A cloud-native, distributed microservices application for real-time rewards, built with Go, Java, Python, AWS, and event-driven architecture.",
    technologies: ["Go", "Java", "Python", "AWS", "Microservices", "Event-Driven"],
    githubUrl: "https://github.com/aderese98/Loyalty-Platform-"
  },
  {
    title: "ReactionHub",
    description: "A personalized web app for tracking video passions, using Next.js, React, TypeScript, PostgreSQL, and AuthJS for authentication.",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "AuthJS"],
    githubUrl: "https://github.com/devabe-code/reactionhub"
  },
  {
    title: "Directed-and-Weighted-Graph",
    description: "An implementation of a Directed and Weighted Graph Data Structure using Java",
    technologies: ["Java", "Graphs", "Data Structures", "Algorithms", "Graph Algorithms"],
    githubUrl: "https://github.com/aderese98/Directed-and-Weighted-Graph"
  },
  {
    title: "Java-Multi-threaded-Program",
    description: "This program uses Java to concurrently read text files of student registration data through multithreading.",
    technologies: ["Java", "Algorithms", "Data Structures", "Multithreading", "Concurrency", "File Handling"],
    githubUrl: "https://github.com/aderese98/Directed-and-Weighted-Graph"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode, smooth animations, and a clean design.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "ShadCN"],
    githubUrl: "https://github.com/aderese98/portfolio"
  },
  {
    title: "NBA Player Analysis",
    description: "Analysis of NBA player data from 1996 through 2019 using Python, featuring data visualization with WordCloud, Matplotlib, and Pandas.",
    technologies: ["Python", "Pandas", "Matplotlib", "WordCloud", "Data Analysis"],
    githubUrl: "https://github.com/aderese98/NBA-Player-Analysis-1996-2019"
  },
  {
    title: "Evolution of Phones Database",
    description: "A comprehensive database analysis of smartphone evolution between 2000-2010 using MySQL, showcasing database design and query optimization.",
    technologies: ["MySQL", "Database Design", "Data Analysis"],
    githubUrl: "https://github.com/aderese98/Evolution-of-Phones-Database"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-[980px] space-y-8 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-sm sm:text-base md:text-lg text-muted-foreground">
              A collection of my work showcasing my expertise in software development, data analysis, and system architecture.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 