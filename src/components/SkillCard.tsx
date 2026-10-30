import React from "react";

interface SkillCardProps {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
}

export function SkillCard({
  title,
  description,
  items,
  icon,
}: SkillCardProps) {
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