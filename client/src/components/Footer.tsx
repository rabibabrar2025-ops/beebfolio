import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2" data-testid="text-footer-name">
              Rabib Alam
            </h3>
            <p className="text-muted-foreground" data-testid="text-footer-title">
              Chief Operator • Product Leader
            </p>
          </div>

          <div className="flex flex-col gap-3 text-center md:text-right">
            <a
              href="mailto:RabibAlamAIPM@gmail.com"
              className="flex items-center gap-2 hover-elevate px-3 py-1 rounded-md"
              data-testid="link-footer-email"
            >
              <Mail className="w-4 h-4" />
              <span>RabibAlamAIPM@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground" data-testid="text-footer-location">
              <MapPin className="w-4 h-4" />
              <span className="whitespace-nowrap">San Francisco, CA 94158</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground" data-testid="text-copyright">
          © {new Date().getFullYear()} Rabib Alam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
