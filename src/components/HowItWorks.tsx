import { Search, Eye, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Busca el músico ideal",
    description: "Explora perfiles, escucha demos y filtra por categoría, ubicación o precio.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Ver perfil",
    description: "Revisa su portfolio, especialidad, valoraciones y precio desde.",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Contacta directamente",
    description: "Usa el chat interno o WhatsApp para acordar los detalles del evento.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cómo funciona
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Contactar un músico nunca fue tan fácil. Tres pasos y listo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center stagger-item"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-secondary border border-border flex items-center justify-center mx-auto mb-5 text-primary">
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>

              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
