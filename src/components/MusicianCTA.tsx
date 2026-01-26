import { ArrowRight, Music, Calendar, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicianCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 hero-glow opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Eres músico?{" "}
                <span className="text-gradient-primary">Únete gratis</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Crea tu perfil profesional, gestiona tu disponibilidad y empieza a recibir reservas de clientes verificados.
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
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  Calendario de disponibilidad integrado
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-4 w-4 text-primary" />
                  </div>
                  Pagos seguros y sin comisiones ocultas
                </li>
              </ul>

              <Button size="lg" className="btn-primary-glow group">
                <span className="relative z-10 flex items-center gap-2">
                  Crear mi perfil gratis
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-foreground mb-1">0€</div>
                <div className="text-sm text-muted-foreground">Comisión de registro</div>
              </div>
              <div className="bg-secondary rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-foreground mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Aprobación del perfil</div>
              </div>
              <div className="bg-secondary rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-foreground mb-1">5%</div>
                <div className="text-sm text-muted-foreground">Comisión por reserva</div>
              </div>
              <div className="bg-secondary rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Pagos seguros</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicianCTA;
