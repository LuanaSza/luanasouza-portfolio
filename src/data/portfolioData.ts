export interface TrajetoriaItem {
  tag?: string;
  title: string;
  description: string;
  icons?: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image: string;
}

export const personalInfo = {
  name: "Luana Souza",
  role: "Desenvolvedora de Software | Full Stack",
  subtitle: "Desenvolvedora de Software | Full Stack",
  description:
    "Uma jornada pessoal através de tecnologia, design e código, criando experiências web funcionais e elegantes.",
  location: "Parnaíba, PI",
  education: "Análise e Desenvolvimento de Sistemas (IFPI)",
  languages: ["Português", "Inglês"],
};

export const skills = {
  frontEnd: ["React", "TypeScript", "JavaScript", "Tailwind CSS"],
  backEnd: ["Node.js", "PHP", "Python", "Java"],
  databases: ["MySQL", "PostgreSQL", "SQLite"],
  tools: ["Git", "GitHub", "Cursor AI", "Figma", "Scriptcase"],
};

export const trajetoria: TrajetoriaItem[] = [
  {
    tag: "Fundamentos",
    title: "De onde vim",
    description:
      "Iniciei minha trajetória na área da saúde, onde dei meus primeiros passos acadêmicos. Mas sempre quis mais: mais conhecimento, liberdade e oportunidades para construir uma vida que fosse além do que eu já conhecia.",
    icons: ["Stethoscope", "BookOpen"],
  },
  {
    tag: "Transição",
    title: "Encontrando o caminho",
    description:
      "Foi na tecnologia que encontrei um novo caminho. Ao ingressar em Análise e Desenvolvimento de Sistemas, descobri minha paixão por transformar ideias em soluções. Desde então, venho desenvolvendo minhas habilidades e aprendendo com desafios reais.",
    icons: ["CodeXml", "KeyRound"],
  },
  {
    tag: "Atualidade",
    title: "Minha trajetória atual",
    description:
      "Hoje, estou construindo minha carreira no desenvolvimento de software, unindo aprendizado, prática e curiosidade. Minha experiência profissional tem me permitido participar de projetos reais, desenvolver minhas habilidades e compreender que a tecnologia vai muito além de escrever código: ela é uma ferramenta para inovar, resolver problemas e abrir portas.",
    icons: ["Cpu", "Sparkles"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Entrelinhas",
    description:
      "Plataforma web pessoal para publicação e organização de ensaios, prosas e reflexões.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/LuanaSza/Entrelinhas_sza.git",
    demo: "https://entrelinhas-sza.vercel.app/",
    image: "/entrelinhas.png", // <--- Aqui
  },
  {
    title: "InflaBrasil",
    description:
      "Aplicação web open-source para acompanhamento e análise de métricas de inflação.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/LuanaSza/Infla-Brazil.git",
    demo: "",
    image: "/infla.png", // <--- Nome exatamente igual ao da pasta public
  },
  {
    title: "Plataforma OmnisBlue — RGM Tecnologia",
    description:
      "Atuação no desenvolvimento e evolução do ecossistema SaaS da OmnisBlue, incluindo implementação de novas funcionalidades, ajustes na estrutura de banco de dados, integração de APIs e criação de dashboards de BI para governança e gestão de riscos.",
    tags: ["PHP", "Scriptcase", "Python", "MySQL", "JavaScript"],
    github: "#",
    demo: "https://omnisblue-sza.vercel.app/",
    image: "/omnisblue.jpeg", // <--- Extensão .jpeg
  },
];

export const aboutMe = {
  description: `
Minha trajetória começou na área da saúde, onde dei meus primeiros passos acadêmicos. Mas, desde cedo, sempre tive uma inquietação dentro de mim: a vontade de ir além. Sempre quis mais: mais conhecimento, mais liberdade, mais oportunidades e a possibilidade de construir uma vida que refletisse a minha ambição e o meu potencial.

Foi assim que encontrei na tecnologia um novo caminho. Ao ingressar em Análise e Desenvolvimento de Sistemas, descobri uma área que me permite transformar ideias em soluções, aprender constantemente e enxergar possibilidades onde antes existiam apenas desafios.

Hoje, estou construindo minha carreira no desenvolvimento de software, unindo aprendizado, prática e curiosidade. Minha experiência profissional tem me permitido participar de projetos reais, desenvolver minhas habilidades e compreender que a tecnologia vai muito além de escrever código: ela é uma ferramenta para inovar, resolver problemas e abrir portas.

Sou movida pela vontade de evoluir, conquistar minha independência e criar oportunidades que antes pareciam distantes. Sei que ainda tenho muito a aprender, mas também sei onde quero chegar. Minha trajetória não é sobre ter começado no lugar certo, e sim sobre ter coragem de mudar de direção quando percebi que podia ir além.

Estou apenas começando, e essa é uma das partes mais empolgantes da minha história.`,
};