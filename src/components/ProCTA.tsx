import { Link } from "react-router-dom";
import { ArrowRight, Zap, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProCTAProps {
  variant?: "banner" | "inline" | "floating";
}

const ProCTA = ({ variant = "banner" }: ProCTAProps) => {
  if (variant === "floating") {
    return (
      <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
        <Link to="/crear-perfil">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 group"
          >
            <Zap className="h-4 w-4 mr-2" />
            Hazte Pro
            <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-xl p-4 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">¿Eres músico profesional?</p>
            <p className="text-xs text-muted-foreground">Crea tu perfil gratis y empieza a recibir contactos</p>
          </div>
        </div>
        <Link to="/crear-perfil">
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
            <span className="flex items-center gap-1">
              Hazte Pro
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </Link>
      </div>
    );
  }

  // Banner variant (default)
  return (
    <section className="py-8 bg-gradient-to-r from-primary/10 via-background to-primary/5 border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <Zap className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                ¿Eres músico? <span className="text-primary">Hazte Pro</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                Crea tu perfil gratis y conecta con clientes que buscan tu talento
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Star className="h-4 w-4 text-primary" />
                <span>0€ registro</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>500+ músicos</span>
              </div>
            </div>
            
            <Link to="/crear-perfil">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group whitespace-nowrap">
                <span className="flex items-center gap-2">
                  Crear perfil gratis
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProCTA;
