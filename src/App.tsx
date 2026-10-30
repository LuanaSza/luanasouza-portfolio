import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Trajetoria } from "./components/Trajetoria";
import { Experiencia } from "./components/Experiencia";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { ContactSection } from "./ContactSection";
import {
  personalInfo,
  skills,
  projects,
  trajetoria,
} from "./data/portfolioData";

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
      <Header
        navItems={navItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero personalInfo={personalInfo} />
      <Trajetoria trajetoria={trajetoria} />
      <Experiencia />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <About />
      <ContactSection />
    </div>
  );
}