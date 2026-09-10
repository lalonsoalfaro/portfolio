import React from 'react';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', '[Skill Placeholder]'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', '[Skill Placeholder]', '[Skill Placeholder]'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', '[Skill Placeholder]'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'Agile/Scrum'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Habilidades Técnicas</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="p-6 rounded-2xl bg-muted/30 border border-border hover:border-primary/50 transition-colors group">
              <h3 className="text-xl font-semibold mb-6 text-foreground group-hover:text-primary transition-colors">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-background border-border text-foreground/80 hover:text-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
