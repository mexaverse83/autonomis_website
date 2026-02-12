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
          description: "Agentes que escriben código, revisan pull requests, ejecutan suites de pruebas y despliegan — todo coordinado a través de Git. Uno construye. Otro prueba. Un tercero revisa."
        },
        {
          title: "Investigación y Análisis",
          description: "Un agente recopila datos crudos. Otro los enriquece. Un tercero detecta patrones y entrega un reporte — con fuentes. La memoria compartida significa que cada agente sabe lo que encontraron los demás."
        },
        {
          title: "Operaciones y Monitoreo",
          description: "Agentes que vigilan tus sistemas las 24 horas, detectan anomalías antes de que se conviertan en caídas y coordinan la respuesta a incidentes. Cuando algo se rompe a las 3 AM, no necesitan café."
        },
        {
          title: "Contenido y Comunicación",
          description: "Redactar, revisar, formatear, publicar. Cuatro pasos, cuatro posibles cuellos de botella — o cuatro agentes trabajando en paralelo. Listo antes de que termines tu café."
        },
        {
          title: "Procesamiento de Datos",
          description: "Clasificar, transformar, enriquecer, enrutar. Agentes que convierten inputs desordenados en outputs estructurados — y pasan los resultados al siguiente agente en el pipeline."
        },
        {
          title: "Flujos Personalizados",
          description: "Tu lógica de negocio. Tus reglas. Tus casos especiales. Nosotros construimos la estructura del equipo y la capa de coordinación. Tú defines la misión. El framework se adapta."
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
          description: "Agents that write code, review pull requests, run test suites, and deploy — all coordinated through Git. One builds. Another tests. A third reviews. Merge conflicts? Solved in seconds."
        },
        {
          title: "Research & Analysis",
          description: "One agent gathers raw data. Another enriches it. A third spots patterns and delivers a report — with citations. Shared memory means every agent knows what the others found."
        },
        {
          title: "Operations & Monitoring",
          description: "Agents that watch your systems around the clock, catch anomalies before they become outages, and coordinate incident response. When something breaks at 3 AM, they don't need coffee."
        },
        {
          title: "Content & Communication",
          description: "Draft, review, format, publish. Four steps, four potential bottlenecks — or four agents working in parallel. Done before you finish your coffee."
        },
        {
          title: "Data Processing",
          description: "Classify, transform, enrich, route. Agents that turn messy inputs into structured outputs — then hand the results to the next agent in the pipeline. Just clean data, flowing."
        },
        {
          title: "Custom Workflows",
          description: "Your business logic. Your rules. Your edge cases. We build the team structure and the coordination layer. You define the mission. The framework adapts. The agents execute."
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