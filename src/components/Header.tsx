import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { serviceCategories, tradeCategories, generateSlug } from "@/data/services";
import TopBar from "@/components/TopBar";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [tradesOpen, setTradesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    // { label: "Services", href: "/services/category-1" },
    { label: "About Us", href: "/about-us" },
    // { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src="/assets/logo.webp" alt="Paradise Estimating" className="h-20 w-auto object-contain" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">

              {/* Home Link */}
              <div className="flex items-center">
                <a
                  href="/"
                  className={`text-sm font-bold uppercase transition-colors tracking-wide ${isActive("/") ? 'text-[#82E658]' : 'text-foreground hover:text-primary'}`}
                >
                  Home
                </a>
                <span className="mx-3 text-muted-foreground/50">|</span>
              </div>

              {/* Services Dropdown */}
              {/* <div
                className="relative flex items-center h-full"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <a
                  href="/services/category-1"
                  className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors h-full ${servicesOpen || isActive('/services') ? 'text-[#82E658]' : 'text-foreground hover:text-primary'
                    }`}
                >
                  Services
                  <ChevronDown className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </a>

                {/* Dropdown Menu */}
              {/* {servicesOpen && (
                  <div className="absolute top-full left-[00px] mt-0 w-[350px] bg-white border border-border rounded-lg shadow-lg p-6  gap-y-2">
                    {serviceCategories.map((service, index) => (
                      <a
                        key={service}
                        href={`/services/${generateSlug(service)}`}
                        className="flex items-start gap-2 text-[13px] font-medium text-black hover:bg-[#D0F0C0] px-2 py-1 rounded transition-colors group"
                      >
                        <span className="text-[#82E658] text-[10px] mt-1">▶</span>
                        <span className="leading-tight">{service}</span>
                      </a>
                    ))}
                  </div>
                )}
                <span className="mx-3 text-muted-foreground/50">|</span>
              </div> */}



              {navItems.map((item, index) => (
                <div key={item.label} className="flex items-center">
                  <a
                    href={item.href}
                    className={`text-sm font-bold uppercase transition-colors tracking-wide ${isActive(item.href) ? 'text-[#82E658]' : 'text-foreground hover:text-primary'}`}
                  >
                    {item.label}
                  </a>
                  {index < navItems.length - 1 && (
                    <span className="mx-3 text-muted-foreground/50">|</span>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button onClick={() => navigate('/contact')} className="bg-[#7ED957] text-black font-bold uppercase tracking-wide rounded-full px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all ">
                Get a Free Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">

                {/* Home Link */}
                <a
                  href="/"
                  className="text-sm font-bold uppercase text-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>

                {/* Mobile Services Dropdown */}
                {/* <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`flex items-center gap-1 text-sm font-bold uppercase transition-colors ${servicesOpen ? 'text-[#82E658]' : 'text-foreground'
                      }`}
                  >
                    Services
                    <ChevronDown className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {servicesOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      {serviceCategories.map((service, index) => (
                        <a
                          key={service}
                          href={`/services/${generateSlug(service)}`}
                          className="block text-sm font-medium text-foreground hover:text-[#82E658] transition-colors"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  )}
                </div> */}

                {/* Mobile Trades Dropdown */}
                <div>
                  <button
                    onClick={() => setTradesOpen(!tradesOpen)}
                    className={`flex items-center gap-1 text-sm font-bold uppercase transition-colors ${tradesOpen ? 'text-[#82E658]' : 'text-foreground'
                      }`}
                  >
                    Trades
                    <ChevronDown className={`w-3 h-3 transition-transform ${tradesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {tradesOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      {tradeCategories.map((trade, index) => (
                        <a
                          key={trade}
                          href={`/trades/${generateSlug(trade)}`}
                          className="block text-sm font-medium text-foreground hover:text-[#82E658] transition-colors"
                        >
                          {trade}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-bold uppercase text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full font-bold uppercase rounded-full">
                  Get a Free Quote
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
