import React from 'react';
import {
  Lightbulb,
  Clock,
  ShieldCheck,
  Users,
  MessageSquareText,
} from 'lucide-react';

const softSkills = [
  {
    title: 'Resolución de Problemas y Resiliencia',
    description:
      'Capacidad para descomponer retos complejos en partes manejables, abordando los bloqueos técnicos y lógicos con una mentalidad de aprendizaje constante.',
    Icon: Lightbulb,
  },
  {
    title: 'Gestión del Tiempo y Adaptabilidad',
    description:
      'Flexibilidad para ajustarme dinámicamente a los cambios en los requerimientos del proyecto, priorizando tareas de forma eficiente ante múltiples entregas.',
    Icon: Clock,
  },
  {
    title: 'Responsabilidad y Proactividad',
    description:
      'Compromiso absoluto con los objetivos del equipo, asumiendo la iniciativa para investigar, desbloquear problemas y comunicar avances de forma transparente.',
    Icon: ShieldCheck,
  },
  {
    title: 'Trabajo en Equipo y Colaboración',
    description:
      'Facultad para coordinar esfuerzos con compañeros, apoyando en la resolución conjunta de retos y manteniendo alineados los objetivos del grupo.',
    Icon: Users,
  },
  {
    title: 'Comunicación Técnica y Formal',
    description:
      'Habilidad para estructurar información de manera clara y precisa, traduciendo conceptos complejos en reportes, presentaciones y documentación formal.',
    Icon: MessageSquareText,
  },
];

const SoftSkills = () => {
  return (
    <section id="soft-skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 cursor-default">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Habilidades Blandas & <span className="text-primary">Competencias</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {softSkills.map((skill) => (
            <div
              key={skill.title}
              className="p-5 rounded-xl bg-muted/30 border border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,255,127,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-default flex flex-col items-center text-center w-[calc(33.333%-1rem)] min-w-[270px]"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary mb-2.5 group-hover:bg-primary/20 group-hover:shadow-[0_0_12px_rgba(0,255,127,0.2)] transition-all duration-300">
                <skill.Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold mb-1.5 text-foreground group-hover:text-primary transition-colors">
                {skill.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
