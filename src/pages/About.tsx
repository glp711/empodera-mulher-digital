import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Star } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <Heart className="h-8 w-8 text-white" fill="currentColor" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Sobre Nós
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça a missão por trás do "Empodere a Sua Vida" - o portal que está a revolucionar 
              a forma como as mulheres portuguesas se relacionam com a tecnologia.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-card rounded-lg border p-8 mb-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">A Nossa Missão</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Acreditamos que a tecnologia deve ser uma aliada na vida das mulheres, não uma fonte de stress. 
                  O nosso objetivo é capacitar mulheres portuguesas com conhecimento prático sobre aplicações, 
                  ferramentas digitais e estratégias de produtividade que realmente fazem a diferença no dia a dia.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Comunidade</h3>
              <p className="text-muted-foreground">
                Criamos uma comunidade de mulheres que se apoiam mutuamente na jornada digital.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Praticidade</h3>
              <p className="text-muted-foreground">
                Todo o nosso conteúdo é testado e aplicável à realidade das mulheres portuguesas.
              </p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent mx-auto mb-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Qualidade</h3>
              <p className="text-muted-foreground">
                Priorizamos conteúdo de qualidade, baseado em investigação e experiência real.
              </p>
            </div>
          </div>

          {/* Story */}
          <div className="bg-gradient-to-r from-muted/50 to-secondary/50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">A Nossa História</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                O "Empodere a Sua Vida" nasceu da constatação de que muitas mulheres portuguesas sentiam-se 
                perdidas no mundo digital. Apesar da tecnologia evoluir rapidamente, faltava um espaço que 
                falasse especificamente para as nossas necessidades e desafios únicos.
              </p>
              <p className="mb-4">
                Começamos como um pequeno blog em 2023, partilhando dicas sobre aplicações móveis úteis. 
                Rapidamente percebemos que havia uma sede enorme de conhecimento prático sobre produtividade, 
                gestão financeira digital e bem-estar na era digital.
              </p>
              <p>
                Hoje, somos o portal de referência para milhares de mulheres que querem usar a tecnologia 
                para melhorar as suas vidas, carreiras e bem-estar geral.
              </p>
            </div>
          </div>

          {/* Team */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">A Nossa Equipa</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Somos uma equipa de mulheres apaixonadas por tecnologia, produtividade e empoderamento feminino. 
              Cada artigo é escrito por especialistas nas respetivas áreas.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Ana Silva", role: "Especialista em Produtividade", area: "Apps de organização e gestão de tempo" },
                { name: "Dr. Maria Santos", role: "Consultora de Saúde Digital", area: "Bem-estar e saúde feminina" },
                { name: "Carolina Ferreira", role: "Coach de Carreira", area: "Desenvolvimento profissional e liderança" },
                { name: "Rita Oliveira", role: "Consultora Financeira", area: "Finanças pessoais e investimentos" },
                { name: "Dr. Sofia Costa", role: "Psicóloga Digital", area: "Saúde mental e bem-estar digital" },
                { name: "Prof. Laura Mendes", role: "Educadora Digital", area: "Tecnologia educacional" }
              ].map((member, index) => (
                <div key={index} className="bg-card rounded-lg border p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.area}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Junte-se à Nossa Comunidade
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Siga-nos nas redes sociais e subscreva a nossa newsletter para receber as últimas dicas 
              e novidades sobre tecnologia e produtividade feminina.
            </p>
            <Button variant="hero" size="lg">
              Subscrever Newsletter
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;