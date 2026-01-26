import MusicianCard from "./MusicianCard";

const musicians = [
  {
    id: 1,
    name: "Javier R.",
    role: "Cantautor de Rock",
    location: "Madrid",
    pricePerHour: 75,
    rating: 4.9,
    reviewCount: 47,
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    isVerified: true,
    isAvailable: true,
  },
  {
    id: 2,
    name: "María P.",
    role: "DJ / Barcelona",
    location: "Barcelona",
    pricePerHour: 120,
    rating: 4.8,
    reviewCount: 89,
    imageUrl: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=300&fit=crop",
    isVerified: true,
    isAvailable: true,
  },
  {
    id: 3,
    name: "Sofía F.",
    role: "Saxofonista Soulful",
    location: "Valencia",
    pricePerHour: 85,
    rating: 5.0,
    reviewCount: 32,
    imageUrl: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=400&h=300&fit=crop",
    isVerified: true,
    isAvailable: false,
  },
  {
    id: 4,
    name: "Carlos T.",
    role: "Guitarrista Clásico",
    location: "Sevilla",
    pricePerHour: 65,
    rating: 4.7,
    reviewCount: 28,
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&h=300&fit=crop",
    isVerified: false,
    isAvailable: true,
  },
  {
    id: 5,
    name: "Elena M.",
    role: "Cantante de Jazz",
    location: "Bilbao",
    pricePerHour: 95,
    rating: 4.9,
    reviewCount: 56,
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
    isVerified: true,
    isAvailable: true,
  },
  {
    id: 6,
    name: "David S.",
    role: "Bajista",
    location: "Málaga",
    pricePerHour: 55,
    rating: 4.6,
    reviewCount: 19,
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
    isVerified: false,
    isAvailable: true,
  },
  {
    id: 7,
    name: "Laura K.",
    role: "Violinista",
    location: "Zaragoza",
    pricePerHour: 80,
    rating: 4.8,
    reviewCount: 41,
    imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&h=300&fit=crop",
    isVerified: true,
    isAvailable: true,
  },
  {
    id: 8,
    name: "Pablo G.",
    role: "Pianista Clásico",
    location: "Granada",
    pricePerHour: 90,
    rating: 4.9,
    reviewCount: 63,
    imageUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=300&fit=crop",
    isVerified: true,
    isAvailable: true,
  },
  {
    id: 9,
    name: "Ana B.",
    role: "Cantante Pop",
    location: "Alicante",
    pricePerHour: 70,
    rating: 4.7,
    reviewCount: 35,
    imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=300&fit=crop",
    isVerified: false,
    isAvailable: true,
  },
];

const MusicianGrid = () => {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Perfiles Destacados</h2>
        <span className="text-sm text-muted-foreground">{musicians.length} músicos disponibles</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {musicians.map((musician, index) => (
          <MusicianCard
            key={musician.id}
            {...musician}
            delay={index * 80}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicianGrid;
