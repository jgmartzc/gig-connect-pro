import { Link } from "react-router-dom";
import { Search, Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">Clickgigs</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar músicos por categoría..."
                className="pl-10 bg-secondary border-border focus:border-primary w-full"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#categorias" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Buscar artistas
            </a>
            <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cómo funciona
            </a>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Iniciar sesión
            </Button>
            <Link to="/crear-perfil">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Zap className="h-4 w-4 mr-1" />
                Hazte Pro
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar músicos..."
                className="pl-10 bg-secondary border-border w-full"
              />
            </div>
            <nav className="flex flex-col gap-3">
              <a href="#categorias" className="text-sm text-muted-foreground hover:text-foreground py-2">
                Buscar artistas
              </a>
              <a href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground py-2">
                Cómo funciona
              </a>
              <div className="flex gap-3 pt-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  Iniciar sesión
                </Button>
                <Link to="/crear-perfil" className="flex-1">
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Zap className="h-4 w-4 mr-1" />
                    Hazte Pro
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
