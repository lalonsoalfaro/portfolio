import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: "Universidad Técnica Nacional (UTN)",
      degree: "Ingeniería del Software",
      level: "Diplomado Universitario - Plan 2025",
      period: "2025 - 2026",
      details: "Niveles 1 al 5 completados. Actualmente en el nivel 6. Formación en programación, bases de datos, arquitectura de software, estructuras de datos y desarrollo web."
    },
    {
      institution: "Universidad Técnica Nacional (UTN)",
      degree: "Ingeniería del Software",
      level: "Formación en inglés hasta nivel B2",
      period: "2025–2026",
      details: "Inglés técnico, documentación profesional, comunicación empresarial, emails, presentaciones, entrevistas simuladas y terminología del área de tecnología."
    }
  ];

  const certificationsData = [
    {
      title: "Fundamentos de Ciencia de Datos con Python",
      institution: "Cisco Networking Academy",
      file: "/certificados/data-science-python.pdf",
    },
    {
      title: "Introducción a la Ciencia de Datos",
      institution: "Cisco Networking Academy",
      file: "/certificados/intro-data-science.pdf",
    },
    {
      title: "Introducción al IoT (Internet de las Cosas)",
      institution: "Cisco Networking Academy",
      file: "/certificados/intro-iot.pdf",
    },
  ];

  return (
    <section id="education" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Columna izquierda: Educación */}
          <div>
            <div className="mb-10 cursor-default">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Educación</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-border hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,127,0.05)] transition-all duration-300 group py-2"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary transition-colors" />
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <span className="text-sm text-foreground/50 font-medium">{edu.period}</span>
                  </div>
                  <div className="text-primary font-medium mb-2">
                    {edu.degree} — {edu.level}
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: Certificaciones */}
          <div>
            <div className="mb-10 cursor-default">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificaciones</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>

            <div className="space-y-8">
              {certificationsData.map((cert, index) => (
                <a
                  key={index}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative pl-8 border-l-2 border-border hover:border-primary hover:shadow-[0_0_15px_rgba(0,255,127,0.05)] transition-all duration-300 group py-2"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary transition-colors" />
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-foreground/70 font-medium">{cert.institution}</div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;