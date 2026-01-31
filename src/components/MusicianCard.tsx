import { Star, MapPin, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MusicianCardProps {
  name: string;
  role: string;
  specialty: string;
  location: string;
  pricePerHour: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isVerified?: boolean;
  delay?: number;
}

const MusicianCard = ({
  name,
  role,
  specialty,
  location,
  pricePerHour,
  rating,
  reviewCount,
  imageUrl,
  isVerified = false,
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
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name & Verified */}
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-foreground truncate">{name}</h3>
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
            <Star className="h-4 w-4 text-primary fill-current" />
            <span className="font-medium text-foreground">{rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({reviewCount})</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-muted-foreground">Desde </span>
            <span className="font-bold text-foreground">{pricePerHour}€</span>
          </div>
        </div>

        {/* CTA */}
        <Button 
          className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Ver perfil
        </Button>
      </div>
    </div>
  );
};

export default MusicianCard;
