import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const testimonials = [
  {
    quote: "Redujimos nuestro tiempo de resolución de tickets de soporte en un 85% usando Agentic Flow. Las capacidades de razonamiento son inigualables.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "La implementación tomó días, no meses. La experiencia del desarrollador es exactamente lo que necesitábamos para nuestra hoja de ruta de IA.",
    author: "Marcus Rodriguez",
    role: "VP de Ingeniería",
    company: "Nexus Systems",
    image: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    quote: "Finalmente, una plataforma de IA que nos da el control y la observabilidad requeridos para el cumplimiento de servicios financieros.",
    author: "Elena Kowalski",
    role: "Jefa de Producto",
    company: "FinGuard",
    image: "https://picsum.photos/seed/elena/100/100"
  }
];

export const Testimonials: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-24 border-t ${isDark ? 'bg-black border-zinc-900' : 'bg-white border-zinc-200'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-bold tracking-tight mb-4 ${isDark ? '' : 'text-zinc-900'}`}>Con la confianza de equipos de ingeniería</h2>
          <p className={isDark ? 'text-zinc-500' : 'text-zinc-600'}>Únase a más de 10,000 desarrolladores automatizando el futuro.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl border transition-colors ${isDark
                  ? 'bg-zinc-900/30 border-zinc-800 hover:border-zinc-700'
                  : 'bg-slate-50 border-zinc-200 hover:border-zinc-300 shadow-sm'
                }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.author} className={`w-12 h-12 rounded-full border ${isDark ? 'border-zinc-800' : 'border-zinc-300'}`} />
                <div>
                  <div className={`font-medium ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.author}</div>
                  <div className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{t.role} @ {t.company}</div>
                </div>
              </div>
              <p className={`text-lg italic ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>"{t.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};