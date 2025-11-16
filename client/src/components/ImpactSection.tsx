import ImpactCard from "./ImpactCard";

const impacts = [
  {
    metric: "$10M+",
    label: "Revenue Impact",
    description: "Launched ML-powered personalized ads platform at Loblaw Digital, achieving 40% lift in click-through-rates",
    company: "Loblaw Digital"
  },
  {
    metric: "1M+",
    label: "Devices Migrated",
    description: "Successfully migrated entire Tesla Energy fleet to internal OTA platform, saving engineers 300+ hours annually",
    company: "Tesla Energy"
  },
  {
    metric: "$XB",
    label: "Capital Saved",
    description: "Leading AI network infrastructure program projected to avoid billions in capital spend by 2030",
    company: "Meta"
  },
  {
    metric: "600+",
    label: "Automated Workflows",
    description: "Built comprehensive fleet health monitoring system supporting 99% availability guarantee",
    company: "Tesla Energy"
  },
  {
    metric: "42%",
    label: "Efficiency Gain",
    description: "Optimized Megapack OTA processes, reducing average update time from 60 to 35 minutes",
    company: "Tesla Energy"
  },
  {
    metric: "$5M+",
    label: "Additional Revenue",
    description: "Launched GenAI keyword suggestions and sales attribution features for ads platform",
    company: "Loblaw Digital"
  }
];

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" data-testid="text-section-title">
            Impact & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-section-description">
            Measurable outcomes that define operational excellence
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
