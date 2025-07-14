import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ImageModal } from "@/components/ui/image-modal";
import { ArrowLeft, Calendar, MapPin, Square } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import residentialImage from "@/assets/residential-project.jpg";
import commercialImage from "@/assets/commercial-project.jpg";
import interiorImage from "@/assets/interior-design.jpg";
import sicurellaImage from "@/assets/sicurella-pilar.jpg";
import melImage from "@/assets/mel-propiedades.jpg";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const projects = [
    {
      id: "1",
      title: "Casa Minimalista Villa Rosa",
      category: "residential",
      type: "Residencial",
      images: [residentialImage, residentialImage, residentialImage, residentialImage],
      location: "Villa Rosa, Buenos Aires",
      year: "2023",
      area: "280 m²",
      description: "Vivienda unifamiliar de diseño contemporáneo que integra espacios interiores y exteriores a través de grandes ventanales y materiales naturales. El proyecto busca maximizar la conexión con el entorno natural mediante la implementación de espacios fluidos y la utilización de materiales nobles que reflejan la identidad del lugar.",
      features: ["Diseño sustentable", "Doble altura", "Piscina integrada", "Jardín vertical", "Sistemas de captación pluvial", "Iluminación LED"],
      fullDescription: "Este proyecto residencial representa la síntesis perfecta entre funcionalidad y estética contemporánea. La vivienda se desarrolla en dos niveles, aprovechando al máximo la topografía del terreno y las vistas panorámicas del entorno. Los espacios interiores se caracterizan por su fluidez y conectividad, creando ambientes que invitan a la contemplación y el descanso."
    },
    {
      id: "2",
      title: "Sicurella Pilar",
      category: "commercial",
      type: "Comercial",
      images: [sicurellaImage, sicurellaImage, sicurellaImage, sicurellaImage],
      location: "Pilar, Buenos Aires",
      year: "2022",
      area: "450 m²",
      description: "Proyecto de Local comercial, donde el blanco y el gris son sus colores protagonistas. En un amplio espacio doble altura con grandes ventanales donde la luz natural es la principal protagonista.",
      features: ["Espacios colaborativos", "Iluminación LED", "Climatización eficiente", "Accesibilidad universal", "Doble altura", "Grandes ventanales"],
      fullDescription: "El diseño de Sicurella Pilar se basa en la creación de un espacio comercial que transmite elegancia y profesionalismo. La paleta cromática neutra, dominada por blancos y grises, genera un ambiente sereno y sofisticado que permite que los productos sean los verdaderos protagonistas del espacio."
    },
    {
      id: "3",
      title: "MEL Inmobiliaria", 
      category: "commercial",
      type: "Remodelación",
      images: [melImage, melImage, melImage, melImage],
      location: "CABA, Buenos Aires",
      year: "2023",
      area: "180 m²",
      description: "Remodelación de inmobiliaria en Ciudad de Buenos Aires, se analizó el espacio para lograr un proyecto integral y que el lugar de trabajo se convierta en un espacio luminoso, cómodo y confortable.",
      features: ["Remodelación integral", "Optimización lumínica", "Espacios confortables", "Diseño funcional", "Mobiliario custom", "Climatización eficiente"],
      fullDescription: "La remodelación de MEL Inmobiliaria transformó completamente un espacio de trabajo tradicional en un ambiente moderno y funcional. El proyecto se enfocó en maximizar la entrada de luz natural y crear zonas de trabajo colaborativo que fomenten la productividad y el bienestar de los empleados."
    },
    {
      id: "4",
      title: "Renovación Apartamento Palermo",
      category: "interior",
      type: "Interiorismo",
      images: [interiorImage, interiorImage, interiorImage, interiorImage],
      location: "Palermo, CABA",
      year: "2023",
      area: "120 m²", 
      description: "Transformación completa de un apartamento histórico, combinando elementos originales con un diseño contemporáneo y funcional.",
      features: ["Preservación histórica", "Mobiliario custom", "Optimización espacial", "Iluminación natural", "Materiales nobles", "Diseño sustentable"],
      fullDescription: "Este proyecto de interiorismo representa un diálogo respetuoso entre la historia y la contemporaneidad. La intervención preserva los elementos arquitectónicos originales del edificio histórico mientras incorpora soluciones de diseño modernas que mejoran la funcionalidad y el confort del espacio."
    },
    {
      id: "5",
      title: "Complejo Residencial Nordelta",
      category: "residential",
      type: "Residencial",
      images: [residentialImage, residentialImage, residentialImage, residentialImage],
      location: "Nordelta, Buenos Aires",
      year: "2022",
      area: "1200 m²",
      description: "Desarrollo de 8 viviendas unifamiliares con diseño sustentable y amenities compartidos, respetando el entorno natural.",
      features: ["Construcción sustentable", "Amenities compartidos", "Paisajismo integrado", "Eficiencia energética", "Espacios verdes", "Seguridad integrada"],
      fullDescription: "Este complejo residencial representa una propuesta innovadora de vida comunitaria sustentable. Las 8 viviendas se distribuyen estratégicamente en el terreno para maximizar la privacidad individual mientras comparten espacios recreativos y de servicios que fortalecen el sentido de comunidad."
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold text-df-charcoal mb-4">Proyecto no encontrado</h1>
            <Button onClick={() => navigate("/")} variant="architect">
              Volver al inicio
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Volver a Proyectos
            </Button>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge className="bg-df-green text-df-beige text-sm">
                {project.type}
              </Badge>
              <div className="flex items-center space-x-4 text-sm text-df-gray-medium">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
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
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-df-charcoal mb-6">
              {project.title}
            </h1>
            
            <p className="text-lg text-df-gray-medium leading-relaxed max-w-4xl">
              {project.fullDescription}
            </p>
          </div>

          {/* Main Image */}
          <div className="mb-12">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-[60vh] object-cover rounded-lg shadow-elegant cursor-pointer hover:scale-[1.02] transition-transform duration-300"
              onClick={() => handleImageClick(0)}
            />
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-semibold text-df-charcoal mb-6">
                Descripción del Proyecto
              </h2>
              <p className="text-df-gray-medium leading-relaxed mb-8">
                {project.description}
              </p>
              
              <h3 className="text-xl font-semibold text-df-charcoal mb-4">
                Características Destacadas
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-df-green/5 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-df-green rounded-full"></div>
                    <span className="text-df-charcoal">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-subtle p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-df-charcoal mb-4">
                  Detalles Técnicos
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-df-gray-medium">Año:</span>
                    <span className="font-medium text-df-charcoal">{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-df-gray-medium">Área:</span>
                    <span className="font-medium text-df-charcoal">{project.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-df-gray-medium">Ubicación:</span>
                    <span className="font-medium text-df-charcoal">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-df-gray-medium">Categoría:</span>
                    <span className="font-medium text-df-charcoal">{project.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-semibold text-df-charcoal mb-8">
              Galería de Imágenes
            </h2>
            <div className="relative">
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img
                          src={image}
                          alt={`${project.title} - Vista ${index + 1}`}
                          className="w-full h-96 object-cover rounded-lg shadow-elegant cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                          onClick={() => handleImageClick(index)}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-subtle p-12 rounded-lg">
            <h2 className="text-2xl font-heading font-semibold text-df-charcoal mb-4">
              ¿Te interesa un proyecto similar?
            </h2>
            <p className="text-df-gray-medium mb-6 max-w-2xl mx-auto">
              Cada proyecto es único y refleja las necesidades específicas de nuestros clientes. 
              Contactanos para conversar sobre tu próximo proyecto.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="architect" size="lg">
                Contactar
              </Button>
              <Button variant="minimal" size="lg" onClick={() => navigate("/")}>
                Ver Más Proyectos
              </Button>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          images={project.images}
          currentIndex={selectedImageIndex}
          onNavigate={setSelectedImageIndex}
          projectTitle={project.title}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;