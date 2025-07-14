import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Users, Briefcase, ShoppingCart, Lightbulb } from "lucide-react";
import teamImage from "@/assets/team-portrait.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Arq. Daniela Figiacone",
      role: "Directora",
      icon: User,
      description: "Arquitecta con más de 20 años de experiencia en proyectos residenciales y comerciales"
    },
    {
      name: "Nicolás Rodao",
      role: "Dirección de obra y logística",
      icon: Briefcase,
      description: "Especialista en coordinación de obras y gestión de proyectos"
    },
    {
      name: "Sofía Regueira",
      role: "Administración y Soporte",
      icon: Users,
      description: "Responsable de la gestión administrativa y atención al cliente"
    },
    {
      name: "Camila Seyahian",
      role: "Proyectista",
      icon: Lightbulb,
      description: "Especializada en desarrollo de proyectos y diseño técnico"
    },
    {
      name: "Mariana Herrasti",
      role: "Administración y compras",
      icon: ShoppingCart,
      description: "Gestión de proveedores y administración de recursos"
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Análisis de Necesidades",
      description: "Estudiamos en profundidad los requerimientos y expectativas del cliente"
    },
    {
      step: "02", 
      title: "Desarrollo del Proyecto",
      description: "Creamos soluciones arquitectónicas innovadoras y funcionales"
    },
    {
      step: "03",
      title: "Ejecución Técnica",
      description: "Supervisamos cada etapa de la construcción con máxima calidad"
    },
    {
      step: "04",
      title: "Entrega Final",
      description: "Garantizamos un resultado que supere las expectativas iniciales"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Philosophy Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-df-charcoal mb-6">
            Nuestra Filosofía
          </h2>
          <div className="w-24 h-1 bg-df-green mx-auto mb-8"></div>
          <blockquote className="text-xl md:text-2xl font-heading italic text-df-green max-w-4xl mx-auto leading-relaxed">
            "Reconocer una necesidad es una de las condiciones principales para lograr el éxito del proyecto"
          </blockquote>
          <p className="text-base text-df-gray-medium max-w-3xl mx-auto mt-6">
            En DF Arquitectura creemos que cada proyecto nace de una necesidad específica. 
            Nuestro enfoque se centra en comprender profundamente estos requerimientos 
            para crear soluciones arquitectónicas únicas y funcionales.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-df-charcoal mb-6">
                Nuestro Equipo
              </h3>
              <p className="text-base text-df-gray-medium mb-8">
                Un equipo multidisciplinario de profesionales comprometidos con la excelencia 
                en cada proyecto. Combinamos experiencia técnica con visión creativa para 
                entregar resultados excepcionales.
              </p>
              
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="p-4 hover:shadow-card transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-df-green/10 p-2 rounded-lg">
                        <member.icon className="h-5 w-5 text-df-green" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-df-charcoal">{member.name}</h4>
                        <p className="text-df-green text-sm font-medium mb-1">{member.role}</p>
                        <p className="text-df-gray-medium text-sm">{member.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src={teamImage}
                alt="Equipo DF Arquitectura"
                className="w-full h-96 object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-df-charcoal/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* How We Work Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-bold text-df-charcoal mb-4">
              Cómo Trabajamos
            </h3>
            <p className="text-base text-df-gray-medium max-w-2xl mx-auto">
              Nuestro proceso garantiza resultados excepcionales a través de 
              una metodología probada y un enfoque centrado en el cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((process, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent"></div>
                <div className="text-4xl font-heading font-bold text-df-green mb-4">
                  {process.step}
                </div>
                <h4 className="font-semibold text-df-charcoal mb-3">
                  {process.title}
                </h4>
                <p className="text-df-gray-medium text-sm">
                  {process.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-heading font-bold text-df-charcoal mb-4">
              Comentarios de Clientes
            </h3>
            <p className="text-base text-df-gray-medium max-w-2xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mayor recompensa. Estas son algunas de sus experiencias trabajando con nosotros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "María González",
                project: "Casa Nordelta",
                comment: "Excelente trabajo en nuestra casa en Nordelta. Daniela y su equipo superaron todas nuestras expectativas con un diseño funcional y hermoso.",
                rating: 5,
                date: "2023"
              },
              {
                name: "Juan Carlos Pérez",
                project: "House Review Villa Rosa",
                comment: "El House Review nos salvó de una mala compra. El informe fue muy detallado y nos ayudó a tomar la decisión correcta.",
                rating: 5,
                date: "2023"
              },
              {
                name: "Laura Rodríguez",
                project: "Remodelación Palermo",
                comment: "Profesionalismo y atención al detalle excepcional. Transformaron completamente nuestro apartamento histórico respetando su esencia.",
                rating: 5,
                date: "2023"
              },
              {
                name: "Roberto Silva",
                project: "Local Comercial",
                comment: "Transformaron completamente nuestro local comercial. El resultado final superó nuestras expectativas y mejoró significativamente nuestro negocio.",
                rating: 5,
                date: "2022"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-df-green rounded-full"></div>
                  ))}
                </div>
                <p className="text-df-gray-medium text-sm leading-relaxed mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-df-charcoal text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-df-gray-medium text-xs">
                    {testimonial.project} • {testimonial.date}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="architect" size="lg">
            Conoce más sobre nosotros
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;