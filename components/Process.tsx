import React from 'react';
import { motion } from 'framer-motion';
import {
  Tag,
  LineChart,
  Server,
  Users,
  ShieldCheck,
  Activity,
  Scale,
  MessageSquare,
  Ticket,
  ArrowDown
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const steps = [
  {
    id: "input",
    label: "Fase 1",
    title: "Ingesta de Datos",
    description: "Recepción multicanal de tickets y datos crudos",
    icon: Ticket,
    color: "text-zinc-400",
    bg: "bg-zinc-900",
    bgLight: "bg-zinc-100",
    border: "border-zinc-800",
    borderLight: "border-zinc-300"
  },
  {
    id: "labeling",
    label: "Fase 2",
    title: "Supervisión de Datos",
    description: "Etiquetado programático y curación de datasets de entrenamiento",
    icon: Tag,
    color: "text-rose-400",
    bg: "bg-rose-950/30",
    bgLight: "bg-rose-50",
    border: "border-rose-900/50",
    borderLight: "border-rose-200"
  },
  {
    id: "training",
    label: "Fase 3",
    title: "Entrenamiento de Modelos",
    description: "Ajuste fino y registro de clasificadores especializados",
    icon: LineChart,
    color: "text-amber-400",
    bg: "bg-amber-950/30",
    bgLight: "bg-amber-50",
    border: "border-amber-900/50",
    borderLight: "border-amber-200"
  },
  {
    id: "serving",
    label: "Fase 4",
    title: "Infraestructura de Inferencia",
    description: "Despliegue escalable de endpoints para LLMs y clasificadores",
    icon: Server,
    color: "text-blue-400",
    bg: "bg-blue-950/30",
    bgLight: "bg-blue-50",
    border: "border-blue-900/50",
    borderLight: "border-blue-200"
  },
  {
    id: "orchestration",
    label: "Fase 5",
    title: "Orquestación de Agentes",
    description: "Coordinación de agentes especializados (Triaje, Resolución, Escalación)",
    icon: Users,
    color: "text-orange-400",
    bg: "bg-orange-950/30",
    bgLight: "bg-orange-50",
    border: "border-orange-900/50",
    borderLight: "border-orange-200",
    isComplex: true
  },
  {
    id: "quality",
    label: "Fase 6",
    title: "Control de Calidad",
    description: "Verificación de alucinaciones y relevancia antes del envío",
    icon: ShieldCheck,
    color: "text-indigo-400",
    bg: "bg-indigo-950/30",
    bgLight: "bg-indigo-50",
    border: "border-indigo-900/50",
    borderLight: "border-indigo-200"
  },
  {
    id: "observability",
    label: "Fase 7",
    title: "Observabilidad",
    description: "Trazabilidad completa de la ejecución, costos y latencia",
    icon: Activity,
    color: "text-emerald-400",
    bg: "bg-emerald-950/30",
    bgLight: "bg-emerald-50",
    border: "border-emerald-900/50",
    borderLight: "border-emerald-200"
  },
  {
    id: "governance",
    label: "Fase 8",
    title: "Gobernanza",
    description: "Cumplimiento normativo y aplicación de políticas de seguridad",
    icon: Scale,
    color: "text-purple-400",
    bg: "bg-purple-950/30",
    bgLight: "bg-purple-50",
    border: "border-purple-900/50",
    borderLight: "border-purple-200"
  },
  {
    id: "output",
    label: "Fase 9",
    title: "Resolución",
    description: "Entrega de respuesta final validada al usuario",
    icon: MessageSquare,
    color: "text-zinc-100",
    colorLight: "text-zinc-700",
    bg: "bg-zinc-900",
    bgLight: "bg-zinc-100",
    border: "border-zinc-700",
    borderLight: "border-zinc-300"
  }
];

export const Process: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="metodologia" className={`py-16 sm:py-24 lg:py-32 relative overflow-hidden ${isDark ? 'bg-zinc-950' : 'bg-gradient-to-b from-slate-50 to-white'}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">

        <div className="text-center mb-10 sm:mb-16 lg:mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 sm:mb-6 ${isDark ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-300 bg-white'}`}
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className={`text-[10px] sm:text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>EL MARCO DE TRABAJO</span>
          </motion.div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 ${isDark ? '' : 'text-zinc-900'}`}>
            Arquitectura de <br /><span className={`text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-blue-400 to-violet-400' : 'bg-gradient-to-r from-blue-600 to-violet-600'}`}>Ciclo de Vida</span>
          </h2>
          <p className={`text-sm sm:text-base ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Un proceso riguroso paso a paso que transforma datos crudos en acciones inteligentes y seguras.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Continuous Vertical Line */}
          <div className={`absolute left-[26px] sm:left-[28px] md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-1/2 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`}>
            <motion.div
              className={`absolute top-0 left-0 w-full ${isDark ? 'bg-gradient-to-b from-blue-500 via-purple-500 to-transparent' : 'bg-gradient-to-b from-blue-400 via-purple-400 to-transparent'}`}
              style={{ height: '30%' }}
              animate={{ top: ['-30%', '110%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Node Point on Line */}
                <div className={`absolute left-[18px] md:left-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[3px] sm:border-4 z-10 transform md:-translate-x-1/2 mt-1 md:mt-0 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] ${isDark ? 'border-zinc-950 bg-zinc-800' : 'border-white bg-zinc-200'}`}>
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${step.color.replace('text-', 'bg-')} shadow-[0_0_8px_currentColor]`}></div>
                </div>

                {/* Content Card */}
                <div className="ml-10 sm:ml-12 md:ml-0 md:w-1/2 md:px-12">
                  <div className={`
                                group relative overflow-hidden rounded-lg sm:rounded-xl border p-4 sm:p-6 transition-all duration-300
                                ${isDark ? step.bg : step.bgLight} ${isDark ? step.border : step.borderLight}
                                ${isDark ? 'hover:shadow-2xl hover:shadow-blue-900/10' : 'hover:shadow-lg'}
                            `}>
                    {/* Hover Beam Effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isDark ? 'bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.1),transparent_50%)]' : 'bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.05),transparent_50%)]'}`} />

                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <step.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${step.color}`} />
                      <span className={`text-[10px] sm:text-xs font-mono uppercase tracking-wider ${step.color}`}>{step.label}</span>
                    </div>

                    <h3 className={`text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 tracking-tight ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{step.title}</h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{step.description}</p>

                    {step.isComplex && (
                      <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                        {['Triaje', 'Respuesta', 'Escalación'].map(agent => (
                          <div key={agent} className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-mono ${isDark ? 'bg-black/40 border border-orange-500/20 text-orange-200/70' : 'bg-orange-100 border border-orange-200 text-orange-700'}`}>
                            {agent}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty Space for alignment on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:mt-10 lg:mt-12 relative z-10">
          <div className={`px-4 py-2 rounded-full border text-xs font-mono flex items-center gap-2 cursor-default transition-colors ${isDark ? 'border-zinc-800 bg-zinc-900 text-zinc-500 hover:text-zinc-300' : 'border-zinc-300 bg-white text-zinc-500 hover:text-zinc-700 shadow-sm'}`}>
            <ArrowDown className="w-3 h-3 animate-bounce" />
            Fin del Ciclo
          </div>
        </div>

      </div>
    </section>
  );
};