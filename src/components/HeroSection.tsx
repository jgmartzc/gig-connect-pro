import { Link } from "react-router-dom";
import { ArrowRight, Music, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToCategories = () => {
    document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Marketplace #1 de artistas en España
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in tracking-tight" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient-primary">Clickgigs</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            Tu próximo gran evento empieza con un click
          </p>

          {/* Secondary Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Conectamos artistas excepcionales con personas que buscan experiencias inolvidables
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground group shadow-lg shadow-primary/25"
              onClick={scrollToCategories}
            >
              <span className="flex items-center gap-2">
                Explorar artistas
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            <Link to="/crear-perfil">
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 text-lg border-2 border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 group"
              >
                <Music className="h-5 w-5 mr-2" />
                Soy artista
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-12 mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Artistas activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground">2,000+</div>
              <div className="text-sm text-muted-foreground mt-1">Eventos realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold">4.9★</div>
              <div className="text-sm text-muted-foreground mt-1">Valoración media</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
