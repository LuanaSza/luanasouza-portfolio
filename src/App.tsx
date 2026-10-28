import React, { useState, useEffect } from "react";
import { ContactSection } from "./ContactSection";
import {
  personalInfo,
  skills,
  projects,
  trajetoria,
} from "./data/portfolioData";
import {
  ExternalLink,
  Code2,
  Database,
  Download,
  Globe,
  Mail,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Wrench,
  Briefcase,
} from "lucide-react";
import * as Icons from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  const navItems = [
    { label: "Início", href: "#inicio", id: "inicio" },
    { label: "Trajetória", href: "#trajetoria", id: "trajetoria" },
    { label: "Experiência", href: "#experiencia", id: "experiencia" },
    { label: "Tecnologias", href: "#skills", id: "skills" },
    { label: "Projetos", href: "#projetos", id: "projetos" },
    { label: "Sobre Mim", href: "#sobre", id: "sobre" },
    { label: "Contato", href: "#contato", id: "contato" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0813] text-gray-100 px-4 sm:px-8 md:px-16 lg:px-24 pb-8 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* Header / Menu Fixo */}
      <header className="sticky top-4 z-50 flex items-center justify-between py-3 px-4 sm:px-6 rounded-2xl border border-purple-500/30 w-full mb-8 sm:mb-12 bg-[#0b0c10]/85 backdrop-blur-md shadow-[0_4px_20px_rgba(11,12,16,0.8)] transition-all duration-300">
        {/* Monograma LS + Nome */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-300 font-serif font-bold text-lg shadow-[0_0_12px_rgba(168,85,247,0.4)]">
            LS
          </div>
          <span className="font-medium text-sm sm:text-base tracking-wide text-white">
            Luana Souza
          </span>
        </div>

        {/* Links de Navegação */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`relative font-medium py-1 transition group ${
                  isActive ? "text-white" : "text-gray-400 hover:text-purple-300"
                }`}
              >
                {item.label}

                {/* Luzinha e Linha Brilhante */}
                <span
                  className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400 shadow-[0_0_6px_#a855f7] transition-all duration-300 ${
                    isActive
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Lado Direito: Botão Baixar CV */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/CV_Luana_Souza.pdf"
            download="CV_Luana_Souza.pdf"
            className="flex items-center gap-2 bg-purple-950/50 hover:bg-purple-900/60 text-purple-200 border border-purple-500/40 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition shadow-lg shadow-purple-950/50 cursor-pointer"
          >
            <Download size={16} className="text-purple-400 shrink-0" />
            <span>Baixar CV</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Minha Trajetória */}
      <section id="trajetoria" className="py-12 border-t border-gray-800/60">
        <div className="flex items-center gap-4 mb-8 w-full">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-semibold mb-0.5">
              Minha
            </span>
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold tracking-wide text-white">
                Trajetória
              </h3>
              <div className="h-[2px] w-full bg-gradient-to-r from-purple-500 via-purple-400 to-transparent rounded-full mt-1 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            </div>
          </div>

          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-500/40 text-purple-400 bg-purple-950/20 shrink-0 overflow-hidden">
            <ArrowRight size={14} className="animate-arrow-walk" />
          </div>

          <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/40 via-purple-500/20 to-purple-500/10 relative overflow-visible">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7,0_0_4px_#fff] animate-ball-walk" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trajetoria.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border backdrop-blur-md flex flex-col justify-between transition-all duration-300 shadow-lg border-white/10 bg-white/[0.02]"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3 text-purple-400/80">
                    {item.icons &&
                      item.icons.map((iconName, index) => {
                        const IconComponent = (
                          Icons as Record<string, React.ElementType>
                        )[iconName];
                        return IconComponent ? (
                          <IconComponent
                            key={index}
                            className="w-7 h-7 stroke-[1.5]"
                          />
                        ) : null;
                      })}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-purple-400/60 font-light">
                    {item.tag || `Passo 0${i + 1}`}
                  </span>
                </div>

                <h4 className="text-xl font-serif font-semibold mb-3 text-white">
                  {item.title}
                </h4>

                <p className="text-sm leading-relaxed font-light text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experiência Profissional */}
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
                  <p className="text-purple-400 font-medium text-sm">
                    OmnisBlue
                  </p>
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
                      <span>Desenvolvimento e manutenção de funcionalidades utilizando PHP e Scriptcase.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <span>Consultas e manipulação de dados em banco de dados SQL.</span>
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

      {/* Skills & Tecnologias */}
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

      {/* Projetos em Destaque */}
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
          {projects.map((proj: any, i: number) => (
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
                  {proj.tags.map((tag: string, t: number) => (
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

      {/* Seção Sobre Mim */}
      <section id="sobre" className="py-16 border-t max-w-7xl mx-auto border-gray-800/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-purple-500/30 bg-purple-950/20 shadow-2xl shadow-purple-950/50 group">
              <img
                src="/lua.jpeg"
                alt="Luana Souza"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-purple-400 font-mono tracking-widest text-xs uppercase font-semibold">
                SOBRE MIM
              </span>
              <div className="h-[1px] w-12 bg-purple-500/40" />
            </div>

            <p className="text-base leading-relaxed mb-4 font-light text-gray-300">
              Minha trajetória começou na área da saúde, mas foi na tecnologia
              que encontrei meu caminho. Sou do Piauí, Brasil, e atualmente
              curso o 4º período de Desenvolvimento de Sistemas, atuando como
              desenvolvedora de software júnior na OmnisBlue.
            </p>

            <p className="text-base leading-relaxed font-light text-gray-400">
              Sou ambiciosa, curiosa e movida pela vontade de aprender, evoluir
              e construir meu próprio caminho. Além da programação, sou
              apaixonada por livros e escrita, e criei a Entrelinhas, um espaço
              onde compartilho ideias, pensamentos e reflexões. Acredito no poder
              da tecnologia para transformar ideias em soluções e impactar
              vidas.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <ContactSection />
    </div>
  );
}

function SkillCard({
  title,
  description,
  items,
  icon,
}: {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-lg bg-purple-950/20 border-purple-500/20 hover:border-purple-500/40">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 text-purple-300 shrink-0">
            {icon}
          </div>
          <h4 className="font-serif font-semibold text-lg text-white">
            {title}
          </h4>
        </div>

        <p className="text-xs font-light leading-relaxed mb-6 text-gray-400">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="text-xs bg-purple-950/60 text-purple-300 border border-purple-800/40 px-3 py-1 rounded-full font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}