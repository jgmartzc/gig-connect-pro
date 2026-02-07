import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star, BadgeCheck, Crown, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import UpgradeProCTA from "@/components/UpgradeProCTA";
import ProPhotoGallery from "@/components/ProPhotoGallery";
import ProStats from "@/components/ProStats";

// Mock data - in real app this would come from API
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
    imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    isVerified: true,
    isPro: true,
    description: "Cantautor profesional con más de 10 años de experiencia en eventos privados y corporativos. Especializado en rock clásico y versiones acústicas de temas actuales.",
    experience: "10+ años",
    languages: ["Español", "Inglés"],
    equipment: "Equipo propio de sonido incluido",
    phone: "+34612345678",
    gallery: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&h=600&fit=crop",
    ],
    stats: { views: 1247, messages: 89, bookings: 34 }
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
    imageUrl: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&h=600&fit=crop",
    isVerified: true,
    isPro: true,
    description: "Cantante profesional de Soul y R&B con formación en el Berklee College of Music. He actuado en festivales internacionales y eventos exclusivos.",
    experience: "8 años",
    languages: ["Español", "Inglés", "Francés"],
    equipment: "Rider técnico disponible",
    phone: "+34623456789",
    gallery: [
      "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop",
    ],
    stats: { views: 2340, messages: 156, bookings: 67 }
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
    imageUrl: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=600&fit=crop",
    isVerified: true,
    isPro: false,
    description: "Saxofonista con estilo único fusionando jazz, soul y música electrónica. Perfecta para cócteles, bodas y eventos exclusivos.",
    experience: "6 años",
    languages: ["Español", "Inglés"],
    equipment: "Saxofón alto y tenor, efectos propios",
    phone: "+34634567890",
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
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=600&fit=crop",
    isVerified: false,
    isPro: false,
    description: "Guitarrista clásico formado en el Conservatorio Superior de Sevilla. Repertorio extenso de música española y clásica internacional.",
    experience: "5 años",
    languages: ["Español"],
    equipment: "Guitarra clásica profesional",
    phone: "+34645678901",
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
    imageUrl: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop",
    isVerified: true,
    isPro: true,
    description: "Cantante de jazz con voz cálida y elegante. Ideal para eventos sofisticados, hoteles de lujo y celebraciones íntimas.",
    experience: "12 años",
    languages: ["Español", "Inglés", "Italiano"],
    equipment: "Colaboro con pianista y contrabajista",
    phone: "+34656789012",
    gallery: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    ],
    stats: { views: 3120, messages: 198, bookings: 89 }
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
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
    isVerified: false,
    isPro: false,
    description: "Guitarrista flamenco de raíces andaluzas. Ofrezco espectáculos de flamenco puro o fusión para todo tipo de eventos.",
    experience: "7 años",
    languages: ["Español"],
    equipment: "Guitarra flamenca artesanal",
    phone: "+34667890123",
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
    imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=600&fit=crop",
    isVerified: true,
    isPro: true,
    description: "Violinista clásica con experiencia en orquestas sinfónicas. Especializada en ceremonias de boda y eventos elegantes.",
    experience: "9 años",
    languages: ["Español", "Alemán"],
    equipment: "Violín italiano del siglo XIX",
    phone: "+34678901234",
    gallery: [
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=800&h=600&fit=crop",
    ],
    stats: { views: 892, messages: 54, bookings: 28 }
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
    imageUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
    isVerified: true,
    isPro: false,
    description: "Pianista versátil con formación clásica y experiencia en jazz. Perfecto para cócteles, cenas de gala y ceremonias.",
    experience: "15 años",
    languages: ["Español", "Inglés"],
    equipment: "Teclado profesional Yamaha o piano de cola según venue",
    phone: "+34689012345",
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
    imageUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=600&fit=crop",
    isVerified: false,
    isPro: false,
    description: "Cantante pop con amplio repertorio de éxitos actuales y clásicos. Energía y profesionalidad en cada actuación.",
    experience: "4 años",
    languages: ["Español", "Inglés"],
    equipment: "Micrófono propio, requiero PA",
    phone: "+34690123456",
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
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop",
    isVerified: true,
    isPro: true,
    description: "Saxofonista de jazz con influencias de John Coltrane y Cannonball Adderley. Sesiones en vivo inolvidables.",
    experience: "11 años",
    languages: ["Español", "Inglés"],
    equipment: "Saxofón tenor Selmer Mark VI",
    phone: "+34601234567",
    gallery: [
      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
    ],
    stats: { views: 1876, messages: 112, bookings: 45 }
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
    imageUrl: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=800&h=600&fit=crop",
    isVerified: true,
    isPro: false,
    description: "Pianista de jazz con estilo propio. Música ambiente elegante para hoteles, restaurantes y eventos privados.",
    experience: "8 años",
    languages: ["Español"],
    equipment: "Piano digital Nord Stage 3",
    phone: "+34612345670",
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
    imageUrl: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?w=800&h=600&fit=crop",
    isVerified: false,
    isPro: false,
    description: "Violinista moderno con repertorio de música actual y electrónica. Shows visuales con violín LED disponibles.",
    experience: "5 años",
    languages: ["Español", "Catalán", "Inglés"],
    equipment: "Violín eléctrico y acústico, efectos propios",
    phone: "+34623456780",
  },
];

