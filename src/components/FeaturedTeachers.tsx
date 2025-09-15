import { Button } from "@/components/ui/button";
import TeacherCard from "@/components/TeacherCard";
import { ArrowRight, Filter, Star } from "lucide-react";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";

const FeaturedTeachers = () => {
  const featuredTeachers = [
    {
      name: "Maria Rossini",
      subject: "Matematica e Fisica",
      location: "Milano",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 25,
      experience: "8 anni di esperienza",
      avatar: teacher1,
      specialties: ["Algebra", "Analisi", "Fisica Quantistica"],
      isVerified: true,
      responseTime: "15 minuti"
    },
    {
      name: "Marco Bianchi", 
      subject: "Chimica e Biologia",
      location: "Roma",
      rating: 4.8,
      reviews: 94,
      hourlyRate: 22,
      experience: "6 anni di esperienza",
      avatar: teacher2,
      specialties: ["Chimica Organica", "Genetica", "Biochimica"],
      isVerified: true,
      responseTime: "30 minuti"
    },
    {
      name: "Elena Ferrari",
      subject: "Inglese e Letteratura", 
      location: "Torino",
      rating: 5.0,
      reviews: 156,
      hourlyRate: 28,
      experience: "10 anni di esperienza",
      avatar: teacher3,
      specialties: ["IELTS", "Business English", "Letteratura"],
      isVerified: true,
      responseTime: "10 minuti"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 rounded-full border border-primary/20">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary">Top Rated Teachers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            I Nostri <span className="text-gradient-primary">Insegnanti Migliori</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scelti personalmente dal nostro team. Tutti i nostri insegnanti sono verificati e hanno almeno 5 anni di esperienza.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
          <div className="flex flex-wrap gap-2">
            <Button variant="premium" size="sm">Tutti</Button>
            <Button variant="ghost" size="sm">Matematica</Button>
            <Button variant="ghost" size="sm">Scienze</Button>
            <Button variant="ghost" size="sm">Lingue</Button>
            <Button variant="ghost" size="sm">Letteratura</Button>
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtri Avanzati
          </Button>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {featuredTeachers.map((teacher, index) => (
            <div key={index} className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <TeacherCard {...teacher} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="group">
            Esplora Tutti i 15,000+ Insegnanti
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Accesso illimitato con Premium • Cancella quando vuoi
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTeachers;