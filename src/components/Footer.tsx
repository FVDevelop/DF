import { MessageCircle, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="bg-df-charcoal text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-heading font-bold mb-4">
                DF <span className="text-df-green">Arquitectura</span>
              </h3>
              <p className="text-df-gray-light leading-relaxed">
                Estudio de arquitectura especializado en proyectos residenciales, comerciales e interiorismo. 
                Comprometidos con la excelencia técnica y el diseño innovador desde 2004.
              </p>
            </div>
            
            <div className="mb-6">
              <p className="font-heading italic text-df-green text-lg">
                "Reconocer una necesidad es una de las condiciones principales para lograr el éxito del proyecto"
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://wa.me/541160941504"
                className="bg-df-green/20 p-3 rounded-lg hover:bg-df-green transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/df_arquitectura"
                className="bg-df-green/20 p-3 rounded-lg hover:bg-df-green transition-colors duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-df-green/20 p-3 rounded-lg hover:bg-df-green transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-df-green">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Servicios", href: "#servicios" },
                { label: "Proyectos", href: "#proyectos" },
                { label: "Contacto", href: "#contacto" },
                { label: "FAQ", href: "#faq" }
              ].map((link) => {
                const handleNavClick = (href: string) => {
                  const sectionId = href.substring(1);
                  
                  if (location.pathname === '/') {
                    const element = document.getElementById(sectionId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  } else {
                    navigate('/');
                    setTimeout(() => {
                      const element = document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }
                };

                return (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-df-gray-light hover:text-df-green transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-df-green">
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-df-green mt-1 flex-shrink-0" />
                <div className="text-df-gray-light text-sm">
                  <p>Edificio Vohe</p>
                  <p>Camaño 1234</p>
                  <p>Villa Rosa, Buenos Aires</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-df-green" />
                <a 
                  href="tel:1160941504"
                  className="text-df-gray-light hover:text-df-green transition-colors"
                >
                  +54 11 6094-1504
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-df-green" />
                <a 
                  href="mailto:arq.dmf@gmail.com"
                  className="text-df-gray-light hover:text-df-green transition-colors"
                >
                  arq.dmf@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-df-green/10 rounded-lg">
              <p className="text-df-green font-medium text-sm mb-1">
                Horarios de Atención
              </p>
              <p className="text-df-gray-light text-sm">
                Lun - Vie: 9:00 - 18:00<br />
                Sáb: 9:00 - 13:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-df-gray-medium/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-df-gray-light text-sm mb-4 md:mb-0">
              © {currentYear} DF Arquitectura. Todos los derechos reservados.
            </div>
            
            <div className="flex space-x-6 text-df-gray-light text-sm">
              <a href="#" className="hover:text-df-green transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-df-green transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4 text-df-gray-light text-xs">
            <p>
              Estudio profesional de arquitectura matriculado • CAPBA • Seguros de responsabilidad civil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;