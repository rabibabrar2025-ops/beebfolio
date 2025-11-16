import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  company: string;
  dateRange: string;
  summary: string;
  index: number;
  logo?: string;
  url?: string;
}

export default function ExperienceCard({ company, dateRange, summary, index, logo, url }: ExperienceCardProps) {
  return (
    <Card className="relative hover-elevate transition-all duration-300 cursor-default" data-testid={`card-experience-${company.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="p-8 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            {logo && url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 hover:opacity-80 transition-opacity"
                aria-label={`Visit ${company} website`}
              >
                <img
                  src={logo}
                  alt={`${company} logo`}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg"
                />
              </a>
            )}
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-semibold" data-testid="text-company">
                {company}
              </h3>
              <Badge variant="secondary" className="text-xs" data-testid="text-daterange">
                {dateRange}
              </Badge>
            </div>
          </div>
        </div>

        <p className="text-foreground/90 leading-relaxed text-lg mt-6" data-testid="text-summary">
          {summary}
        </p>
      </div>

      {index > 0 && (
        <div className="absolute -top-8 left-8 w-0.5 h-8 bg-border" />
      )}
    </Card>
  );
}
