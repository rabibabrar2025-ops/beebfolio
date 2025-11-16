import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  company: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  image: string;
  imagePosition: "left" | "right";
}

export default function ProjectCard({
  title,
  company,
  problem,
  solution,
  impact,
  technologies,
  image,
  imagePosition
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className={`grid md:grid-cols-2 gap-0 ${imagePosition === "right" ? "md:flex-row-reverse" : ""}`}>
        <div className={`${imagePosition === "right" ? "md:order-2" : ""}`}>
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover min-h-[300px]"
            data-testid="img-project"
          />
        </div>

        <div className={`p-8 flex flex-col justify-center ${imagePosition === "right" ? "md:order-1" : ""}`}>
          <div className="space-y-6">
            <div>
              <div className="text-sm text-muted-foreground mb-2" data-testid="text-company">
                {company}
              </div>
              <h3 className="text-2xl font-semibold mb-4" data-testid="text-title">
                {title}
              </h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-primary mb-1">Problem</div>
                <p className="text-foreground/90" data-testid="text-problem">{problem}</p>
              </div>

              <div>
                <div className="text-sm font-medium text-primary mb-1">Solution</div>
                <p className="text-foreground/90" data-testid="text-solution">{solution}</p>
              </div>

              <div>
                <div className="text-sm font-medium text-primary mb-1">Impact</div>
                <p className="font-semibold text-lg" data-testid="text-impact">{impact}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs" data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}>
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
