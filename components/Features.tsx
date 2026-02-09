import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { Bot, ShieldCheck, Users, Scale, Activity, Blocks } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const Features: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = {
    es: {
      headlineStart: "El stack moderno de",
      headlineEnd: "IA Resiliente",
      subheadline: "Implementamos un marco de trabajo de estándar industrial diseñado para sistemas que fallan graciosamente, no sistemas que nunca fallan.",
      features: [
        {
          title: "Orquestación Autónoma",
          description: "CrewAI coordina equipos de agentes especializados (Triaje → Respuesta → Escalación) que resuelven casos complejos sin intervención humana."
        },
        {
          title: "Guardrails de Seguridad",
          description: "Guardrails AI protege cada interacción: bloquea inyecciones de prompt, sanitiza PII y valida respuestas antes de enviarlas al cliente."
        },
        {
          title: "Contexto CRM Integrado",
          description: "Integración nativa con HubSpot CRM para enriquecer cada ticket con historial del cliente, tier de servicio y contexto de negocio."
        },
        {
          title: "Juicio Integrado",
          description: "DeepEval no solo verifica precisión — mide confianza. Cada respuesta es evaluada por calidad de decisión, calibración de confianza, y cuándo el sistema debe detenerse y consultar a un humano."
        },
        {
          title: "Observabilidad Completa",
          description: "Langfuse rastrea dónde las decisiones fallan, no solo dónde los modelos funcionan bien. Tiempos, costos y puntos de decisión en tiempo real."
        },
        {
          title: "Arquitectura Modular",
          description: "Stack desacoplado que permite intercambiar LLMs (Gemini, OpenAI, Claude), CRMs o métricas sin modificar la lógica de negocio."
        }
      ]
    },
    en: {
      headlineStart: "The modern stack for",
      headlineEnd: "Resilient AI",
      subheadline: "We implement an industry-standard framework designed for systems that fail gracefully, not systems that never fail.",
      features: [
        {
          title: "Autonomous Orchestration",
          description: "CrewAI coordinates specialized agent teams (Triage → Response → Escalation) that resolve complex cases without human intervention."
        },
        {
          title: "Safety Guardrails",
          description: "Guardrails AI protects every interaction: blocks prompt injections, sanitizes PII, and validates responses before sending to customers."
        },
        {
          title: "Integrated CRM Context",
          description: "Native HubSpot CRM integration enriches every ticket with customer history, service tier, and business context."
        },
        {
          title: "Built-in Judgment",
          description: "DeepEval doesn't just check accuracy — it measures trust. Every response is evaluated for decision quality, confidence calibration, and when the system should stop and ask a human."
        },
        {
          title: "Complete Observability",
          description: "Langfuse tracks where decisions go wrong, not just where models perform well. Execution times, costs, and decision points in real-time."
        },
        {
          title: "Modular Architecture",
          description: "Decoupled stack allowing you to swap LLMs (Gemini, OpenAI, Claude), CRMs, or metrics without changing business logic."
        }
      ]
    }
  };

  const t = content[language];

  const icons = [
    <Bot className="w-6 h-6 text-red-400" />,         // CrewAI - Orchestration
    <ShieldCheck className="w-6 h-6 text-purple-400" />, // Guardrails AI - Safety
    <Users className="w-6 h-6 text-pink-400" />,      // HubSpot CRM - Context
    <Scale className="w-6 h-6 text-amber-400" />,     // Built-in Judgment
    <Activity className="w-6 h-6 text-emerald-400" />, // Langfuse - Observability
    <Blocks className="w-6 h-6 text-blue-400" />      // Modular Architecture
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