import { Link } from "react-router-dom";
import { Star, MapPin, BadgeCheck, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MusicianCardProps {
  id: number;
  name: string;
  role: string;
  specialty: string;
  location: string;
  pricePerHour: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isVerified?: boolean;
  isPro?: boolean;
  delay?: number;
}

const MusicianCard = ({
  id,
  name,
  role,
  specialty,
  location,
  pricePerHour,
  rating,
  reviewCount,
  imageUrl,
  isVerified = false,
  isPro = false,
  delay = 0,
}: MusicianCardProps) => {
  return (
    <div 
      className={`group bg-card border rounded-xl overflow-hidden card-hover stagger-item ${
        isPro ? "border-accent/50 ring-1 ring-accent/20" : "border-border"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <Link to={`/musico/${id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* PRO Badge */}
          {isPro && (
            <div className="absolute top-3 left-3 badge-pro flex items-center gap-1 shadow-lg">
              <Crown className="h-3 w-3" />
              PRO
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Name & Verified */}
        <div className="flex items-center gap-2 mb-1">
          <Link to={`/musico/${id}`} className="hover:text-primary transition-colors">
            <h3 className="font-semibold text-foreground truncate">{name}</h3>
          </Link>
          {isVerified && (
            <BadgeCheck className="h-4 w-4 text-primary shrink-0" />
          )}
        </div>

        {/* Specialty */}
        <p className="text-sm text-primary font-medium mb-1">{specialty}</p>

        {/* Role */}
        <p className="text-sm text-muted-foreground mb-2">{role}</p>

        {/* Location */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
          <MapPin className="h-3 w-3" />
          <span>{location}</span>
        </div>

        {/* Rating & Price */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-1">
            <Star className={`h-4 w-4 fill-current ${isPro ? "text-accent" : "text-primary"}`} />
            <span className="font-medium text-foreground">{rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-muted-foreground">Desde </span>
            <span className="font-bold text-foreground">{pricePerHour}€</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4 space-y-2">
          <Link to={`/musico/${id}`}>
            <Button 
              className={`w-full ${
                isPro 
                  ? "btn-gold" 
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              }`}
            >
              Ver perfil
            </Button>
          </Link>
          
          {/* Hazte Pro button for FREE profiles */}
          {!isPro && (
            <Link to="/crear-perfil-pro">
              <Button 
                className="w-full btn-gold-vibrant"
              >
                <Crown className="h-4 w-4 mr-2" />
                ¡Hazte Pro!
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicianCard;
