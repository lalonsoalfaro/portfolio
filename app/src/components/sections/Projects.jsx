import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import RutaEstelar from '../../assets/Ruta-Estelar.png';
import MatchPet from '../../assets/MatchPet.png';
import UrbanSystem from '../../assets/UrbanSystem.png';

const Projects = () => {
  const projects = [
    {
      title: "Ruta Estelar",
      description: "Aplicación web para gestión de citas y reservas de un observatorio. Incluye autenticación JWT, roles de usuario, gestión de empleados, especialidades y servicios adicionales. Comunicación frontend/backend mediante API REST.",
      technologies: ["React", "JavaScript", "Vite", "Tailwind CSS", "shadcn/ui", "JWT", "REST API"],
      image: RutaEstelar,
      demo: "#",
      repository: "https://github.com/lalonsoalfaro/RutaEstelar"
    },
    {
      title: "UrbanSystem",
      description: "Sistema de administración de condominios desarrollado con arquitectura por capas (UI → BLL → DAL → SQL Server). Utiliza patrones de diseño GoF, ADO.NET para acceso a datos y Stored Procedures.",
      technologies: ["C#", ".NET", "SQL Server", "ADO.NET", "T-SQL", "Visual Studio"],
      image: UrbanSystem,
      demo: "#",
      repository: "https://git.isw.utn.ac.cr/lalonsoalfaro/isw-524_urban_system"
    },
    {
      title: "MatchPet",
      description: "Aplicación web orientada a un refugio de perros y gatos. Desarrollada con HTML, CSS y JavaScript puro. Utiliza localStorage para persistencia de datos e interactividad en el DOM.",
      technologies: ["HTML", "CSS", "JavaScript", "localStorage"],
      image: MatchPet,
      demo: "#",
      repository: "https://lalonsoalfaro.github.io/MatchPet/"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    // Sumamos 1 al índice actual y aplicamos el operador módulo (%) con la cantidad total.
    // Ejemplo: Si hay 3 proyectos y estás en el índice 2, (2 + 1) % 3 = 0 (regresa al inicio).
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    // Ejemplo: prev es 0, projects.length es 3
    // 1. Restamos 1: (0 - 1) = -1
    // 2. Sumamos la longitud: (-1 + 3) = 2
    // 3. Aplicamos módulo: 2 % 3 = 2 (Índice del último elemento),
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-24 bg-background/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 cursor-default">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="relative group max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-card border border-border shadow-2xl shadow-primary/10">
            <div 
              className="flex transition-transform duration-500 ease-out" 
              // Mueve el contenedor hacia la izquierda. A medida que el índice aumenta, el contenedor se desplaza múltiplos exactos del ancho del contenedor padre.
              // Ejemplo: Índice 0: translateX(-0%) -> Muestra el primer proyecto.
                      // Índice 1: translateX(-100%) -> Desplaza el carrusel un 100% de su ancho hacia la izquierda, mostrando el segundo proyecto.
                      // Índice 2: translateX(-200%) $\rightarrow$ Desplaza el carrusel un 200%, mostrando el tercer proyecto.
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 aspect-video md:aspect-square bg-card relative overflow-hidden flex items-center justify-center p-6">
                    <div className="w-full h-full max-w-[420px] max-h-[320px] bg-muted/30 rounded-xl border border-border flex items-center justify-center overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left cursor-default">
                    <h3 className="text-2xl font-bold mb-4 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded bg-muted border border-border text-foreground/60 cursor-default hover:text-primary hover:border-primary/50 hover:shadow-[0_0_8px_rgba(0,255,127,0.15)] transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a href={project.repository} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full gap-2 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,127,0.3)] hover:border-primary/50 transition-all duration-300">
                          <Github className="h-4 w-4" /> Código
                        </Button>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" className="w-full gap-2">
                          <ExternalLink className="h-4 w-4" /> Demo
                        </Button>
                      </a>
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
          {/* Como no necesitamos usar los datos del proyecto en sí dentro del botón, el primer parámetro se nombra con un guion bajo (_) por convención para indicar que no se utilizará, y solo se toma el index, */}
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
