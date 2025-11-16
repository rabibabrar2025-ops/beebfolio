import { ChevronDown } from "lucide-react";
import profileImage from "@assets/generated_images/profile_picture.jpg";

export default function HeroSection() {
  const scrollToImpact = () => {
    const element = document.getElementById("impact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <div className="md:col-span-3 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight" data-testid="text-hero-name">
                Rabib Alam
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-muted-foreground" data-testid="text-hero-title">
                Operator. Product Leader.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 max-w-2xl" data-testid="text-hero-mission">
                I lead the technical delivery and execution of products that solve real problems and drive measurable impact. Whether scaling AI networking infrastructure at Meta, delivering fleet-wide systems at Tesla Energy, or launching ML-powered ad products generating $10M+ in revenue, I thrive in small, agile teams and take ownership from 0 to 1.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 max-w-2xl">
                In product areas with a strong user-experience component, I also help shape strategy by defining requirements and aligning teams on what to build.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm text-muted-foreground" data-testid="text-contact-info">
              <a
                href="mailto:RabibAlamAIPM@gmail.com"
                className="hover-elevate px-3 py-1 rounded-md break-all sm:break-normal"
                data-testid="link-email"
              >
                RabibAlamAIPM@gmail.com
              </a>
              <span className="hidden sm:inline">•</span>
              <span>San Francisco, CA</span>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden shadow-xl">
              <img
                src={profileImage}
                alt="Rabib Alam"
                className="w-full h-full object-cover"
                data-testid="img-hero-profile"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToImpact}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hover-elevate p-2 rounded-full animate-bounce"
        data-testid="button-scroll-indicator"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
}
