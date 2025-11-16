import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import ExperienceSection from "@/components/ExperienceSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      // Default to dark mode (true) if no preference is stored
      return stored ? stored === "dark" : true;
    }
    return true; // Default to dark mode
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <main className="overflow-x-hidden w-full">
        <HeroSection />
        <ImpactSection />
        <ExperienceSection />
        <ExpertiseSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}
