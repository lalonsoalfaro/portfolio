import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Proyecto Ejemplo 1",
      description: "Descripción breve del proyecto. Explica el problema que resuelve y la solución implementada utilizando tecnologías modernas.",
      technologies: ["React", "Tailwind", "Node.js"],
      image: "https://via.placeholder.com/600x400",
      demo: "#",
      repository: "#"
    },
    {
      title: "Proyecto Ejemplo 2",
      description: "Descripción breve del proyecto. Explica el problema que resuelve y la solución implementada utilizando tecnologías modernas.",
      technologies: ["TypeScript", "PostgreSQL", "Next.js"],
      image: "https://via.placeholder.com/600x400",
      demo: "#",
      repository: "#"
    },
    {
      title: "Proyecto Ejemplo 3",
      description: "Descripción breve del proyecto. Explica el problema que resuelve y la solución implementada utilizando tecnologías modernas.",
      technologies: ["Python", "FastAPI", "Docker"],
      image: "https://via.placeholder.com/600x400",
      demo: "#",
      repository: "#"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 bg-background/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="relative group max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-card border border-border shadow-2xl shadow-primary/10">
            <div 
              className="flex transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 aspect-video md:aspect-square bg-muted relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-muted border border-border text-foreground/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm" className="flex-1 gap-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,127,0.3)] hover:border-primary/50 transition-all duration-300">
                        <Github className="h-4 w-4" /> Código
                      </Button>
                      <Button size="sm" className="flex-1 gap-2">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button 
            onClick={prevProject}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/80 transition-all z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextProject}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/80 transition-all z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Puntos de paginación */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${currentIndex === index ? 'w-8 bg-primary' : 'w-2 bg-muted border border-border'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
