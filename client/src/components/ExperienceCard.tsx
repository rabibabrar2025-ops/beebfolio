import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  company: string;
  dateRange: string;
  summary: string;
  index: number;
}

export default function ExperienceCard({ company, dateRange, summary, index }: ExperienceCardProps) {
  return (
    <Card className="relative" data-testid={`card-experience-${company.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="p-8 space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-semibold" data-testid="text-company">
              {company}
            </h3>
            <Badge variant="secondary" className="text-xs" data-testid="text-daterange">
              {dateRange}
            </Badge>
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
