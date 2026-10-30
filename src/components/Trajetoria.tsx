import React from "react";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";

interface TrajetoriaItem {
  icons?: string[];
  tag?: string;
  title: string;
  description: string;
}

interface TrajetoriaProps {
  trajetoria: TrajetoriaItem[];
}

export function Trajetoria({ trajetoria }: TrajetoriaProps) {
  return (
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
  );
}