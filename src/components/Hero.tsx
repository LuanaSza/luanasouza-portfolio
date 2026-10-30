import React from "react";
import { Download, Mail, Code2, Globe } from "lucide-react";

interface HeroProps {
  personalInfo: { role?: string };
}

export function Hero({ personalInfo }: HeroProps) {
  return (
    <section id="inicio" className="py-8 md:py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
          <span className="text-purple-400 text-sm md:text-base font-medium tracking-wide">
            Olá, eu sou
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-white">
            Luana <span className="text-purple-400">Souza</span>
          </h1>

          <p className="text-base md:text-lg font-serif text-gray-300">
            {personalInfo.role || "Desenvolvedora de Software | Full Stack"}
          </p>

          <p className="text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-light text-gray-400">
            Transformando curiosidade em código e ideias em experiências
            digitais. Uma trajetória de descobertas, evolução e propósito,
            construindo meu espaço no mundo da tecnologia.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projetos"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition shadow-lg shadow-purple-500/25 text-sm sm:text-base"
            >
              <Download size={18} /> Ver Projetos
            </a>

            <a
              href="#contato"
              className="flex items-center gap-2 border px-6 py-3 rounded-xl font-medium transition text-sm sm:text-base border-purple-500/30 hover:border-purple-500 bg-purple-950/20 hover:bg-purple-950/40 text-gray-200"
            >
              <Mail size={18} className="text-purple-400" /> Entrar em Contato
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 pt-3">
            <a
              href="https://github.com/LuanaSza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border transition text-sm bg-white/5 hover:bg-purple-600/20 hover:text-purple-300 border-white/10 text-gray-400"
            >
              <Code2 size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl border transition text-sm bg-white/5 hover:bg-purple-600/20 hover:text-purple-300 border-white/10 text-gray-400"
            >
              <Globe size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-80 transition duration-500" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-[2.2rem] overflow-hidden border border-purple-500/30 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src="perfil.jpeg"
                alt="Luana Souza"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}