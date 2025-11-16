import ExperienceCard from "../ExperienceCard";

export default function ExperienceCardExample() {
  return (
    <div className="space-y-8 p-8 max-w-4xl">
      <ExperienceCard
        company="Meta"
        dateRange="May 2025 - Present"
        summary="I'm building the software that lets thousands of MTIA chips talk to each other at blazing speeds—from the collective communication layer down to the high-speed network paths connecting racks across data centers."
        index={0}
      />
      <ExperienceCard
        company="Tesla Energy"
        dateRange="February 2024 - April 2025"
        summary="I built Tesla's fleet health monitoring system with 600+ automated workflows that keep Superchargers, Megapacks, and Powerwalls running at 99% availability."
        index={1}
      />
    </div>
  );
}
