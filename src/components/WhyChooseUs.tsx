import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Clock, Users, Zap, Star, CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Insegnanti Verificati",
      description: "Tutti i nostri tutor passano un rigoroso processo di selezione e verifica delle competenze.",
      highlight: "100% Verificati"
    },
    {
      icon: Clock,
      title: "Risposta Immediata",
      description: "Trova il tuo insegnante perfetto in meno di 60 secondi. Nessuna attesa, solo risultati.",
      highlight: "< 60 secondi"
    },
    {
      icon: Award,
      title: "Garanzia Risultati",
      description: "Soddisfatti o rimborsati entro 30 giorni. La tua soddisfazione è la nostra priorità.",
      highlight: "30 giorni"
    },
    {
      icon: Users,
      title: "Community Esclusiva",
      description: "Accedi alla nostra community premium con eventi, workshop e networking tra studenti.",
      highlight: "Esclusiva"
    },
    {
      icon: Zap,
      title: "AI Study Assistant",
      description: "Il nostro assistente AI personalizza il percorso di studio basandosi sui tuoi progressi.",
      highlight: "Powered by AI"
    },
    {
      icon: Star,
      title: "Rating 4.9/5",
      description: "La piattaforma più amata d'Italia con oltre 50.000 recensioni positive verificate.",
      highlight: "50K+ Reviews"
    }
  ];

  const benefits = [
    {
      title: "Accesso Illimitato",
      description: "Con soli €29/mese accedi a tutti gli insegnanti della piattaforma senza limitazioni.",
      features: ["Contatti illimitati", "Nessun costo aggiuntivo", "Cancellazione in qualsiasi momento"]
    },
    {
      title: "Qualità Garantita", 
      description: "Ogni insegnante viene selezionato e verificato dal nostro team di esperti.",
      features: ["Processo di selezione rigoroso", "Certificazioni verificate", "Feedback continuo"]
    },
    {
      title: "Tecnologia Avanzata",
      description: "La nostra piattaforma utilizza AI e tecnologie moderne per ottimizzare l'apprendimento.",
      features: ["Assistente AI integrato", "Matching intelligente", "Analytics personalizzati"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-gradient-to-r from-success/10 to-primary/10 text-success border-success/20">
            <CheckCircle className="h-3 w-3 mr-1" />
            Perché Siamo Diversi
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            La Piattaforma che
            <span className="text-gradient-primary block">Batte la Concorrenza</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Non siamo solo un'altra piattaforma di ripetizioni. Siamo l'evoluzione dell'apprendimento online, 
            progettata per studenti ambiziosi che vogliono risultati concreti.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="card-premium group hover:scale-105 transition-all duration-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <Badge variant="secondary" className="text-xs mt-1">
                      {feature.highlight}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            I Vantaggi di <span className="text-gradient-primary">LearnLink Premium</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-premium">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gradient-primary mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl" className="group">
            <Zap className="h-5 w-5 mr-2 group-hover:animate-pulse" />
            Prova LearnLink Oggi - €29/mese
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Garanzia soddisfatti o rimborsati • Cancella quando vuoi • Supporto 24/7
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;