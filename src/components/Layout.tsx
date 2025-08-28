import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
}


const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3465789567492635";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;