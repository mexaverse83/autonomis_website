import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Target, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const JudgmentSection: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = {
    es: {
      quote: '"Los agentes individuales son demos. Los equipos de agentes coordinados son producción."',
      headline: "Un agente no es suficiente.",
      subtext: "El trabajo real necesita especialistas que hablan entre sí.",
      pillars: [
        {
          title: "Agentes Solitarios Chocan con Paredes",
          description: "Un agente no puede investigar, codificar, probar y desplegar. Los humanos tampoco. Por eso tenemos equipos.",
          icon: Target
        },
        {
          title: "La Coordinación es lo Difícil",
          description: "Lograr que los agentes compartan contexto, pasen trabajo y no se estorben entre sí — eso es lo que resolvemos.",
          icon: Scale
        },
        {
          title: "Framework > Prompt",
          description: "Un agente bien estructurado con reglas, memoria y habilidades supera a un prompt inteligente cada vez.",
          icon: AlertTriangle
        }
      ]
    },
    en: {
      quote: '"Single agents are demos. Coordinated agent teams are production."',
      headline: "One agent isn't enough.",
      subtext: "Real work needs specialists that talk to each other.",
      pillars: [
        {
          title: "Solo Agents Hit Walls",
          description: "One agent can't research, code, test, and deploy. Humans can't either. That's why we have teams.",
          icon: Target
        },
        {
          title: "Coordination is the Hard Part",
          description: "Getting agents to share context, hand off work, and not step on each other? That's what we solve.",
          icon: Scale
        },
        {
          title: "Framework > Prompt",
          description: "A well-structured agent with rules, memory, and skills beats a clever prompt every time.",
          icon: AlertTriangle
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className={`py-16 sm:py-24 lg:py-32 relative overflow-hidden ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
      {/* Background decoration */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-amber-500/5 via-transparent to-transparent' : 'bg-gradient-to-b from-amber-50 via-transparent to-transparent'}`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium italic leading-relaxed max-w-4xl mx-auto ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
            {t.quote}
          </p>
        </motion.blockquote>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className={`text-xl sm:text-2xl font-semibold mb-3 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
            {t.headline}
          </p>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {t.subtext}
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {t.pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 sm:p-8 rounded-2xl border ${
                  isDark
                    ? 'bg-zinc-900/50 border-zinc-800 hover:border-amber-500/50'
                    : 'bg-white border-zinc-200 hover:border-amber-500/50 shadow-sm'
                } transition-colors duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6 ${
                  isDark ? 'bg-amber-500/10' : 'bg-amber-50'
                }`}>
                  <Icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-3 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                  {pillar.title}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
