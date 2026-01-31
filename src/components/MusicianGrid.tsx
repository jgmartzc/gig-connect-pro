import MusicianCard from "./MusicianCard";

const musicians = [
  {
    id: 1,
    name: "Javier R.",
    role: "Cantautor de Rock",
    specialty: "Cantantes",
    location: "Madrid",
    pricePerHour: 75,
    rating: 4.9,
    reviewCount: 47,
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    isVerified: true,
  },
  {
    id: 2,
    name: "María P.",
    role: "Cantante Soul & R&B",
    specialty: "Cantantes",
    location: "Barcelona",
    pricePerHour: 120,
    rating: 4.8,
    reviewCount: 89,
    imageUrl: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=300&fit=crop",
    isVerified: true,
  },
  {
    id: 3,
    name: "Sofía F.",
    role: "Saxofonista Soulful",
    specialty: "Saxofonistas",
    location: "Valencia",
    pricePerHour: 85,
    rating: 5.0,
    reviewCount: 32,
    imageUrl: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=300&fit=crop",
    isVerified: true,
  },
  {
    id: 4,
    name: "Carlos T.",
    role: "Guitarrista Clásico",
    specialty: "Guitarristas",
    location: "Sevilla",
    pricePerHour: 65,
    rating: 4.7,
    reviewCount: 28,
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop",
    isVerified: false,
  },
  {
    id: 5,
    name: "Elena M.",
    role: "Cantante de Jazz",
    specialty: "Cantantes",
    location: "Bilbao",
    pricePerHour: 95,
    rating: 4.9,
    reviewCount: 56,
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
    isVerified: true,
  },
  {
    id: 6,
    name: "David S.",
    role: "Guitarrista Flamenco",
    specialty: "Guitarristas",
    location: "Málaga",
    pricePerHour: 55,
    rating: 4.6,
    reviewCount: 19,
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
    isVerified: false,
  },
  {
    id: 7,
    name: "Laura K.",
    role: "Violinista Clásica",
    specialty: "Violinistas",
    location: "Zaragoza",
    pricePerHour: 80,
    rating: 4.8,
    reviewCount: 41,
    imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&h=300&fit=crop",
    isVerified: true,
  },
  {
    id: 8,
    name: "Pablo G.",
    role: "Pianista Clásico",
    specialty: "Pianistas",
    location: "Granada",
    pricePerHour: 90,
    rating: 4.9,
    reviewCount: 63,
    imageUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=300&fit=crop",
    isVerified: true,
  },
  {
    id: 9,
    name: "Ana B.",
    role: "Cantante Pop",
    specialty: "Cantantes",
    location: "Alicante",
    pricePerHour: 70,
    rating: 4.7,
    reviewCount: 35,
    imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=300&fit=crop",
    isVerified: false,
  },
  {
    id: 10,
    name: "Miguel R.",
    role: "Saxofonista Jazz",
    specialty: "Saxofonistas",
    location: "Madrid",
    pricePerHour: 95,
    rating: 4.9,
    reviewCount: 52,
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&h=300&fit=crop",
    isVerified: true,
  },
  {
    id: 11,
    name: "Carmen L.",
    role: "Pianista Jazz",
    specialty: "Pianistas",
    location: "Sevilla",
    pricePerHour: 85,
    rating: 4.8,
    reviewCount: 38,
    imageUrl: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=400&h=300&fit=crop",
    isVerified: true,
  },
  {
    id: 12,
    name: "Roberto M.",
    role: "Violinista Moderno",
    specialty: "Violinistas",
    location: "Barcelona",
    pricePerHour: 75,
    rating: 4.6,
    reviewCount: 29,
    imageUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=400&h=300&fit=crop",
    isVerified: false,
  },
];

interface MusicianGridProps {
  selectedSubcategory: string | null;
}

const MusicianGrid = ({ selectedSubcategory }: MusicianGridProps) => {
  const filteredMusicians = selectedSubcategory && selectedSubcategory !== "Otros"
    ? musicians.filter(m => m.specialty === selectedSubcategory)
    : musicians;

  const title = selectedSubcategory 
    ? `${selectedSubcategory} Destacados`
    : "Perfiles Destacados";

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <span className="text-sm text-muted-foreground">{filteredMusicians.length} músicos disponibles</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredMusicians.map((musician, index) => (
          <MusicianCard
            key={musician.id}
            {...musician}
            delay={index * 80}
          />
        ))}
      </div>

      {filteredMusicians.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No hay músicos en esta categoría aún.</p>
        </div>
      )}
    </div>
  );
};

export default MusicianGrid;
