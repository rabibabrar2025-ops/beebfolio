import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "Meta",
    dateRange: "May 2025 - Present",
    achievements: [
      "Leading program management of AI network infrastructure software enabling thousands of MTIA chips to share data at high-speed across collective communication and transport layers",
      "Program projected to avoid $XB in capital spend and deliver X% IRR by 2030 while reducing reliance on third-party vendor stacks",
      "Coordinating hardware, network, and AI platform teams to scale data paths from chip-to-chip to rack-wide and cross-rack deployments, boosting large-model training throughput by X%",
      "Building automated test & measurement pipelines ensuring end-to-end latency, bandwidth, and reliability targets from chip to data-centre level"
    ]
  },
  {
    company: "Tesla Energy",
    dateRange: "February 2024 - April 2025",
    achievements: [
      "Led program management for Tesla's fleet health monitoring tool housing 600+ automated ticketing workflows for Superchargers, Megapacks, and Powerwalls, improving fleet health and supporting 99% availability guarantee",
      "Migrated 1M+ energy devices to Tesla's internal OTA platform, enabling large-scale rollouts that saved each service engineer 300+ hours annually",
      "Optimized industrial fleet OTA processes for Megapacks through SQL-driven data analysis, implementing offline update and fail-fast capabilities to reduce average site update time from 60 to 35 minutes",
      "Managed SDLC artifacts across a team of 100+ firmware, software, and test engineers spanning multiple product verticals"
    ]
  },
  {
    company: "Loblaw Digital",
    dateRange: "July 2022 - January 2024",
    achievements: [
      "Launched ML-based personalized ads for Loblaw's e-commerce sites within 3 months, resulting in 40% lift in click-through-rates and $10M+ increase in ad revenues",
      "Launched additional performance features: GenAI keyword suggestions, offline sales attribution, complementary ads model, and predictive analytics, unlocking $5M in additional annualized revenue",
      "Enhanced ad tech data engineering stack by implementing distributed tracing for latency issues, automating transformation scripts with DBT, and strengthening data pipeline alerts",
      "Expanded ads platform to pharmaceutical entity (Shoppers Drug Mart) serving search and category-based sponsored products"
    ]
  },
  {
    company: "General Motors",
    dateRange: "July 2021 - July 2022",
    achievements: [
      "Led Vehicle R&D projects including EV battery charging optimization, smart climate control, automatic trailer hitching, and predicting road/tire traction",
      "Managed ML-powered product development lifecycle from discovery sessions to detailed backlog creation, successfully executing 4+ small-to-medium complexity projects",
      "Analyzed user-generated metrics and incorporated continuous improvements, increasing user engagement and satisfaction",
      "Collaborated with multidisciplinary teams to design solution architecture for back-office process augmentation and in-vehicle projects"
    ]
  },
  {
    company: "AltaML Inc.",
    dateRange: "May 2020 - July 2021",
    achievements: [
      "Led machine learning solutions through complete PDLC - developing proof of concept models, integrating MVPs, and working with product teams for commercialization",
      "Defined requirements and scope using user stories, process mapping, and functional requirements gathering",
      "Conducted ML viability assessments and ROI analysis with stakeholders to maximize business impact",
      "Led ML programs from 0 to 1 for enterprise clients across healthcare, energy, tech, insurance, and construction verticals"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" data-testid="text-section-title">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-section-description">
            Building transformative products and driving operational excellence
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
