import ImpactCard from "./ImpactCard";

const impacts = [
  {
    metric: "$10M+",
    label: "Revenue Impact",
    description: "Led the delivery of Loblaw Digital's ML-powered personalized ads platform, achieving a 40% lift in CTR and unlocking $10M+ in new revenue.",
    company: "Loblaw Digital",
    logo: "/logos/loblaw.png",
    url: "https://www.loblawdigital.co"
  },
  {
    metric: "1M+",
    label: "Devices Migrated",
    description: "Led the execution of Tesla Energy's migration to the internal OTA platform—streamlining update flows and saving engineers 300+ hours annually.",
    company: "Tesla Energy",
    logo: "/logos/tesla.png",
    url: "https://www.tesla.com/energy"
  },
  {
    metric: "$XB",
    label: "Capital Saved",
    description: "Driving technical delivery across Meta's AI network infrastructure program, projected to avoid billions in capital spend by 2030.",
    company: "Meta",
    logo: "/logos/meta.png",
    url: "https://www.meta.com"
  },
  {
    metric: "600+",
    label: "Automated Workflows",
    description: "Led implementation of scalable fleet health monitoring capabilities ensuring 99% availability across Superchargers, Megapacks, and Powerwalls.",
    company: "Tesla Energy",
    logo: "/logos/tesla.png",
    url: "https://www.tesla.com/energy"
  },
  {
    metric: "$5M+",
    label: "Additional Revenue",
    description: "Executed delivery of GenAI keyword suggestions, offline sales attribution, and predictive analytics, enabling $5M+ incremental revenue for Loblaw Digital.",
    company: "Loblaw Digital",
    logo: "/logos/loblaw.png",
    url: "https://www.loblawdigital.co"
  }
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" data-testid="text-section-title">
            Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-section-description">
            Here's what I've built and the impact it's had
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact) => (
            <ImpactCard key={`${impact.metric}-${impact.label}`} {...impact} />
          ))}
        </div>
      </div>
    </section>
  );
}
