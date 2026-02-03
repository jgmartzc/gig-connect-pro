import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Music, MapPin, Euro, FileText, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  "Otro"
];

const CreateProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    instrument: "",
    specialty: "",
    priceFrom: "",
    location: "",
    description: ""
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Perfil creado con éxito!",
      description: "Tu perfil será revisado y aprobado en las próximas 24 horas.",
    });
    navigate("/");
  };

  const benefits = [
    "Perfil profesional visible para miles de clientes",
    "Contacto directo por WhatsApp o chat interno",
    "Sin comisiones - tú defines tu precio",
    "Aprobación en menos de 24 horas"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-4">
                <Music className="h-4 w-4" />
                Registro gratuito
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Crea tu perfil de <span className="text-primary">músico</span>
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Únete a la comunidad de músicos profesionales y empieza a recibir contactos de clientes.
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Benefits Sidebar */}
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                  <h3 className="font-semibold text-foreground mb-4">¿Por qué unirte?</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">0€</div>
                        <div className="text-xs text-muted-foreground">Registro gratis</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">500+</div>
                        <div className="text-xs text-muted-foreground">Músicos activos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8">
                  {/* Photo Upload */}
                  <div className="mb-6">
                    <Label className="text-foreground mb-3 block">Foto de perfil</Label>
                    <div className="flex items-center gap-4">
                      <label className="cursor-pointer">
                        <div className={`w-24 h-24 rounded-xl border-2 border-dashed flex items-center justify-center overflow-hidden transition-colors ${photoPreview ? 'border-primary' : 'border-border hover:border-primary/50'}`}>
                          {photoPreview ? (
                            <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                          ) : (
                            <Camera className="h-8 w-8 text-muted-foreground" />
                          )}
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="hidden"
                        />
                      </label>
                      <div className="text-sm text-muted-foreground">
                        <p>Sube una foto profesional</p>
                        <p className="text-xs">JPG, PNG. Máx 5MB</p>
                      </div>
                    </div>
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

                  {/* Instrument & Specialty */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <Label className="text-foreground mb-2 block">Instrumento</Label>
                      <Select 
                        value={formData.instrument} 
                        onValueChange={(value) => setFormData({ ...formData, instrument: value })}
                      >
                        <SelectTrigger className="bg-secondary border-border">
                          <SelectValue placeholder="Selecciona..." />
                        </SelectTrigger>
                        <SelectContent>
                          {instruments.map((inst) => (
                            <SelectItem key={inst} value={inst}>{inst}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-foreground mb-2 block">Especialidad</Label>
                      <Select 
                        value={formData.specialty} 
                        onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                      >
                        <SelectTrigger className="bg-secondary border-border">
                          <SelectValue placeholder="Selecciona..." />
                        </SelectTrigger>
                        <SelectContent>
                          {specialties.map((spec) => (
                            <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
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
                    <Label htmlFor="description" className="text-foreground mb-2 block">Descripción</Label>
                    <div className="relative">
                      <Textarea
                        id="description"
                        placeholder="Cuéntanos sobre tu experiencia, estilo musical y qué tipo de eventos realizas..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="bg-secondary border-border min-h-[120px]"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    <span className="flex items-center gap-2">
                      Crear mi perfil gratis
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Al crear tu perfil aceptas nuestros términos y condiciones.
                  </p>

                  {/* Link to Pro */}
                  <div className="text-center mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      ¿Quieres destacar más?{" "}
                      <a
                        href="/crear-perfil-pro"
                        className="text-amber-500 hover:underline font-medium"
                      >
                        Hazte Pro por 15€/mes
                      </a>
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

export default CreateProfile;
