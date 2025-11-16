import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Science",
    field: "Computer Science",
    institution: "Georgia Institute of Technology",
    status: "Currently Enrolled",
    isCurrent: true,
    logo: "/logos/gatech.png",
    url: "https://www.gatech.edu"
  },
  {
    degree: "Bachelor of Science",
    field: "Petroleum Engineering",
    institution: "University of Alberta",
    status: "Graduated June 2017",
    isCurrent: false,
    logo: "/logos/ualberta.png",
    url: "https://www.ualberta.ca"
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" data-testid="text-section-title">
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="p-8 relative hover-elevate transition-all duration-300 cursor-default" data-testid={`card-education-${index}`}>
              <div className="flex items-start gap-4">
                {edu.logo && edu.url ? (
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 hover:opacity-80 transition-opacity"
                    aria-label={`Visit ${edu.institution} website`}
                  >
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg"
                    />
                  </a>
                ) : (
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                )}
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold" data-testid="text-degree">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-muted-foreground" data-testid="text-field">
                      {edu.field}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium" data-testid="text-institution">
                      {edu.institution}
                    </p>
                    <div className="mt-2">
                      {edu.isCurrent ? (
                        <Badge variant="default" data-testid="badge-status">
                          {edu.status}
                        </Badge>
                      ) : (
                        <p className="text-sm text-muted-foreground" data-testid="text-status">
                          {edu.status}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
