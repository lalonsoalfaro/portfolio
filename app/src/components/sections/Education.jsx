import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: "[Nombre de la Institución]",
      degree: "[Carrera / Título]",
      level: "[Nivel Académico]",
      period: "[Año Inicio] - [Año Fin/Actual]",
      details: "[Descripción breve de logros, materias destacadas o promedio académico]."
    },
    {
      institution: "[Nombre de la Institución]",
      degree: "[Curso / Certificación]",
      level: "[Tipo de Certificado]",
      period: "[Año]",
      details: "[Detalle breve sobre la certificación obtenida]."
    }
  ];

  return (
    <section id="education" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Educación</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-border hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,127,0.05)] transition-all duration-300 group py-2">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary transition-colors" />
              <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-bold">{edu.institution}</h3>
                <span className="text-sm text-foreground/50 font-medium">{edu.period}</span>
              </div>
              <div className="text-primary font-medium mb-2">{edu.degree} — {edu.level}</div>
              <p className="text-foreground/70 leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
