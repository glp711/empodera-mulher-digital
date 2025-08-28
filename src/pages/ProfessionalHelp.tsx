import React from "react";
import { ExternalLink, BookOpen, Heart, Star, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const ProfessionalHelp = () => {
  const books = [
    {
      title: "O Poder da Autoconfiança",
      description: "Descubra como desenvolver uma mentalidade forte e confiante para alcançar todos os seus objetivos.",
      icon: <Star className="h-6 w-6 text-gold" />
    },
    {
      title: "Mulheres que Lideram",
      description: "Estratégias comprovadas para mulheres que querem destacar-se no ambiente profissional.",
      icon: <Sparkles className="h-6 w-6 text-primary" />
    },
    {
      title: "Equilibrio & Sucesso",
      description: "Como conciliar vida pessoal, carreira e bem-estar sem sacrificar nenhuma área importante.",
      icon: <Heart className="h-6 w-6 text-accent" />
    },
  ];

  const benefits = [
    "Desenvolvimento da autoestima e confiança pessoal",
    "Estratégias práticas para crescimento profissional",
    "Técnicas de gestão de tempo e produtividade",
    "Métodos para estabelecer e alcançar objetivos",
    "Ferramentas para lidar com desafios e adversidades",
    "Inspiração para transformar a sua vida"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-primary-glow/5 to-accent-glow/5">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-primary-glow to-accent-glow">
                <BookOpen className="h-12 w-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent mb-6">
              Ajuda Profissional
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Descubra o poder transformador dos livros de desenvolvimento pessoal especialmente selecionados 
              para mulheres que desejam empoderar a sua vida e alcançar todo o seu potencial.
            </p>
          </div>
        </section>

        {/* Books Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Livros Recomendados
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {books.map((book, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    {book.icon}
                    <h3 className="text-xl font-semibold ml-3 text-foreground">
                      {book.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {book.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Como os Livros Podem Transformar a Sua Vida
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
                  <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary-glow/10 to-accent-glow/10 rounded-2xl p-8 md:p-12 border border-primary-glow/20">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comece Hoje a Sua Jornada de Transformação
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Invista no seu crescimento pessoal e profissional. Estes livros foram cuidadosamente 
                selecionados para ajudar mulheres como você a alcançar o sucesso e a felicidade que merecem.
              </p>
              
              <Button 
                size="lg" 
                variant="hero"
                className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a 
                  href="https://pay.kiwify.com.br/NZ4IIJJ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2"
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Adquirir Livros</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                ✨ Investimento no seu futuro • Crescimento garantido • Resultados comprovados
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProfessionalHelp;