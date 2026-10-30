import React from "react";
import { Download } from "lucide-react";

interface HeaderProps {
  navItems: { label: string; href: string; id: string }[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}

export function Header({ navItems, activeSection }: HeaderProps) {
  return (
    <header className="sticky top-4 z-50 flex items-center justify-between py-3 px-4 sm:px-6 rounded-2xl border border-purple-500/30 w-full mb-8 sm:mb-12 bg-[#0b0c10]/85 backdrop-blur-md shadow-[0_4px_20px_rgba(11,12,16,0.8)] transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-purple-950/80 border border-purple-500/40 text-purple-300 font-serif font-bold text-lg shadow-[0_0_12px_rgba(168,85,247,0.4)]">
          LS
        </div>
        <span className="font-medium text-sm sm:text-base tracking-wide text-white">
          Luana Souza
        </span>
      </div>

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
  );
}