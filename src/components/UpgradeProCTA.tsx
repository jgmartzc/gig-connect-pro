import { Link } from "react-router-dom";
import { Crown, Star, TrendingUp, Zap, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const UpgradeProCTA = () => {
  return (
    <div className="bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5 border-2 border-accent/40 rounded-xl p-6 relative overflow-hidden">
      {/* Sparkle decorations */}
      <div className="absolute top-2 right-2 text-accent/40">
        <Sparkles className="h-6 w-6 animate-pulse" />
      </div>
      <div className="absolute bottom-2 left-2 text-accent/30">
        <Sparkles className="h-4 w-4 animate-pulse" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="flex items-start gap-4 relative z-10">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-amber-600 flex items-center justify-center shrink-0 shadow-lg shadow-accent/30">
          <Crown className="h-7 w-7 text-black" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-foreground text-lg mb-1 flex items-center gap-2">
            ¡Hazte Pro!
            <span className="text-xs bg-accent text-black px-2 py-0.5 rounded-full font-bold animate-pulse">
              14.99€/mes
            </span>
          </h4>
          <p className="text-sm text-muted-foreground mb-4">
            Destaca sobre otros músicos y recibe más contactos con las ventajas Pro.
          </p>
          <ul className="space-y-2 mb-5 text-sm">
            <li className="flex items-center gap-2 text-foreground">
              <Star className="h-4 w-4 text-accent" />
              Galería de 5 fotos
            </li>
            <li className="flex items-center gap-2 text-foreground">
              <TrendingUp className="h-4 w-4 text-accent" />
              Estadísticas de tu perfil
            </li>
            <li className="flex items-center gap-2 text-foreground">
              <Zap className="h-4 w-4 text-accent" />
              WhatsApp directo con clientes
            </li>
          </ul>
          <Link to="/crear-perfil-pro">
            <Button className="w-full btn-gold-vibrant group text-base h-12">
              <Crown className="h-5 w-5 mr-2" />
              ¡Quiero ser PRO!
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpgradeProCTA;
