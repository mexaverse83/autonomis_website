import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './ui/SpotlightCard';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import {
  Bot,
  Users,
  Mail,
  FlaskConical,
  Telescope,
  Shield,
  Code,
  BarChart3,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Palette,
} from 'lucide-react';

export const AgentTeamsSection: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = {
    es: {
      badge: 'Caso de Estudio',
      headline: 'Construimos Nuestro Propio',
      headlineAccent: 'Equipo Primero',
      subheadline: '6 agentes IA. Coordinados. Entregando trabajo real.',
      description: 'Antes de ofrecer equipos de agentes a clientes, construimos el nuestro. 6 agentes especializados trabajando juntos — desarrollo, QA, investigación, diseño, email y coordinación.',
      poweredBy: 'Powered by',
      howItWorks: 'Cómo Funciona',
      steps: [
        { title: 'Definir Estructura', desc: 'Cada agente recibe SOUL.md (identidad), AGENTS.md (reglas), skills y memoria.' },
        { title: 'Desplegar y Conectar', desc: 'Contenedores Docker, mensajería Redis, workspace compartido. Bootstrap automatizado.' },
        { title: 'Coordinar y Entregar', desc: 'Los agentes se comunican directamente, pasan trabajo, hacen standups y entregan resultados.' },
      ],
      agents: [
        { name: 'TARS', role: 'Coordinador de equipo y scrum master', icon: 'shield' },
        { name: 'COOPER', role: 'Desarrollador full-stack y Git', icon: 'code' },
        { name: 'MURPH', role: 'Investigación y análisis', icon: 'telescope' },
        { name: 'BRAND', role: 'Procesamiento de datos y clasificación', icon: 'mail' },
        { name: 'MANN', role: 'QA y testing', icon: 'flask' },
        { name: 'TOM', role: 'Diseño visual y arquitectura', icon: 'palette' },
      ],
      results: 'Resultados Reales',
      stats: [
        { value: '6', label: 'Agentes especializados' },
        { value: '242+', label: 'Tests automatizados' },
        { value: '<1 día', label: 'Dashboard completo' },
        { value: '24/7', label: 'Operación continua' },
      ],
      cta: 'Solicitar Demo',
      ctaSub: 'Ve nuestro equipo de agentes en acción',
      differentiator: 'Despliega el framework. Define la misión. Deja que los agentes trabajen.',
    },
    en: {
      badge: 'Case Study',
      headline: 'We Built Our Own',
      headlineAccent: 'Team First',
      subheadline: '6 AI agents. Coordinated. Shipping real work.',
      description: 'Before offering agent teams to clients, we built our own. 6 specialized agents working together — development, QA, research, design, email, and coordination.',
      poweredBy: 'Powered by',
      howItWorks: 'How It Works',
      steps: [
        { title: 'Define Structure', desc: 'Each agent gets SOUL.md (identity), AGENTS.md (rules), skills, and memory.' },
        { title: 'Deploy & Connect', desc: 'Docker containers, Redis messaging, shared workspace. Automated bootstrap.' },
        { title: 'Coordinate & Ship', desc: 'Agents communicate directly, hand off work, run standups, and deliver results.' },
      ],
      agents: [
        { name: 'TARS', role: 'Squad lead & scrum master', icon: 'shield' },
        { name: 'COOPER', role: 'Full-stack developer & Git', icon: 'code' },
        { name: 'MURPH', role: 'Research & analysis', icon: 'telescope' },
        { name: 'BRAND', role: 'Data processing & classification', icon: 'mail' },
        { name: 'MANN', role: 'QA & testing', icon: 'flask' },
        { name: 'TOM', role: 'Visual design & architecture', icon: 'palette' },
      ],
      results: 'Real Results',
      stats: [
        { value: '6', label: 'Specialized agents' },
        { value: '242+', label: 'Automated tests' },
        { value: '<1 day', label: 'Full dashboard built' },
        { value: '24/7', label: 'Continuous operation' },
      ],
      cta: 'Request Demo',
      ctaSub: 'See our agent team in action',
      differentiator: 'Deploy the framework. Define the mission. Let the agents work.',
    },
  };

  const t = content[language];

  const iconMap: Record<string, React.ReactNode> = {
    shield: <Shield className="w-5 h-5" />,
    code: <Code className="w-5 h-5" />,
    telescope: <Telescope className="w-5 h-5" />,
    mail: <Mail className="w-5 h-5" />,
    flask: <FlaskConical className="w-5 h-5" />,
    palette: <Palette className="w-5 h-5" />,
  };

  const gradients = [
    'from-amber-500 to-orange-600',
    'from-blue-500 to-cyan-600',
    'from-violet-500 to-purple-600',
    'from-green-500 to-emerald-600',
    'from-rose-500 to-pink-600',
    'from-teal-500 to-cyan-600',
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="agent-teams" className={`relative py-20 sm:py-32 overflow-hidden ${isDark ? '' : 'bg-gradient-to-b from-slate-50 to-white'}`}>
      {/* Background decoration */}
      {isDark && (
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
            isDark ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-purple-100 text-purple-700'
          }`}>
            <Zap className="w-4 h-4" />
            {t.badge}
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            {t.headline}{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t.headlineAccent}
            </span>
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-4 italic ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            "{t.subheadline}"
          </p>
          <p className={`text-base max-w-2xl mx-auto ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
            {t.description}
          </p>
          <p className={`mt-4 text-sm ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
            {t.poweredBy}{' '}
            <a href="https://clawd.bot" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
              clawd.bot
            </a>
          </p>
        </motion.div>

        {/* Differentiator quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-center mb-16 p-6 rounded-2xl border ${
            isDark ? 'bg-purple-500/5 border-purple-500/20' : 'bg-purple-50 border-purple-200'
          }`}
        >
          <p className={`text-lg font-medium italic ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
            "{t.differentiator}"
          </p>
        </motion.div>

        {/* Agent Roster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {t.agents.map((agent, i) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <SpotlightCard className="h-full">
                  <div className="p-5">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradients[i]} flex items-center justify-center text-white mb-3`}>
                      {iconMap[agent.icon]}
                    </div>
                    <h4 className={`font-semibold text-sm mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{agent.name}</h4>
                    <p className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{agent.role}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className={`text-2xl font-bold text-center mb-10 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            {t.howItWorks}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className={`relative p-6 rounded-2xl border ${
                  isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-4 ${
                  isDark ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700'
                }`}>
                  {i + 1}
                </div>
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{step.title}</h4>
                <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className={`text-2xl font-bold text-center mb-10 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            {t.results}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className={`text-sm mt-1 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollTo('contacto')}
            className="inline-flex items-center gap-2"
          >
            {t.cta} <ArrowRight className="w-4 h-4" />
          </Button>
          <p className={`text-sm mt-3 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{t.ctaSub}</p>
        </motion.div>
      </div>
    </section>
  );
};
