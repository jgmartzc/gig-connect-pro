import { Eye, MessageCircle, Star, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProStatsProps {
  views: number;
  messages: number;
  rating: number;
  bookings: number;
}

const ProStats = ({ views, messages, rating, bookings }: ProStatsProps) => {
  return (
    <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-accent" />
          Estadísticas PRO
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary/50 rounded-lg p-3 text-center">
            <Eye className="h-5 w-5 mx-auto mb-1 text-primary" />
            <div className="text-2xl font-bold text-foreground">{views.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground">Visitas al perfil</div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-3 text-center">
            <MessageCircle className="h-5 w-5 mx-auto mb-1 text-primary" />
            <div className="text-2xl font-bold text-foreground">{messages}</div>
            <div className="text-xs text-muted-foreground">Mensajes recibidos</div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-3 text-center">
            <Star className="h-5 w-5 mx-auto mb-1 text-accent fill-accent" />
            <div className="text-2xl font-bold text-foreground">{rating.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground">Valoración media</div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-3 text-center">
            <TrendingUp className="h-5 w-5 mx-auto mb-1 text-green-500" />
            <div className="text-2xl font-bold text-foreground">{bookings}</div>
            <div className="text-xs text-muted-foreground">Contrataciones</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProStats;
