import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertTriangle, Scale, Globe } from "lucide-react";

const TermsOfUse = () => {
  return (
    <Layout>
      <div className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Termos de Uso
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Condições gerais de utilização do portal "Empodere a Sua Vida".
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Última atualização: {new Date().toLocaleDateString('pt-PT')}
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span>Aceitação dos Termos</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-muted-foreground">
                  Ao aceder e utilizar o website "Empodere a Sua Vida" (empodesuavida.online), 
                  concorda em ficar vinculado a estes Termos de Uso. Se não concorda com qualquer 
                  parte destes termos, não deve utilizar o nosso website.
                </p>
              </CardContent>
            </Card>

            {/* Website Use */}
            <Card>
              <CardHeader>
                <CardTitle>Utilização do Website</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Uso Permitido:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Visualização e leitura do conteúdo para uso pessoal</li>
                      <li>Partilha de artigos através de links diretos</li>
                      <li>Subscrição da newsletter e comunicação conosco</li>
                      <li>Comentários respeitosos e construtivos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Uso Proibido:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Cópia ou reprodução não autorizada do conteúdo</li>
                      <li>Uso comercial sem autorização prévia</li>
                      <li>Tentativas de hackear ou comprometer o website</li>
                      <li>Envio de spam ou conteúdo malicioso</li>
                      <li>Violação de direitos de propriedade intelectual</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle>Propriedade Intelectual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Todo o conteúdo do website "Empodere a Sua Vida", incluindo mas não limitado a 
                    textos, imagens, gráficos, logos, ícones e software, é propriedade do website ou 
                    dos seus licenciadores e está protegido por leis de direitos autorais.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Direitos Concedidos:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Licença limitada, não exclusiva para visualizar o conteúdo</li>
                      <li>Direito de partilhar links para artigos específicos</li>
                      <li>Permissão para citar trechos com devida atribuição</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Direitos Reservados:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Todos os outros direitos permanecem reservados</li>
                      <li>Uso comercial requer autorização expressa</li>
                      <li>Modificação do conteúdo não é permitida</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content and Accuracy */}
            <Card>
              <CardHeader>
                <CardTitle>Conteúdo e Precisão</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Esforçamo-nos por fornecer informações precisas e atualizadas, mas não garantimos 
                    a exactidão, completude ou atualidade de todo o conteúdo.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Natureza do Conteúdo:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Conteúdo educacional e informativo</li>
                      <li>Opiniões e experiências pessoais</li>
                      <li>Recomendações baseadas em investigação</li>
                      <li>Não constitui aconselhamento profissional específico</li>
                    </ul>
                  </div>
                  <p className="text-sm bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <strong>Aviso:</strong> As informações fornecidas não substituem aconselhamento 
                    profissional médico, financeiro ou legal. Consulte sempre profissionais 
                    qualificados para questões específicas.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* User Content */}
            <Card>
              <CardHeader>
                <CardTitle>Conteúdo do Utilizador</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Ao submeter conteúdo (comentários, mensagens, sugestões), concede-nos uma licença 
                    não exclusiva para usar, modificar e exibir esse conteúdo.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Responsabilidades do Utilizador:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Garantir que possui direitos sobre o conteúdo submetido</li>
                      <li>Não submeter conteúdo ilegal, ofensivo ou prejudicial</li>
                      <li>Respeitar os direitos de terceiros</li>
                      <li>Não fazer spam ou uso comercial indevido</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advertising */}
            <Card>
              <CardHeader>
                <CardTitle>Publicidade e Parcerias</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    O nosso website contém anúncios e pode incluir links para sites externos ou 
                    produtos de terceiros.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Google AdSense:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Utilizamos o Google AdSense para exibir anúncios</li>
                      <li>Os anúncios são selecionados automaticamente pelo Google</li>
                      <li>Não endossamos necessariamente produtos anunciados</li>
                      <li>Pode configurar preferências de anúncios nas definições do Google</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Links de Afiliados:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Alguns links podem ser links de afiliados</li>
                      <li>Recebemos comissões por compras através destes links</li>
                      <li>Isto não afeta o preço para o utilizador</li>
                      <li>Apenas recomendamos produtos em que acreditamos</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimers */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  <span>Limitação de Responsabilidade</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    O website é fornecido "como está" sem garantias de qualquer tipo, expressas ou implícitas.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Não nos responsabilizamos por:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Decisões tomadas com base no nosso conteúdo</li>
                      <li>Problemas técnicos ou interrupções do serviço</li>
                      <li>Conteúdo de sites externos linkados</li>
                      <li>Perda de dados ou danos indiretos</li>
                      <li>Ações de terceiros ou anunciantes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy */}
            <Card>
              <CardHeader>
                <CardTitle>Privacidade</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground">
                  <p>
                    A recolha e utilização de informações pessoais está sujeita à nossa 
                    <a href="/politica-privacidade" className="text-primary hover:underline ml-1">
                      Política de Privacidade
                    </a>
                    , que constitui parte integrante destes Termos de Uso.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Scale className="h-5 w-5 text-primary" />
                  <span>Lei Aplicável e Jurisdição</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Estes Termos de Uso são regidos pela lei portuguesa e pela legislação europeia aplicável, 
                    incluindo o Regulamento Geral sobre a Proteção de Dados (RGPD).
                  </p>
                  <p>
                    Qualquer disputa será submetida à jurisdição exclusiva dos tribunais portugueses competentes.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Modifications */}
            <Card>
              <CardHeader>
                <CardTitle>Modificações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground">
                  <p>
                    Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
                    As alterações entrarão em vigor imediatamente após a publicação no website. 
                    O uso continuado do website após tais modificações constitui aceitação dos novos termos.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground">
                  <p className="mb-4">
                    Para questões sobre estes Termos de Uso, contacte-nos:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p><strong>Email:</strong> contato@empodesuavida.online</p>
                    <p><strong>Assunto:</strong> "Termos de Uso - [a sua questão]"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfUse;