import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

const Press = () => {
  const pressArticles = [
    {
      id: 1,
      title: "Daniela Figiacone: La Visión Arquitectónica del Futuro",
      publication: "Country Magazine",
      issue: "#20",
      date: "2023",
      description: "Un extenso reportaje sobre la carrera y filosofía arquitectónica de Daniela Figiacone, explorando sus proyectos más emblemáticos y su enfoque sustentable en el diseño contemporáneo.",
      highlights: [
        "Filosofía de diseño sustentable",
        "Proyectos residenciales destacados",
        "Innovación en espacios comerciales"
      ],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Espacios que Transforman: El Arte de Daniela Figiacone",
      publication: "Country Magazine",
      issue: "#23",
      date: "2023",
      description: "Una mirada profunda a los proyectos más recientes de la arquitecta, destacando su capacidad para crear espacios que transforman la experiencia de vida de sus habitantes.",
      highlights: [
        "Técnicas de optimización espacial",
        "Integración interior-exterior",
        "Materiales nobles y sustentables"
      ],
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="prensa" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-df-charcoal mb-6">
            Prensa & Reconocimientos
          </h2>
          <div className="w-24 h-1 bg-df-green mx-auto mb-8"></div>
          <p className="text-lg text-df-gray-medium max-w-3xl mx-auto">
            La trayectoria y visión arquitectónica de Daniela Figiacone ha sido reconocida 
            por importantes medios especializados del sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pressArticles.map((article) => (
            <Card key={article.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-500">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-df-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-df-green text-df-beige">
                  {article.publication}
                </Badge>
                <Badge className="absolute top-4 right-4 bg-df-charcoal/80 text-df-beige">
                  {article.issue}
                </Badge>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3 text-sm text-df-gray-medium">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-df-charcoal mb-3 group-hover:text-df-green transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-df-gray-medium mb-4 text-sm leading-relaxed">
                  {article.description}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-df-charcoal">Temas destacados:</h4>
                  <div className="space-y-1">
                    {article.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-df-green rounded-full"></div>
                        <span className="text-xs text-df-gray-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full group/btn flex items-center justify-between hover:bg-df-green/10 text-left"
                >
                  <span>Leer Artículo Completo</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 flex-shrink-0" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Press;