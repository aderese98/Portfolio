import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export function ProjectCard({ title, description, technologies, githubUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="group relative rounded-lg border bg-card p-4 sm:p-6 shadow-sm transition-all hover:shadow-md"
      role="article"
      aria-labelledby={`project-title-${title}`}
    >
      <div className="space-y-3 sm:space-y-4">
        <div className="space-y-2">
          <h3 
            id={`project-title-${title}`}
            className="text-xl sm:text-2xl font-semibold tracking-tight"
          >
            {title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
        </div>
        
        <div 
          className="flex flex-wrap gap-1.5 sm:gap-2"
          role="list"
          aria-label="Technologies used"
        >
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
              role="listitem"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 sm:gap-2 text-xs sm:text-sm"
            onClick={() => window.open(githubUrl, "_blank")}
            aria-label={`View ${title} on GitHub`}
          >
            <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
            View on GitHub
          </Button>
        </div>
      </div>
    </motion.div>
  );
} 