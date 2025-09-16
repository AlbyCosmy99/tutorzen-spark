import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap, Users, BookOpen, MessageCircle, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const Premium = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubscribe = async () => {
    if (!user) {
      toast({
        title: "Accesso richiesto",
        description: "Devi essere loggato per sottoscrivere un abbonamento.",
        variant: "destructive"
      });
      navigate("/auth");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId: "price_premium_monthly" } // This would be a real price ID
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error: any) {
      toast({
        title: "Errore",
        description: error.message || "Errore durante la creazione del checkout.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: MessageCircle,
      title: "Chat AI Illimitata",
      description: "Assistenza 24/7 con il nostro AI tutor avanzato"
    },
    {
      icon: Users,
      title: "Accesso Prioritario",
      description: "Prenota lezioni con i migliori insegnanti"
    },
    {
      icon: BookOpen,
      title: "Materiali Premium",
      description: "Accesso a risorse didattiche esclusive"
    },
    {
      icon: Star,
      title: "Recensioni Dettagliate",
      description: "Feedback personalizzato sui tuoi progressi"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <Header />
      
      <div className="container py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
              <Crown className="h-3 w-3 mr-1" />
              Premium Experience
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Accelera il Tuo
              <span className="text-gradient-primary block">Apprendimento</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sblocca tutto il potenziale di LearnLink con funzionalità premium, 
              assistenza AI avanzata e accesso prioritario ai migliori insegnanti.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-200">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pricing Card */}
          <div className="max-w-md mx-auto">
            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark" />
              
              <CardHeader className="text-center space-y-4">
                <div className="flex items-center justify-center">
                  <Badge className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
                    <Zap className="h-3 w-3 mr-1" />
                    Più Popolare
                  </Badge>
                </div>
                
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription>
                  Tutto quello di cui hai bisogno per eccellere
                </CardDescription>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gradient-primary">€29</div>
                  <div className="text-muted-foreground">/mese</div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success" />
                    <span>Chat AI illimitata</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success" />
                    <span>Accesso prioritario agli insegnanti</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success" />
                    <span>Materiali didattici premium</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success" />
                    <span>Feedback personalizzato</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-success" />
                    <span>Supporto prioritario</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleSubscribe}
                  disabled={isLoading}
                >
                  {isLoading ? "Caricamento..." : "Inizia Ora"}
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Puoi cancellare in qualsiasi momento. Nessun impegno.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ or Additional Info */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Domande?</h3>
            <p className="text-muted-foreground">
              Contattaci per qualsiasi dubbio sul nostro piano Premium.
            </p>
            <Button variant="outline">
              Contatta il Supporto
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;