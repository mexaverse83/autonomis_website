import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const tools = [
  {
    name: "Snorkel AI",
    category: "Data Labeling",
    logo: "/logos/snorkel.png"
  },
  {
    name: "Weights & Biases",
    category: "Training Tracking",
    logo: "/logos/wandb.png"
  },
  {
    name: "Ray Serve",
    category: "Inference",
    logo: "/logos/ray.svg"
  },
  {
    name: "CrewAI",
    category: "Orchestration",
    logo: "/logos/crewai.png"
  },

  {
    name: "LangGraph",
    category: "Orchestration",
    logo: "/logos/langgraph.png"
  },
  {
    name: "DeepEval",
    category: "QA Testing",
    logo: "/logos/deepeval.png"
  },
  {
    name: "Langfuse",
    category: "Observability",
    logo: "/logos/langfuse.png"
  },
  {
    name: "Credo AI",
    category: "Governance",
    logo: "/logos/credo.png"
  },
  {
    name: "MLflow",
    category: "Experiment Tracking",
    logo: "/logos/mlflow.png"
  }
];

// Duplicate tools for seamless infinite scroll
const duplicatedTools = [...tools, ...tools];

export const TechStack: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const title = language === 'es'
    ? "Potenciado por las mejores herramientas del ecosistema"
    : "Powered by the ecosystem's best tools";

  return (
    <section id="herramientas" className={`py-16 border-t relative overflow-hidden ${isDark ? 'bg-black border-zinc-900' : 'bg-white border-zinc-200'}`}>
      {/* Subtle gradient overlay */}
      <div className={`absolute inset-0 z-10 pointer-events-none ${isDark ? 'bg-gradient-to-r from-black via-transparent to-black' : 'bg-gradient-to-r from-white via-transparent to-white'}`} />

      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <h3 className={`text-sm font-semibold uppercase tracking-widest mb-10 ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
          {title}
        </h3>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${isDark ? 'bg-gradient-to-r from-black to-transparent' : 'bg-gradient-to-r from-white to-transparent'}`} />
          <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${isDark ? 'bg-gradient-to-l from-black to-transparent' : 'bg-gradient-to-l from-white to-transparent'}`} />

          {/* Scrolling track */}
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -50 * tools.length * 4], // Move by total width of one set of tools
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedTools.map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className={`group flex items-center gap-3 px-5 py-3 rounded-full border backdrop-blur-sm transition-all duration-300 cursor-default shrink-0 ${isDark
                    ? 'border-zinc-800/50 bg-zinc-900/20 hover:bg-zinc-800/30 hover:border-zinc-700'
                    : 'border-zinc-200 bg-white/80 hover:bg-zinc-50 hover:border-zinc-300 shadow-sm'
                  }`}
              >
                <div className={`relative flex items-center justify-center w-10 h-10 rounded-full border p-2 shrink-0 overflow-hidden shadow-inner transition-colors ${isDark
                    ? 'bg-zinc-950 border-zinc-800 group-hover:border-zinc-600'
                    : 'bg-white border-zinc-200 group-hover:border-zinc-300'
                  }`}>
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="w-full h-full object-contain filter brightness-100 group-hover:brightness-110 transition-all"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tool.name}&background=${isDark ? '18181b' : 'f4f4f5'}&color=${isDark ? 'fff' : '18181b'}`;
                    }}
                  />
                </div>
                <div className="text-left">
                  <div className={`font-medium text-sm transition-colors whitespace-nowrap ${isDark ? 'text-zinc-300 group-hover:text-white' : 'text-zinc-700 group-hover:text-zinc-900'}`}>
                    {tool.name}
                  </div>
                  <div className={`text-[9px] font-mono uppercase tracking-wider transition-colors whitespace-nowrap ${isDark ? 'text-zinc-500 group-hover:text-zinc-400' : 'text-zinc-500 group-hover:text-zinc-600'}`}>
                    {tool.category}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

