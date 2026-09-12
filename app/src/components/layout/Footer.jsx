import React, { useState } from 'react';
import { Github, Linkedin, Mail, Check } from 'lucide-react';

const Footer = () => {
  const [showToast, setShowToast] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('luis.a.alfaro.c2007@gmail.com');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center cursor-default">
        <div className="mb-6 font-bold text-lg text-primary">
          &#123; Luis Alonso Alfaro Cerdas &#125;
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/lalonsoalfaro" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/luis-alonso-alfaro/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <button onClick={copyEmail} className="text-foreground/60 hover:text-primary transition-colors cursor-pointer">
            <Mail className="h-5 w-5" />
          </button>
        </div>
        <p className="text-sm text-foreground/50">
          © {new Date().getFullYear()} Portafolio &#123; Luis Alonso Alfaro Cerdas &#125;. Todos los derechos reservados.
        </p>
      </div>

      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-primary/90 text-white text-sm font-medium shadow-lg shadow-primary/25 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
          <Check className="h-4 w-4" />
          Email copiado al portapapeles
        </div>
      )}
    </footer>
  );
};

export default Footer;