import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download, Star, Zap, Bell } from "lucide-react";

const MobileAppBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 h-32 w-32 bg-accent/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 left-10 h-24 w-24 bg-primary-light/30 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <Badge className="bg-accent/20 text-accent-light border-accent/30">
              <Smartphone className="h-3 w-3 mr-1" />
              Prima Piattaforma Mobile-First in Italia
            </Badge>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
                L'App che Cambia
                <span className="text-gradient-accent block">il Modo di Studiare</span>
              </h2>
              <p className="text-xl text-primary-foreground/80 max-w-lg">
                Scarica la nostra app React Native e studia ovunque. Chat istantanea con insegnanti, lezioni video in HD, calendario intelligente.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
              <div className="flex items-center space-x-3 text-primary-foreground">
                <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Bell className="h-4 w-4 text-accent-light" />
                </div>
                <span className="text-sm">Notifiche Smart</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground">
                <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Zap className="h-4 w-4 text-accent-light" />
                </div>
                <span className="text-sm">Lezioni Offline</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground">
                <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Star className="h-4 w-4 text-accent-light" />
                </div>
                <span className="text-sm">AI Study Assistant</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground">
                <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Smartphone className="h-4 w-4 text-accent-light" />
                </div>
                <span className="text-sm">Performance Analytics</span>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="accent" 
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Download className="h-5 w-5 mr-2" />
                Scarica per iOS
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Download className="h-5 w-5 mr-2" />
                Scarica per Android
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/60">
              Disponibile presto • Registrati ora per accesso anticipato
            </p>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-72 h-[580px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-background to-secondary/50 rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-12 bg-primary/5 flex items-center justify-between px-6">
                    <span className="text-xs font-medium">LearnLink</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-accent rounded-sm"></div>
                      <span className="text-xs">100%</span>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Search */}
                    <div className="card-premium p-3">
                      <div className="flex items-center space-x-2">
                        <div className="h-6 w-6 rounded-full bg-primary/20"></div>
                        <div className="h-4 w-32 bg-primary/10 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Teacher Cards */}
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="card-teacher p-3">
                        <div className="flex items-center space-x-3">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20"></div>
                          <div className="flex-1 space-y-1">
                            <div className="h-3 w-20 bg-foreground/20 rounded"></div>
                            <div className="h-2 w-16 bg-muted-foreground/40 rounded"></div>
                            <div className="flex space-x-1">
                              <div className="h-2 w-8 bg-accent/40 rounded"></div>
                              <div className="h-2 w-6 bg-accent/40 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-success rounded-full p-3 shadow-lg animate-float">
                <Bell className="h-4 w-4 text-success-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent rounded-full p-3 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <Star className="h-4 w-4 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppBanner;