import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Database, Filter, Bot, Shield, CheckCircle, FileText, Zap } from 'lucide-react';

const PipelineNode = ({ icon: Icon, label, isActive, color, delay }: any) => (
  <div className="flex flex-col items-center gap-4 relative z-10 w-24">
    <motion.div
      initial={{ scale: 1, borderColor: "rgba(39, 39, 42, 1)" }} // zinc-800
      animate={{ 
        scale: isActive ? 1.1 : 1,
        borderColor: isActive ? color : "rgba(39, 39, 42, 1)",
        boxShadow: isActive ? `0 0 20px ${color}40` : "none",
        backgroundColor: isActive ? "rgba(24, 24, 27, 0.9)" : "rgba(9, 9, 11, 0.5)"
      }}
      transition={{ duration: 0.3 }}
      className="w-16 h-16 rounded-2xl bg-zinc-950 border flex items-center justify-center relative overflow-hidden"
    >
        {/* Inner Glow */}
        <div className={`absolute inset-0 opacity-20 ${isActive ? 'bg-gradient-to-br from-white to-transparent' : ''}`} />
        <Icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-zinc-600'} transition-colors duration-300`} />
        
        {/* Particle effect on active */}
        {isActive && (
           <motion.div 
             layoutId="active-ring"
             className="absolute inset-0 border-2 rounded-2xl"
             style={{ borderColor: color }}
             transition={{ type: "spring", stiffness: 300, damping: 30 }}
           />
        )}
    </motion.div>
    
    <motion.div 
        animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 5 }}
        className="text-center"
    >
        <div className={`text-xs font-bold tracking-wider uppercase ${isActive ? 'text-white' : 'text-zinc-600'}`}>
            {label}
        </div>
    </motion.div>
  </div>
);

export const FrameworkPreview: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Cycle through steps for the simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2000); // 2 seconds per step
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-y border-zinc-900">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,17,23,1),#000)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
                Motor de Procesamiento <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">En Vivo</span>
            </motion.h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
                Vea cómo nuestra arquitectura transforma datos no estructurados en decisiones de negocio ejecutables en milisegundos.
            </p>
        </div>

        {/* The Visualization Container */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] bg-zinc-900/20 rounded-2xl border border-zinc-800 backdrop-blur-sm overflow-hidden flex items-center justify-center p-8 md:p-12">
            
            {/* Grid Background inside container */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />

            {/* Connection Line */}
            <div className="absolute top-1/2 left-12 right-12 h-px bg-zinc-800 -translate-y-8 md:-translate-y-6">
                {/* Traveling Beam */}
                <motion.div 
                    animate={{ 
                        left: ['0%', '100%'],
                        opacity: [0, 1, 0]
                    }}
                    transition={{ 
                        duration: 10, // Total cycle time (5 steps * 2s)
                        ease: "linear",
                        repeat: Infinity 
                    }}
                    className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm"
                />
            </div>

            {/* Nodes Container */}
            <div className="w-full flex justify-between items-start relative">
                <PipelineNode 
                    icon={Database} 
                    label="Ingesta" 
                    isActive={activeStep === 0} 
                    color="#60a5fa" // blue-400
                />
                <PipelineNode 
                    icon={Filter} 
                    label="Snorkel (Refinar)" 
                    isActive={activeStep === 1} 
                    color="#f472b6" // pink-400
                />
                <PipelineNode 
                    icon={Bot} 
                    label="Agentes CrewAI" 
                    isActive={activeStep === 2} 
                    color="#fbbf24" // amber-400
                />
                <PipelineNode 
                    icon={Shield} 
                    label="Credo (Guardrails)" 
                    isActive={activeStep === 3} 
                    color="#a78bfa" // violet-400
                />
                <PipelineNode 
                    icon={CheckCircle} 
                    label="Resolución" 
                    isActive={activeStep === 4} 
                    color="#34d399" // emerald-400
                />
            </div>

            {/* Dynamic Status Log (Bottom) */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/50 border border-zinc-800 rounded-lg p-3 font-mono text-xs text-zinc-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 text-yellow-500" />
                    <span className="text-zinc-500">Estado:</span>
                    <span className="text-zinc-200">
                        {activeStep === 0 && "INGESTANDO_DATA_STREAM"}
                        {activeStep === 1 && "APLICANDO_FUNCIONES_ETIQUETADO"}
                        {activeStep === 2 && "ORQUESTANDO_AGENTES_LLM"}
                        {activeStep === 3 && "VERIFICANDO_POLITICAS_SEGURIDAD"}
                        {activeStep === 4 && "EJECUCION_COMPLETADA_EXITOSAMENTE"}
                    </span>
                </div>
                <div className="hidden md:block text-zinc-600">
                    ID: req_{Math.random().toString(36).substr(2, 9)}
                </div>
            </div>

            {/* Traveling Packet (The Data) */}
            <motion.div
                className="absolute top-1/2 -translate-y-8 md:-translate-y-6 w-4 h-4 rounded-full bg-white shadow-[0_0_20px_white] z-20 pointer-events-none"
                animate={{
                    left: ['10%', '30%', '50%', '70%', '90%'], // Matches approximate node positions
                }}
                transition={{
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                    times: [0, 0.25, 0.5, 0.75, 1] // Keyframe timing
                }}
            >
                <div className="absolute inset-0 animate-ping bg-white rounded-full opacity-50" />
            </motion.div>

        </div>
      </div>
    </section>
  );
};