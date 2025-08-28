import React from "react";
import { Link } from "react-router-dom";
import { Heart, Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-muted to-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <Heart className="h-5 w-5 text-white" fill="currentColor" />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Empodere a Sua Vida
                </div>
                <div className="text-xs text-muted-foreground">
                  Tecnologia e inspiração para mulheres que querem transformar a sua vida
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              O portal de referência para mulheres interessadas em produtividade, tecnologia, carreira, 
              finanças pessoais e bem-estar digital.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/ajuda-profissional" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Ajuda Profissional
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-uso" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Siga-nos</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com"
                className="p-2 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                className="p-2 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>contacto@empodesuavida.online</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Empodere a Sua Vida. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;