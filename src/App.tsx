import { useState } from 'react';
import { personalInfo, skills, projects, trajetoria } from './data/portfolioData';
import { 
  ExternalLink, 
  Code2, 
  Database, 
  Terminal, 
  Download, 
  Globe, 
  Mail,
  ArrowRight,
  Sparkles,
  Moon,
  Languages,
  ChevronRight,
  Wrench,
  Briefcase
} from 'lucide-react';
import * as Icons from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  return (
    <div className="min-h-screen text-gray-100 px-6 md:px-16 lg:px-24 pb-8">
      
      {/* Header / Menu Fixo que Acompanha a Rolagem */}
      <header className="sticky top-4 z-50 flex items-center justify-between py-3 px-6 rounded-2xl border border-purple-500/30 w-full mb-12 bg-[#0b0c10]/85 backdrop-blur-md shadow-[0_4px_20px_rgba(11,12,16,0.8)] transition-all duration-300">
        
        {/* Lado Esquerdo: Logo Monograma LS + Nome */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-300 font-serif font-bold text-lg shadow-[0_0_12px_rgba(168,85,247,0.4)]">
            LS
          </div>
          <span className="text-white font-medium text-base tracking-wide">
            Luana Souza
          </span>
        </div>

        {/* Centro: Links de Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#sobre" className="relative text-white font-medium py-1 group">
            {language === 'pt' ? 'Início' : 'Home'}
            <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-400 shadow-[0_0_6px_#a855f7]" />
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
          </a>

          <a href="#experiencia" className="text-gray-400 hover:text-purple-300 transition py-1">
            {language === 'pt' ? 'Experiência' : 'Experience'}
          </a>

          <a href="#projetos" className="text-gray-400 hover:text-purple-300 transition py-1">
            {language === 'pt' ? 'Projetos' : 'Projects'}
          </a>

          <a href="#sobre" className="text-gray-400 hover:text-purple-300 transition py-1">
            {language === 'pt' ? 'Sobre' : 'About'}
          </a>

          <a href="#contato" className="text-gray-400 hover:text-purple-300 transition py-1">
            {language === 'pt' ? 'Contato' : 'Contact'}
          </a>
        </nav>

        {/* Lado Direito: Seletor de Idioma + Modo Noturno + Baixar CV */}
        <div className="flex items-center gap-3">
          
          {/* SELETOR DE IDIOMA */}
          <div className="flex items-center gap-1 bg-purple-950/50 border border-purple-500/30 rounded-xl p-1 text-xs font-medium">
            <Languages size={14} className="text-purple-400 ml-1.5 mr-0.5" />
            <button
              onClick={() => setLanguage('pt')}
              className={`px-2 py-1 rounded-lg transition cursor-pointer ${
                language === 'pt' 
                  ? 'bg-purple-600 text-white shadow-sm' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-lg transition cursor-pointer ${
                language === 'en' 
                  ? 'bg-purple-600 text-white shadow-sm' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          {/* Botão Tema */}
          <button className="text-gray-400 hover:text-purple-300 transition p-2 rounded-lg hover:bg-purple-950/30 cursor-pointer">
            <Moon size={18} />
          </button>

          {/* Botão Baixar CV */}
          <button className="flex items-center gap-2 bg-purple-950/50 hover:bg-purple-900/60 text-purple-200 border border-purple-500/40 px-4 py-2 rounded-xl text-sm font-medium transition shadow-lg shadow-purple-950/50 cursor-pointer">
            <Download size={16} className="text-purple-400" />
            {language === 'pt' ? 'Baixar CV' : 'Download CV'}
          </button>
        </div>

      </header>

      {/* Hero Section */}
      <section id="sobre" className="py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna da Esquerda */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-purple-400 text-sm md:text-base font-medium tracking-wide">
              {language === 'pt' ? 'Olá, eu sou' : 'Hello, I am'}
            </span>

            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">
              Luana <span className="text-purple-400">Souza</span>
            </h1>
            
            <p className="text-gray-300 text-base md:text-lg font-serif">
              {personalInfo.role || "Desenvolvedora Full Stack & Engenheira de Software"}
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl font-light">
              {language === 'pt' 
                ? 'Uma jornada pessoal através da tecnologia, design e código, criando experiências web funcionais e elegantes.'
                : 'A personal journey through technology, design, and code, crafting functional and elegant web experiences.'
              }
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projetos"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition shadow-lg shadow-purple-500/25"
              >
                <Download size={18} /> {language === 'pt' ? 'Ver Projetos' : 'View Projects'}
              </a>

              <a
                href="#contato"
                className="flex items-center gap-2 border border-purple-500/30 hover:border-purple-500 bg-purple-950/20 hover:bg-purple-950/40 text-gray-200 px-6 py-3 rounded-xl font-medium transition"
              >
                <Mail size={18} className="text-purple-400" /> {language === 'pt' ? 'Entrar em Contato' : 'Get in Touch'}
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
              {language === 'pt' ? 'Minha' : 'My'}
            </span>
            <div className="relative">
              <h3 className="text-3xl font-serif font-bold text-white tracking-wide">
                {language === 'pt' ? 'Trajetória' : 'Journey'}
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
            <span>{language === 'pt' ? 'Cada etapa me trouxe até aqui' : 'Every step brought me here'}</span>
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

      {/* Experiência Profissional (Estilo Timeline) */}
      <section id="experiencia" className="py-16 border-t border-gray-800/60">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold block mb-2">
            {language === 'pt' ? 'ONDE JÁ ATUEI' : 'WHAT I HAVE DONE SO FAR'}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-wide">
            {language === 'pt' ? 'Experiência ' : 'Work '}
            <span className="text-purple-400">
              {language === 'pt' ? 'Profissional' : 'Experience'}
            </span>
          </h3>
        </div>

        {/* Linha do Tempo */}
        <div className="relative max-w-5xl mx-auto">
          {/* Linha Vertical Central */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/60 via-purple-500/20 to-transparent hidden md:block" />

          {/* Item da Linha do Tempo: OmnisBlue */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-12">
            
            {/* Cartão de Conteúdo (Esquerda) */}
            <div className="w-full md:w-[46%] bg-purple-950/20 border border-purple-500/30 hover:border-purple-500/60 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl transition duration-300">
              
              {/* Topo do Cartão: Título + Empresa + Pílula de Ícone */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold font-serif text-white mb-1">
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

              {/* Pílulas das Tecnologias */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['PHP', 'Scriptcase', 'JavaScript', 'SQL', 'Python', 'IA aplicada'].map((tech, idx) => (
                  <span key={idx} className="text-[11px] bg-purple-950/80 text-purple-300 border border-purple-800/50 px-2.5 py-1 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Sobre a atuação */}
              <div className="space-y-4 text-xs md:text-sm text-gray-300 leading-relaxed font-light">
                <div>
                  <h5 className="font-semibold text-white mb-1 text-sm">Sobre a atuação</h5>
                  <p className="text-gray-400">
                    Atuação no desenvolvimento e na manutenção de sistemas corporativos voltados à gestão de compliance, LGPD e due diligence, participando da implementação de funcionalidades, ajustes de regras de negócio e evolução de aplicações.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2 text-sm">Principais atividades</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <span>Desenvolvimento e manutenção de funcionalidades utilizando PHP e Scriptcase.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <span>Consultas e manipulação de dados em banco de dados SQL.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <span>Implementação e ajuste de regras de negócio em módulos corporativos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <span>Participação na migração e modernização de aplicações, com estudos e uso de ferramentas de IA para apoiar o desenvolvimento.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      <span>Testes, análise de problemas e correção de funcionalidades.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Marcador Central (Data / Logo) */}
            <div className="my-4 md:my-0 flex items-center justify-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#0b0c10] border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)] flex items-center justify-center text-purple-300">
                <Briefcase size={20} />
              </div>
            </div>

            {/* Lado Direito: Período */}
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
        
        {/* Cabeçalho Estilizado da Secção */}
        <div className="flex items-start gap-3 mb-8">
          <ChevronRight className="text-purple-400 mt-1 shrink-0" size={24} />
          <div>
            <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold block mb-1">
              {language === 'pt' ? 'TECNOLOGIAS' : 'TECHNOLOGIES'}
            </span>
            <h3 className="text-3xl font-serif font-bold text-white tracking-wide mb-2">
              {language === 'pt' ? 'Habilidades e ' : 'Skills & '}
              <span className="text-purple-400">
                {language === 'pt' ? 'Tecnologias' : 'Technologies'}
              </span>
            </h3>
            <p className="text-sm text-gray-400 font-light">
              {language === 'pt'
                ? 'Ferramentas e linguagens que utilizo para transformar ideias em soluções reais.'
                : 'Tools and languages I use to transform ideas into real solutions.'
              }
            </p>
          </div>
        </div>

        {/* Grelha de Cartões */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard
            title="Front-end"
            description={language === 'pt' 
              ? "Interfaces modernas, responsivas e com foco na experiência do usuário." 
              : "Modern, responsive interfaces focused on user experience."}
            items={skills.frontEnd || ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS']}
            icon={<Code2 className="text-purple-300" size={20} />}
          />

          <SkillCard
            title="Back-end"
            description={language === 'pt'
              ? "APIs, lógica de negócio e integração com sistemas e bancos de dados."
              : "APIs, business logic, and integration with systems and databases."}
            items={skills.backEnd || ['PHP', 'Python', 'Node.js', 'Java']}
            icon={<Database className="text-purple-300" size={20} />}
          />

          <SkillCard
            title="Bancos de Dados"
            description={language === 'pt'
              ? "Armazenamento e gerenciamento de dados com segurança e eficiência."
              : "Data storage and management with security and efficiency."}
            items={skills.databases || ['MySQL', 'PostgreSQL', 'SQLite']}
            icon={<Database className="text-purple-300" size={20} />}
          />

          <SkillCard
            title="Ferramentas"
            description={language === 'pt'
              ? "Ambiente de desenvolvimento, versionamento e design de interfaces."
              : "Development environment, version control, and interface design."}
            items={skills.tools || ['Git', 'GitHub', 'Scriptcase', 'Cursor AI', 'Figma']}
            icon={<Wrench className="text-purple-300" size={20} />}
          />
        </div>

      </section>

      {/* Projetos em Destaque */}
      <section id="projetos" className="py-12 border-t border-gray-800/60">
        
        {/* Cabeçalho Estilizado da Secção */}
        <div className="flex items-start gap-3 mb-8">
          <ChevronRight className="text-purple-400 mt-1 shrink-0" size={24} />
          <div>
            <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold block mb-1">
              {language === 'pt' ? 'PROJETOS' : 'PROJECTS'}
            </span>
            <h3 className="text-3xl font-serif font-bold text-white tracking-wide mb-2">
              {language === 'pt' ? 'Projetos em ' : 'Featured '}
              <span className="text-purple-400">
                {language === 'pt' ? 'Destaque' : 'Projects'}
              </span>
            </h3>
            <p className="text-sm text-gray-400 font-light">
              {language === 'pt'
                ? 'Alguns dos meus projetos mais recentes, desenvolvidos com foco em funcionalidade, performance e boas práticas de código.'
                : 'Some of my most recent projects, developed with a focus on functionality, performance, and code best practices.'
              }
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-purple-500/40 rounded-xl p-6 transition flex flex-col justify-between"
            >
              <div>
                {/* Espaço reservado para a Imagem do Projeto */}
                <div className="w-full h-44 mb-5 rounded-lg overflow-hidden border border-purple-500/20 bg-purple-950/30">
                  {proj.image ? (
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-purple-300/50">
                      [ ja eu coloco a ft ]
                    </div>
                  )}
                </div>

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

{/* Componente dos Cartões de Tecnologias */}
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
    <div className="bg-purple-950/20 border border-purple-500/20 hover:border-purple-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-lg">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 text-purple-300 shrink-0">
            {icon}
          </div>
          <h4 className="font-serif font-semibold text-lg text-white">{title}</h4>
        </div>

        <p className="text-xs text-gray-400 font-light leading-relaxed mb-6">
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