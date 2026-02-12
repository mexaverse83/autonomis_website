import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { Code2, Search, Monitor, FileText, Database, Puzzle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const Features: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = {
    es: {
      headlineStart: "Tu equipo.",
      headlineEnd: "Tus casos de uso",
      subheadline: "Desplegamos el framework. Tú defines lo que hacen los agentes.",
      features: [
        {
          title: "Equipos de Desarrollo",
          description: "Agentes que escriben código, revisan PRs, corren pruebas y despliegan. Coordinados via Git."
        },
        {
          title: "Investigación y Análisis",
          description: "Agentes que recopilan datos, analizan patrones y entregan reportes. Memoria compartida en todo el equipo."
        },
        {
          title: "Operaciones y Monitoreo",
          description: "Agentes que vigilan sistemas, responden a alertas y coordinan respuestas. 24/7."
        },
        {
          title: "Contenido y Comunicación",
          description: "Agentes que redactan, revisan, formatean y publican. Flujos de trabajo multi-paso."
        },
        {
          title: "Procesamiento de Datos",
          description: "Agentes que clasifican, transforman, enriquecen y enrutan datos. Coordinación de pipeline."
        },
        {
          title: "Flujos Personalizados",
          description: "Tu lógica de negocio, tus reglas. Nosotros construimos la estructura del equipo, tú defines la misión."
        }
      ]
    },
    en: {
      headlineStart: "Your team.",
      headlineEnd: "Your use cases",
      subheadline: "We deploy the framework. You define what the agents do.",
      features: [
        {
          title: "Development Teams",
          description: "Agents that write code, review PRs, run tests, and deploy. Coordinated via Git."
        },
        {
          title: "Research & Analysis",
          description: "Agents that gather data, analyze patterns, and deliver reports. Shared memory across the team."
        },
        {
          title: "Operations & Monitoring",
          description: "Agents that watch systems, respond to alerts, and coordinate responses. 24/7."
        },
        {
          title: "Content & Communication",
          description: "Agents that draft, review, format, and publish. Multi-step workflows."
        },
        {
          title: "Data Processing",
          description: "Agents that classify, transform, enrich, and route data. Pipeline coordination."
        },
        {
          title: "Custom Workflows",
          description: "Your business logic, your rules. We build the team structure, you define the mission."
        }
      ]
    }
  };

  const t = content[language];

  const icons = [
    <Code2 className="w-6 h-6 text-blue-400" />,
    <Search className="w-6 h-6 text-purple-400" />,
    <Monitor className="w-6 h-6 text-emerald-400" />,
    <FileText className="w-6 h-6 text-amber-400" />,
    <Database className="w-6 h-6 text-red-400" />,
    <Puzzle className="w-6 h-6 text-pink-400" />
  ];

  return (
    <section id="soluciones" className={`py-16 sm:py-24 lg:py-32 relative ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-16 lg:mb-20">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 ${isDark ? '' : 'text-zinc-900'}`}>
            {t.headlineStart} <span className={`text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-blue-400 to-violet-600' : 'bg-gradient-to-r from-blue-600 to-violet-700'}`}>{t.headlineEnd}</span>.
          </h2>
          <p className={`text-base sm:text-lg lg:text-xl max-w-2xl ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {t.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {t.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="h-full" isDark={isDark}>
                <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 ${isDark ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200 shadow-sm'}`}>
                  {icons[index]}
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{feature.title}</h3>
                <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {feature.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};