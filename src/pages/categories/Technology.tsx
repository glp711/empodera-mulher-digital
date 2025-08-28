import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import Newsletter from "@/components/Newsletter";
import { getArticlesByCategory } from "@/data/articles";
import { Smartphone, Laptop, Wifi, Code } from "lucide-react";

const Technology = () => {
  const articles = getArticlesByCategory("Tecnologia no Dia a Dia");

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-accent/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4">
              Tecnologia no Dia a Dia
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra as melhores aplicações, ferramentas digitais e tecnologias que facilitam 
              o quotidiano das mulheres modernas. Simples, prático e sempre atualizado.
            </p>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary mx-auto mb-4">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Apps Essenciais</h3>
              <p className="text-muted-foreground text-sm">
                Aplicações móveis testadas que realmente fazem a diferença no dia a dia.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary mx-auto mb-4">
                <Laptop className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Ferramentas Online</h3>
              <p className="text-muted-foreground text-sm">
                Plataformas web que otimizam trabalho, estudos e organização pessoal.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary mx-auto mb-4">
                <Wifi className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tendências Tech</h3>
              <p className="text-muted-foreground text-sm">
                As últimas novidades tecnológicas explicadas de forma simples e acessível.
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
              Guias práticos sobre tecnologia para mulheres que querem simplificar a vida.
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

      {/* Tech Tips Section */}
      <section className="py-16 bg-gradient-to-r from-muted/50 to-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Dicas Tecnológicas Rápidas
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Organização Digital",
                tip: "Use pastas com nomes claros no telemóvel e nuvem para encontrar ficheiros rapidamente."
              },
              {
                title: "Passwords Seguras",
                tip: "Utilize um gestor de passwords como Bitwarden ou LastPass para maior segurança."
              },
              {
                title: "Backup Automático",
                tip: "Configure backups automáticos das fotos para Google Photos ou iCloud."
              },
              {
                title: "Apps Úteis",
                tip: "Mantenha apenas apps que usa regularmente para melhorar a performance do dispositivo."
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

export default Technology;