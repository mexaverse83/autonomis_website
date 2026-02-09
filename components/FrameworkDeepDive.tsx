import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu, Lock, FileJson, X,
    ChevronRight, ChevronLeft, Eye, Code2, CheckCircle2,
    Sparkles, Zap, ArrowRight, Terminal as TerminalIcon
} from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { generalContent, phasesData } from '../data/frameworkData';
import { FrameworkVisualization } from './FrameworkVisualization';

// Pipeline Node Component
const PipelineNode = ({ icon: Icon, label, isActive, isPast, color, onClick, isDark = true }: any) => (
    <div
        onClick={onClick}
        className="flex flex-col items-center gap-3 relative z-10 min-w-[80px] group cursor-pointer"
    >
        <motion.div
            initial={{ scale: 1, borderColor: isDark ? "rgba(39, 39, 42, 1)" : "rgba(212, 212, 216, 1)" }}
            animate={{
                scale: isActive ? 1.15 : 1,
                borderColor: isActive ? color : isPast ? `${color}60` : isDark ? "rgba(39, 39, 42, 1)" : "rgba(212, 212, 216, 1)",
                boxShadow: isActive ? `0 0 30px ${color}50, 0 0 60px ${color}20` : isPast ? `0 0 10px ${color}20` : "none",
                backgroundColor: isActive
                    ? (isDark ? "rgba(24, 24, 27, 0.95)" : "rgba(255, 255, 255, 0.95)")
                    : isPast
                        ? (isDark ? "rgba(24, 24, 27, 0.7)" : "rgba(255, 255, 255, 0.7)")
                        : (isDark ? "rgba(9, 9, 11, 0.5)" : "rgba(255, 255, 255, 0.5)")
            }}
            whileHover={{ scale: 1.2, borderColor: color, boxShadow: `0 0 25px ${color}40` }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl border-2 flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-zinc-950' : 'bg-white shadow-sm'}`}
        >
            {/* Gradient overlay for active state */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    background: isActive
                        ? `linear-gradient(135deg, ${color}20, transparent)`
                        : isPast
                            ? `linear-gradient(135deg, ${color}10, transparent)`
                            : `linear-gradient(135deg, rgba(0,0,0,0), rgba(0,0,0,0))`
                }}
            />

            {/* Pulse ring for active */}
            {isActive && (
                <motion.div
                    className="absolute inset-0 rounded-2xl border-2"
                    style={{ borderColor: color }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            )}

            <Icon className={`w-6 h-6 md:w-7 md:h-7 relative z-10 transition-all duration-300 ${isActive ? (isDark ? 'text-white' : 'text-zinc-900') : isPast ? 'text-zinc-400' : 'text-zinc-600'} group-hover:${isDark ? 'text-white' : 'text-zinc-900'}`}
                style={isActive ? { color } : {}}
            />
        </motion.div>

        <motion.div
            animate={{ opacity: isActive ? 1 : isPast ? 0.7 : 0.4, y: isActive ? 0 : 5 }}
            className="text-center"
        >
            <div className={`text-[10px] md:text-xs font-bold tracking-wider uppercase truncate max-w-[100px] transition-colors duration-300 ${isActive ? (isDark ? 'text-white' : 'text-zinc-900') : isPast ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {label}
            </div>
        </motion.div>
    </div>
);

export const FrameworkDeepDive: React.FC = () => {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [isExpanded, setIsExpanded] = useState(false);
    const [activePhase, setActivePhase] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [showCode, setShowCode] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const prevPhaseRef = useRef(0);

    // Demo scenarios state
    const [currentDemo, setCurrentDemo] = useState(0);

    const t = generalContent[language];
    const allDemos = [phasesData]; // TODO: Add second demo back
    const phases = allDemos[currentDemo % allDemos.length]?.[language] || phasesData[language];

    // Ensure activePhase is within bounds
    const safeActivePhase = Math.min(activePhase, phases.length - 1);
    const currentPhase = phases[safeActivePhase] || phases[0];

    // Handle phase transitions with animation
    useEffect(() => {
        if (prevPhaseRef.current !== activePhase) {
            setIsTransitioning(true);
            const timer = setTimeout(() => {
                setIsTransitioning(false);
                prevPhaseRef.current = activePhase;
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [activePhase]);

    // Auto-cycle logic
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActivePhase((prev) => (prev + 1) % phases.length);
        }, isExpanded ? 8000 : 4000);
        return () => clearInterval(interval);
    }, [isExpanded, isPaused, activePhase, phases.length]);

    const handleExpand = (demoIndex: number = 0) => {
        setCurrentDemo(demoIndex);
        setIsExpanded(true);
        setActivePhase(0);
        setShowCode(false);
        setIsPaused(false);
    };

    const switchDemo = (demoIndex: number) => {
        setCurrentDemo(demoIndex);
        setActivePhase(0);
        setIsPaused(false);
    };

    const demoTitles = [
        { es: "Soporte: Error de Facturación", en: "Support: Billing Error" },
        // { es: "Ventas: Lead Qualification", en: "Sales: Lead Qualification" } // Commented out until data is restored
    ];

    const nextPhase = () => {
        setActivePhase((prev) => (prev + 1) % phases.length);
        setIsPaused(true);
    };

    const prevPhase = () => {
        setActivePhase((prev) => (prev - 1 + phases.length) % phases.length);
        setIsPaused(true);
    };

    const handleClose = () => {
        setIsExpanded(false);
        setIsPaused(false);
    };

    // Calculate progress for the animated line
    const progress = ((activePhase + 1) / phases.length) * 100;

    return (
        <section id="metodologia" className={`py-24 relative border-y overflow-hidden ${isDark ? 'bg-zinc-950 border-zinc-900' : 'bg-gradient-to-b from-slate-50 to-white border-zinc-200'}`}>
            {/* Background grid */}
            <div className={`absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none ${isDark ? '' : 'opacity-50'}`} />

            {/* Animated gradient orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute top-20 -left-40 w-80 h-80 rounded-full blur-[100px] pointer-events-none ${isDark ? 'bg-indigo-500/10' : 'bg-indigo-500/5'}`}
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute bottom-20 -right-40 w-80 h-80 rounded-full blur-[100px] pointer-events-none ${isDark ? 'bg-emerald-500/10' : 'bg-emerald-500/5'}`}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 ${isDark ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-300 bg-white'}`}
                    >
                        <Cpu className="w-3 h-3 text-indigo-400" />
                        <span className={`text-xs font-mono ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{t.badge}</span>
                    </motion.div>
                    <h2 className={`text-3xl md:text-5xl font-bold tracking-tight mb-4 ${isDark ? '' : 'text-zinc-900'}`}>
                        {t.titleStart} <span className={`text-transparent bg-clip-text ${isDark ? 'bg-gradient-to-r from-emerald-400 to-cyan-400' : 'bg-gradient-to-r from-emerald-600 to-cyan-600'}`}>{t.titleEnd}</span>
                    </h2>
                    <p className={isDark ? 'text-zinc-500' : 'text-zinc-600'} style={{ maxWidth: '42rem', margin: '0 auto' }}>
                        {isExpanded ? t.descExpanded : t.descPreview}
                    </p>
                </div>

                <motion.div
                    layout
                    className={`
                relative w-full mx-auto backdrop-blur-sm overflow-hidden rounded-3xl transition-all duration-700 ease-in-out
                ${isDark ? 'bg-zinc-900/30 border border-zinc-800' : 'bg-white/80 border border-zinc-200 shadow-lg'}
                ${isExpanded ? 'max-w-7xl' : `max-w-6xl ${isDark ? 'hover:border-zinc-600' : 'hover:border-zinc-300 hover:shadow-xl'}`}
            `}
                >
                    <AnimatePresence mode="wait">

                        {/* PREVIEW MODE */}
                        {!isExpanded && (
                            <motion.div
                                key="preview"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[550px]"
                            >
                                {/* Progress bar at top */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-800">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500"
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    />
                                </div>

                                {/* Connection Line */}
                                <div className="absolute top-[45%] left-0 right-0 h-px bg-zinc-800">
                                    <motion.div
                                        key={safeActivePhase}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: [0, 1, 0], scale: [0.5, 2, 3] }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                                        style={{
                                            left: `${(safeActivePhase / (phases.length - 1)) * 100}%`,
                                            backgroundColor: currentPhase.color,
                                            boxShadow: `0 0 20px ${currentPhase.color}`
                                        }}
                                    />
                                    <motion.div
                                        animate={{ left: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
                                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                                        className="absolute top-0 h-full w-32 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm"
                                    />
                                </div>

                                {/* Nodes Container */}
                                <div className="w-full overflow-x-auto pb-4 pt-4 no-scrollbar relative z-10 flex justify-start md:justify-between items-center px-4 gap-8 md:gap-4 mask-fade-sides">
                                    {phases.map((phase, idx) => (
                                        <PipelineNode
                                            key={idx}
                                            icon={phase.icon}
                                            label={phase.previewLabel}
                                            isActive={activePhase === idx}
                                            isPast={idx < activePhase}
                                            color={phase.color}
                                            onClick={() => { setActivePhase(idx); setIsPaused(true); }}
                                            isDark={isDark}
                                        />
                                    ))}
                                </div>

                                {/* Code Preview Card */}
                                <motion.div
                                    key={`code-preview-${safeActivePhase}-${currentDemo}`}
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="w-full max-w-2xl mt-8 relative"
                                >
                                    <div
                                        className="absolute -inset-1 rounded-xl blur-lg opacity-30"
                                        style={{ background: `linear-gradient(135deg, ${currentPhase.color}40, transparent)` }}
                                    />

                                    <div className="relative bg-[#0d0d0d] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                                        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/80 border-b border-zinc-800">
                                            <div className="flex items-center gap-3">
                                                <div className="flex gap-1.5">
                                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                                </div>
                                                <span className="text-xs text-zinc-500 font-mono flex items-center gap-2">
                                                    <FileJson className="w-3 h-3" />
                                                    {currentPhase.codeTitle}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <motion.div
                                                    animate={{ opacity: [1, 0.5, 1] }}
                                                    transition={{ duration: 1.5, repeat: Infinity }}
                                                    className="w-2 h-2 rounded-full bg-green-500"
                                                />
                                                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{t.codePreviewLabel}</span>
                                            </div>
                                        </div>

                                        <div className="p-4 font-mono text-xs leading-relaxed overflow-hidden">
                                            <AnimatePresence mode="wait">
                                                <motion.pre
                                                    key={`preview-${safeActivePhase}-${currentDemo}`}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="text-zinc-300"
                                                >
                                                    <code dangerouslySetInnerHTML={{
                                                        __html: (currentPhase.codePreview || (currentPhase.code || '').slice(0, 100))
                                                            .replace(/"(.*?)"/g, '<span class="text-orange-300">"$1"</span>')
                                                            .replace(/\b(true|false|null|None)\b/g, '<span class="text-rose-400">$1</span>')
                                                            .replace(/\b(def|class|return|if|any|for|in|import|with|from)\b/g, '<span class="text-purple-400">$1</span>')
                                                            .replace(/@\w+/g, '<span class="text-blue-400">$&</span>')
                                                            .replace(/#.*/g, '<span class="text-zinc-500">$&</span>')
                                                            .replace(/✓/g, '<span class="text-green-400">✓</span>')
                                                    }} />
                                                </motion.pre>
                                            </AnimatePresence>
                                        </div>

                                        <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/50 border-t border-zinc-800">
                                            <div className="flex items-center gap-2">
                                                {React.createElement(currentPhase.icon, {
                                                    className: "w-4 h-4",
                                                    style: { color: currentPhase.color }
                                                })}
                                                <span className="text-xs text-zinc-400">{currentPhase.title}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-[10px] text-zinc-600">
                                                <Zap className="w-3 h-3" />
                                                {t.phasePrefix} {safeActivePhase + 1}/{phases.length}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleExpand(0)}
                                    className="mt-8 relative z-20 group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm tracking-wide hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    {t.expandBtn}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </motion.div>
                        )}

                        {/* EXPANDED DEEP DIVE MODE */}
                        {isExpanded && (
                            <motion.div
                                key="deep-dive"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="p-6 md:p-8 min-h-[800px] flex flex-col"
                            >
                                {/* Control Bar */}
                                <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-6 border-b border-zinc-800 gap-4">
                                    {/* Demo Selector */}
                                    <div className="flex items-center gap-3 shrink-0">
                                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{t.demoLabel}:</span>
                                        <div className="flex gap-2 bg-zinc-950 p-1 rounded-lg border border-zinc-800">
                                            {demoTitles.map((demo, idx) => (
                                                <motion.button
                                                    key={idx}
                                                    onClick={() => switchDemo(idx)}
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${currentDemo === idx
                                                        ? 'bg-zinc-800 text-white shadow-sm'
                                                        : 'text-zinc-500 hover:text-zinc-300'
                                                        }`}
                                                >
                                                    {demo[language]}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                                        <div className="flex gap-1 shrink-0 bg-zinc-950 p-1 rounded-full border border-zinc-800">
                                            {phases.map((phase, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    onClick={() => { setActivePhase(idx); setIsPaused(true); }}
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className={`h-2 w-8 rounded-full cursor-pointer transition-all duration-300 ${idx === activePhase ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-zinc-800 hover:bg-zinc-700'}`}
                                                    style={idx === activePhase ? { backgroundColor: phase.color } : {}}
                                                    title={phases[idx].title}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs text-zinc-500 font-mono ml-4 shrink-0 whitespace-nowrap">
                                            {t.phasePrefix} {safeActivePhase + 1}: {currentPhase.title}
                                        </span>
                                    </div>

                                    <Button
                                        variant="ghost"
                                        onClick={handleClose}
                                        className="text-zinc-400 hover:text-white gap-2 shrink-0"
                                    >
                                        <X className="w-4 h-4" /> {t.closeBtn}
                                    </Button>
                                </div>

                                {/* Split Content */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full flex-1">

                                    {/* Left: Explanation & Business Value */}
                                    <div className="flex flex-col justify-center order-2 lg:order-1 relative">
                                        <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 z-20">
                                            <motion.button
                                                onClick={prevPhase}
                                                whileHover={{ scale: 1.1, x: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                                            >
                                                <ChevronLeft className="w-6 h-6" />
                                            </motion.button>
                                        </div>
                                        <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 z-20 xl:hidden">
                                            <motion.button
                                                onClick={nextPhase}
                                                whileHover={{ scale: 1.1, x: 2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                                            >
                                                <ChevronRight className="w-6 h-6" />
                                            </motion.button>
                                        </div>

                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={`text-${activePhase}`}
                                                initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                                exit={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                            >
                                                <div className="flex items-center gap-3 mb-6">
                                                    <motion.div
                                                        className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 shadow-xl"
                                                        animate={{
                                                            boxShadow: `0 0 30px ${currentPhase.color}30`
                                                        }}
                                                    >
                                                        {React.createElement(currentPhase.icon, {
                                                            className: "w-8 h-8",
                                                            style: { color: currentPhase.color }
                                                        })}
                                                    </motion.div>
                                                    <div className="px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-400 font-mono">
                                                        {t.phasePrefix} {safeActivePhase + 1}
                                                    </div>
                                                </div>

                                                <h3 className="text-4xl font-bold text-white mb-2">{currentPhase.title}</h3>
                                                <h4 className="text-lg text-indigo-400 font-medium mb-6 flex items-center gap-2 font-mono">
                                                    <TerminalIcon className="w-4 h-4" /> {currentPhase.subtitle}
                                                </h4>

                                                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                                    {currentPhase.description}
                                                </p>

                                                {/* Business Outcome Card */}
                                                <motion.div
                                                    className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 mb-8 backdrop-blur-sm relative overflow-hidden group"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <motion.div
                                                        className="absolute top-0 left-0 w-1 h-full"
                                                        style={{ backgroundColor: currentPhase.color }}
                                                        layoutId="outcome-bar"
                                                    />
                                                    <div className="flex flex-col gap-2 relative z-10">
                                                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                                                            <CheckCircle2 className="w-3 h-3" /> {t.businessOutcome}
                                                        </div>
                                                        <p className="text-zinc-200 font-medium text-lg">
                                                            "{currentPhase.outcome}"
                                                        </p>
                                                    </div>
                                                </motion.div>

                                                <div className="flex flex-wrap gap-3">
                                                    <div className="px-3 py-1.5 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400 flex items-center gap-2">
                                                        <Cpu className="w-3 h-3" />
                                                        {currentPhase.tech}
                                                    </div>
                                                    {activePhase === 7 && (
                                                        <div className="px-3 py-1.5 rounded-md bg-green-900/20 border border-green-900/50 text-xs font-mono text-green-400 flex items-center gap-2">
                                                            <Lock className="w-3 h-3" />
                                                            Compliance Verified
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Right: Code / Visual Toggle */}
                                    <div className="relative order-1 lg:order-2 flex flex-col h-[500px] lg:h-auto">
                                        {/* Toggle Switch */}
                                        <div className="absolute top-4 right-4 z-20 flex bg-zinc-900 p-1 rounded-lg border border-zinc-800 shadow-xl">
                                            <button
                                                onClick={() => setShowCode(true)}
                                                className={`p-2 rounded-md transition-all ${showCode ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                                                title={t.techView}
                                            >
                                                <Code2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => setShowCode(false)}
                                                className={`p-2 rounded-md transition-all ${!showCode ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                                                title={t.visualView}
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Glow effect behind card */}
                                        <motion.div
                                            className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl pointer-events-none"
                                            animate={{
                                                background: `radial-gradient(circle at center, ${currentPhase.color}40, transparent 70%)`
                                            }}
                                            transition={{ duration: 0.5 }}
                                        />

                                        <div className="h-full rounded-xl bg-[#0d0d0d] border border-zinc-800 overflow-hidden shadow-2xl flex flex-col relative group">
                                            {/* Header (Only for Code View) */}
                                            {showCode && (
                                                <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
                                                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                                                        <FileJson className="w-3 h-3" />
                                                        {currentPhase.codeTitle}
                                                    </div>
                                                    <div className="flex gap-1.5">
                                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Content Area */}
                                            <div className="flex-1 overflow-auto custom-scrollbar relative">
                                                <AnimatePresence mode="wait">
                                                    {showCode ? (
                                                        <motion.div
                                                            key={`code-${safeActivePhase}-${currentDemo}`}
                                                            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                                            exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                                            className="p-6 font-mono text-sm leading-relaxed"
                                                        >
                                                            <pre className="text-zinc-300">
                                                                <code dangerouslySetInnerHTML={{
                                                                    __html: (currentPhase.code || '')
                                                                        .replace(/"(.*?)"/g, '<span class="text-orange-300">"$1"</span>')
                                                                        .replace(/\b(true|false|null|None)\b/g, '<span class="text-rose-400">$1</span>')
                                                                        .replace(/\b(def|class|return|if|any|for|in|import|with|from|yield)\b/g, '<span class="text-purple-400">$1</span>')
                                                                        .replace(/\[(.*?)\]/g, '<span class="text-blue-300">[$1]</span>')
                                                                        .replace(/#.*/g, '<span class="text-zinc-500">$&</span>')
                                                                        .replace(/@\w+/g, '<span class="text-blue-400">$&</span>')
                                                                }} />
                                                            </pre>
                                                        </motion.div>
                                                    ) : (
                                                        <motion.div
                                                            key={`visual-${safeActivePhase}-${currentDemo}`}
                                                            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                                            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                                            className={`h-full ${isDark ? 'bg-zinc-900/20' : 'bg-white/50'}`}
                                                        >
                                                            <FrameworkVisualization
                                                                type={currentPhase.visualType || 'status'}
                                                                content={currentPhase.visualContent}
                                                                color={currentPhase.color}
                                                                isDark={isDark}
                                                            />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Nav Controls */}
                                <div className="flex justify-between mt-8 lg:hidden">
                                    <Button variant="secondary" onClick={prevPhase} className="px-4"><ChevronLeft className="w-4 h-4 mr-2" /> {t.prevBtn}</Button>
                                    <Button variant="primary" onClick={nextPhase} className="px-4">{t.nextBtn} <ChevronRight className="w-4 h-4 ml-2" /></Button>
                                </div>

                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};
