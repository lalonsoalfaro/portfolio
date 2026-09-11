import profilePic from '../../assets/profile-pic.jpeg';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mí</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square max-w-sm mx-auto bg-muted rounded-2xl border border-border overflow-hidden">
            <img 
              src={profilePic} 
              alt="Foto de perfil" 
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          <div className="space-y-6 text-left cursor-default">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Futuro Ingeniero de Software formado en la Universidad Técnica 
              Nacional (UTN) de Costa Rica, con experiencia práctica en el desarrollo de soluciones 
              web y de escritorio utilizando tecnologías como React, C#, .NET y SQL 
              Server. Me motiva transformar requerimientos lógicos en software 
              limpio, escalable y bien estructurado.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-muted/50 border border-border cursor-default">
                <div className="text-primary font-bold text-xl mb-1">POO Avanzada</div>
                <div className="text-sm text-foreground/60">Diseño Orientado a Objetos</div>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border cursor-default">
                <div className="text-primary font-bold text-xl mb-1">Nivel 6</div>
                <div className="text-sm text-foreground/60">UTN - Ingeniería del Software</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
