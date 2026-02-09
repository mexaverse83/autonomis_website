import React from 'react';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const CTA: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = {
    es: {
      headlineStart: "¿Listo para desplegar su",
      headlineEnd: "fuerza laboral digital?",
      desc: "Comience a construir gratis. Escale a medida que crece. No se requiere tarjeta de crédito para el desarrollo.",
      btnPrimary: "Comenzar a Construir",
      btnSecondary: "Hablar con Ventas",
      note: "Incluye 5,000 tokens de inferencia gratis/mes."
    },
    en: {
      headlineStart: "Ready to deploy your",
      headlineEnd: "digital workforce?",
      desc: "Start building for free. Scale as you grow. No credit card required for development.",
      btnPrimary: "Start Building",
      btnSecondary: "Talk to Sales",
      note: "Includes 5,000 free inference tokens/month."
    }
  };

  const t = content[language];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-black to-zinc-900' : 'bg-gradient-to-b from-slate-100 to-white'}`} />

      {/* Glow effect */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none ${isDark ? 'bg-indigo-500/20 opacity-30' : 'bg-indigo-500/10 opacity-50'}`} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
          {t.headlineStart} <br />
          <span className={`text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-indigo-400 to-cyan-400' : 'bg-gradient-to-r from-indigo-600 to-cyan-600'}`}>{t.headlineEnd}</span>
        </h2>
        <div className="flex items-center justify-center">
          <Button variant="primary" className="h-11 sm:h-12 lg:h-14 px-5 sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg" onClick={scrollToContact}>
            {t.btnPrimary}
          </Button>
        </div>
      </div>
    </section>
  );
};