import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Página Não Encontrada
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Parece que a página que procura não existe ou foi movida. 
              Não se preocupe, acontece aos melhores!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Voltar ao Início
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/sobre">
                <Search className="mr-2 h-4 w-4" />
                Explorar Conteúdos
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Que tal explorar?
            </h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• <Link to="/produtividade-carreira" className="text-primary hover:underline">Produtividade & Carreira</Link></li>
              <li>• <Link to="/tecnologia" className="text-primary hover:underline">Tecnologia no Dia a Dia</Link></li>
              <li>• <Link to="/financas" className="text-primary hover:underline">Finanças Pessoais</Link></li>
              <li>• <Link to="/bem-estar" className="text-primary hover:underline">Bem-Estar & Vida Digital</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
