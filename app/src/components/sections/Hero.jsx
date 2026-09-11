import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2 } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Estudiante de Ingeniería del Software",
    "Desarrollador de Software Junior",
  ];

  useEffect(() => {
    const handleTypingEffect = () => {
      // Obtiene el índice actual del arreglo de forma cíclica (0 o 1) usando el operador módulo.
      const i = loopNum % roles.length; 
      const fullText = roles[i];

      setText(
        isDeleting 
          ? fullText.substring(0, text.length - 1) 
          : fullText.substring(0, text.length + 1)
      );

      // Establece la velocidad de escritura: más rápido (70ms) si está borrando, o más lento (150ms) si está escribiendo.
      setTypingSpeed(isDeleting ? 70 : 150);

      // Si terminó de escribir la frase completa espera 2000 ms (2 segundos) antes de activar el modo de borrado.
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);

        // Si ya terminó de borrar todo el texto, apaga el modo de borrado e incrementa loopNum para pasar al siguiente rol.
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    // Programa la siguiente ejecución de la función basada en la velocidad actual.
    const timer = setTimeout(handleTypingEffect, typingSpeed);
    // Limpia el temporizador anterior cada vez que el componente se vuelve a renderizar.
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Brillo de fondo equilibrado - Estilo tecnológico */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      {/* Destellos blancos sutiles */}
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white/50 rounded-full blur-sm animate-ping" />
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/50 rounded-full blur-sm animate-ping [animation-delay:1s]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6 border border-primary/30 shadow-[0_0_10px_rgba(0,255,127,0.1)]">
          <Code2 className="h-3 w-3" />
          <span className="uppercase tracking-widest">Disponible para nuevas oportunidades</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground bg-gradient-to-r from-white via-primary to-primary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,127,0.3)]">
          Hola, soy <span className="text-primary">&#123; Luis Alonso Alfaro Cerdas &#125;</span>
        </h1>
        
        <div className="text-2xl md:text-3xl font-medium text-foreground/80 mb-10 h-12 flex items-center justify-center">
          <span className="border-r-4 border-primary pr-2 animate-pulse">{text}</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8 py-6 text-lg group" onClick={scrollToProjects}>
            Ver Proyectos <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,127,0.3)] hover:border-primary/50 transition-all duration-300" onClick={scrollToContact}>
            Contactar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
