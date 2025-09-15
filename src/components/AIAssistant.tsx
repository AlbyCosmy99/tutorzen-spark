import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send, Sparkles, BookOpen, Calculator, Languages, Atom, MessageCircle, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AIAssistant = () => {
  const [message, setMessage] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [conversation, setConversation] = useState<Array<{role: string, content: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showApiInput, setShowApiInput] = useState(false);
  const { toast } = useToast();

  const subjects = [
    { icon: Calculator, name: "Matematica", color: "from-blue-500 to-blue-600" },
    { icon: Atom, name: "Fisica", color: "from-purple-500 to-purple-600" },
    { icon: Languages, name: "Lingue", color: "from-green-500 to-green-600" },
    { icon: BookOpen, name: "Storia", color: "from-orange-500 to-orange-600" }
  ];

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    if (!apiKey.trim()) {
      setShowApiInput(true);
      toast({
        title: "API Key richiesta",
        description: "Inserisci la tua Perplexity API key per utilizzare l'assistente AI.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    const userMessage = message;
    setMessage("");
    
    const newConversation = [...conversation, { role: "user", content: userMessage }];
    setConversation(newConversation);

    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: 'Sei un assistente AI specializzato nell\'educazione. Aiuti studenti con domande di studio, spiegazioni di concetti e consigli per l\'apprendimento. Rispondi sempre in italiano in modo chiaro e professionale.'
            },
            ...newConversation.map(msg => ({
              role: msg.role,
              content: msg.content
            }))
          ],
          temperature: 0.2,
          top_p: 0.9,
          max_tokens: 1000,
          return_images: false,
          return_related_questions: false,
          frequency_penalty: 1,
          presence_penalty: 0
        }),
      });

      if (!response.ok) {
        throw new Error('Errore nella richiesta API');
      }

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || "Scusa, non sono riuscito a elaborare la tua richiesta.";
      
      setConversation([...newConversation, { role: "assistant", content: aiResponse }]);
      
      toast({
        title: "Risposta generata",
        description: "L'assistente AI ha risposto alla tua domanda.",
      });
    } catch (error) {
      toast({
        title: "Errore",
        description: "Errore nel contattare l'assistente AI. Controlla la tua API key.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setMessage(question);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
            <Sparkles className="h-3 w-3 mr-1" />
            Assistente AI Personalizzato
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Studia con l'
            <span className="text-gradient-primary">Intelligenza Artificiale</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Il nostro assistente AI è sempre disponibile per aiutarti con spiegazioni, esercizi e dubbi di studio. 
            Disponibile 24/7 per supportare il tuo percorso di apprendimento.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Subjects Quick Access */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center lg:text-left">Materie Popolari</h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                {subjects.map((subject, index) => (
                  <Card key={index} className="p-4 cursor-pointer hover:shadow-lg transition-all duration-200 group">
                    <div className="flex items-center space-x-3">
                      <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${subject.color} flex items-center justify-center`}>
                        <subject.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-primary transition-colors">{subject.name}</div>
                        <div className="text-xs text-muted-foreground">Chiedi aiuto</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Questions */}
              <div className="space-y-3">
                <h4 className="font-medium text-center lg:text-left">Domande Frequenti</h4>
                <div className="space-y-2">
                  {[
                    "Come si risolve un'equazione di secondo grado?",
                    "Spiegami il teorema di Pitagora",
                    "Quali sono i tempi verbali in inglese?",
                    "Come funziona la fotosintesi?"
                  ].map((question, index) => (
                    <Button 
                      key={index}
                      variant="ghost" 
                      size="sm" 
                      className="w-full justify-start h-auto p-3 text-left whitespace-normal"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{question}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <Card className="h-[600px] flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center">
                        <Bot className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold">Assistente AI LearnLink</div>
                        <div className="text-xs text-success flex items-center">
                          <div className="h-2 w-2 bg-success rounded-full mr-1"></div>
                          Online
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowApiInput(!showApiInput)}
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {showApiInput && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <Input
                        type="password"
                        placeholder="Inserisci la tua Perplexity API key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="mb-2"
                      />
                      <p className="text-xs text-muted-foreground">
                        Ottieni la tua API key gratuitamente su perplexity.ai
                      </p>
                    </div>
                  )}
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {conversation.length === 0 ? (
                    <div className="text-center text-muted-foreground py-8">
                      <Bot className="h-12 w-12 mx-auto mb-4 text-primary/50" />
                      <p>Ciao! Sono il tuo assistente AI per lo studio.</p>
                      <p className="text-sm mt-2">Fai una domanda o scegli una materia per iniziare!</p>
                    </div>
                  ) : (
                    conversation.map((msg, index) => (
                      <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${
                          msg.role === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                        }`}>
                          <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                        </div>
                      </div>
                    ))
                  )}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="h-2 w-2 bg-primary/50 rounded-full animate-bounce"></div>
                          <div className="h-2 w-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="h-2 w-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex space-x-2">
                    <Textarea
                      placeholder="Fai una domanda al tuo assistente AI..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="resize-none"
                      rows={2}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button 
                      onClick={handleSendMessage} 
                      disabled={isLoading || !message.trim()}
                      className="px-4"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Premi Invio per inviare, Shift+Invio per andare a capo
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;