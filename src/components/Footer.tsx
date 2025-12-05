import { Mail, MapPin, Phone, ChevronRight } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },

    { label: "Sample Projects", href: "/sample" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About Us", href: "/about-us" },
    { label: "Locations", href: "/service-areas" },
    { label: "Contact Us", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Residential Estimating", href: "/services/residential-estimating" },
    { label: "Commercial Estimating", href: "/services/commercial-estimating" }, // Kept as per design image even if duplicate
    { label: "Industrial Estimating", href: "/services/industrial-estimating" },
  ];

  return (
    <footer className="bg-[#1A1F2C] text-white py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Info */}
          <div className="space-y-6">
            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6">
              {/* Placeholder for Logo - using text if image not available or the existing one */}
              {/* <img src="/assets/logo.png" alt="Paradise Estimating" className="w-20 h-20 object-contain brightness-0 invert" /> */}
              <div className="text-center">
                <img
                  src="/assets/logo.webp"
                  alt="Paradise Estimating Logo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Paradise  Estimating is one of the leading construction estimating service providers in the industry. We deliver accurate, reliable, and detailed cost estimates. At Paradise Estimating, the strengths of our work are precision and accuracy. Every estimate is carefully prepared using the latest tools and methods.
            </p>

          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service */}
          <div>
            <h3 className="text-xl font-bold mb-6">Service</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-primary" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#7ED957] flex-shrink-0 mt-0.5" />
                <span>898 Bay Ridge Avenue,<br />Brooklyn, NY 11220, USA.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#7ED957] flex-shrink-0" />
                <a href="tel:+17187196171" className="hover:text-white transition-colors">
                  +1 (718) 719-6171
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#7ED957] flex-shrink-0" />
                <a href="mailto:Paradisestimating@gmail.com" className="hover:text-white transition-colors">
                  Paradisestimating@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex gap-8 mb-4 md:mb-0">
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-white transition-colors">Cookie & Privacy</a>
          </div>
          <div>
            <p>Copyright © 2025 | Paradise Estimating</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
