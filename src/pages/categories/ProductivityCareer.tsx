import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { getArticlesByCategory } from "@/data/articles";
import { TrendingUp, Clock, Target, Briefcase } from "lucide-react";

const ProductivityCareer = () => {
  const articles = getArticlesByCategory("Produtividade & Carreira");

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Produtividade & Carreira
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estratégias comprovadas, ferramentas essenciais e dicas práticas para impulsionar 
              a sua produtividade e acelerar o crescimento da sua carreira profissional.
            </p>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Gestão de Tempo</h3>
              <p className="text-muted-foreground text-sm">
                Técnicas avançadas para otimizar o seu tempo e aumentar a eficiência diária.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Definição de Objetivos</h3>
              <p className="text-muted-foreground text-sm">
                Estratégias para definir, acompanhar e alcançar os seus objetivos profissionais.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Desenvolvimento Profissional</h3>
              <p className="text-muted-foreground text-sm">
                Dicas para crescer na carreira, liderar equipas e destacar-se no mercado.
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
              Conteúdo atualizado para mulheres ambiciosas que querem alcançar o próximo nível.
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

      {/* Tips Section */}
      <section className="py-16 bg-gradient-to-r from-muted/50 to-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Dicas Rápidas de Produtividade
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Regra dos 2 Minutos",
                tip: "Se uma tarefa leva menos de 2 minutos, faça-a imediatamente em vez de a adiar."
              },
              {
                title: "Técnica Pomodoro",
                tip: "Trabalhe em blocos de 25 minutos com pausas de 5 minutos para manter o foco."
              },
              {
                title: "Matriz de Eisenhower",
                tip: "Classifique tarefas por urgência e importância para priorizar melhor."
              },
              {
                title: "Time Blocking",
                tip: "Reserve blocos específicos no calendário para diferentes tipos de trabalho."
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

export default ProductivityCareer;