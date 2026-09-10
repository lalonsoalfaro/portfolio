import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 font-bold text-lg text-primary">
          [Tu Nombre]
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-foreground/50">
          © {new Date().getFullYear()} [Tu Nombre]. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
