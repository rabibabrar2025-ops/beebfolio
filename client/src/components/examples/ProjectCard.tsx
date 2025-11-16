import ProjectCard from "../ProjectCard";
import metaImage from "@assets/generated_images/AI_network_infrastructure_visualization_7610c659.png";

export default function ProjectCardExample() {
  return (
    <div className="space-y-12 p-8">
      <ProjectCard
        title="AI Network Infrastructure"
        company="Meta"
        problem="Scaling MTIA chip communication required efficient collective communication and transport layer software to avoid billions in capital spend"
        solution="Led development of high-speed network infrastructure enabling thousands of chips to share data across server racks"
        impact="Projected $XB capital avoidance and X% IRR by 2030"
        technologies={["MTIA", "Network Architecture", "Performance Testing", "Data Center Infrastructure"]}
        image={metaImage}
        imagePosition="left"
      />
    </div>
  );
}
