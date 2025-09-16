import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Star, 
  Clock, 
  MapPin, 
  BookOpen, 
  Award, 
  Calendar,
  MessageCircle,
  Video,
  Euro,
  Users,
  ThumbsUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TeacherProfile = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock teacher data - in real app this would come from Supabase
  const teacher = {
    id: id,
    name: "Dr. Maria Rossi",
    subjects: ["Matematica", "Fisica"],
    rating: 4.9,
    totalReviews: 127,
    experienceYears: 8,
    city: "Milano",
    hourlyRate: 25,
    bio: "Sono un'insegnante di matematica e fisica con oltre 8 anni di esperienza. Ho una laurea magistrale in Fisica e un dottorato in Matematica Applicata. Amo aiutare gli studenti a superare le loro difficoltà e raggiungere i loro obiettivi accademici.",
    availability: "Lun-Ven 14:00-20:00",
    totalStudents: 89,
    successRate: 96,
    languages: ["Italiano", "Inglese"],
    education: "PhD in Matematica Applicata - Università Bocconi"
  };

  const handleBookLesson = () => {
    if (!user) {
      toast({
        title: "Accesso richiesto",
        description: "Devi essere loggato per prenotare una lezione.",
        variant: "destructive"
      });
      navigate("/auth");
      return;
    }

    toast({
      title: "Funzionalità in arrivo",
      description: "La prenotazione delle lezioni sarà disponibile presto!",
    });
  };

  const handleSendMessage = () => {
    if (!user) {
      toast({
        title: "Accesso richiesto",
        description: "Devi essere loggato per inviare un messaggio.",
        variant: "destructive"
      });
      navigate("/auth");
      return;
    }

    toast({
      title: "Funzionalità in arrivo",
      description: "I messaggi diretti saranno disponibili presto!",
    });
  };

  const reviews = [
    {
      id: 1,
      student: "Marco S.",
      rating: 5,
      comment: "Eccellente insegnante! Mi ha aiutato moltissimo con l'analisi matematica.",
      date: "2 settimane fa"
    },
    {
      id: 2,
      student: "Giulia P.",
      rating: 5,
      comment: "Molto paziente e preparata. Spiega in modo molto chiaro.",
      date: "1 mese fa"
    },
    {
      id: 3,
      student: "Andrea L.",
      rating: 4,
      comment: "Brava insegnante, mi ha aiutato a recuperare il debito in fisica.",
      date: "2 mesi fa"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <Header />
      
      <div className="container py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Teacher Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <Avatar className="h-24 w-24 mx-auto sm:mx-0">
                    <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 space-y-4 text-center sm:text-left">
                    <div>
                      <h1 className="text-3xl font-bold">{teacher.name}</h1>
                      <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
                        {teacher.subjects.map((subject) => (
                          <Badge key={subject} variant="secondary">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 justify-center sm:justify-start text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{teacher.rating}</span>
                        <span>({teacher.totalReviews} recensioni)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{teacher.city}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        <span>{teacher.experienceYears} anni di esperienza</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>Chi Sono</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{teacher.bio}</p>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span className="font-medium">Formazione:</span>
                    <span className="text-muted-foreground">{teacher.education}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-medium">Disponibilità:</span>
                    <span className="text-muted-foreground">{teacher.availability}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{teacher.totalStudents}</div>
                  <div className="text-sm text-muted-foreground">Studenti Aiutati</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <ThumbsUp className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{teacher.successRate}%</div>
                  <div className="text-sm text-muted-foreground">Tasso di Successo</div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-1 col-span-2">
                <CardContent className="p-4 text-center">
                  <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                  <div className="text-2xl font-bold">{teacher.rating}/5</div>
                  <div className="text-sm text-muted-foreground">Rating Medio</div>
                </CardContent>
              </Card>
            </div>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Recensioni Studenti</CardTitle>
                <CardDescription>
                  Cosa dicono gli studenti di {teacher.name.split(' ')[0]}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{review.student}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating 
                                  ? 'text-yellow-500 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Prenota una Lezione</CardTitle>
                  <div className="flex items-center gap-1 text-2xl font-bold">
                    <Euro className="h-5 w-5" />
                    <span>{teacher.hourlyRate}</span>
                    <span className="text-sm text-muted-foreground font-normal">/ora</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Button onClick={handleBookLesson} className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Prenota
                  </Button>
                  <Button variant="outline" onClick={handleSendMessage} className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Messaggio
                  </Button>
                </div>
                
                <Button variant="outline" className="w-full flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  Lezione di Prova Gratuita
                </Button>
                
                <div className="text-xs text-muted-foreground text-center">
                  Cancellazione gratuita fino a 24h prima
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informazioni Rapide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-medium mb-1">Materie</div>
                  <div className="flex flex-wrap gap-1">
                    {teacher.subjects.map((subject) => (
                      <Badge key={subject} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="font-medium mb-1">Lingue</div>
                  <div className="text-sm text-muted-foreground">
                    {teacher.languages.join(", ")}
                  </div>
                </div>
                
                <div>
                  <div className="font-medium mb-1">Modalità</div>
                  <div className="flex gap-2">
                    <Badge variant="outline">Online</Badge>
                    <Badge variant="outline">Presenza</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;