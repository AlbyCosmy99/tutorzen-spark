import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Users, Zap, Award, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute top-1/4 right-1/4 h-64 w-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 h-48 w-48 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <Badge className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-primary/30 hover:from-primary/30 hover:to-accent/30 transition-all">
              <Star className="h-3 w-3 mr-1" />
              La #1 Piattaforma Premium per Ripetizioni
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Trova il Tuo
                <span className="text-gradient-primary"> Insegnante Perfetto</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Accedi a migliaia di insegnanti qualificati. Lezioni personalizzate, risultati garantiti.
                <span className="text-gradient-accent font-semibold"> Solo €29/mese</span> per contatti illimitati.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-primary">15,000+</div>
                <div className="text-sm text-muted-foreground">Insegnanti Verificati</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-primary">500K+</div>
                <div className="text-sm text-muted-foreground">Lezioni Completate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-accent">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating Medio</div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="card-premium p-4 max-w-md">
              <div className="flex items-center space-x-3">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Che materia vuoi studiare?"
                  className="flex-1 bg-transparent border-none outline-none placeholder-muted-foreground"
                />
                <Button variant="premium" size="sm">
                  Cerca
                </Button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                <Zap className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                Inizia Subito - €29/mese
              </Button>
              <Button variant="ghost-premium" size="xl">
                <Users className="h-5 w-5 mr-2" />
                Diventa Insegnante
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-success" />
                <span>Insegnanti Certificati</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>Garanzia Soddisfatti o Rimborsati</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img
                src={heroImage}
                alt="Studenti e insegnanti che imparano insieme"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 card-premium p-4 animate-float">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-success to-success-light flex items-center justify-center">
                  <Star className="h-5 w-5 text-success-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Maria R.</div>
                  <div className="text-xs text-muted-foreground">Matematica • 4.9★</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 card-premium p-4 animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient-accent">€18</div>
                <div className="text-xs text-muted-foreground">media/ora</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;