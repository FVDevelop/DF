import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import houseReviewImage from "@/assets/technical-consultation.jpg";

const HouseReview = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate('/', { state: { scrollTo: 'contacto' } });
  };

  const idealFor = [
    "Estás por comprar una vivienda y querés saber en qué estado real está",
    "Sos propietario y querés preparar la venta con información clara y sin sorpresas",
    "Estás ayudando a un familiar o cliente a elegir su próxima casa",
    "No querés descubrir problemas después de firmar"
  ];

  const steps = [
    {
      number: "1",
      title: "Completá el formulario de contacto",
      description: "Dejanos tus datos y contanos qué propiedad querés evaluar."
    },
    {
      number: "2", 
      title: "Coordinamos una visita",
      description: "Un profesional del equipo se comunica con vos para coordinar día y horario."
    },
    {
      number: "3",
      title: "Hacemos la evaluación técnica",
      description: "Visitamos la propiedad con vos o con tu inmobiliaria."
    },
    {
      number: "4",
      title: "Recibís tu informe",
      description: "En 48 a 72 hs te enviamos el informe técnico con todos los detalles."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button
              variant="ghost"
              onClick={() => navigate('/', { state: { scrollTo: 'servicios' } })}
              className="flex items-center space-x-2 text-df-charcoal hover:text-df-green"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Volver a Servicios</span>
            </Button>
            
            <div className="flex items-center space-x-4">
              <a href="tel:+541160941504" className="text-df-green hover:text-df-charcoal transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="mailto:arq.dmf@gmail.com" className="text-df-green hover:text-df-charcoal transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://wa.me/541160941504" className="text-df-green hover:text-df-charcoal transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-6 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-2xl md:text-3xl font-heading font-bold text-df-charcoal mb-3">
                House Review
              </h1>
              <p className="text-sm text-df-gray-medium mb-4 leading-relaxed">
                Una decisión importante merece una mirada experta. Te ayudamos a conocer el estado real de cualquier propiedad antes de comprar o vender.
              </p>
              <Button variant="architect" onClick={handleContactClick}>
                Solicitar House Review
              </Button>
            </div>
            
            <div className="relative lg:col-span-1">
              <img
                src={houseReviewImage}
                alt="House Review - Evaluación técnica de propiedades"
                className="w-full h-48 object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-df-charcoal/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-heading font-bold text-df-charcoal mb-6 text-center">
              Ideal para vos si...
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {idealFor.map((item, index) => (
                <Card key={index} className="p-3 hover:shadow-card transition-all duration-300">
                  <div className="flex items-start space-x-2">
                    <div className="bg-df-green/10 p-1.5 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-3.5 w-3.5 text-df-green" />
                    </div>
                    <p className="text-df-charcoal text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Hire Section */}
      <section className="py-6 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl font-heading font-bold text-df-charcoal mb-2">
                ¿Cómo contratar el servicio?
              </h2>
              <p className="text-sm text-df-gray-medium">
                Un proceso simple y profesional para obtener la información que necesitás
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <Card key={index} className="p-3 hover:shadow-card transition-all duration-300 text-center">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-df-green text-white text-base font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-df-charcoal mb-1">
                        {step.title}
                      </h3>
                      <p className="text-df-gray-medium text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-6">
              <div className="bg-df-green/10 p-3 rounded-lg">
                <p className="text-sm font-semibold text-df-charcoal">
                  ¡Listo! Ahora podés decidir con información real y respaldo profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-6 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gradient-accent p-4 rounded-lg text-white max-w-3xl mx-auto">
              <h3 className="text-lg font-heading font-bold mb-2">
                ¿Listo para conocer el estado real de tu propiedad?
              </h3>
              <p className="text-sm mb-3 opacity-90">
                Contactanos hoy mismo y recibí tu evaluación técnica profesional en 72 horas.
              </p>
              <Button 
                variant="minimal" 
                className="bg-white text-df-charcoal hover:bg-df-gray-light"
                onClick={handleContactClick}
              >
                Solicitar House Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-df-charcoal text-white py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-df-gray-light text-sm">
              © 2024 Daniela Figiacone Arquitectura. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HouseReview;