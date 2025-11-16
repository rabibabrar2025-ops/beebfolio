import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "Meta",
    dateRange: "May 2025 - Present",
    summary: "I'm building the software that lets thousands of MTIA chips talk to each other at blazing speeds—from the collective communication layer down to the high-speed network paths connecting racks across data centers. This work is projected to save billions in capital while reducing our dependence on third-party vendors. I coordinate across hardware, network, and AI platform teams to scale everything from chip-to-chip connections to full rack deployments, and I build the automated testing pipelines that prove our latency, bandwidth, and reliability targets are met."
  },
  {
    company: "Tesla Energy",
    dateRange: "February 2024 - April 2025",
    summary: "I built Tesla's fleet health monitoring system with 600+ automated workflows that keep Superchargers, Megapacks, and Powerwalls running at 99% availability. I also migrated 1M+ devices to our internal OTA platform, which saved every service engineer 300+ hours a year. By diving into SQL analytics, I optimized our Megapack update process and cut the average site update time from 60 minutes down to 35—implementing offline updates and fail-fast mechanisms that made a real difference for teams in the field."
  },
  {
    company: "Loblaw Digital",
    dateRange: "July 2022 - January 2024",
    summary: "I launched Loblaw's ML-powered personalized ads platform in under 3 months, driving a 40% boost in click-through rates and over $10M in new revenue. I also shipped GenAI keyword suggestions, offline sales attribution, and predictive analytics that unlocked another $5M annually. On the infrastructure side, I enhanced our data engineering stack with distributed tracing to fix latency issues, automated transformation pipelines with DBT, and built stronger alerting systems."
  },
  {
    company: "General Motors",
    dateRange: "July 2021 - July 2022",
    summary: "I worked on next-gen vehicle features including EV battery charging optimization, smart climate control, automatic trailer hitching, and road traction prediction. I owned the full ML product lifecycle—from initial discovery and business cases to shipping working solutions—delivering 4+ projects that improved user experience and operational efficiency across GM's vehicle platform."
  },
  {
    company: "AltaML Inc.",
    dateRange: "May 2020 - July 2021",
    summary: "I took ML projects from 0 to 1 for enterprise clients across healthcare, energy, tech, insurance, and construction. This meant building POCs, integrating MVPs, and working closely with product teams to commercialize solutions. I defined requirements through user stories and process mapping, ran viability assessments, and made sure every project had strong ROI and real business impact."
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
