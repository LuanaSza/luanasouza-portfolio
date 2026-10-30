import React from "react";
import { ChevronRight, Code2, ExternalLink } from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projetos" className="py-12 border-t border-gray-800/60">
      <div className="flex items-start gap-3 mb-8">
        <ChevronRight className="text-purple-400 mt-1 shrink-0" size={24} />
        <div>
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold block mb-1">
            PROJETOS
          </span>
          <h3 className="text-3xl font-serif font-bold tracking-wide mb-2 text-white">
            Projetos em <span className="text-purple-400">Destaque</span>
          </h3>
          <p className="text-sm font-light text-gray-400">
            Alguns dos meus projetos mais recentes, desenvolvidos com foco em funcionalidade e performance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 transition flex flex-col justify-between backdrop-blur-md bg-white/[0.02] border-white/10 hover:border-purple-500/40"
          >
            <div>
              <div className="w-full h-44 mb-5 rounded-lg overflow-hidden border border-purple-500/20 bg-slate-950/60 relative group">
                {proj.image ? (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      proj.title.includes("OmnisBlue")
                        ? "!bg-white !object-contain p-3"
                        : ""
                    }`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-purple-300/50">
                    [ foto em breve ]
                  </div>
                )}
              </div>

              <h4 className="text-xl font-semibold mb-2 text-white">
                {proj.title}
              </h4>

              <p className="text-sm mb-4 text-gray-400">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tags.map((tag, t) => (
                  <span
                    key={t}
                    className="text-xs bg-purple-950/40 text-purple-300 border border-purple-800/30 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 border-t pt-4 text-sm mt-auto border-gray-800/60">
              {proj.title.includes("OmnisBlue") ? (
                <span className="flex items-center gap-1 text-gray-500 cursor-not-allowed select-none">
                  <Code2 size={16} /> Privado
                </span>
              ) : (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 transition text-gray-400 hover:text-white"
                >
                  <Code2 size={16} /> Código
                </a>
              )}

              {proj.title.includes("InflaBrasil") ? (
                <span className="flex items-center gap-1 text-gray-500 cursor-not-allowed select-none">
                  <ExternalLink size={16} /> Em breve
                </span>
              ) : (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}