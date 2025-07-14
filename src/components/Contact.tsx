import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Linkedin,
  Clock,
  Award,
  Users
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const nombre = formData.get('nombre') as string;
    const mensaje = formData.get('mensaje') as string;
    
    const subject = `Consulta de ${nombre}`;
    const body = `Hola, soy ${nombre} y me gustaría hablar sobre un proyecto arquitectónico.

Mensaje:
${mensaje}

¡Espero su respuesta!

Saludos,
${nombre}`;
    
    window.location.href = `mailto:arq.dmf@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Edificio Vohe", "Camaño 1234", "Villa Rosa, Buenos Aires"],
      action: "Ver en Google Maps"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+54 11 6094-1504"],
      action: "Llamar ahora"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["arq.dmf@gmail.com"],
      action: "Enviar email"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 9:00 - 18:00", "Sáb: 9:00 - 13:00"],
      action: "Agendar cita"
    }
  ];

  const stats = [
    {
      icon: Award,
      number: "150+",
      label: "Proyectos realizados",
      description: "Más de 150 proyectos exitosos en 20 años"
    },
    {
      icon: Clock,
      number: "20",
      label: "Años de experiencia",
      description: "Trayectoria consolidada desde 2004"
    },
    {
      icon: Users,
      number: "5",
      label: "Profesionales",
      description: "Equipo multidisciplinario especializado"
    }
  ];

  const faqs = [
    {
      question: "¿Qué incluye el servicio de House Review?",
      answer: "Incluye evaluación estructural completa, análisis de instalaciones eléctricas y sanitarias, revisión de carpinterías, y un informe técnico detallado con recomendaciones."
    },
    {
      question: "¿Cuánto tiempo toma una evaluación de House Review?",
      answer: "La visita técnica dura entre 2-3 horas dependiendo del tamaño de la propiedad. El informe completo lo recibís en 48 a 72 horas."
    },
    {
      question: "¿En qué ciudades realizan House Review?",
      answer: "Realizamos evaluaciones en CABA, GBA y principales ciudades del interior. Para localidades específicas consultá disponibilidad."
    },
    {
      question: "¿Qué tipo de propiedades pueden ser evaluadas?",
      answer: "Evaluamos casas, departamentos, oficinas y locales comerciales. Tanto propiedades en venta como para preparar una venta."
    },
    {
      question: "¿El informe incluye estimación de costos de reparación?",
      answer: "Sí, el informe incluye una estimación aproximada de costos para las mejoras sugeridas, categorizadas por prioridad."
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-df-charcoal mb-6">
            Contactanos
          </h2>
          <div className="w-24 h-1 bg-df-green mx-auto mb-8"></div>
          <p className="text-lg text-df-gray-medium max-w-3xl mx-auto">
            Estamos listos para hacer realidad tu proyecto arquitectónico. 
            Contactanos para una consulta personalizada y descubre cómo podemos ayudarte.
          </p>
        </div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Left Column - Form, Map & Location */}
          <div className="space-y-8">
            {/* Contact Form */}
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-heading font-bold text-df-charcoal mb-6">
                Solicita tu Consulta Gratuita
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-df-charcoal mb-2">
                    Nombre completo *
                  </label>
                  <Input 
                    name="nombre"
                    placeholder="Tu nombre completo"
                    className="border-df-gray-light focus:border-df-green"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-df-charcoal mb-2">
                    Contanos sobre tu proyecto
                  </label>
                  <Textarea 
                    name="mensaje"
                    placeholder="Describí brevemente tu proyecto, necesidades, presupuesto aproximado..."
                    className="border-df-gray-light focus:border-df-green min-h-[120px]"
                    rows={5}
                  />
                </div>

                <Button variant="architect" size="lg" type="submit" className="w-full">
                  Enviar Consulta
                </Button>
              </form>
            </Card>

            {/* Map & Location */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Map */}
              <Card className="p-0 overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.8524567895!2d-58.63945!3d-34.50789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd123456789%3A0x123456789abcdef!2sCama%C3%B1o%201234%2C%20Villa%20Rosa%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación DF Arquitectura"
                />
              </Card>

              {/* Location Info */}
              <Card className="p-6 hover:shadow-card transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-df-green/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-df-green" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-df-charcoal mb-2">
                      Ubicación
                    </h4>
                    <p className="text-df-gray-medium text-sm">Edificio Vohe</p>
                    <p className="text-df-gray-medium text-sm">Camaño 1234</p>
                    <p className="text-df-gray-medium text-sm">Villa Rosa, Buenos Aires</p>
                    <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-df-green hover:text-df-charcoal">
                      Ver en Google Maps
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            {/* Phone */}
            <Card className="p-6 hover:shadow-card transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-df-green/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-df-green" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-df-charcoal mb-2">
                    Teléfono
                  </h4>
                  <p className="text-df-gray-medium text-sm">+54 11 6094-1504</p>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-df-green hover:text-df-charcoal">
                    Llamar ahora
                  </Button>
                </div>
              </div>
            </Card>

            {/* Email */}
            <Card className="p-6 hover:shadow-card transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-df-green/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-df-green" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-df-charcoal mb-2">
                    Email
                  </h4>
                  <p className="text-df-gray-medium text-sm">arq.dmf@gmail.com</p>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-df-green hover:text-df-charcoal">
                    Enviar email
                  </Button>
                </div>
              </div>
            </Card>

            {/* Hours */}
            <Card className="p-6 hover:shadow-card transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-df-green/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-df-green" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-df-charcoal mb-2">
                    Horarios
                  </h4>
                  <p className="text-df-gray-medium text-sm">Lun - Vie: 9:00 - 18:00</p>
                  <p className="text-df-gray-medium text-sm">Sáb: 9:00 - 13:00</p>
                  <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-df-green hover:text-df-charcoal">
                    Agendar cita
                  </Button>
                </div>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-6">
              <h4 className="font-semibold text-df-charcoal mb-4">
                Seguinos en redes
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/541160941504"
                  className="bg-df-green/10 p-3 rounded-lg hover:bg-df-green hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-df-green/10 p-3 rounded-lg hover:bg-df-green hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-df-green/10 p-3 rounded-lg hover:bg-df-green hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300">
              <div className="bg-df-green/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-df-green" />
              </div>
              <div className="text-3xl font-heading font-bold text-df-charcoal mb-2">
                {stat.number}
              </div>
              <h4 className="font-semibold text-df-charcoal mb-2">
                {stat.label}
              </h4>
              <p className="text-df-gray-medium text-sm">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div id="faq">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-df-charcoal mb-4">
              Preguntas Frecuentes
            </h3>
            <p className="text-lg text-df-gray-medium max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre nuestros servicios y procesos de trabajo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="multiple" className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-df-gray-light rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-df-gray-light/30 transition-colors text-left">
                    <span className="font-semibold text-df-charcoal">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-df-gray-medium leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-accent p-8 rounded-lg text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contactanos hoy mismo y recibe una consulta gratuita para tu proyecto arquitectónico.
            </p>
            <Button 
              variant="minimal" 
              size="lg" 
              className="bg-white text-df-charcoal hover:bg-df-gray-light"
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;