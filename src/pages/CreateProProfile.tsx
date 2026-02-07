import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Camera, Music, MapPin, Euro, ArrowRight, Crown, Star, Plus, X, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const instruments = [
  "Cantante",
  "Guitarrista",
  "Pianista",
  "Violinista",
  "Saxofonista",
  "Baterista",
  "Bajista",
  "DJ",
  "Otro"
];

const specialties = [
  "Pop",
  "Rock",
  "Jazz",
  "Clásica",
  "Flamenco",
  "Soul & R&B",
  "Electrónica",
  "Latin",
  "Folk",
  "Blues",
  "Reggaeton",
  "Hip Hop",
  "Country",
  "Indie",
  "Metal"
];

const CreateProProfile = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editId = searchParams.get("edit");
  const isEditing = !!editId;
  const { toast } = useToast();
  const [photos, setPhotos] = useState<string[]>([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    instrument: "",
    priceFrom: "",
    location: "",
    description: ""
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPhotos = [...photos];
        newPhotos[index] = reader.result as string;
        setPhotos(newPhotos);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    setPhotos(newPhotos);
  };

  const toggleSpecialty = (specialty: string) => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter(s => s !== specialty));
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isEditing ? "¡Perfil PRO actualizado!" : "¡Perfil PRO creado!",
      description: isEditing ? "Los cambios se han guardado correctamente." : "Serás redirigido al pago de tu suscripción de 14.99€/mes.",
    });
    navigate("/");
  };

  const proFeatures = [
    "Galería de hasta 5 fotos profesionales",
    "Insignia PRO verificada en tu perfil",
    "Aparece primero en los resultados de búsqueda",
    "Sistema de valoraciones y reseñas",
    "Estadísticas de visitas a tu perfil",
    "Soporte prioritario 24/7"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header PRO */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-sm mb-4">
                <Crown className="h-4 w-4" />
                Suscripción PRO - 14.99€/mes
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {isEditing ? "Edita tu perfil " : "Crea tu perfil "}
                <span className="text-amber-500">PRO</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {isEditing
                  ? "Actualiza tu información premium para seguir destacando."
                  : "Destaca entre la competencia y consigue más clientes con todas las ventajas premium."
                }
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Benefits Sidebar */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-xl p-6 sticky top-24">
                  <div className="flex items-center gap-2 mb-4">
                    <Crown className="h-5 w-5 text-amber-500" />
                    <h3 className="font-semibold text-foreground">Ventajas PRO</h3>
                  </div>
                  <ul className="space-y-3">
                    {proFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-amber-500/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-500">14.99€<span className="text-lg text-muted-foreground">/mes</span></div>
                      <div className="text-xs text-muted-foreground mt-1">Cancela cuando quieras</div>
                    </div>
                  </div>

                  {/* Comparativa FREE vs PRO */}
                  <div className="mt-6 pt-6 border-t border-amber-500/20">
                    <h4 className="text-sm font-semibold text-foreground mb-4">FREE vs PRO</h4>
                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fotos</span>
                        <div className="flex gap-4">
                          <span className="text-muted-foreground">1</span>
                          <span className="text-amber-500 font-semibold">5</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Especialidades</span>
                        <div className="flex gap-4">
                          <span className="text-muted-foreground">1</span>
                          <span className="text-amber-500 font-semibold">∞</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Insignia verificada</span>
                        <div className="flex gap-4">
                          <span className="text-muted-foreground">✗</span>
                          <span className="text-amber-500 font-semibold">✓</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Valoraciones</span>
                        <div className="flex gap-4">
                          <span className="text-muted-foreground">✗</span>
                          <span className="text-amber-500 font-semibold">✓</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Prioridad búsqueda</span>
                        <div className="flex gap-4">
                          <span className="text-muted-foreground">✗</span>
                          <span className="text-amber-500 font-semibold">✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form PRO */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <form onSubmit={handleSubmit} className="bg-card border border-amber-500/20 rounded-xl p-6 md:p-8">
                  {/* PRO Badge Preview */}
                  <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <Crown className="h-5 w-5 text-amber-500" />
                    <span className="text-sm text-amber-500 font-medium">Tu perfil tendrá la insignia PRO verificada</span>
                    <Sparkles className="h-4 w-4 text-amber-500" />
                  </div>

                  {/* Photo Gallery - 5 fotos */}
                  <div className="mb-6">
                    <Label className="text-foreground mb-3 block">
                      Galería de fotos <span className="text-amber-500">(hasta 5)</span>
                    </Label>
                    <div className="grid grid-cols-5 gap-3">
                      {[0, 1, 2, 3, 4].map((index) => (
                        <label key={index} className="cursor-pointer relative group">
                          <div className={`aspect-square rounded-xl border-2 border-dashed flex items-center justify-center overflow-hidden transition-colors ${photos[index] ? 'border-amber-500' : 'border-border hover:border-amber-500/50'}`}>
                            {photos[index] ? (
                              <>
                                <img src={photos[index]} alt={`Foto ${index + 1}`} className="w-full h-full object-cover" />
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    removePhoto(index);
                                  }}
                                  className="absolute top-1 right-1 p-1 bg-destructive rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <X className="h-3 w-3 text-destructive-foreground" />
                                </button>
                              </>
                            ) : (
                              <div className="flex flex-col items-center text-muted-foreground">
                                {index === 0 ? (
                                  <Camera className="h-6 w-6" />
                                ) : (
                                  <Plus className="h-5 w-5" />
                                )}
                              </div>
                            )}
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handlePhotoChange(e, index)}
                            className="hidden"
                          />
                        </label>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">La primera foto será tu foto principal</p>
                  </div>

                  {/* Name */}
                  <div className="mb-5">
                    <Label htmlFor="name" className="text-foreground mb-2 block">Nombre artístico</Label>
                    <Input
                      id="name"
                      placeholder="Ej: María García"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-secondary border-border"
                      required
                    />
                  </div>

                  {/* Instrument */}
                  <div className="mb-5">
                    <Label className="text-foreground mb-2 block">Instrumento principal</Label>
                    <div className="flex flex-wrap gap-2">
                      {instruments.map((inst) => (
                        <button
                          key={inst}
                          type="button"
                          onClick={() => setFormData({ ...formData, instrument: inst })}
                          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                            formData.instrument === inst
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                          }`}
                        >
                          {inst}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Specialties - Multiple Selection */}
                  <div className="mb-5">
                    <Label className="text-foreground mb-2 block">
                      Especialidades <span className="text-amber-500">(selecciona varias)</span>
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {specialties.map((spec) => (
                        <button
                          key={spec}
                          type="button"
                          onClick={() => toggleSpecialty(spec)}
                          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                            selectedSpecialties.includes(spec)
                              ? 'bg-amber-500 text-black font-medium'
                              : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                          }`}
                        >
                          {spec}
                        </button>
                      ))}
                    </div>
                    {selectedSpecialties.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {selectedSpecialties.map((spec) => (
                          <Badge key={spec} variant="outline" className="border-amber-500/50 text-amber-500">
                            {spec}
                            <button
                              type="button"
                              onClick={() => toggleSpecialty(spec)}
                              className="ml-1"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price & Location */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <Label htmlFor="price" className="text-foreground mb-2 block">Precio desde (€/hora)</Label>
                      <div className="relative">
                        <Euro className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="price"
                          type="number"
                          placeholder="50"
                          value={formData.priceFrom}
                          onChange={(e) => setFormData({ ...formData, priceFrom: e.target.value })}
                          className="pl-10 bg-secondary border-border"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-foreground mb-2 block">Ubicación</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="location"
                          placeholder="Madrid"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="pl-10 bg-secondary border-border"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <Label htmlFor="description" className="text-foreground mb-2 block">Descripción profesional</Label>
                    <Textarea
                      id="description"
                      placeholder="Cuéntanos sobre tu experiencia, estilo musical, equipamiento y qué tipo de eventos realizas..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="bg-secondary border-border min-h-[120px]"
                      required
                    />
                  </div>

                  {/* Valoraciones Preview */}
                  <div className="mb-6 p-4 bg-secondary/50 rounded-lg border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
                      <span className="text-sm font-medium text-foreground">Sistema de valoraciones</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Como usuario PRO, tus clientes podrán dejarte valoraciones y reseñas que aparecerán en tu perfil.
                    </p>
                  </div>

                  {/* Submit */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold group"
                  >
                    <span className="flex items-center gap-2">
                      <Crown className="h-4 w-4" />
                      {isEditing ? "Guardar cambios PRO" : "Crear perfil PRO - 14.99€/mes"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Al crear tu perfil PRO aceptas nuestros términos y serás redirigido al pago seguro.
                  </p>

                  {/* Link to Free */}
                  <div className="text-center mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      ¿Prefieres empezar gratis?{" "}
                      <button
                        type="button"
                        onClick={() => navigate("/crear-perfil")}
                        className="text-primary hover:underline"
                      >
                        Crear perfil gratuito
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateProProfile;
