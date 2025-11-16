import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navigation({ isDark, toggleTheme }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-lg font-semibold hover-elevate px-3 py-1 rounded-md"
          data-testid="button-logo"
        >
          Rabib Alam
        </button>

        <nav className="hidden md:flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("impact")}
            data-testid="link-impact"
          >
            Impact
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("experience")}
            data-testid="link-experience"
          >
            Experience
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("expertise")}
            data-testid="link-expertise"
          >
            Expertise
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("projects")}
            data-testid="link-projects"
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("education")}
            data-testid="link-education"
          >
            Education
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {isDark ? "🌞" : "🌙"}
          </Button>
          <Button
            variant="default"
            size="sm"
            asChild
            data-testid="button-contact"
          >
            <a href="mailto:RabibAlamAIPM@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
