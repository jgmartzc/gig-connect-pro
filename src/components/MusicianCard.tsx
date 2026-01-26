import { Star, MapPin, BadgeCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MusicianCardProps {
  name: string;
  role: string;
  location: string;
  pricePerHour: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isVerified?: boolean;
  isAvailable?: boolean;
  delay?: number;
}

const MusicianCard = ({
  name,
  role,
  location,
  pricePerHour,
  rating,
  reviewCount,
  imageUrl,
  isVerified = false,
  isAvailable = true,
  delay = 0,
}: MusicianCardProps) => {
  return (
    <div 
      className="group bg-card border border-border rounded-xl overflow-hidden card-hover stagger-item"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isAvailable && (
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-primary/90 text-primary-foreground border-0 text-xs">
              <Clock className="h-3 w-3 mr-1" />
              Disponible
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name & Verified */}
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-foreground truncate">{name}</h3>
          {isVerified && (
            <BadgeCheck className="h-4 w-4 text-verified shrink-0" />
          )}
        </div>

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
            <Star className="h-4 w-4 star-rating fill-current" />
            <span className="font-medium text-foreground">{rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
          <div className="text-right">
            <span className="font-bold text-foreground">{pricePerHour}€</span>
            <span className="text-xs text-muted-foreground">/hora</span>
          </div>
        </div>

        {/* CTA */}
        <Button 
          variant="secondary" 
          className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        >
          Ver perfil
        </Button>
      </div>
    </div>
  );
};

export default MusicianCard;
