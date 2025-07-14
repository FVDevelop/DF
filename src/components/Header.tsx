import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle, Instagram, Linkedin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Prensa", href: "#prensa" },
    { label: "Contacto", href: "#contacto" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (href: string) => {
    const sectionId = href.substring(1); // Remove the '#'
    
    if (location.pathname === '/') {
      // If already on home page, scroll directly
      scrollToSection(sectionId);
    } else {
      // If on another page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-df-gray-light shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-heading font-bold text-df-charcoal">
              DF <span className="text-df-green">Arquitectura</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-df-charcoal hover:text-df-green transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/541160941504"
              className="text-df-gray-medium hover:text-df-green transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/df_arquitectura"
              className="text-df-gray-medium hover:text-df-green transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-df-gray-medium hover:text-df-green transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="tel:1160941504"
              className="text-df-gray-medium hover:text-df-green transition-colors"
              aria-label="Teléfono"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-df-gray-light">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    handleNavClick(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-df-charcoal hover:text-df-green transition-colors font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <a
                  href="https://wa.me/541160941504"
                  className="text-df-gray-medium hover:text-df-green transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/df_arquitectura"
                  className="text-df-gray-medium hover:text-df-green transition-colors"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-df-gray-medium hover:text-df-green transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="tel:1160941504"
                  className="text-df-gray-medium hover:text-df-green transition-colors"
                  aria-label="Teléfono"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;