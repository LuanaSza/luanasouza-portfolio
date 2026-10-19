import { personalInfo, skills, projects, trajetoria } from './data/portfolioData';
import { 
  ExternalLink, 
  Code2, 
  Database, 
  Terminal, 
  Layout, 
  Download, 
  Globe, 
  Mail,
  ArrowRight,
  Sparkles,
  Moon
} from 'lucide-react';
import * as Icons from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen text-gray-100 px-6 md:px-16 lg:px-24 py-8">
      
      {/* Header / Navegação Completo */}
      <header className="flex items-center justify-between py-4 border-b border-purple-900/30 w-full mb-12">
        
        {/* Lado Esquerdo: Logo Monograma LS + Nome */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-300 font-serif font-bold text-lg shadow-[0_0_12px_rgba(168,85,247,0.3)]">
            LS
          </div>
          <span className="text-white font-medium text-base tracking-wide">
            Luana Souza
          </span>
        </div>

        {/* Centro: Links de Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#sobre" className="relative text-white font-medium py-1 group">
            Início
            {/* Ponto e Linha de Destaque Ativo */}
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400 shadow-[0_0_6px_#a855f7]" />
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          </a>

          <a href="#projetos" className="text-gray-400 hover:text-purple-300 transition py-1">
            Projetos
          </a>

          <a href="#sobre" className="text-gray-400 hover:text-purple-300 transition py-1">
            Sobre
          </a>

          <a href="#contato" className="text-gray-400 hover:text-purple-300 transition py-1">
            Contato
          </a>
        </nav>

        {/* Lado Direito: Ícone de Tema + Botão Baixar CV */}
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-purple-300 transition p-2 rounded-lg hover:bg-purple-950/30">
            <Moon size={18} />
          </button>

          <button className="flex items-center gap-2 bg-purple-950/40 hover:bg-purple-900/40 text-purple-200 border border-purple-500/40 px-4 py-2 rounded-xl text-sm font-medium transition shadow-lg shadow-purple-950/50 cursor-pointer">
            <Download size={16} className="text-purple-400" />
            Baixar CV
          </button>
        </div>

      </header>

      {/* Hero Section */}
      <section id="sobre" className="py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna da Esquerda */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-purple-400 text-sm md:text-base font-medium tracking-wide">
              Olá, eu sou
            </span>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">
              Luana <span className="text-purple-400">Souza</span>
            </h1>
            
            <p className="text-gray-300 text-base md:text-lg font-serif">
              {personalInfo.role || "Desenvolvedora Full Stack & Engenheira de Software"}
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl font-light">
              Uma jornada pessoal através da tecnologia, design e código, criando experiências web funcionais e elegantes.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projetos"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition shadow-lg shadow-purple-500/25"
              >
                <Download size={18} /> Ver Projetos
              </a>

              <a
                href="#contato"
                className="flex items-center gap-2 border border-purple-500/30 hover:border-purple-500 bg-purple-950/20 hover:bg-purple-950/40 text-gray-200 px-6 py-3 rounded-xl font-medium transition"
              >
                <Mail size={18} className="text-purple-400" /> Entrar em Contato
              </a>
            </div>

            {/* Links / Redes Sociais */}
            <div className="flex items-center gap-4 pt-3 text-gray-400">
              <a 
                href="https://github.com/LuanaSza" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-purple-600/20 hover:text-purple-300 border border-white/10 transition text-sm"
              >
                <Code2 size={18} /> GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-purple-600/20 hover:text-purple-300 border border-white/10 transition text-sm"
              >
                <Globe size={18} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Coluna da Direita: Foto com Brilho Neon */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-80 transition duration-500"></div>

              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[2.2rem] overflow-hidden border border-purple-500/30 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
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
        
        {/* Cabeçalho do Título com a linha e a bolinha a caminhar */}
        <div className="flex items-center gap-4 mb-8 w-full">
          
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-purple-400 font-semibold mb-0.5">
              Minha
            </span>
            <div className="relative">
              <h3 className="text-3xl font-serif font-bold text-white tracking-wide">
                Trajetória
              </h3>
              <div className="h-[2px] w-full bg-gradient-to-r from-purple-500 via-purple-400 to-transparent rounded-full mt-1 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
            </div>
          </div>

          {/* Seta Circulada */}
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-500/40 text-purple-400 bg-purple-950/20 shrink-0 overflow-hidden">
            <ArrowRight size={14} className="animate-arrow-walk" />
          </div>

          {/* Linha Fina com a Bolinha a Caminhar */}
          <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/40 via-purple-500/20 to-purple-500/10 relative overflow-visible">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7,0_0_4px_#fff] animate-ball-walk" />
          </div>

          {/* Frase e Brilho */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-purple-300/60 font-light shrink-0">
            <span>Cada etapa me trouxe até aqui</span>
            <Sparkles size={14} className="text-purple-400 animate-pulse" />
          </div>

        </div>

        {/* Cartões da Trajetória */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trajetoria.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300 shadow-lg"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3 text-purple-400/80">
                    {item.icons && item.icons.map((iconName, index) => {
                      const IconComponent = (Icons as Record<string, React.ElementType>)[iconName];
                      return IconComponent ? (
                        <IconComponent key={index} className="w-7 h-7 stroke-[1.5]" />
                      ) : null;
                    })}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-purple-400/60 font-light">
                    {item.tag || `Passo 0${i + 1}`}
                  </span>
                </div>

                <h4 className="text-xl font-serif font-semibold text-white mb-3">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Tecnologias */}
      <section id="skills" className="py-12 border-t border-gray-800/60">
        <h3 className="text-2xl font-bold font-serif mb-8 flex items-center gap-2 text-white">
          <Terminal className="text-purple-400" /> Skills & Tecnologias
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            title="Front-End"
            items={skills.frontEnd}
            icon={<Layout className="text-purple-400" />}
          />

          <SkillCard
            title="Back-End"
            items={skills.backEnd}
            icon={<Code2 className="text-purple-400" />}
          />

          <SkillCard
            title="Bancos de Dados"
            items={skills.databases}
            icon={<Database className="text-purple-400" />}
          />

          <SkillCard
            title="Ferramentas"
            items={skills.tools}
            icon={<Terminal className="text-purple-400" />}
          />
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section id="projetos" className="py-12 border-t border-gray-800/60">
        <h3 className="text-2xl font-bold font-serif mb-8 text-white">
          Projetos em Destaque
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-purple-500/40 rounded-xl p-6 transition flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {proj.title}
                </h4>

                <p className="text-gray-400 text-sm mb-4">
                  {proj.description}
                </p>

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

              <div className="flex gap-4 border-t border-gray-800/60 pt-4 text-sm">
                <a
                  href={proj.github}
                  className="flex items-center gap-1 text-gray-400 hover:text-white transition"
                >
                  <Code2 size={16} /> Code
                </a>

                <a
                  href={proj.demo}
                  className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

function SkillCard({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h4 className="font-semibold text-gray-200">{title}</h4>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="text-xs bg-white/5 text-gray-300 px-2.5 py-1 rounded-md border border-white/10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}