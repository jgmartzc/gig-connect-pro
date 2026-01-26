import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Marketplace #1 de músicos en España
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            La forma fácil de conectar{" "}
            <span className="text-gradient-primary">músicos y eventos</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Tu próximo gig, a un clic. Encuentra el músico perfecto para tu evento o crea tu perfil y empieza a recibir reservas.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="¿Qué tipo de músico buscas?"
                className="pl-12 h-12 text-base search-input"
              />
            </div>
            <Button size="lg" className="h-12 px-8 btn-primary-glow group">
              <span className="relative z-10 flex items-center gap-2">
                Buscar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Músicos activos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">2,000+</div>
              <div className="text-sm text-muted-foreground">Eventos realizados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">4.9★</div>
              <div className="text-sm text-muted-foreground">Valoración media</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
