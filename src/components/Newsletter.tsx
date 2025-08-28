import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simular submissão
    setTimeout(() => {
      toast({
        title: "Obrigada por se inscrever!",
        description: "Receberá as nossas dicas exclusivas no seu email.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 via-accent/5 to-gold/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Receba Dicas Exclusivas
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Junte-se a milhares de mulheres que recebem semanalmente as melhores dicas de 
            produtividade, tecnologia e bem-estar digital diretamente no seu email.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="O seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12"
                required
              />
            </div>
            <Button 
              type="submit" 
              variant="hero" 
              size="lg"
              disabled={isLoading}
              className="h-12 px-8"
            >
              {isLoading ? "A subscrever..." : "Subscrever"}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            ✨ Sem spam. Pode cancelar a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;