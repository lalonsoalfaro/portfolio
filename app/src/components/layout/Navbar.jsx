import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '../../assets/luisdev-logo-512.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Inicio', href: '#home', id: 'home' },
    { name: 'Sobre mí', href: '#about', id: 'about' },
    { name: 'Habilidades', href: '#skills', id: 'skills' },
    { name: 'Proyectos', href: '#projects', id: 'projects' },
    { name: 'Educación', href: '#education', id: 'education' },
    { name: 'Contacto', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      // Se ejecuta cada vez que un elemento observado cambia su visibilidad.
      (entries) => {
        // Recorre cada elemento que cambió de estado.
        entries.forEach((entry) => {
          // Solo actúa si el elemento ES visible actualmente.
          if (entry.isIntersecting) {
            // Guarda el id de esa sección como la sección activa.
            setActiveSection(entry.target.id);
          }
        });
      },
      // Opciones: cuándo se considera "visible" un elemento.
      { 
        threshold: 0.3, // se activa cuando al menos 30% del elemento es visible.
        rootMargin: '-80px 0px -50% 0px' // ajusta el área: -80px arriba (evita el navbar), -50% abajo (activa al cruzar la mitad de pantalla).
      }
    );

    // Asigna el trabajo de vigilancia a cada sección de la página.
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Limpia todo cuando el componente desaparece o se desmonta.
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src={logo} alt="luisdev logo" className="h-9 w-9" />
            <span className="font-bold text-xl text-primary tracking-tighter">
              luisdev
            </span>
          </div>

          {/* Menú de escritorio */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Botón móvil */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                activeSection === link.id
                  ? 'text-primary bg-accent/10'
                  : 'text-foreground/70 hover:text-primary hover:bg-accent/10'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
