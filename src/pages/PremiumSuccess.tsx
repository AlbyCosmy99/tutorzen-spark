import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PremiumSuccess = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to auth if not logged in
    if (!user) {
      navigate("/auth");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <Header />
      
      <div className="container py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Success Animation */}
          <div className="relative">
            <div className="h-24 w-24 mx-auto bg-gradient-to-br from-success to-success-dark rounded-full flex items-center justify-center shadow-lg">
              <Check className="h-12 w-12 text-white" />
            </div>
            <div className="absolute inset-0 h-24 w-24 mx-auto bg-success/20 rounded-full animate-ping" />
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Crown className="h-6 w-6 text-primary" />
              <span className="text-lg font-medium text-primary">Premium Attivato!</span>
            </div>
            
            <h1 className="text-4xl font-bold">
              Benvenuto in
              <span className="text-gradient-primary block">LearnLink Premium</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Il tuo abbonamento è stato attivato con successo. 
              Ora hai accesso a tutte le funzionalità premium!
            </p>
          </div>

          {/* Benefits Card */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Cosa Puoi Fare Ora
              </CardTitle>
              <CardDescription>
                Ecco le nuove funzionalità che puoi utilizzare subito
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-success mt-0.5" />
                  <span>Chat AI illimitata disponibile</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-success mt-0.5" />
                  <span>Accesso prioritario agli insegnanti</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-success mt-0.5" />
                  <span>Materiali didattici premium</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-success mt-0.5" />
                  <span>Supporto prioritario attivo</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2"
            >
              <Crown className="h-4 w-4" />
              Vai alla Dashboard
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate("/teachers")}
            >
              Trova un Insegnante
            </Button>
          </div>

          {/* Additional Info */}
          <div className="bg-muted/50 rounded-lg p-6 space-y-2">
            <h3 className="font-semibold">Gestisci il Tuo Abbonamento</h3>
            <p className="text-sm text-muted-foreground">
              Puoi gestire, aggiornare o cancellare il tuo abbonamento in qualsiasi momento 
              dalla tua dashboard personale.
            </p>
            <Button variant="link" onClick={() => navigate("/dashboard")}>
              Vai alle Impostazioni →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumSuccess;