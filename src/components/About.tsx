import React from "react";

export function About() {
  return (
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
  );
}