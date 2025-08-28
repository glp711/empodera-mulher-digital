import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import ProductivityCareer from "./pages/categories/ProductivityCareer";
import Technology from "./pages/categories/Technology";
import Finance from "./pages/categories/Finance";
import WellBeing from "./pages/categories/WellBeing";
import ArticlePage from "./pages/ArticlePage";
import ProfessionalHelp from "./pages/ProfessionalHelp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-uso" element={<TermsOfUse />} />
          <Route path="/produtividade-carreira" element={<ProductivityCareer />} />
          <Route path="/tecnologia" element={<Technology />} />
          <Route path="/financas" element={<Finance />} />
          <Route path="/bem-estar" element={<WellBeing />} />
          <Route path="/ajuda-profissional" element={<ProfessionalHelp />} />
          <Route path="/artigo/:id" element={<ArticlePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
