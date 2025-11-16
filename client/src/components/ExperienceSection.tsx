import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "Meta",
    dateRange: "May 2025 - Present",
    summary: "Leading technical delivery for the software that enables thousands of MTIA chips to communicate at high speeds—from collective communication layers to datacenter-scale network paths. My responsibility spans execution across hardware, network, and platform teams, scaling everything from chip-to-chip communication to full-rack deployments."
  },
  {
    company: "Tesla Energy",
    dateRange: "February 2024 - April 2025",
    summary: "Led execution for Tesla's fleet health monitoring system with 600+ automated workflows supporting 99% availability. Directed the migration of 1M+ devices to the internal OTA platform, enabling major operational savings. I defined requirements informed by data analysis and led delivery of improvements to the OTA workflow—introducing offline update flows and fail-fast mechanisms that significantly reduced site update times."
  },
  {
    company: "Loblaw Digital",
    dateRange: "July 2022 - January 2024",
    summary: "Led the end-to-end delivery of Loblaw's ML-powered personalized ads platform in under 3 months—resulting in 40% CTR lift and $10M+ revenue. Shaped product strategy for UX-heavy features like GenAI keyword suggestion and offline sales attribution, defining requirements and partnering with design + engineering teams. Executed improvements across the data platform—distributed tracing, automated DBT pipelines, and latency-reducing infra upgrades."
  },
  {
    company: "General Motors",
    dateRange: "July 2021 - July 2022",
    summary: "Led technical execution across next-gen ML features such as EV charging optimization, smart climate automation, trailer hitch prediction, and traction forecasting. Owned the ML lifecycle end-to-end—requirements, modeling, validation, and deployment—delivering 4+ features that improved UX and operational efficiency."
  },
  {
    company: "AltaML Inc.",
    dateRange: "May 2020 - July 2021",
    summary: "Led delivery of 0→1 ML solutions across healthcare, energy, insurance, and technology clients. Defined requirements through user research, process mapping, and viability assessments. Managed technical execution to ensure prototypes converted into commercially viable products with clear ROI."
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" data-testid="text-section-title">
            Where I've Worked
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-section-description">
            From startups to big tech, here's what I've been building
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
