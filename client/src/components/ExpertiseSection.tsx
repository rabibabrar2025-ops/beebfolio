import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const capabilities = [
  "Cross-functional team leadership",
  "Data-driven decision making",
  "Product lifecycle management (0 to 1)",
  "ML/AI program management",
  "OTA deployment at scale",
  "Fleet health & monitoring systems",
  "Revenue optimization & growth",
  "Technical requirement gathering",
  "Stakeholder management",
  "Agile & SDLC best practices"
];

const tools = [
  { category: "Project Management", items: ["JIRA", "Confluence"] },
  { category: "Development", items: ["GitHub", "VSCode", "Postman"] },
  { category: "Data & Analytics", items: ["Python", "SQL", "DBeaver", "Periscope", "Splunk"] },
  { category: "Platforms", items: ["AWS", "Kubernetes", "Docker"] }
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" data-testid="text-section-title">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-section-description">
            Product leadership capabilities and technical proficiency
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6" data-testid="text-capabilities-title">
              Product Leadership Capabilities
            </h3>
            <ul className="space-y-3">
              {capabilities.map((capability, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`text-capability-${index}`}>
                  <span className="text-primary mt-1">•</span>
                  <span className="text-foreground/90">{capability}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-semibold mb-6" data-testid="text-stack-title">
              Technical Stack
            </h3>
            <div className="space-y-6">
              {tools.map((toolGroup, index) => (
                <div key={index} data-testid={`group-tools-${index}`}>
                  <div className="text-sm font-medium text-muted-foreground mb-3">
                    {toolGroup.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {toolGroup.items.map((item, idx) => (
                      <Badge key={idx} variant="secondary" data-testid={`badge-tool-${item.toLowerCase()}`}>
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-8 bg-primary/5 border-primary/20">
          <h3 className="text-xl font-semibold mb-4" data-testid="text-domains-title">
            Domain Experience
          </h3>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="text-base px-4 py-2" data-testid="badge-domain-automotive">
              Automotive (GM)
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2" data-testid="badge-domain-energy">
              Energy & Utilities (Tesla)
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2" data-testid="badge-domain-ecommerce">
              E-Commerce & Ad-Tech (Loblaw)
            </Badge>
            <Badge variant="outline" className="text-base px-4 py-2" data-testid="badge-domain-ai">
              AI Infrastructure (Meta)
            </Badge>
          </div>
        </Card>
      </div>
    </section>
  );
}
