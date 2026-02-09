import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';

// Declare Cal on window for TypeScript
declare global {
  interface Window {
    Cal?: {
      (action: string, ...args: any[]): void;
      ns?: {
        [key: string]: (action: string, config: any) => void;
      };
    };
  }
}

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = {
    es: {
      avail: "DISPONIBILIDAD INMEDIATA",
      headlineStart: "Hablemos de su",
      headlineEnd: "Estrategia de IA",
      mainDesc: "Videollamada de 30 minutos con el equipo de Autonomis.",
      includes: "Incluye:",
      items: [
        "Análisis de necesidades para evaluar el encaje",
        "Auditoría de procesos para mapear e identificar oportunidades",
        "Recomendaciones con los siguientes pasos a seguir"
      ],
      note: "Solo para empresas.",
      closing: "¡Será un gusto conversar!",
      cta: "Agendar Llamada de 30 Min"
    },
    en: {
      avail: "IMMEDIATE AVAILABILITY",
      headlineStart: "Let's talk about your",
      headlineEnd: "AI Strategy",
      mainDesc: "30-minute video call with the Autonomis team.",
      includes: "Includes:",
      items: [
        "Needs analysis to evaluate fit",
        "Process audit to map and identify opportunities",
        "Recommendations with next steps to follow"
      ],
      note: "For enterprises only.",
      closing: "Looking forward to connecting!",
      cta: "Book 30 Min Call"
    }
  };

  const t = content[language];

  // Cal.com config based on theme and language
  const calTheme = isDark ? "dark" : "light";
  const calLink = language === 'es'
    ? 'bernardo-garza-nlu8ko/30min'
    : 'bernardo-garza-nlu8ko/30-min-meeting-english';
  const calNamespace = language === 'es' ? '30min' : '30-min-meeting-english';

  // Update Cal.com UI when theme or language changes
  useEffect(() => {
    // Wait a bit for Cal.com script to load
    const timer = setTimeout(() => {
      if (window.Cal && window.Cal.ns && window.Cal.ns[calNamespace]) {
        window.Cal.ns[calNamespace]("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          theme: calTheme
        });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [calTheme, calNamespace]);

  return (
    <section id="contact" className={`py-16 sm:py-20 lg:py-24 border-t relative overflow-hidden ${isDark ? 'bg-black border-zinc-900' : 'bg-slate-50 border-zinc-200'}`}>
      {/* Background Effects */}
      <div className={`absolute top-0 right-0 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none ${isDark ? 'bg-blue-500/10' : 'bg-blue-500/5'}`} />
      <div className={`absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none ${isDark ? 'bg-purple-500/10' : 'bg-purple-500/5'}`} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-3 sm:mb-4 ${isDark ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-300 bg-white'}`}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className={`text-[10px] sm:text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.avail}</span>
          </div>

          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 ${isDark ? '' : 'text-zinc-900'}`}>
            {t.headlineStart}{' '}
            <span className={`text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-blue-400 to-indigo-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'}`}>
              {t.headlineEnd}
            </span>
          </h2>

          {/* Formatted description */}
          <div className={`max-w-xl mx-auto text-left ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            <p className={`text-base sm:text-lg mb-3 sm:mb-4 text-center ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {t.mainDesc}
            </p>

            <p className={`text-xs sm:text-sm font-medium mb-2 sm:mb-3 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              {t.includes}
            </p>

            <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
              {t.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-xs sm:text-sm">
                  <CheckCircle className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className={`text-xs italic mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
              {t.note}
            </p>

            <p className={`text-center text-sm sm:text-base font-medium mt-3 sm:mt-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
              {t.closing}
            </p>
          </div>
        </motion.div>

        {/* Cal.com Popup Button - uses script from index.html */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <button
            data-cal-namespace={calNamespace}
            data-cal-link={calLink}
            data-cal-config={JSON.stringify({ layout: "month_view", theme: calTheme })}
            className={`group relative inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 lg:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer ${isDark
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25'
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/30'
              }`}
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            {t.cta}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Security note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <p className={`text-xs sm:text-sm ${isDark ? 'text-zinc-600' : 'text-zinc-500'}`}>
            🔒 {language === 'es' ? 'Tu información está segura. Sin spam.' : 'Your information is secure. No spam.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
};