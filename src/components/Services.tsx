import { useState, createElement } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Palette, ClipboardCheck } from "lucide-react";
import residentialImage from "@/assets/residential-project.jpg";
import commercialImage from "@/assets/commercial-project.jpg";
import interiorImage from "@/assets/interior-design.jpg";
import consultationImage from "@/assets/technical-consultation.jpg";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    const sectionId = "contacto";
    
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
  

  const services = [
    {
      title: "Arquitectura Residencial",
      icon: Home,
      image: residentialImage,
      description: "Diseñamos hogares únicos que reflejan el estilo de vida de nuestros clientes. Desde casas familiares hasta desarrollos habitacionales, cada proyecto combina funcionalidad, estética y sostenibilidad.",
      features: [
        "Diseño personalizado de viviendas",
        "Proyectos de renovación y ampliación",
        "Desarrollos residenciales",
        "Arquitectura sustentable"
      ]
    },
    {
      title: "Arquitectura Comercial",
      icon: Building2,
      image: commercialImage,
      description: "Creamos espacios comerciales que potencian la identidad de marca y optimizan la experiencia del usuario. Oficinas, locales comerciales y edificios corporativos diseñados para el éxito.",
      features: [
        "Oficinas corporativas",
        "Locales comerciales",
        "Centros de negocios",
        "Espacios de coworking"
      ]
    },
    {
      title: "Interiorismo",
      icon: Palette,
      image: interiorImage,
      description: "Transformamos espacios interiores en ambientes funcionales y estéticamente excepcionales. Cada detalle está cuidadosamente pensado para crear atmósferas únicas y memorables.",
      features: [
        "Diseño de interiores residenciales",
        "Ambientación comercial",
        "Selección de mobiliario",
        "Diseño de iluminación"
      ]
    },
    {
      title: "House Review",
      icon: ClipboardCheck,
      image: consultationImage,
      description: "Una decisión importante merece una mirada experta. Comprar o vender una propiedad implica mucho más que lo que se ve a simple vista. El estado de la estructura, las instalaciones, posibles patologías ocultas pueden tener un gran impacto en el valor real y en los costos futuros. Este servicio está pensado para brindar una evaluación técnica y funcional detallada para detectar problemas, anticipar reformas y asegurar que la propiedad se ajuste a tus objetivos.",
      features: [
        "Visita técnica",
        "Observaciones clave", 
        "Recomendaciones personalizadas",
        "Estimación de reparaciones (si aplica)",
        "Informe claro en 48/72 hs"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-df-charcoal mb-6">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-df-green mx-auto mb-8"></div>
          <p className="text-base text-df-gray-medium max-w-3xl mx-auto">
            Ofrecemos soluciones arquitectónicas integrales adaptadas a las necesidades 
            específicas de cada cliente, combinando innovación, funcionalidad y estética.
          </p>
        </div>

        {/* Service Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {services.map((service, index) => (
            <Button
              key={index}
              variant={activeService === index ? "architect" : "minimal"}
              className={`h-auto p-4 flex flex-col items-center space-y-2 ${
                activeService === index ? "" : "hover:bg-df-gray-light/50"
              }`}
              onClick={() => setActiveService(index)}
            >
              <service.icon className={`h-8 w-8 ${
                activeService === index ? "text-df-beige" : "text-df-green"
              }`} />
              <span className="text-sm font-medium text-center">
                {service.title}
              </span>
            </Button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={services[activeService].image}
              alt={services[activeService].title}
              className="w-full h-96 object-cover rounded-lg shadow-elegant transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-df-charcoal/30 to-transparent rounded-lg"></div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-df-green/10 p-3 rounded-lg">
                {createElement(services[activeService].icon, { className: "h-8 w-8 text-df-green" })}
              </div>
              <h3 className="text-2xl font-heading font-bold text-df-charcoal">
                {services[activeService].title}
              </h3>
            </div>

            <p className="text-base text-df-gray-medium mb-8 leading-relaxed">
              {services[activeService].description}
            </p>

            <div className="space-y-3 mb-8">
              {services[activeService].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-df-green rounded-full"></div>
                  <span className="text-df-charcoal">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <Button variant="architect" size="lg" onClick={handleContactClick}>
                Contactar
              </Button>
              {services[activeService].title === "House Review" && (
                <Button 
                  variant="minimal" 
                  size="lg" 
                  onClick={() => navigate('/house-review')}
                >
                  Ver más
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Service Cards - Mobile Alternative */}
        <div className="md:hidden mt-16">
          <Card className="p-6 hover:shadow-card transition-all duration-300">
            <div className="flex items-start space-x-4 mb-4">
              <div className="bg-df-green/10 p-3 rounded-lg">
                {createElement(services[activeService].icon, { className: "h-6 w-6 text-df-green" })}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-df-charcoal mb-2">
                  {services[activeService].title}
                </h4>
                <p className="text-df-gray-medium text-sm">
                  {services[activeService].description}
                </p>
              </div>
            </div>
            
            <img
              src={services[activeService].image}
              alt={services[activeService].title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            
            <div className="space-y-2">
              {services[activeService].features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-df-green rounded-full"></div>
                  <span className="text-df-charcoal text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;