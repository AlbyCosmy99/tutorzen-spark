import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X, Search, Star, Users, BookOpen } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gradient-primary">LearnLink</span>
            <span className="text-xs text-muted-foreground -mt-1">Premium Tutoring</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
            <Search className="h-4 w-4" />
            <span>Trova Insegnanti</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
            <BookOpen className="h-4 w-4" />
            <span>Materie</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
            <Star className="h-4 w-4" />
            <span>Top Rated</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
            <Users className="h-4 w-4" />
            <span>Come Funziona</span>
          </a>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" size="sm">
            Accedi
          </Button>
          <Button variant="ghost-premium" size="sm">
            Diventa Insegnante
          </Button>
          <Button variant="premium" size="sm">
            Prova Premium
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-border hover:bg-accent transition-colors"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container py-4 space-y-4">
            <a href="#" className="flex items-center space-x-3 py-2 text-foreground hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
              <span>Trova Insegnanti</span>
            </a>
            <a href="#" className="flex items-center space-x-3 py-2 text-foreground hover:text-primary transition-colors">
              <BookOpen className="h-5 w-5" />
              <span>Materie</span>
            </a>
            <a href="#" className="flex items-center space-x-3 py-2 text-foreground hover:text-primary transition-colors">
              <Star className="h-5 w-5" />
              <span>Top Rated</span>
            </a>
            <a href="#" className="flex items-center space-x-3 py-2 text-foreground hover:text-primary transition-colors">
              <Users className="h-5 w-5" />
              <span>Come Funziona</span>
            </a>
            
            <div className="pt-4 space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                Accedi
              </Button>
              <Button variant="ghost-premium" className="w-full justify-start">
                Diventa Insegnante
              </Button>
              <Button variant="premium" className="w-full">
                Prova Premium - €29/mese
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;