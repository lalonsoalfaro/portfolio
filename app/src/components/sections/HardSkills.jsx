import React from 'react';
import { Badge } from '@/components/ui/badge';
import {
  SiSharp, SiJavascript, SiHtml5, SiCplusplus, SiMysql, SiMongodb,
  SiReact, SiVite, SiTailwindcss, SiShadcnui,
  SiNodedotjs, SiJsonwebtokens,
  SiGit, SiGithub, SiGitlab, SiSwagger, SiVirtualbox,
} from 'react-icons/si';
import { DiJava, DiMsqlServer, DiVisualstudio } from 'react-icons/di';
import { TbSql } from 'react-icons/tb';
import { VscAzureDevops } from 'react-icons/vsc';
import { FaCss3Alt } from 'react-icons/fa6';

// Mapa: nombre del skill (tal como aparece en tu arreglo) -> componente de ícono
// Los skills que no tienen valor (undefined) simplemente no muestran ícono
const skillIcons = {
  'C#': SiSharp,
  Java: DiJava,
  SQL: TbSql,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS: FaCss3Alt,
  'C++': SiCplusplus,
  React: SiReact,
  Vite: SiVite,
  'Taildwind CSS': SiTailwindcss,
  'shadcn/ui': SiShadcnui,
  'Node.js': SiNodedotjs,
  JWT: SiJsonwebtokens,
  'SQL Server': DiMsqlServer,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  'Azure DevOps': VscAzureDevops,
  'Visual Studio': DiVisualstudio,
  Swagger: SiSwagger,
  VirtualBox: SiVirtualbox,
  // Sin ícono disponible (son conceptos/patrones, no herramientas con logo):
  // 'Responsive Design', 'REST APIs', 'ADO.NET', 'T-SQL', 'SSIS', 'MVC',
  // 'Arquitectura en Capas', 'Patrones de Diseño GoF', 'UML', 'PlantUML',
  // 'DTO', 'Factory', 'VS Code' (no existe en react-icons)
};

// Color oficial de marca para cada ícono (obtenidos de simple-icons / branding oficial)
const skillColors = {
  'C#': '#9B4F96',
  Java: '#007396',
  SQL: '#4479A1',
  JavaScript: '#F7DF1E',
  HTML5: '#E34F26',
  CSS: '#1572B6',
  'C++': '#00599C',
  React: '#61DAFB',
  Vite: '#BD34FE',
  'Taildwind CSS': '#06B6D4',
  'shadcn/ui': '#000000',
  'Node.js': '#5FA04E',
  JWT: '#EB4F27',
  'SQL Server': '#CC2927',
  MySQL: '#4479A1',
  MongoDB: '#47A248',
  Git: '#F05032',
  GitHub: '#FFFFFF',
  GitLab: '#FC6D26',
  'Azure DevOps': '#0078D7',
  'Visual Studio': '#5C2D91',
  Swagger: '#85EA2D',
  VirtualBox: '#183A61',
};

const Skills = () => {
  const skillCategories = [
    {
      category: 'Lenguajes',
      skills: ['C#', 'Java', 'SQL', 'C++', 'JavaScript', 'HTML5', 'CSS'],
    },
    {
      category: 'Frontend',
      skills: ['React', 'Vite', 'Taildwind CSS', 'shadcn/ui', 'Diseño Responsivo'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'APIs REST', 'JWT', 'ADO.NET', 'T-SQL'],
    },
    {
      category: 'Base de datos',
      skills: ['SQL Server', 'MySQL', 'MongoDB', 'SSIS'],
    },
    {
      category: 'Arquitectura',
      skills: ['MVC', 'Arquitectura en Capas', 'Patrones de Diseño GoF', 'UML', 'PlantUML', 'DTO', 'Factory'],
    },
    {
      category: 'Herramientas & Plataformas',
      skills: ['Git', 'GitHub', 'GitLab', 'Azure DevOps', 'Visual Studio', 'VS Code', 'Swagger', 'VirtualBox'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="p-6 rounded-2xl bg-muted/30 border border-border hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,255,127,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-default w-[calc(25%-1.5rem)] min-w-[260px]">
              <h3 className="text-xl font-semibold mb-6 text-foreground group-hover:text-primary transition-colors">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  const color = skillColors[skill];
                  return (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-background border-border text-foreground/80 hover:text-primary hover:border-primary/50 hover:shadow-[0_0_8px_rgba(0,255,127,0.15)] transition-all duration-300 cursor-default flex items-center gap-1.5"
                    >
                      {Icon && <Icon className="h-3.5 w-3.5" style={{ color }} />}
                      {skill}
                    </Badge>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;