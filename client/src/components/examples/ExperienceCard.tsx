import ExperienceCard from "../ExperienceCard";

export default function ExperienceCardExample() {
  return (
    <div className="space-y-8 p-8 max-w-4xl">
      <ExperienceCard
        company="Meta"
        dateRange="May 2025 - Present"
        achievements={[
          "Leading AI network infrastructure software enabling thousands of MTIA chips to communicate at high speed",
          "Projected to avoid $XB in capital spend and deliver X% IRR by 2030",
          "Coordinating hardware, network, and AI platform teams to scale from chip-to-chip to rack-wide deployments"
        ]}
        index={0}
      />
      <ExperienceCard
        company="Tesla Energy"
        dateRange="February 2024 - April 2025"
        achievements={[
          "Led development of fleet health monitoring tool with 600+ automated workflows",
          "Migrated 1M+ energy devices to internal OTA platform",
          "Optimized Megapack update processes, reducing time from 60 to 35 minutes"
        ]}
        index={1}
      />
    </div>
  );
}
