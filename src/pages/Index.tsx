import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { getFeaturedArticles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Zap, Heart, ArrowRight } from "lucide-react";

const Index = () => {
  const featuredArticles = getFeaturedArticles();
  const quickTips = [
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Produtividade Matinal",
      tip: "Dedique os primeiros 30 minutos do dia a si mesma - sem redes sociais!"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Apps Essenciais",
      tip: "Use a regra 80/20: foque nas apps que realmente fazem diferença na sua rotina."
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Bem-Estar Digital",
      tip: "Configure o modo 'Não Incomodar' durante as refeições e tempo em família."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-muted/30 to-accent/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-gold bg-clip-text text-transparent">
                Tecnologia e inspiração
              </span>{" "}
              para mulheres que querem{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                transformar a sua vida
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Descubra as melhores apps, estratégias de produtividade e dicas de bem-estar digital 
              para empoderar a sua jornada pessoal e profissional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Explorar Conteúdos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Sobre o Projeto
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gold/5 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Artigos em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os nossos conteúdos mais populares para ajudá-la a otimizar a sua rotina e alcançar os seus objetivos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} featured />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg">
              Ver Todos os Artigos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-gradient-to-r from-muted/50 to-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Dicas Rápidas da Semana
            </h2>
            <p className="text-lg text-muted-foreground">
              Pequenas mudanças que fazem a diferença no seu dia a dia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickTips.map((tip, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent text-white mb-4">
                  {tip.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground">
                  {tip.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </Layout>
  );
};

export default Index;
