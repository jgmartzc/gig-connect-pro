import { Link } from "react-router-dom";
import { ArrowRight, Music, MessageCircle, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicianCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs mb-4">
                <Music className="h-3 w-3" />
                100% Gratuito
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Eres músico?{" "}
                <span className="text-primary">Crea tu perfil</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Crea tu perfil profesional y empieza a recibir contactos de clientes interesados.
              </p>
              
              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Music className="h-4 w-4 text-primary" />
                  </div>
                  Perfil profesional con portfolio
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-4 w-4 text-primary" />
                  </div>
                  Chat interno o contacto por WhatsApp
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-4 w-4 text-primary" />
                  </div>
                  Tú defines tu precio desde
                </li>
              </ul>

              <Link to="/crear-perfil">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                  <span className="flex items-center gap-2">
                    <Music className="h-4 w-4" />
                    Crear Perfil Gratis
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">0€</div>
                <div className="text-sm text-muted-foreground">Registro gratis</div>
              </div>
              <div className="bg-secondary rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Aprobación del perfil</div>
              </div>
              <div className="bg-secondary rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-foreground mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Músicos activos</div>
              </div>
              <div className="bg-secondary rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Contacto directo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicianCTA;
