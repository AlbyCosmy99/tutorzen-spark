import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Clock, 
  Euro,
  Users,
  Award,
  SlidersHorizontal
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Teachers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const navigate = useNavigate();

  // Mock teachers data - in real app this would come from Supabase
  const teachers = [
    {
      id: "1",
      name: "Dr. Maria Rossi",
      subjects: ["Matematica", "Fisica"],
      rating: 4.9,
      totalReviews: 127,
      experienceYears: 8,
      city: "Milano",
      hourlyRate: 25,
      totalStudents: 89,
      avatar: "MR",
      availability: "Disponibile oggi"
    },
    {
      id: "2", 
      name: "Prof. Giovanni Bianchi",
      subjects: ["Chimica", "Biologia"],
      rating: 4.8,
      totalReviews: 93,
      experienceYears: 12,
      city: "Roma",
      hourlyRate: 30,
      totalStudents: 156,
      avatar: "GB",
      availability: "Disponibile domani"
    },
    {
      id: "3",
      name: "Dott.ssa Anna Verde",
      subjects: ["Inglese", "Letteratura"],
      rating: 4.7,
      totalReviews: 78,
      experienceYears: 6,
      city: "Milano", 
      hourlyRate: 22,
      totalStudents: 64,
      avatar: "AV",
      availability: "Disponibile oggi"
    },
    {
      id: "4",
      name: "Ing. Marco Neri",
      subjects: ["Informatica", "Matematica"],
      rating: 4.9,
      totalReviews: 112,
      experienceYears: 10,
      city: "Torino",
      hourlyRate: 28,
      totalStudents: 98,
      avatar: "MN",
      availability: "Disponibile oggi"
    }
  ];

  const subjects = ["Matematica", "Fisica", "Chimica", "Biologia", "Inglese", "Letteratura", "Informatica"];
  const cities = ["Milano", "Roma", "Torino", "Napoli", "Bologna"];

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         teacher.subjects.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSubject = selectedSubject === "all" || teacher.subjects.includes(selectedSubject);
    const matchesCity = selectedCity === "all" || teacher.city === selectedCity;
    
    let matchesPrice = true;
    if (priceRange !== "all") {
      const rate = teacher.hourlyRate;
      switch(priceRange) {
        case "low": matchesPrice = rate < 25; break;
        case "medium": matchesPrice = rate >= 25 && rate < 35; break;
        case "high": matchesPrice = rate >= 35; break;
      }
    }
    
    return matchesSearch && matchesSubject && matchesCity && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <Header />
      
      <div className="container py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              Trova il Tuo
              <span className="text-gradient-primary block">Insegnante Ideale</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scegli tra centinaia di insegnanti qualificati e inizia il tuo percorso di apprendimento personalizzato.
            </p>
          </div>

          {/* Search and Filters */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5" />
                <CardTitle>Filtra e Cerca</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Cerca per nome o materia..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tutte le materie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tutte le materie</SelectItem>
                    {subjects.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tutte le città" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tutte le città</SelectItem>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Fascia prezzo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tutti i prezzi</SelectItem>
                    <SelectItem value="low">&lt; €25/ora</SelectItem>
                    <SelectItem value="medium">€25-35/ora</SelectItem>
                    <SelectItem value="high">&gt; €35/ora</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  {filteredTeachers.length} insegnanti trovati
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedSubject("all");
                    setSelectedCity("all"); 
                    setPriceRange("all");
                  }}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Cancella Filtri
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeachers.map((teacher) => (
              <Card 
                key={teacher.id} 
                className="group hover:shadow-lg transition-all duration-200 cursor-pointer"
                onClick={() => navigate(`/teacher/${teacher.id}`)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
                          {teacher.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {teacher.name}
                        </CardTitle>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{teacher.rating}</span>
                          <span>({teacher.totalReviews})</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {teacher.availability}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {teacher.subjects.map((subject) => (
                        <Badge key={subject} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{teacher.city}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      <span>{teacher.experienceYears} anni</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{teacher.totalStudents} studenti</span>
                    </div>
                    <div className="flex items-center gap-1 font-medium text-primary">
                      <Euro className="h-4 w-4" />
                      <span>{teacher.hourlyRate}/ora</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/teacher/${teacher.id}`);
                    }}
                  >
                    Visualizza Profilo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredTeachers.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <div className="space-y-4">
                  <div className="h-16 w-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Nessun insegnante trovato</h3>
                    <p className="text-muted-foreground">
                      Prova a modificare i filtri di ricerca per trovare più risultati.
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedSubject("all");
                      setSelectedCity("all");
                      setPriceRange("all");
                    }}
                  >
                    Cancella Tutti i Filtri
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teachers;