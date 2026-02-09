import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '../components/ui/SpotlightCard';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { SEO } from '../components/SEO';
import {
  Bot,
  Brain,
  MessageSquare,
  Layers,
  Shield,
  BarChart3,
  Cloud,
  Server,
  Container,
  Workflow,
  Zap,
  ArrowRight,
  CheckCircle,
  Settings,
  Database,
  Eye,
  Puzzle,
  Network,
} from 'lucide-react';

export const ClawdBot: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = {
    es: {
      seo: {
        title: 'clawd.bot — Equipos de Agentes IA Multi-Agente | Autonomis',
        description: 'Desplegamos y configuramos sistemas de IA multi-agente con clawd.bot/OpenClaw. Arquitectura experta, coordinación de agentes y observabilidad completa.',
      },
      hero: {
        badge: 'Servicio Especializado',
        headline: 'Sistemas Multi-Agente',
        headlineAccent: 'Diseñados para Producción',
        subheadline: 'Desplegamos, configuramos y gestionamos equipos de agentes IA que trabajan juntos — con la arquitectura correcta desde el día uno.',
        cta: 'Solicitar Consultoría',
      },
      whatIs: {
        title: '¿Qué es clawd.bot?',
        description: 'clawd.bot (powered by OpenClaw) es una plataforma que permite desplegar equipos de agentes IA especializados que colaboran entre sí. Cada agente tiene su propio rol, herramientas y memoria — coordinados automáticamente para resolver problemas complejos.',
        points: [
          'Agentes especializados que trabajan como un equipo real',
          'Comunicación inter-agente en tiempo real',
          'Memoria persistente — los agentes aprenden y recuerdan',
          'Habilidades modulares que se adaptan a cualquier caso de uso',
          'Monitoreo y observabilidad completa',
        ],
      },
      expertise: {
        title: 'Nuestra Experiencia',
        subtitle: 'No solo conocemos la tecnología — la implementamos, optimizamos y escalamos.',
        items: [
          {
            title: 'Diseño de Arquitectura',
            desc: 'Definimos la estructura óptima de agentes para tu caso de uso: roles, responsabilidades, flujos de comunicación y patrones de escalación.',
            icon: 'layers',
          },
          {
            title: 'Coordinación de Agentes',
            desc: 'Implementamos patrones de orquestación probados — desde coordinación centralizada hasta colaboración autónoma entre agentes.',
            icon: 'network',
          },
          {
            title: 'Comunicación Inter-Agente',
            desc: 'Configuramos canales de comunicación en tiempo real entre agentes con mensajería estructurada, broadcasts y comunicación directa.',
            icon: 'message',
          },
          {
            title: 'Gestión de Memoria',
            desc: 'Diseñamos sistemas de memoria a corto y largo plazo — los agentes mantienen contexto entre sesiones y aprenden de interacciones pasadas.',
            icon: 'brain',
          },
          {
            title: 'Diseño Basado en Skills',
            desc: 'Cada agente se equipa con habilidades modulares específicas — desde investigación web hasta gestión de código, email, y más.',
            icon: 'puzzle',
          },
          {
            title: 'Monitoreo y Observabilidad',
            desc: 'Dashboards en tiempo real, métricas de rendimiento por agente, logs de comunicación y alertas — visibilidad total del sistema.',
            icon: 'eye',
          },
        ],
      },
      deployment: {
        title: 'Flexibilidad de Despliegue',
        subtitle: 'Tu infraestructura, tus reglas. Nos adaptamos a cualquier entorno.',
        options: [
          { title: 'Cloud', desc: 'Despliegue en AWS, GCP, Azure o cualquier proveedor cloud. Escalado automático y alta disponibilidad.', icon: 'cloud' },
          { title: 'On-Premise', desc: 'Instalación en tu infraestructura local. Control total sobre datos y seguridad. Ideal para regulaciones estrictas.', icon: 'server' },
          { title: 'Híbrido', desc: 'Combina cloud y on-premise. Agentes críticos locales, tareas de investigación en la nube.', icon: 'workflow' },
          { title: 'Contenedorizado', desc: 'Docker, Kubernetes o cualquier orquestador. Portabilidad total y despliegue reproducible.', icon: 'container' },
        ],
      },
      framework: {
        title: 'Nuestro Framework',
        subtitle: 'Una metodología probada para diseñar, desplegar y escalar sistemas multi-agente.',
        steps: [
          { num: '01', title: 'Descubrimiento', desc: 'Analizamos tus procesos y definimos qué roles de agentes necesitas.' },
          { num: '02', title: 'Arquitectura', desc: 'Diseñamos la topología de agentes, flujos de comunicación y patrones de memoria.' },
          { num: '03', title: 'Implementación', desc: 'Configuramos y desplegamos los agentes con sus skills, herramientas e integraciones.' },
          { num: '04', title: 'Observabilidad', desc: 'Instalamos dashboards, métricas y alertas para monitoreo en tiempo real.' },
          { num: '05', title: 'Optimización', desc: 'Iteramos sobre rendimiento, ajustamos prompts y mejoramos coordinación.' },
        ],
      },
      cta: {
        title: '¿Listo para Desplegar tu Equipo de Agentes?',
        subtitle: 'Agenda una consultoría gratuita. Te mostramos cómo los agentes IA pueden transformar tus operaciones.',
        button: 'Agendar Consultoría',
      },
    },
    en: {
      seo: {
        title: 'clawd.bot — Multi-Agent AI Teams | Autonomis',
        description: 'We deploy and configure multi-agent AI systems with clawd.bot/OpenClaw. Expert architecture, agent coordination, and complete observability.',
      },
      hero: {
        badge: 'Specialized Service',
        headline: 'Multi-Agent Systems',
        headlineAccent: 'Built for Production',
        subheadline: 'We deploy, configure, and manage AI agent teams that work together — with the right architecture from day one.',
        cta: 'Request Consultation',
      },
      whatIs: {
        title: 'What is clawd.bot?',
        description: 'clawd.bot (powered by OpenClaw) is a platform for deploying teams of specialized AI agents that collaborate with each other. Each agent has its own role, tools, and memory — automatically coordinated to solve complex problems.',
        points: [
          'Specialized agents that work as a real team',
          'Real-time inter-agent communication',
          'Persistent memory — agents learn and remember',
          'Modular skills that adapt to any use case',
          'Complete monitoring and observability',
        ],
      },
      expertise: {
        title: 'Our Expertise',
        subtitle: 'We don\'t just know the technology — we implement, optimize, and scale it.',
        items: [
          {
            title: 'Architecture Design',
            desc: 'We define the optimal agent structure for your use case: roles, responsibilities, communication flows, and escalation patterns.',
            icon: 'layers',
          },
          {
            title: 'Agent Coordination',
            desc: 'We implement proven orchestration patterns — from centralized coordination to autonomous inter-agent collaboration.',
            icon: 'network',
          },
          {
            title: 'Inter-Agent Communication',
            desc: 'We configure real-time communication channels between agents with structured messaging, broadcasts, and direct messaging.',
            icon: 'message',
          },
          {
            title: 'Memory Management',
            desc: 'We design short-term and long-term memory systems — agents maintain context across sessions and learn from past interactions.',
            icon: 'brain',
          },
          {
            title: 'Skill-Based Design',
            desc: 'Each agent is equipped with specific modular skills — from web research to code management, email, and more.',
            icon: 'puzzle',
          },
          {
            title: 'Monitoring & Observability',
            desc: 'Real-time dashboards, per-agent performance metrics, communication logs, and alerts — full system visibility.',
            icon: 'eye',
          },
        ],
      },
      deployment: {
        title: 'Deployment Flexibility',
        subtitle: 'Your infrastructure, your rules. We adapt to any environment.',
        options: [
          { title: 'Cloud', desc: 'Deploy on AWS, GCP, Azure, or any cloud provider. Auto-scaling and high availability.', icon: 'cloud' },
          { title: 'On-Premise', desc: 'Install on your local infrastructure. Full control over data and security. Ideal for strict regulations.', icon: 'server' },
          { title: 'Hybrid', desc: 'Combine cloud and on-premise. Critical agents local, research tasks in the cloud.', icon: 'workflow' },
          { title: 'Containerized', desc: 'Docker, Kubernetes, or any orchestrator. Full portability and reproducible deployment.', icon: 'container' },
        ],
      },
      framework: {
        title: 'Our Framework',
        subtitle: 'A proven methodology for designing, deploying, and scaling multi-agent systems.',
        steps: [
          { num: '01', title: 'Discovery', desc: 'We analyze your processes and define what agent roles you need.' },
          { num: '02', title: 'Architecture', desc: 'We design the agent topology, communication flows, and memory patterns.' },
          { num: '03', title: 'Implementation', desc: 'We configure and deploy agents with their skills, tools, and integrations.' },
          { num: '04', title: 'Observability', desc: 'We install dashboards, metrics, and alerts for real-time monitoring.' },
          { num: '05', title: 'Optimization', desc: 'We iterate on performance, tune prompts, and improve coordination.' },
        ],
      },
      cta: {
        title: 'Ready to Deploy Your Agent Team?',
        subtitle: 'Book a free consultation. We\'ll show you how AI agents can transform your operations.',
        button: 'Book Consultation',
      },
    },
  };

  const t = content[language];

  const iconMap: Record<string, React.ReactNode> = {
    layers: <Layers className="w-5 h-5" />,
    network: <Network className="w-5 h-5" />,
    message: <MessageSquare className="w-5 h-5" />,
    brain: <Brain className="w-5 h-5" />,
    puzzle: <Puzzle className="w-5 h-5" />,
    eye: <Eye className="w-5 h-5" />,
    cloud: <Cloud className="w-5 h-5" />,
    server: <Server className="w-5 h-5" />,
    workflow: <Workflow className="w-5 h-5" />,
    container: <Container className="w-5 h-5" />,
  };

  const gradients = [
    'from-purple-500 to-indigo-600',
    'from-blue-500 to-cyan-600',
    'from-emerald-500 to-teal-600',
    'from-amber-500 to-orange-600',
    'from-rose-500 to-pink-600',
    'from-violet-500 to-purple-600',
  ];

  const scrollToContact = () => {
    window.open('https://cal.com', '_blank');
  };

  return (
    <>
      <SEO
        title={t.seo.title}
        description={t.seo.description}
        url="https://autonomis.co/clawd-bot"
      />

      {/* Hero */}
      <section className={`relative min-h-[70vh] flex flex-col justify-center items-center overflow-hidden pt-20 pb-16 ${isDark ? '' : 'bg-gradient-to-br from-slate-50 to-indigo-50'}`}>
        {isDark && (
          <>
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none z-0" />
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[800px] h-[300px] md:h-[400px] bg-indigo-500/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
        >
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
            isDark ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-indigo-100 text-indigo-700'
          }`}>
            <Bot className="w-4 h-4" />
            {t.hero.badge}
          </span>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            {t.hero.headline}{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {t.hero.headlineAccent}
            </span>
          </h1>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {t.hero.subheadline}
          </p>
          <Button variant="primary" size="lg" onClick={scrollToContact}>
            {t.hero.cta} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* What is clawd.bot */}
      <section className={`py-20 ${isDark ? '' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.whatIs.title}</h2>
            <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {t.whatIs.description}
            </p>
            <ul className="space-y-3">
              {t.whatIs.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className={`w-5 h-5 mt-0.5 shrink-0 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  <span className={`${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className={`py-20 ${isDark ? '' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.expertise.title}</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.expertise.subtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.expertise.items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <SpotlightCard className="h-full">
                  <div className="p-6">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradients[i]} flex items-center justify-center text-white mb-4`}>
                      {iconMap[item.icon]}
                    </div>
                    <h3 className={`font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{item.title}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{item.desc}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Framework */}
      <section className={`py-20 ${isDark ? '' : 'bg-white'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.framework.title}</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.framework.subtitle}</p>
          </motion.div>
          <div className="space-y-6">
            {t.framework.steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`flex items-start gap-6 p-6 rounded-2xl border ${
                  isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-slate-50 border-zinc-200'
                }`}
              >
                <div className={`text-2xl font-bold shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-100 text-indigo-700'
                }`}>
                  {step.num}
                </div>
                <div>
                  <h3 className={`font-semibold text-lg mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{step.title}</h3>
                  <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Flexibility */}
      <section className={`py-20 ${isDark ? '' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.deployment.title}</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.deployment.subtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.deployment.options.map((opt, i) => (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border text-center ${
                  isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center ${
                  isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-100 text-indigo-600'
                }`}>
                  {iconMap[opt.icon]}
                </div>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{opt.title}</h3>
                <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{opt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 ${isDark ? '' : 'bg-white'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 text-center"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.cta.title}</h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.cta.subtitle}</p>
          <Button variant="primary" size="lg" onClick={scrollToContact}>
            {t.cta.button} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </section>
    </>
  );
};
