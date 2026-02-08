import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ksfpLogo from "@/assets/kfsplogo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Mission", path: "/mission" },
    { name: "Event", path: "/events" },
    { 
      name: "Gallery", 
      path: "/gallery",
      subLinks: [
        { name: "Annual Reports", path: "/audited-reports" },
      ]
    },
    { 
      name: "Services", 
      path: "/work",
      subLinks: [
        { name: "Medical", path: "/work#medical" },
        { name: "Orphanage", path: "/work#orphanage" },
        { name: "Education", path: "/work#education" },
      ]
    },
    { name: "Donate", path: "/donate"},
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-gradient-to-br from-warm-accent via-background to-muted/50 dark:bg-gradient-to-br dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-900/95 backdrop-blur-xl shadow-lg border-b border-primary/10" 
          : "bg-gradient-to-b from-primary/20 via-secondary/10 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative bg-transparent">
              <img 
                src={ksfpLogo} 
                alt="KSFP Logo" 
                className="w-24 h-24 object-contain transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" 
                style={{
                  borderRadius:'50px'
                }}
              />
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </div>
            <div className="hidden md:block ml-4 max-w-xs">
              <div className="group-hover:scale-105 transition-all duration-500">
                <div className="text-xl font-montserrat font-black leading-tight mb-0.5 tracking-tight">
                  <span className="text-black drop-shadow-lg">
                    Kremmer Sandegren
                  </span>
                </div>
                <div className="text-xl font-montserrat font-black leading-tight tracking-tight">
                  <span className="text-black drop-shadow-lg">
                    Foundation Pattukottai
                  </span>
                </div>
              </div>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group whitespace-nowrap">
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full flex items-center gap-1 ${
                    location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-black hover:text-primary hover:bg-primary/5"
                  }`}
                       >
                  {link.name}
                  {link.subLinks && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 duration-300" />}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
                {link.subLinks && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-gradient-to-br from-warm-accent to-muted dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border border-primary/20 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 overflow-hidden z-50">
                    <div className="p-2">
                      {link.subLinks.map((subLink, idx) => (
                        <Link
                          key={subLink.path}
                          to={subLink.path}
                          className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
                            location.pathname === subLink.path 
                              ? "text-primary bg-primary/10" 
                              : "text-black hover:bg-primary/5 hover:text-primary hover:translate-x-1"
                          }`}
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
            <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full transition-colors hover:bg-primary/10 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 px-4 bg-gradient-to-br from-warm-accent to-muted dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border-t border-primary/10 animate-fade-in rounded-b-3xl shadow-xl">
            {navLinks.map((link, idx) => (
              <div key={link.path} className="animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                <Link
                  to={link.path}
                  className={`block py-4 px-4 text-base font-semibold rounded-xl transition-all duration-200 ${
                    location.pathname === link.path 
                      ? "text-primary bg-primary/10" 
                      : "text-black hover:text-primary hover:bg-primary/5 hover:translate-x-2"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="ml-6 mt-2 space-y-1 border-l-2 border-primary/20 pl-4">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.path}
                        to={subLink.path}
                        className={`block py-3 px-3 text-sm font-semibold rounded-lg transition-all duration-200 ${
                          location.pathname === subLink.path 
                            ? "text-primary bg-primary/5" 
                            : "text-black hover:text-primary hover:bg-primary/5"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
