import ProjectCard from "./ProjectCard";
import metaImage from "@assets/generated_images/AI_network_infrastructure_visualization_7610c659.png";
import teslaImage from "@assets/generated_images/Fleet_monitoring_dashboard_709abcb6.png";
import loblawImage from "@assets/generated_images/Personalized_ads_platform_272efe23.png";
import gmImage from "@assets/generated_images/EV_optimization_interface_82f5d08a.png";

const projects = [
  {
    title: "AI Network Infrastructure",
    company: "Meta",
    problem: "Scaling MTIA chip communication required efficient collective communication and transport layer software to avoid billions in capital spend and reduce vendor dependency",
    solution: "Led cross-functional program coordinating hardware, network, and AI platform teams to build high-speed network infrastructure enabling thousands of chips to share data from chip-level to cross-rack deployments",
    impact: "Projected $XB capital avoidance and X% IRR by 2030, boosting training throughput by X%",
    technologies: ["MTIA", "Network Architecture", "Performance Testing", "Automated Pipelines", "Data Center Infrastructure"],
    image: metaImage,
    imagePosition: "left" as const
  },
  {
    title: "Fleet Health Monitoring System",
    company: "Tesla Energy",
    problem: "Managing health and availability of 1M+ Tesla Energy products (Powerwalls, Megapacks, Superchargers) required automated monitoring and rapid issue detection to maintain 99% availability SLA",
    solution: "Built comprehensive fleet health monitoring tool with 600+ automated ticketing workflows, each detecting unique failure signatures across all product lines",
    impact: "Enabled 99% availability guarantee and proactive maintenance across entire energy portfolio",
    technologies: ["Automated Workflows", "Fleet Monitoring", "Ticketing Systems", "SQL Analytics", "Real-time Alerting"],
    image: teslaImage,
    imagePosition: "right" as const
  },
  {
    title: "Personalized Ads Platform",
    company: "Loblaw Digital",
    problem: "Loblaw's e-commerce sites needed targeted advertising capabilities to increase engagement and revenue from brand partners",
    solution: "Launched ML-based personalized ads platform with GenAI keyword suggestions, offline sales attribution, and predictive analytics across all PCExpress banners within 3 months",
    impact: "40% lift in CTR, $10M+ revenue increase, plus $5M from additional features",
    technologies: ["Machine Learning", "GenAI", "Data Engineering", "DBT", "Distributed Tracing", "Ad Tech"],
    image: loblawImage,
    imagePosition: "left" as const
  },
  {
    title: "OTA Platform Migration",
    company: "Tesla Energy",
    problem: "Legacy script-based deployment tools were error-prone and time-consuming, requiring manual intervention for 1M+ device updates across Superchargers, Megapacks, and Powerwalls",
    solution: "Migrated entire Tesla Energy device fleet to internal OTA platform and optimized Megapack processes with SQL-driven analysis, implementing offline updates and fail-fast capabilities",
    impact: "300+ hours saved per engineer annually, update time reduced from 60 to 35 minutes",
    technologies: ["OTA Systems", "SQL Analytics", "Process Optimization", "Firmware Deployment", "Data Visualization"],
    image: teslaImage,
    imagePosition: "right" as const
  },
  {
    title: "Vehicle R&D ML Programs",
    company: "General Motors",
    problem: "GM needed ML-powered features for next-gen vehicles including EV optimization, climate control, and safety systems",
    solution: "Led end-to-end ML product development for 4+ projects including EV battery charging optimization, smart climate control, automatic trailer hitching, and road traction prediction",
    impact: "Successfully delivered multiple in-vehicle and back-office ML solutions, increasing efficiency and user satisfaction",
    technologies: ["Machine Learning", "User Journey Mapping", "Product Development", "Automotive AI", "Requirements Engineering"],
    image: gmImage,
    imagePosition: "left" as const
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" data-testid="text-section-title">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-section-description">
            Major initiatives driving measurable business outcomes
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
