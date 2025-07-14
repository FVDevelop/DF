import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Arquitectura moderna DF Arquitectura"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-df-charcoal/90 via-df-charcoal/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
              DF{" "}
              <span className="text-df-beige block md:inline">
                Arquitectura
              </span>
            </h1>
            
            <div className="w-24 h-1 bg-df-green mb-8"></div>
            
            <p className="text-lg md:text-xl text-df-beige font-light max-w-3xl leading-relaxed mb-4">
              <span className="font-heading italic text-df-green">
                "Reconocer una necesidad es una de las condiciones principales para lograr el éxito del proyecto"
              </span>
            </p>
            
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-base"
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Nuestros Proyectos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="minimal" 
              size="lg" 
              className="text-base text-white border-white hover:bg-white hover:text-df-charcoal"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contactar Estudio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4 text-white">
              <div className="bg-df-green/20 p-3 rounded-lg">
                <Calendar className="h-6 w-6 text-df-green" />
              </div>
              <div>
                <div className="text-xl font-bold">20+</div>
                <div className="text-df-gray-light text-sm">Años de experiencia</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-white">
              <div className="bg-df-green/20 p-3 rounded-lg">
                <Award className="h-6 w-6 text-df-green" />
              </div>
              <div>
                <div className="text-xl font-bold">150+</div>
                <div className="text-df-gray-light text-sm">Proyectos realizados</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;