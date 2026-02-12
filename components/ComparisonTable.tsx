import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const ComparisonTable: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = {
    es: {
      headline: 'Por Qué OpenClaw',
      subheadline: 'Comparado con construirlo tú mismo',
      rows: [
        { feature: 'Tipo', crewai: 'Framework', langchain: 'Framework', autogen: 'Investigación', autonomis: 'Servicio Gestionado' },
        { feature: 'Despliegue', crewai: 'Hazlo tú', langchain: 'Hazlo tú', autogen: 'Hazlo tú', autonomis: 'Nosotros lo hacemos' },
        { feature: 'Soporte', crewai: 'Comunidad', langchain: 'Tier pagado', autogen: 'Ninguno', autonomis: 'Dedicado' },
        { feature: 'Producción', crewai: 'partial', langchain: 'partial', autogen: 'no', autonomis: 'yes' },
        { feature: 'Multi-canal', crewai: 'no', langchain: 'no', autogen: 'no', autonomis: 'yes' },
        { feature: 'Memoria persistente', crewai: 'partial', langchain: 'partial', autogen: 'no', autonomis: 'yes' },
      ],
    },
    en: {
      headline: 'Why OpenClaw',
      subheadline: 'Compared to building it yourself',
      rows: [
        { feature: 'Type', crewai: 'Framework', langchain: 'Framework', autogen: 'Research', autonomis: 'Managed Service' },
        { feature: 'Deployment', crewai: 'DIY', langchain: 'DIY', autogen: 'DIY', autonomis: 'We do it' },
        { feature: 'Support', crewai: 'Community', langchain: 'Paid tier', autogen: 'None', autonomis: 'Dedicated' },
        { feature: 'Production-ready', crewai: 'partial', langchain: 'partial', autogen: 'no', autonomis: 'yes' },
        { feature: 'Multi-channel', crewai: 'no', langchain: 'no', autogen: 'no', autonomis: 'yes' },
        { feature: 'Persistent memory', crewai: 'partial', langchain: 'partial', autogen: 'no', autonomis: 'yes' },
      ],
    },
  };

  const t = content[language];

  const renderCell = (value: string) => {
    if (value === 'yes') return <Check className="w-5 h-5 text-emerald-400 mx-auto" />;
    if (value === 'no') return <X className="w-5 h-5 text-red-400 mx-auto" />;
    if (value === 'partial') return <Minus className="w-5 h-5 text-yellow-400 mx-auto" />;
    return <span className="text-sm">{value}</span>;
  };

  return (
    <section className={`py-16 sm:py-24 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            {t.headline}
          </h2>
          <p className={`text-base ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.subheadline}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-2xl border overflow-hidden ${isDark ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-200 bg-white'}`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
                  <th className="text-left p-4 font-medium"></th>
                  <th className={`p-4 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>CrewAI</th>
                  <th className={`p-4 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>LangChain</th>
                  <th className={`p-4 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>AutoGen</th>
                  <th className={`p-4 font-bold ${isDark ? 'text-purple-400 bg-purple-500/5' : 'text-purple-700 bg-purple-50'}`}>Autonomis</th>
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row, i) => (
                  <tr key={i} className={`border-b last:border-0 ${isDark ? 'border-zinc-800/50' : 'border-zinc-100'}`}>
                    <td className={`p-4 font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{row.feature}</td>
                    <td className={`p-4 text-center ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{renderCell(row.crewai)}</td>
                    <td className={`p-4 text-center ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{renderCell(row.langchain)}</td>
                    <td className={`p-4 text-center ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{renderCell(row.autogen)}</td>
                    <td className={`p-4 text-center font-medium ${isDark ? 'text-purple-300 bg-purple-500/5' : 'text-purple-700 bg-purple-50'}`}>{renderCell(row.autonomis)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
