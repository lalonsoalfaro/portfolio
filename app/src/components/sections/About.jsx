import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mí</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-muted rounded-2xl border border-border flex items-center justify-center text-foreground/30">
            [Imagen de Perfil Placeholder]
          </div>
          <div className="space-y-6 text-left">
            <p className="text-lg text-foreground/80 leading-relaxed">
              [Descripción profesional placeholder: Aquí puedes hablar sobre tu pasión por la programación, 
              tus objetivos a corto y largo plazo, y qué te motiva como desarrollador de software.]
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              [Más información sobre tu enfoque técnico, metodologías que sigues o intereses específicos 
              dentro del ecosistema de desarrollo.]
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <div className="text-primary font-bold text-xl mb-1">[X]+</div>
                <div className="text-sm text-foreground/60">Años de estudio</div>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <div className="text-primary font-bold text-xl mb-1">[X]+</div>
                <div className="text-sm text-foreground/60">Proyectos realizados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
