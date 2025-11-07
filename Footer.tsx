import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ERITAGE ENT CARE</h3>
            <p className="text-secondary-foreground/80 mb-4">
              Professional ear, nose, and throat care in Entebbe. 
              Your trusted partner for ENT health.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#specialist" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Our Specialist
                </a>
              </li>
              <li>
                <a href="#blog" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Health Articles
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-foreground/80">
                  Katabi, Entebbe Road, 800m from Victoria Mall
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <div className="text-secondary-foreground/80">
                  <a href="tel:+256740166788" className="hover:text-secondary-foreground transition-colors block">
                    +256 740 166 788
                  </a>
                  <a href="tel:+256769616091" className="hover:text-secondary-foreground transition-colors block">
                    +256 769 616 091
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@entclinicentebbe.com" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  info@entclinicentebbe.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} ERITAGE ENT CARE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
