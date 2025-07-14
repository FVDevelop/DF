import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MapPin, Square } from "lucide-react";
import residentialImage from "@/assets/residential-project.jpg";
import commercialImage from "@/assets/commercial-project.jpg";
import interiorImage from "@/assets/interior-design.jpg";
import sicurellaImage from "@/assets/sicurella-pilar.jpg";
import melImage from "@/assets/mel-propiedades.jpg";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
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

  const projects = [
    {
      id: 1,
      title: "Casa Minimalista Villa Rosa",
      category: "residential",
      type: "Residencial",
      image: residentialImage,
      location: "Villa Rosa, Buenos Aires",
      year: "2023",
      area: "280 m²",
      description: "Vivienda unifamiliar de diseño contemporáneo que integra espacios interiores y exteriores a través de grandes ventanales y materiales naturales.",
      features: ["Diseño sustentable", "Doble altura", "Piscina integrada", "Jardín vertical"]
    },
    {
      id: 2,
      title: "Sicurella Pilar",
      category: "commercial",
      type: "Comercial",
      image: sicurellaImage,
      location: "Pilar, Buenos Aires",
      year: "2022",
      area: "450 m²",
      description: "Proyecto de Local comercial, donde el blanco y el gris son sus colores protagonistas. En un amplio espacio doble altura con grandes ventanales donde la luz natural es la principal protagonista.",
      features: ["Espacios colaborativos", "Iluminación LED", "Climatización eficiente", "Accesibilidad universal"]
    },
    {
      id: 4,
      title: "Renovación Apartamento Palermo",
      category: "interior",
      type: "Interiorismo",
      image: interiorImage,
      location: "Palermo, CABA",
      year: "2023",
      area: "120 m²",
      description: "Transformación completa de un apartamento histórico, combinando elementos originales con un diseño contemporáneo y funcional.",
      features: ["Preservación histórica", "Mobiliario custom", "Optimización espacial", "Iluminación natural"]
    },
    {
      id: 3,
      title: "MEL Inmobiliaria",
      category: "commercial",
      type: "Remodelación", 
      image: melImage,
      location: "CABA, Buenos Aires",
      year: "2023",
      area: "180 m²",
      description: "Remodelación de inmobiliaria en Ciudad de Buenos Aires, se analizó el espacio para lograr un proyecto integral y que el lugar de trabajo se convierta en un espacio luminoso, cómodo y confortable.",
      features: ["Remodelación integral", "Optimización lumínica", "Espacios confortables", "Diseño funcional"]
    },
    {
      id: 5,
      title: "Complejo Residencial Nordelta",
      category: "residential", 
      type: "Residencial",
      image: residentialImage,
      location: "Nordelta, Buenos Aires",
      year: "2022",
      area: "1200 m²",
      description: "Desarrollo de 8 viviendas unifamiliares con diseño sustentable y amenities compartidos, respetando el entorno natural.",
      features: ["Construcción sustentable", "Amenities compartidos", "Paisajismo integrado", "Eficiencia energética"]
    }
  ];

  const categories = [
    { id: "all", label: "Todos los Proyectos" },
    { id: "residential", label: "Residencial" },
    { id: "commercial", label: "Comercial" },
    { id: "interior", label: "Interiorismo" }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="proyectos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-df-charcoal mb-6">
            Nuestros Proyectos
          </h2>
          <div className="w-24 h-1 bg-df-green mx-auto mb-8"></div>
          <p className="text-lg text-df-gray-medium max-w-3xl mx-auto">
            Cada proyecto refleja nuestro compromiso con la excelencia arquitectónica, 
            la innovación y la atención al detalle. Descubre algunas de nuestras realizaciones más destacadas.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "architect" : "minimal"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-300"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-500 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-df-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-df-green text-df-beige">
                  {project.type}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-df-charcoal mb-3 group-hover:text-df-green transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm text-df-gray-medium">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Square className="h-4 w-4" />
                      <span>{project.area}</span>
                    </div>
                  </div>
                </div>

                <p className="text-df-gray-medium mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-df-green/10 text-df-green"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 2 && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-df-gray-light text-df-gray-medium">
                      +{project.features.length - 2} más
                    </span>
                  )}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full group/btn flex items-center justify-between hover:bg-df-green/10 text-left"
                  onClick={() => navigate(`/proyecto/${project.id}`)}
                >
                  <span>Ver Proyecto Completo</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 flex-shrink-0" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-df-gray-medium mb-6">
            ¿Te interesa conocer más detalles sobre nuestros proyectos?
          </p>
          <Button variant="architect" size="lg" onClick={handleContactClick}>
            Contactar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;