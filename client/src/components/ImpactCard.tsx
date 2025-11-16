import { Card } from "@/components/ui/card";

interface ImpactCardProps {
  metric: string;
  label: string;
  description: string;
  company: string;
}

export default function ImpactCard({ metric, label, description, company }: ImpactCardProps) {
  return (
    <Card className="p-8 space-y-4" data-testid={`card-impact-${label.toLowerCase().replace(/\s+/g, '-')}`}>
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
      <div className="text-sm text-muted-foreground" data-testid="text-company">
        {company}
      </div>
    </Card>
  );
}