const MusicianProfile = () => {
  const { id } = useParams();
  const musician = musicians.find(m => m.id === Number(id));

  if (!musician) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Músico no encontrado</h1>
          <Link to="/#categorias">
            <Button>Volver a explorar</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link 
          to="/#categorias" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a explorar
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column - Image and basic info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Photo Gallery for PRO or Single Image for FREE */}
            {musician.isPro && musician.gallery ? (
              <ProPhotoGallery images={musician.gallery} musicianName={musician.name} />
            ) : (
              <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary">
                <img
                  src={musician.imageUrl}
                  alt={musician.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Musician info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-3xl font-bold text-foreground">{musician.name}</h1>
                    {musician.isVerified && (
                      <BadgeCheck className="h-6 w-6 text-primary" />
                    )}
                    {musician.isPro && (
                      <span className="badge-pro">
                        <Crown className="h-3 w-3" />
                        PRO
                      </span>
                    )}
                  </div>
                  <p className="text-xl text-primary font-medium">{musician.role}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className={`h-5 w-5 fill-current ${musician.isPro ? 'text-accent' : 'text-primary'}`} />
                    <span className="font-bold text-foreground text-lg">{musician.rating.toFixed(1)}</span>
                    <span className="text-muted-foreground">({musician.reviewCount} reseñas)</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{musician.location}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{musician.specialty}</Badge>
                <Badge variant="outline">{musician.experience} experiencia</Badge>
                {musician.languages.map(lang => (
                  <Badge key={lang} variant="outline">{lang}</Badge>
                ))}
              </div>

              {/* Description */}
              <div className="pt-4 border-t border-border">
                <h2 className="text-lg font-semibold text-foreground mb-3">Sobre mí</h2>
                <p className="text-muted-foreground leading-relaxed">{musician.description}</p>
              </div>

              {/* Equipment */}
              <div className="pt-4 border-t border-border">
                <h2 className="text-lg font-semibold text-foreground mb-3">Equipamiento</h2>
                <p className="text-muted-foreground">{musician.equipment}</p>
              </div>

              {/* Edit Profile Button */}
              <div className="pt-4 border-t border-border">
                <Link to={`${musician.isPro ? "/crear-perfil-pro" : "/crear-perfil"}?edit=${musician.id}`}>
                  <Button variant="outline" className="gap-2">
                    <Pencil className="h-4 w-4" />
                    Editar mi perfil
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - Contact and Stats */}
          <div className="lg:col-span-1 space-y-6">
            <ContactSection 
              musicianName={musician.name}
              pricePerHour={musician.pricePerHour}
              phone={musician.phone}
              isPro={musician.isPro}
            />
            
            {/* PRO Stats */}
            {musician.isPro && musician.stats && (
              <ProStats 
                views={musician.stats.views}
                messages={musician.stats.messages}
                rating={musician.rating}
                bookings={musician.stats.bookings}
              />
            )}
            
            {/* Show upgrade CTA for free profiles */}
            {!musician.isPro && (
              <UpgradeProCTA />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MusicianProfile;
