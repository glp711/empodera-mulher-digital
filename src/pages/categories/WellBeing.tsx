import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { getArticlesByCategory } from "@/data/articles";
import { Heart, Smartphone, Moon, Flower } from "lucide-react";

const WellBeing = () => {
  const articles = getArticlesByCategory("Bem-Estar & Vida Digital");

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <Heart className="h-8 w-8 text-white" fill="currentColor" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Bem-Estar & Vida Digital
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cultivar uma relação saudável com a tecnologia, cuidar da saúde mental e física 
              na era digital. Equilibrio, mindfulness e bem-estar feminino em primeiro lugar.
            </p>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Detox Digital</h3>
              <p className="text-muted-foreground text-sm">
                Estratégias para reduzir o vício tecnológico e recuperar o controlo do seu tempo.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-4">
                <Moon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sono & Tecnologia</h3>
              <p className="text-muted-foreground text-sm">
                Como otimizar o sono numa era de ecrãs constantes e notificações.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-4">
                <Flower className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Saúde Feminina</h3>
              <p className="text-muted-foreground text-sm">
                Apps e ferramentas digitais para acompanhar e melhorar a saúde da mulher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Últimos Artigos
            </h2>
            <p className="text-lg text-muted-foreground">
              Conteúdo sobre bem-estar digital e saúde feminina no mundo moderno.
            </p>
          </div>
          
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Novos artigos em breve! Subscreva a nossa newsletter para ser a primeira a saber.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Wellness Tips Section */}
      <section className="py-16 bg-gradient-to-r from-muted/50 to-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Dicas de Bem-Estar Digital
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Modo Noturno",
                tip: "Ative o modo noturno dos dispositivos 2 horas antes de dormir para melhor sono."
              },
              {
                title: "Pausas Regulares",
                tip: "Faça uma pausa de 5 minutos a cada hora de uso de ecrã para descansar os olhos."
              },
              {
                title: "Notificações Conscientes",
                tip: "Desative notificações desnecessárias. Deixe apenas as verdadeiramente importantes."
              },
              {
                title: "Tempo de Qualidade",
                tip: "Estabeleça períodos livres de tecnologia para estar presente com família e amigos."
              }
            ].map((tip, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="font-semibold text-foreground mb-3">{tip.title}</h3>
                <p className="text-sm text-muted-foreground">{tip.tip}</p>
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

export default WellBeing;