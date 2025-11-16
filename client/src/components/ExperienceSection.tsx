import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "Meta",
    dateRange: "May 2025 - Present",
    summary: "Contributing to building the software that enables thousands of MTIA chips to communicate at high speeds—from the collective communication layer to high-speed network paths connecting racks across data centers. This work is projected to save billions in capital while reducing dependence on third-party vendors. Working with hardware, network, and AI platform teams to scale everything from chip-to-chip connections to full rack deployments, while helping build automated testing pipelines that validate latency, bandwidth, and reliability targets."
  },
  {
    company: "Tesla Energy",
    dateRange: "February 2024 - April 2025",
    summary: "Helped build Tesla's fleet health monitoring system with 600+ automated workflows that keep Superchargers, Megapacks, and Powerwalls running at 99% availability. Contributed to migrating 1M+ devices to the internal OTA platform, which saved every service engineer 300+ hours a year. Through SQL analytics, helped optimize the Megapack update process and cut the average site update time from 60 minutes down to 35—implementing offline updates and fail-fast mechanisms that made a real difference for teams in the field."
  },
  {
    company: "Loblaw Digital",
    dateRange: "July 2022 - January 2024",
    summary: "Helped launch Loblaw's ML-powered personalized ads platform in under 3 months, contributing to a 40% boost in click-through rates and over $10M in new revenue. Also contributed to shipping GenAI keyword suggestions, offline sales attribution, and predictive analytics that unlocked another $5M annually. On the infrastructure side, helped enhance the data engineering stack with distributed tracing to fix latency issues, automated transformation pipelines with DBT, and stronger alerting systems."
  },
  {
    company: "General Motors",
    dateRange: "July 2021 - July 2022",
    summary: "Worked on next-gen vehicle features including EV battery charging optimization, smart climate control, automatic trailer hitching, and road traction prediction. Contributed to the full ML product lifecycle—from initial discovery and business cases to shipping working solutions—helping deliver 4+ projects that improved user experience and operational efficiency across GM's vehicle platform."
  },
  {
    company: "AltaML Inc.",
    dateRange: "May 2020 - July 2021",
    summary: "Helped take ML projects from 0 to 1 for enterprise clients across healthcare, energy, tech, insurance, and construction. This meant building POCs, integrating MVPs, and working closely with product teams to commercialize solutions. Contributed to defining requirements through user stories and process mapping, ran viability assessments, and helped ensure every project had strong ROI and real business impact."
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
            <ExperienceCard key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
