import { Link } from "react-router-dom";
import { ArrowRight, Zap, Star, TrendingUp, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProCTAProps {
  variant?: "banner" | "inline" | "floating" | "upgrade";
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
            Crear Perfil
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
              Crear Perfil
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </Link>
      </div>
    );
  }

  // Upgrade variant - for suggesting Free users to upgrade to Pro
  if (variant === "upgrade") {
    return (
      <div className="bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/30 rounded-xl p-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
            <Crown className="h-6 w-6 text-amber-500" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-1 flex items-center gap-2">
              Hazte Pro
              <span className="text-xs bg-amber-500/20 text-amber-500 px-2 py-0.5 rounded-full">15€/mes</span>
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Destaca sobre otros músicos y recibe más contactos con las ventajas Pro.
            </p>
            <ul className="space-y-2 mb-4 text-sm">
              <li className="flex items-center gap-2 text-foreground">
                <Star className="h-4 w-4 text-amber-500" />
                Galería de 5 fotos
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <TrendingUp className="h-4 w-4 text-amber-500" />
                Múltiples especialidades
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <Zap className="h-4 w-4 text-amber-500" />
                Insignia PRO verificada
              </li>
            </ul>
            <Link to="/crear-perfil-pro">
              <Button className="w-full bg-amber-500 hover:bg-amber-500/90 text-black font-semibold group">
                <Crown className="h-4 w-4 mr-2" />
                Hazte Pro
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
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
                ¿Eres músico? <span className="text-primary">Únete gratis</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                Crea tu perfil y conecta con clientes que buscan tu talento
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
                  Crear Perfil Gratis
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
