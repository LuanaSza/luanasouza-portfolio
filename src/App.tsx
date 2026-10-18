import { personalInfo, skills, projects, aboutMe, trajetoria } from './data/portfolioData';
import { ExternalLink, Code2, Database, Terminal, Layout, Download } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-gray-100 px-6 md:px-16 lg:px-24 py-8">
      <header className="flex justify-between items-center py-4 border-b border-gray-800">
        <nav className="hidden md:flex gap-6 text-sm text-gray-400">
          <a href="#sobre" className="hover:text-purple-400 transition">
            Sobre
          </a>
          <a href="#skills" className="hover:text-purple-400 transition">
            Skills
          </a>
          <a href="#projetos" className="hover:text-purple-400 transition">
            Projetos
          </a>
          <a href="#trajetoria" className="hover:text-purple-400 transition">
            Trajetória
          </a>
        </nav>

        <button className="flex items-center gap-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 px-4 py-2 rounded-lg text-sm transition">
          <Download size={16} /> Download CV
        </button>
      </header>

      <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4">
            {personalInfo.subtitle}
          </h2>

          <p className="text-gray-400 mb-8 max-w-lg">
            {personalInfo.description}
          </p>

          <div className="flex gap-4">
            <a
              href="#projetos"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Ver Projetos
            </a>

            <a
              href="#contato"
              className="border border-gray-700 hover:border-purple-500 px-6 py-3 rounded-lg font-medium transition"
            >
              Entrar em Contato
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src="perfil.jpeg"
                alt="Luana Souza"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="trajetoria" className="py-12 border-t border-gray-800">
  <div className="flex items-center gap-3 mb-8">
    <h3 className="text-2xl font-bold font-serif tracking-wide text-white">
      Minha Trajetória
    </h3>
    <Icons.Compass className="w-6 h-6 text-purple-400/80 stroke-[1.5]" />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {trajetoria.map((item, i) => (
      <div
        key={i}
        className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300"
      >
        <div>
          {/* Topo do Card: Ícones à esquerda e Tag à direita */}
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
              {item.tag}
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

      <section id="skills" className="py-12 border-t border-gray-800">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
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

      <section id="projetos" className="py-12 border-t border-gray-800">
        <h3 className="text-2xl font-bold mb-8">
          Projetos em Destaque
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 rounded-xl p-6 transition flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-semibold mb-2">
                  {proj.title}
                </h4>

                <p className="text-gray-400 text-sm mb-4">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag, t) => (
                    <span
                      key={t}
                      className="text-xs bg-purple-950/60 text-purple-300 border border-purple-800/40 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 border-t border-gray-800 pt-4 text-sm">
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
    <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h4 className="font-semibold text-gray-200">{title}</h4>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span
            key={idx}
            className="text-xs bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md border border-gray-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
