import { useState } from "react";
import { Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navigation({ isDark, toggleTheme }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <>
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
              onClick={() => scrollToSection("education")}
              data-testid="link-education"
            >
              Education
            </Button>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              className="flex-shrink-0"
            >
              {isDark ? "🌞" : "🌙"}
            </Button>
            <Button
              variant="default"
              size="sm"
              asChild
              data-testid="button-contact"
              className="hidden sm:flex flex-shrink-0"
            >
              <a href="mailto:RabibAlamAIPM@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden flex-shrink-0"
              onClick={() => setIsMenuOpen(true)}
              data-testid="button-menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile navigation sheet */}
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent side="right" className="w-[250px] sm:w-[300px]">
          <nav className="flex flex-col gap-4 mt-8">
            <Button
              variant="ghost"
              className="justify-start text-lg"
              onClick={() => scrollToSection("impact")}
            >
              Impact
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-lg"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-lg"
              onClick={() => scrollToSection("expertise")}
            >
              Expertise
            </Button>
            <Button
              variant="ghost"
              className="justify-start text-lg"
              onClick={() => scrollToSection("education")}
            >
              Education
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
