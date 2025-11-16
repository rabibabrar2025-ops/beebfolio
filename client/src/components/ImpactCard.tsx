import { Card } from "@/components/ui/card";

interface ImpactCardProps {
  metric: string;
  label: string;
  description: string;
  company: string;
  logo?: string;
  url?: string;
}

export default function ImpactCard({ metric, label, description, company, logo, url }: ImpactCardProps) {
  return (
    <Card className="p-8 space-y-4 hover-elevate transition-all duration-300 cursor-default" data-testid={`card-impact-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="space-y-2">
        <div className="text-4xl md:text-5xl font-bold text-primary" data-testid="text-metric">
          {metric}
        </div>
        <div className="text-lg font-semibold" data-testid="text-label">
          {label}
        </div>
      </div>
      <p className="text-muted-foreground leading-relaxed" data-testid="text-description">
        {description}
      </p>
      <div className="flex items-center gap-2">
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
              className="w-5 h-5 object-contain"
            />
          </a>
        )}
        <div className="text-sm text-muted-foreground" data-testid="text-company">
          {company}
        </div>
      </div>
    </Card>
  );
}
