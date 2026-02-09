import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, Terminal, CheckCircle, Eye, ShieldCheck, Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { HeroBackground } from './HeroBackground';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [index, setIndex] = useState(0);

  const content = {
    es: {
      terms: ["Automatización", "Machine Learning", "Ingeniería de Calidad", "Desarrollo", "Agentes Agénticos", "Transformación Digital"],
      weAre: "Somos",
      headlineStart: "Agentes de IA para Empresas",
      headlineEnd: "Diseñados para Producción, No para Demos",
      subheadline: "Implementamos agentes de IA con juicio integrado — que saben cuándo actuar, cuándo escalar, y cuándo consultar a un humano.",
      ctaPrimary: "Agendar Llamada",
      ctaSecondary: "Ver Framework",
      // Trust indicators
      trust1: "Evaluación integrada",
      trust2: "Trazabilidad completa",
      trust3: "Control y cumplimiento",
      trust4: "Juicio desde el diseño"
    },
    en: {
      terms: ["Automation", "Machine Learning", "Quality Engineering", "Development", "Agentic Agents", "Digital Transformation"],
      weAre: "We are",
      headlineStart: "AI Agents for Enterprise",
      headlineEnd: "Built for Production, Not for Demos",
      subheadline: "We deploy AI agents with built-in judgment — knowing when to act, when to escalate, and when to ask a human.",
      ctaPrimary: "Book a Call",
      ctaSecondary: "View Framework",
      // Trust indicators
      trust1: "Built-in evaluation",
      trust2: "Full traceability",
      trust3: "Control & compliance",
      trust4: "Judgment-first design"
    }
  };

  const t = content[language];
  const isDark = theme === 'dark';

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % t.terms.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [t.terms.length]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16 sm:pt-20 ${isDark ? '' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>

      {/* Background Grid & Beams - Dark theme only */}
      {isDark && (
        <>
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none z-0"></div>
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
          {/* Abstract Glowing Orb - Responsive */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-purple-500/20 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full opacity-50 pointer-events-none" />
        </>
      )}

      {/* Light theme background decoration */}
      {!isDark && (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-blue-500/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full opacity-60 pointer-events-none" />
          <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
        </>
      )}

      {/* Animated Workflow Background - Hidden on mobile for performance */}
      <div className="hidden sm:block">
        <HeroBackground isDark={isDark} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Dynamic Typewriter "We are..." */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white/80 border-zinc-200'
            }`}
        >
          <span className={`text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{t.weAre}</span>
          <div className="relative h-5 overflow-hidden w-48 text-left">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-0 left-0 text-sm font-bold tracking-wide uppercase ${isDark ? 'text-indigo-400' : 'text-indigo-600'
                  }`}
              >
                {t.terms[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-3 sm:mb-4"
        >
          <span className={`text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-b from-white to-white/80' : 'bg-gradient-to-b from-zinc-900 to-zinc-700'}`}>{t.headlineStart}</span>
        </motion.h1>

        {/* Subheadline - the key differentiator */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text mb-4 sm:mb-6 ${isDark ? 'bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400' : 'bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600'}`}
        >
          {t.headlineEnd}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}
        >
          {t.subheadline}
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10"
        >
          <div className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${isDark ? 'bg-zinc-900/50 border border-zinc-800' : 'bg-white/80 border border-zinc-200 shadow-sm'}`}>
            <CheckCircle className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isDark ? 'text-indigo-400' : 'text-blue-600'}`} />
            <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{t.trust1}</span>
          </div>
          <div className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${isDark ? 'bg-zinc-900/50 border border-zinc-800' : 'bg-white/80 border border-zinc-200 shadow-sm'}`}>
            <Eye className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isDark ? 'text-indigo-400' : 'text-blue-600'}`} />
            <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{t.trust2}</span>
          </div>
          <div className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${isDark ? 'bg-zinc-900/50 border border-zinc-800' : 'bg-white/80 border border-zinc-200 shadow-sm'}`}>
            <ShieldCheck className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isDark ? 'text-indigo-400' : 'text-blue-600'}`} />
            <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{t.trust3}</span>
          </div>
          <div className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${isDark ? 'bg-zinc-900/50 border border-zinc-800' : 'bg-white/80 border border-zinc-200 shadow-sm'}`}>
            <Scale className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
            <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{t.trust4}</span>
          </div>
        </motion.div>

        {/* CTA Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" onClick={() => scrollTo('contact')}>
            {t.ctaPrimary} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="secondary" className="gap-2" onClick={() => scrollTo('metodologia')}>
            <Terminal className={`w-4 h-4 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`} />
            {t.ctaSecondary}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};