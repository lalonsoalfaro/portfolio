import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2 } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Software Engineering Student",
    "Junior Software Developer",
    "Tech Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const handleTypingEffect = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting 
          ? fullText.substring(0, text.length - 1) 
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 70 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTypingEffect, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Balanced background glow - Tech Style */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      {/* Subtle white highlight flashes */}
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white/50 rounded-full blur-sm animate-ping" />
      <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/50 rounded-full blur-sm animate-ping [animation-delay:1s]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6 border border-primary/30 shadow-[0_0_10px_rgba(0,255,127,0.1)]">
          <Code2 className="h-3 w-3" />
          <span className="uppercase tracking-widest">Disponible para nuevas oportunidades</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground bg-gradient-to-r from-white via-primary to-primary bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,255,127,0.3)]">
          Hola, soy <span className="text-primary">[Tu Nombre]</span>
        </h1>
        </h1>
        
        <div className="text-2xl md:text-3xl font-medium text-foreground/80 mb-10 h-12 flex items-center justify-center">
          <span className="border-r-4 border-primary pr-2 animate-pulse">{text}</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8 py-6 text-lg group">
            Ver Proyectos <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
            Contactar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
