import React from "react";
import { ChevronRight, Code2, Database, Wrench } from "lucide-react";
import { SkillCard } from "./SkillCard";

interface SkillsProps {
  skills: {
    frontEnd?: string[];
    backEnd?: string[];
    databases?: string[];
    tools?: string[];
  };
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-12 border-t border-gray-800/60">
      <div className="flex items-start gap-3 mb-8">
        <ChevronRight className="text-purple-400 mt-1 shrink-0" size={24} />
        <div>
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold block mb-1">
            TECNOLOGIAS
          </span>
          <h3 className="text-3xl font-serif font-bold tracking-wide mb-2 text-white">
            Habilidades e <span className="text-purple-400">Tecnologias</span>
          </h3>
          <p className="text-sm font-light text-gray-400">
            Ferramentas e linguagens que utilizo para transformar ideias em soluções reais.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SkillCard
          title="Front-end"
          description="Interfaces modernas, responsivas e com foco na experiência do usuário."
          items={skills.frontEnd || ["React", "TypeScript", "JavaScript", "Tailwind CSS"]}
          icon={<Code2 className="text-purple-300" size={20} />}
        />
        <SkillCard
          title="Back-end"
          description="APIs, lógica de negócio e integração com sistemas e bancos de dados."
          items={skills.backEnd || ["PHP", "Python", "Node.js", "Java"]}
          icon={<Database className="text-purple-300" size={20} />}
        />
        <SkillCard
          title="Bancos de Dados"
          description="Armazenamento e gerenciamento de dados com segurança e eficiência."
          items={skills.databases || ["MySQL", "PostgreSQL", "SQLite"]}
          icon={<Database className="text-purple-300" size={20} />}
        />
        <SkillCard
          title="Ferramentas"
          description="Ambiente de desenvolvimento, versionamento e design de interfaces."
          items={skills.tools || ["Git", "GitHub", "Scriptcase", "Cursor AI", "Figma"]}
          icon={<Wrench className="text-purple-300" size={20} />}
        />
      </div>
    </section>
  );
}