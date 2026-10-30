import React from "react";
import { Code2, Briefcase } from "lucide-react";

export function Experiencia() {
  return (
    <section id="experiencia" className="py-16 border-t border-gray-800/60">
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold block mb-2">
          ONDE JÁ ATUEI
        </span>
        <h3 className="text-3xl md:text-4xl font-serif font-bold tracking-wide text-white">
          Experiência <span className="text-purple-400">Profissional</span>
        </h3>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/60 via-purple-500/20 to-transparent hidden md:block" />

        <div className="relative flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="w-full md:w-[46%] border rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl transition duration-300 bg-purple-950/20 border-purple-500/30">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="text-xl font-bold font-serif mb-1 text-white">
                  Desenvolvedora de Software Júnior
                </h4>
                <p className="text-purple-400 font-medium text-sm">OmnisBlue</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
                <Code2 size={20} />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "PHP",
                "Scriptcase",
                "JavaScript",
                "SQL",
                "Python",
                "IA aplicada",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[11px] bg-purple-950/80 text-purple-300 border border-purple-800/50 px-2.5 py-1 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-xs md:text-sm leading-relaxed font-light text-gray-300">
              <div>
                <h5 className="font-semibold mb-1 text-sm text-white">
                  Sobre a atuação
                </h5>
                <p className="text-gray-400">
                  Atuação no desenvolvimento e na manutenção de sistemas
                  corporativos voltados à gestão de compliance, LGPD e due
                  diligence, participando da implementação de funcionalidades,
                  ajustes de regras de negócio e evolução de aplicações.
                </p>
              </div>

              <div>
                <h5 className="font-semibold mb-2 text-sm text-white">
                  Principais atividades
                </h5>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                    <span>
                      Desenvolvimento e manutenção de funcionalidades utilizando
                      PHP e Scriptcase.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                    <span>
                      Consultas e manipulação de dados em banco de dados SQL.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="my-4 md:my-0 flex items-center justify-center relative z-10">
            <div className="w-12 h-12 rounded-full border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] flex items-center justify-center text-purple-300 bg-[#0b0c10]">
              <Briefcase size={20} />
            </div>
          </div>

          <div className="w-full md:w-[46%] text-center md:text-left md:pl-6">
            <span className="text-sm font-semibold text-purple-300 bg-purple-950/60 border border-purple-500/30 px-4 py-2 rounded-xl shadow-md inline-block">
              Janeiro de 2026 – Atual
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}