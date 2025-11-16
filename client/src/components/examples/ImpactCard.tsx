import ImpactCard from "../ImpactCard";

export default function ImpactCardExample() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      <ImpactCard
        metric="$10M+"
        label="Revenue Impact"
        description="Launched ML-powered personalized ads platform, achieving 40% lift in CTR"
        company="Loblaw Digital"
      />
      <ImpactCard
        metric="1M+"
        label="Devices Migrated"
        description="Successfully migrated entire Tesla Energy fleet to internal OTA platform"
        company="Tesla Energy"
      />
      <ImpactCard
        metric="600+"
        label="Automated Workflows"
        description="Built fleet health monitoring system with automated ticketing workflows"
        company="Tesla Energy"
      />
    </div>
  );
}
