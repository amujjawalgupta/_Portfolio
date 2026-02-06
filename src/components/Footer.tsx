import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Shield className="w-4 h-4 text-primary" />
        <span>© 2025 Ujjawal Gupta. All rights reserved.</span>
      </div>
      <p className="text-xs text-muted-foreground font-mono">
        Built with passion & security in mind
      </p>
    </div>
  </footer>
);

export default Footer;
