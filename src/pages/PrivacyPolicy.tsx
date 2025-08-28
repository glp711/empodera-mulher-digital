import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Cookie, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              Política de Privacidade
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A sua privacidade é fundamental para nós. Saiba como recolhemos, usamos e protegemos os seus dados.
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
                  <Eye className="h-5 w-5 text-primary" />
                  <span>Introdução</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="text-muted-foreground">
                  O "Empodere a Sua Vida" (empodesuavida.online) está comprometido em proteger a privacidade 
                  dos seus visitantes e utilizadores. Esta Política de Privacidade explica como recolhemos, 
                  usamos, armazenamos e protegemos as suas informações pessoais quando visita o nosso website 
                  ou utiliza os nossos serviços.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle>Informações que Recolhemos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Informações Fornecidas Voluntariamente:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Nome e endereço de email (subscrição da newsletter)</li>
                      <li>Informações de contacto (formulário de contacto)</li>
                      <li>Comentários e feedback submetidos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Informações Recolhidas Automaticamente:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Endereço IP e localização aproximada</li>
                      <li>Tipo de dispositivo e navegador</li>
                      <li>Páginas visitadas e tempo de permanência</li>
                      <li>Referências (sites de onde chegou ao nosso)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google AdSense */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cookie className="h-5 w-5 text-primary" />
                  <span>Google AdSense e Publicidade</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    O nosso website utiliza o Google AdSense para exibir anúncios. O Google AdSense utiliza cookies 
                    para personalizar os anúncios com base no seu histórico de navegação.
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Como funciona:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>O Google utiliza cookies para exibir anúncios relevantes</li>
                      <li>Os dados são utilizados para medição e análise de audiência</li>
                      <li>Pode optar por não receber anúncios personalizados nas configurações do Google</li>
                      <li>Visite www.aboutads.info para saber mais sobre publicidade comportamental</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle>Cookies e Tecnologias Similares</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Utilizamos cookies e tecnologias similares para melhorar a sua experiência no nosso website:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Cookies Essenciais:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Funcionalidade básica do website</li>
                        <li>Preferências de idioma</li>
                        <li>Segurança e autenticação</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Cookies Analíticos:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Google Analytics</li>
                        <li>Medição de performance</li>
                        <li>Estatísticas de utilização</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card>
              <CardHeader>
                <CardTitle>Como Utilizamos os Seus Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground">
                  <p className="mb-4">Utilizamos as suas informações para:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Enviar newsletters e comunicações (apenas se subscreveu)</li>
                    <li>Responder às suas mensagens e pedidos de contacto</li>
                    <li>Melhorar o conteúdo e funcionalidade do website</li>
                    <li>Analisar o tráfego e comportamento dos utilizadores</li>
                    <li>Exibir anúncios relevantes através do Google AdSense</li>
                    <li>Cumprir obrigações legais quando necessário</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card>
              <CardHeader>
                <CardTitle>Partilha de Informações</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    <strong>Não vendemos, alugamos ou partilhamos</strong> as suas informações pessoais com terceiros 
                    para fins de marketing, exceto nos seguintes casos:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Prestadores de serviços:</strong> Google AdSense, Google Analytics, serviços de email</li>
                    <li><strong>Obrigações legais:</strong> Quando exigido por lei ou autoridades competentes</li>
                    <li><strong>Proteção de direitos:</strong> Para proteger os nossos direitos, propriedade ou segurança</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardHeader>
                <CardTitle>Os Seus Direitos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground">
                  <p className="mb-4">De acordo com o RGPD, tem os seguintes direitos:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Acesso aos seus dados pessoais</li>
                      <li>Correção de dados inexatos</li>
                      <li>Eliminação dos seus dados</li>
                      <li>Limitação do processamento</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Portabilidade dos dados</li>
                      <li>Oposição ao processamento</li>
                      <li>Retirar o consentimento</li>
                      <li>Apresentar queixa à autoridade</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Contacto e Exercício de Direitos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Para exercer os seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, 
                    contacte-nos:
                  </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p><strong>Email:</strong> contacto@empodesuavida.online</p>
                  <p><strong>Assunto:</strong> "Proteção de Dados - [o seu pedido]"</p>
                </div>
                  <p className="text-sm">
                    Responderemos ao seu pedido no prazo de 30 dias, conforme exigido pelo RGPD.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Atualizações desta Política</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground">
                  <p>
                    Esta Política de Privacidade pode ser atualizada ocasionalmente. As alterações significativas 
                    serão comunicadas através do website ou email. A data da última atualização está indicada 
                    no topo desta página.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;