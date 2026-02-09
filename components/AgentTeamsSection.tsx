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
} from 'lucide-react';

export const AgentTeamsSection: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = {
    es: {
      badge: 'Nuevo Servicio',
      headline: 'Equipos de Agentes IA',
      headlineAccent: 'Listos para Trabajar',
      subheadline: 'Construimos un equipo de agentes IA. Luego los agentes construyeron nuestro dashboard.',
      description: 'Desplegamos equipos completos de agentes IA especializados que trabajan juntos — desarrollo, QA, investigación, clasificación de email — todo coordinado automáticamente con comunicación en tiempo real.',
      poweredBy: 'Powered by',
      howItWorks: 'Cómo Funciona',
      steps: [
        { title: 'Despliegue Docker', desc: 'Cada agente corre en su propio contenedor con herramientas especializadas y acceso seguro.' },
        { title: 'Comunicación Inter-agente', desc: 'Los agentes se comunican vía Redis messaging bus — coordinación en tiempo real sin intervención humana.' },
        { title: 'Dashboard en Tiempo Real', desc: 'Monitorea estado de agentes, tareas Kanban, métricas de rendimiento y comunicaciones en vivo.' },
      ],
      agents: [
        { name: 'Coordinador', role: 'Gestión de equipo, standups diarios, priorización de tareas', icon: 'shield' },
        { name: 'Desarrollador', role: 'Código full-stack, Git, CI/CD, despliegue', icon: 'code' },
        { name: 'Investigador', role: 'Análisis de mercado, evaluación técnica, reportes', icon: 'telescope' },
        { name: 'Clasificador de Email', role: 'Clasificación automática con Gmail labels', icon: 'mail' },
        { name: 'QA Engineer', role: 'Testing automatizado, escaneo de seguridad', icon: 'flask' },
      ],
      results: 'Lo Que Hemos Logrado',
      stats: [
        { value: '5', label: 'Agentes especializados' },
        { value: '133', label: 'Tests automatizados' },
        { value: '<1 día', label: 'Dashboard completo' },
        { value: '24/7', label: 'Operación continua' },
      ],
      tiers: 'Planes de Servicio',
      tierList: [
        { name: 'Starter', price: '$997', period: '/mes', agents: '3 agentes', features: ['Coordinador + 2 especialistas', 'Dashboard básico', 'Comunicación inter-agente', 'Soporte por email'] },
        { name: 'Professional', price: '$2,997', period: '/mes', agents: '5 agentes', features: ['Equipo completo de 5 agentes', 'Dashboard con métricas', 'Integración GitHub + CI/CD', 'Soporte prioritario'], popular: true },
        { name: 'Enterprise', price: '$7,997+', period: '/mes', agents: '10+ agentes', features: ['Agentes personalizados', 'Dashboard dedicado', 'Integración con sistemas internos', 'SLA garantizado', 'Soporte 24/7'] },
      ],
      cta: 'Solicitar Demo',
      ctaSub: 'Ve nuestro equipo de agentes en acción',
      differentiator: 'CrewAI te da el framework. Nosotros te damos los agentes, ya trabajando.',
    },
    en: {
      badge: 'New Service',
      headline: 'AI Agent Teams',
      headlineAccent: 'Ready to Work',
      subheadline: 'We built a team of AI agents. Then the AI agents built our dashboard.',
      description: 'We deploy complete teams of specialized AI agents that work together — development, QA, research, email classification — all automatically coordinated with real-time communication.',
      poweredBy: 'Powered by',
      howItWorks: 'How It Works',
      steps: [
        { title: 'Docker Deployment', desc: 'Each agent runs in its own container with specialized tools and secure access.' },
        { title: 'Inter-agent Communication', desc: 'Agents communicate via Redis messaging bus — real-time coordination without human intervention.' },
        { title: 'Real-time Dashboard', desc: 'Monitor agent status, Kanban tasks, performance metrics, and live communications.' },
      ],
      agents: [
        { name: 'Coordinator', role: 'Team management, daily standups, task prioritization', icon: 'shield' },
        { name: 'Developer', role: 'Full-stack code, Git, CI/CD, deployment', icon: 'code' },
        { name: 'Researcher', role: 'Market analysis, tech evaluation, reports', icon: 'telescope' },
        { name: 'Email Classifier', role: 'Automatic classification with Gmail labels', icon: 'mail' },
        { name: 'QA Engineer', role: 'Automated testing, security scanning', icon: 'flask' },
      ],
      results: 'What We\'ve Accomplished',
      stats: [
        { value: '5', label: 'Specialized agents' },
        { value: '133', label: 'Automated tests' },
        { value: '<1 day', label: 'Full dashboard built' },
        { value: '24/7', label: 'Continuous operation' },
      ],
      tiers: 'Service Plans',
      tierList: [
        { name: 'Starter', price: '$997', period: '/mo', agents: '3 agents', features: ['Coordinator + 2 specialists', 'Basic dashboard', 'Inter-agent communication', 'Email support'] },
        { name: 'Professional', price: '$2,997', period: '/mo', agents: '5 agents', features: ['Full 5-agent team', 'Dashboard with metrics', 'GitHub + CI/CD integration', 'Priority support'], popular: true },
        { name: 'Enterprise', price: '$7,997+', period: '/mo', agents: '10+ agents', features: ['Custom agents', 'Dedicated dashboard', 'Internal system integration', 'Guaranteed SLA', '24/7 support'] },
      ],
      cta: 'Request Demo',
      ctaSub: 'See our agent team in action',
      differentiator: 'CrewAI gives you the framework. We give you the agents, already working.',
    },
  };

  const t = content[language];

  const iconMap: Record<string, React.ReactNode> = {
    shield: <Shield className="w-5 h-5" />,
    code: <Code className="w-5 h-5" />,
    telescope: <Telescope className="w-5 h-5" />,
    mail: <Mail className="w-5 h-5" />,
    flask: <FlaskConical className="w-5 h-5" />,
  };

  const gradients = [
    'from-amber-500 to-orange-600',
    'from-blue-500 to-cyan-600',
    'from-violet-500 to-purple-600',
    'from-green-500 to-emerald-600',
    'from-rose-500 to-pink-600',
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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

        {/* Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className={`text-2xl font-bold text-center mb-10 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            {t.tiers}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.tierList.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl border ${
                  tier.popular
                    ? isDark
                      ? 'bg-purple-500/10 border-purple-500/30 ring-1 ring-purple-500/20'
                      : 'bg-purple-50 border-purple-300 ring-1 ring-purple-200'
                    : isDark
                      ? 'bg-zinc-900/50 border-zinc-800'
                      : 'bg-white border-zinc-200'
                }`}
              >
                {tier.popular && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium ${
                    isDark ? 'bg-purple-500 text-white' : 'bg-purple-600 text-white'
                  }`}>
                    Popular
                  </span>
                )}
                <h4 className={`font-semibold text-lg mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{tier.name}</h4>
                <p className={`text-sm mb-4 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{tier.agents}</p>
                <div className="mb-6">
                  <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-zinc-900'}`}>{tier.price}</span>
                  <span className={`text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{tier.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                      <span className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? 'primary' : 'secondary'}
                  className="w-full"
                  onClick={() => scrollTo('contacto')}
                >
                  {t.cta}
                </Button>
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
