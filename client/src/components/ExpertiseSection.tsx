import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const tools = [
  { category: "Development", items: ["Python", "SQL", "GitHub", "VSCode"] },
  { category: "Data & Analytics", items: ["DBeaver", "Periscope", "Splunk", "DBT"] },
  { category: "Infrastructure", items: ["AWS", "Kubernetes", "Docker"] },
  { category: "Collaboration", items: ["JIRA", "Confluence", "Postman"] }
];

const interests = [
  "Building products from 0 to 1",
  "Scaling startups with small, agile teams",
  "Bridging product and engineering",
  "Data-driven decision making",
  "Working across the full stack"
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" data-testid="text-section-title">
            What I Bring
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-section-description">
            Full-stack technical expertise across industries and the entire software stack
          </p>
        </div>

        <Card className="mb-8 p-8 bg-primary/5 border-primary/20">
          <h3 className="text-xl font-semibold mb-4" data-testid="text-domains-title">
            Domain Experience
          </h3>
          <p className="text-foreground/90 leading-relaxed mb-6">
            I've worked across diverse industries—from automotive at GM to energy systems at Tesla, e-commerce and ad-tech at Loblaw, and now AI infrastructure at Meta. This gives me a unique perspective on how different domains solve problems and what patterns work across the board.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="text-base px-4 py-2" data-testid="badge-domain-automotive">
              Automotive
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2" data-testid="badge-domain-energy">
              Energy & Utilities
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2" data-testid="badge-domain-ecommerce">
              E-Commerce & Ad-Tech
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2" data-testid="badge-domain-ai">
              AI Infrastructure
            </Badge>
          </div>
        </Card>

        <Card className="mb-8 p-8">
          <h3 className="text-xl font-semibold mb-4" data-testid="text-stack-title">
            Full-Stack Experience
          </h3>
          <p className="text-foreground/90 leading-relaxed mb-6">
            I've built products across the entire software stack—from frontend interfaces and ML models to backend systems, data pipelines, and now network infrastructure for custom silicon. This breadth lets me understand how all the pieces fit together and make better architectural decisions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((toolGroup, index) => (
              <div key={index} data-testid={`group-tools-${index}`}>
                <div className="text-sm font-medium text-muted-foreground mb-3">
                  {toolGroup.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {toolGroup.items.map((item, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs" data-testid={`badge-tool-${item.toLowerCase()}`}>
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-xl font-semibold mb-4" data-testid="text-interests-title">
            What Drives Me
          </h3>
          <ul className="space-y-3">
            {interests.map((interest, index) => (
              <li key={index} className="flex items-start gap-3" data-testid={`text-interest-${index}`}>
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground/90 text-lg">{interest}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
