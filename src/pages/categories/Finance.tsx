import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { getArticlesByCategory } from "@/data/articles";
import { PiggyBank, TrendingUp, CreditCard, Target } from "lucide-react";

const Finance = () => {
  const articles = getArticlesByCategory("Finanças Pessoais");

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-gold/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-glow">
                <PiggyBank className="h-8 w-8 text-gold-foreground" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gold to-gold-glow bg-clip-text text-transparent mb-4">
              Finanças Pessoais
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estratégias inteligentes para gerir o dinheiro, controlar gastos, poupar mais e 
              investir com confiança. Educação financeira desenhada especificamente para mulheres.
            </p>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-glow mx-auto mb-4">
                <PiggyBank className="h-6 w-6 text-gold-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Poupança Inteligente</h3>
              <p className="text-muted-foreground text-sm">
                Métodos comprovados para poupar mais sem sacrificar a qualidade de vida.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-glow mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-gold-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Investimentos</h3>
              <p className="text-muted-foreground text-sm">
                Guias para iniciantes sobre como fazer o dinheiro trabalhar para si.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-gold to-gold-glow mx-auto mb-4">
                <CreditCard className="h-6 w-6 text-gold-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Controlo de Gastos</h3>
              <p className="text-muted-foreground text-sm">
                Ferramentas e técnicas para monitorizar e otimizar as suas despesas.
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
              Educação financeira prática para mulheres que querem ter controlo sobre o dinheiro.
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

      {/* Financial Tips Section */}
      <section className="py-16 bg-gradient-to-r from-muted/50 to-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Dicas Financeiras Essenciais
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Regra 50/30/20",
                tip: "50% necessidades, 30% desejos, 20% poupanças. Uma fórmula simples para equilibrar o orçamento."
              },
              {
                title: "Fundo de Emergência",
                tip: "Tenha sempre 3-6 meses de despesas guardados para imprevistos."
              },
              {
                title: "Revisar Subscriçoes",
                tip: "Cancele serviços que não usa regularmente. Pode poupar dezenas de euros por mês."
              },
              {
                title: "Comparar Preços",
                tip: "Use apps como Kuantokusta para encontrar melhores preços antes de comprar."
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

export default Finance;