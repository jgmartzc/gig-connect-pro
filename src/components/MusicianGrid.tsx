import MusicianCard from "./MusicianCard";
import { Crown } from "lucide-react";

const musicians = [
  // PRO Musicians (will appear first)
  {
    id: 1,
    name: "María P.",
    role: "Cantante Soul & R&B",
    specialty: "Cantantes",
    location: "Barcelona",
    pricePerHour: 150,
    rating: 4.9,
    reviewCount: 127,
    imageUrl: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=300&fit=crop",
    isVerified: true,
    isPro: true,
  },
  {
    id: 2,
    name: "Pablo G.",
    role: "Pianista Clásico & Jazz",
    specialty: "Pianistas",
    location: "Madrid",
    pricePerHour: 120,
    rating: 5.0,
    reviewCount: 98,
    imageUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=300&fit=crop",
    isVerified: true,
    isPro: true,
  },
  {
    id: 3,
    name: "Sofía F.",
    role: "Saxofonista Soulful",
    specialty: "Saxofonistas",
    location: "Valencia",
    pricePerHour: 130,
    rating: 4.9,
    reviewCount: 76,
    imageUrl: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=300&fit=crop",
    isVerified: true,
    isPro: true,
  },
  {
    id: 4,
    name: "Laura K.",
    role: "Violinista Clásica",
    specialty: "Violinistas",
    location: "Zaragoza",
    pricePerHour: 110,
    rating: 4.8,
    reviewCount: 64,
    imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&h=300&fit=crop",
    isVerified: true,
    isPro: true,
  },
  // FREE Musicians (appear below PRO)
  {
    id: 5,
    name: "Javier R.",
    role: "Cantautor de Rock",
    specialty: "Cantantes",
    location: "Madrid",
    pricePerHour: 75,
    rating: 4.7,
    reviewCount: 47,
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    isVerified: true,
    isPro: false,
  },
  {
    id: 6,
    name: "Carlos T.",
    role: "Guitarrista Clásico",
    specialty: "Guitarristas",
    location: "Sevilla",
    pricePerHour: 65,
    rating: 4.6,
    reviewCount: 28,
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop",
    isVerified: false,
    isPro: false,
  },
  {
    id: 7,
    name: "Elena M.",
    role: "Cantante de Jazz",
    specialty: "Cantantes",
    location: "Bilbao",
    pricePerHour: 85,
    rating: 4.8,
    reviewCount: 56,
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
    isVerified: true,
    isPro: false,
  },
  {
    id: 8,
    name: "David S.",
    role: "Guitarrista Flamenco",
    specialty: "Guitarristas",
    location: "Málaga",
    pricePerHour: 55,
    rating: 4.5,
    reviewCount: 19,
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
    isVerified: false,
    isPro: false,
  },
  {
    id: 9,
    name: "Ana B.",
    role: "Cantante Pop",
    specialty: "Cantantes",
    location: "Alicante",
    pricePerHour: 70,
    rating: 4.6,
    reviewCount: 35,
    imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=300&fit=crop",
    isVerified: false,
    isPro: false,
  },
  {
    id: 10,
    name: "Miguel R.",
    role: "Saxofonista Jazz",
    specialty: "Saxofonistas",
    location: "Madrid",
    pricePerHour: 80,
    rating: 4.7,
    reviewCount: 42,
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&h=300&fit=crop",
    isVerified: true,
    isPro: false,
  },
  {
    id: 11,
    name: "Carmen L.",
    role: "Pianista Jazz",
    specialty: "Pianistas",
    location: "Sevilla",
    pricePerHour: 75,
    rating: 4.6,
    reviewCount: 38,
    imageUrl: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=400&h=300&fit=crop",
    isVerified: true,
    isPro: false,
  },
  {
    id: 12,
    name: "Roberto M.",
    role: "Violinista Moderno",
    specialty: "Violinistas",
    location: "Barcelona",
    pricePerHour: 70,
    rating: 4.5,
    reviewCount: 29,
    imageUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400&h=300&fit=crop",
    isVerified: false,
    isPro: false,
  },
  {
    id: 13,
    name: "Isabel C.",
    role: "Cantante Lírica",
    specialty: "Cantantes",
    location: "Granada",
    pricePerHour: 90,
    rating: 4.8,
    reviewCount: 51,
    imageUrl: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=400&h=300&fit=crop",
    isVerified: true,
    isPro: false,
  },
  {
    id: 14,
    name: "Fernando A.",
    role: "Guitarrista Acústico",
    specialty: "Guitarristas",
    location: "Valencia",
    pricePerHour: 60,
    rating: 4.4,
    reviewCount: 22,
    imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=300&fit=crop",
    isVerified: false,
    isPro: false,
  },
  {
    id: 15,
    name: "Lucía V.",
    role: "Cantante Indie",
    specialty: "Cantantes",
    location: "San Sebastián",
    pricePerHour: 65,
    rating: 4.5,
    reviewCount: 31,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
    isVerified: false,
    isPro: false,
  },
  {
    id: 16,
    name: "Andrés J.",
    role: "Saxofonista Clásico",
    specialty: "Saxofonistas",
    location: "Murcia",
    pricePerHour: 70,
    rating: 4.6,
    reviewCount: 27,
    imageUrl: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400&h=300&fit=crop",
    isVerified: true,
    isPro: false,
  },
];

interface MusicianGridProps {
  selectedSubcategory: string | null;
}

const MusicianGrid = ({ selectedSubcategory }: MusicianGridProps) => {
  // Filter by subcategory
  const filteredMusicians = selectedSubcategory && selectedSubcategory !== "Otros"
    ? musicians.filter(m => m.specialty === selectedSubcategory)
    : musicians;

  // Sort: PRO profiles first
  const sortedMusicians = [...filteredMusicians].sort((a, b) => {
    if (a.isPro && !b.isPro) return -1;
    if (!a.isPro && b.isPro) return 1;
    return 0;
  });

  const proCount = sortedMusicians.filter(m => m.isPro).length;
  const freeCount = sortedMusicians.filter(m => !m.isPro).length;

  const title = selectedSubcategory 
    ? `${selectedSubcategory} Destacados`
    : "Artistas Destacados";

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1 text-accent">
            <Crown className="h-4 w-4" />
            {proCount} Pro
          </span>
          <span className="text-muted-foreground">{freeCount} Free</span>
        </div>
      </div>

      {/* PRO Section */}
      {proCount > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Crown className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold text-foreground">Artistas PRO</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {sortedMusicians.filter(m => m.isPro).map((musician, index) => (
              <MusicianCard
                key={musician.id}
                {...musician}
                delay={index * 80}
              />
            ))}
          </div>
        </div>
      )}

      {/* FREE Section */}
      {freeCount > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold text-foreground">Más artistas</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {sortedMusicians.filter(m => !m.isPro).map((musician, index) => (
              <MusicianCard
                key={musician.id}
                {...musician}
                delay={(proCount + index) * 80}
              />
            ))}
          </div>
        </div>
      )}

      {sortedMusicians.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No hay artistas en esta categoría aún.</p>
        </div>
      )}
    </div>
  );
};

export default MusicianGrid;
