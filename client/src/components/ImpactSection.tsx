import ImpactCard from "./ImpactCard";

const impacts = [
  {
    metric: "$10M+",
    label: "Revenue Impact",
    description: "Contributed to launching ML-powered personalized ads platform at Loblaw Digital, achieving 40% lift in click-through-rates",
    company: "Loblaw Digital"
  },
  {
    metric: "1M+",
    label: "Devices Migrated",
    description: "Helped migrate entire Tesla Energy fleet to internal OTA platform, saving engineers 300+ hours annually",
    company: "Tesla Energy"
  },
  {
    metric: "$XB",
    label: "Capital Saved",
    description: "Contributing to AI network infrastructure program projected to avoid billions in capital spend by 2030",
    company: "Meta"
  },
  {
    metric: "600+",
    label: "Automated Workflows",
    description: "Helped build comprehensive fleet health monitoring system supporting 99% availability guarantee",
    company: "Tesla Energy"
  },
  {
    metric: "$5M+",
    label: "Additional Revenue",
    description: "Contributed to launching GenAI keyword suggestions and sales attribution features for ads platform",
    company: "Loblaw Digital"
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
          {impacts.map((impact, index) => (
            <ImpactCard key={index} {...impact} />
          ))}
        </div>
      </div>
    </section>
  );
}
