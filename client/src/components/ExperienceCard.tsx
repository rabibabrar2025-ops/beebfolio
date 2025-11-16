import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExperienceCardProps {
  company: string;
  dateRange: string;
  achievements: string[];
  index: number;
}

export default function ExperienceCard({ company, dateRange, achievements, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

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
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            data-testid="button-toggle-expand"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </Button>
        </div>

        {isExpanded && (
          <ul className="space-y-3 mt-6">
            {achievements.map((achievement, idx) => (
              <li key={idx} className="flex gap-3 text-foreground/90 leading-relaxed" data-testid={`text-achievement-${idx}`}>
                <span className="text-primary mt-1.5">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {index > 0 && (
        <div className="absolute -top-8 left-8 w-0.5 h-8 bg-border" />
      )}
    </Card>
  );
}
