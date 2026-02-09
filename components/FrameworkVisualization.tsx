import React from 'react';
import { motion } from 'framer-motion';
import {
    User, CheckCircle2, Shield
} from 'lucide-react';

interface VisualPreviewProps {
    type: string;
    content: any;
    color: string;
    isDark?: boolean;
}

export const FrameworkVisualization: React.FC<VisualPreviewProps> = ({ type, content, color, isDark = true }) => {
    // Theme-aware classes
    const cardBg = isDark ? 'bg-zinc-900' : 'bg-white';
    const cardBorder = isDark ? 'border-zinc-800' : 'border-zinc-200';
    const headerBg = isDark ? 'bg-zinc-800' : 'bg-zinc-100';
    const headerBorder = isDark ? 'border-zinc-700' : 'border-zinc-200';
    const textPrimary = isDark ? 'text-white' : 'text-zinc-900';
    const textSecondary = isDark ? 'text-zinc-400' : 'text-zinc-600';
    const textMuted = isDark ? 'text-zinc-500' : 'text-zinc-500';
    const inputBg = isDark ? 'bg-zinc-800' : 'bg-zinc-100';

    // 1. Email View
    if (type === 'email') {
        return (
            <div className={`flex flex-col h-full rounded-lg overflow-hidden border ${cardBg} ${cardBorder}`}>
                <div className={`px-4 py-3 flex items-center gap-2 border-b ${headerBg} ${headerBorder}`}>
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <span className={`ml-2 text-xs font-mono ${textMuted}`}>Mail Client v2.0</span>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                    <div className={`flex items-center gap-3 pb-4 border-b ${cardBorder}`}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-zinc-700 text-zinc-300' : 'bg-zinc-200 text-zinc-600'}`}>
                            <User className="w-5 h-5" />
                        </div>
                        <div>
                            <div className={`text-sm font-medium ${textPrimary}`}>{content.from}</div>
                            <div className={`text-xs ${textMuted}`}>{content.timestamp}</div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h4 className={`font-semibold mb-2 ${textPrimary}`}>{content.subject}</h4>
                        <p className={`text-sm leading-relaxed ${textSecondary}`}>{content.body}</p>
                    </div>
                </div>
            </div>
        )
    }
    // 2. Tagger View
    if (type === 'tagger') {
        return (
            <div className="h-full flex flex-col justify-center items-center p-6">
                <motion.div
                    className={`p-6 rounded-xl w-full max-w-sm relative overflow-hidden border ${cardBg} ${cardBorder}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: color }} />
                    <p className={`text-sm mb-6 italic ${textSecondary}`}>"{content.text}"</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {content.tags.map((tag: string, i: number) => (
                            <motion.span
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.2 }}
                                className={`px-2 py-1 rounded text-xs font-bold border ${isDark ? 'bg-zinc-800 text-white border-zinc-700' : 'bg-zinc-100 text-zinc-900 border-zinc-300'}`}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                    <div className={`flex items-center justify-between pt-4 border-t ${cardBorder}`}>
                        <span className={`text-xs uppercase ${textMuted}`}>Confidence</span>
                        <span className="text-sm font-mono text-green-400">{content.confidence}</span>
                    </div>
                </motion.div>
            </div>
        )
    }
    // 3. Model Card
    if (type === 'model-card') {
        return (
            <div className="h-full flex flex-col justify-center items-center p-6">
                <motion.div
                    className={`w-full max-w-xs rounded-xl border p-1 ${cardBg} ${cardBorder}`}
                    initial={{ rotateY: -20, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className={`rounded-lg p-6 text-center border ${isDark ? 'bg-zinc-950 border-zinc-800/50' : 'bg-zinc-50 border-zinc-200'}`}>
                        <motion.div
                            className="w-16 h-16 mx-auto bg-amber-500/10 rounded-full flex items-center justify-center mb-4"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <CheckCircle2 className="w-8 h-8 text-amber-500" />
                        </motion.div>
                        <h3 className={`font-bold text-lg mb-1 ${textPrimary}`}>{content.name}</h3>
                        <p className={`text-xs font-mono mb-4 ${textMuted}`}>{content.version}</p>
                        <div className="grid grid-cols-2 gap-2 text-center">
                            <div className={`rounded p-2 ${inputBg}`}>
                                <div className={`text-[10px] uppercase ${textMuted}`}>Accuracy</div>
                                <div className="text-amber-400 font-bold">{content.accuracy}</div>
                            </div>
                            <div className={`rounded p-2 ${inputBg}`}>
                                <div className={`text-[10px] uppercase ${textMuted}`}>Status</div>
                                <div className="text-green-400 font-bold text-xs pt-1">{content.status}</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        )
    }
    // 4. Server Log
    if (type === 'server-log') {
        return (
            <div className="h-full p-6 font-mono text-xs flex flex-col justify-center">
                <div className="space-y-3">
                    <motion.div
                        className={textMuted}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="flex gap-2">{'>'} <span className="text-blue-400">{content.method}</span></span>
                    </motion.div>
                    <motion.div
                        className={`pl-4 opacity-70 border-l ${textSecondary} ${cardBorder}`}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Input: {content.payload}
                    </motion.div>
                    <motion.div
                        className={`flex gap-2 pt-2 ${textMuted}`}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span>{'<'}</span> <span className="text-green-400">200 OK</span>
                    </motion.div>
                    <motion.div
                        className={`pl-4 border-l ${textPrimary} ${cardBorder}`}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Output: {content.response}
                    </motion.div>
                    <motion.div
                        className={`mt-4 inline-block px-2 py-1 rounded text-blue-300 ${inputBg}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    >
                        ⏱ Latency: {content.latency}
                    </motion.div>
                </div>
            </div>
        )
    }
    // 5. Agent Chat
    if (type === 'agent-chat') {
        return (
            <div className="h-full p-6 flex flex-col justify-center space-y-4">
                {content.map((msg: any, i: number) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: i * 0.3, type: "spring", stiffness: 200 }}
                        className="flex items-start gap-3"
                    >
                        <motion.div
                            className={`w-8 h-8 rounded flex items-center justify-center text-[10px] font-bold shrink-0 ${msg.role === 'Manager' ? 'bg-purple-900/50 text-purple-300' :
                                msg.role === 'Finanzas' || msg.role === 'Finance' ? 'bg-green-900/50 text-green-300' :
                                    'bg-blue-900/50 text-blue-300'
                                }`}
                            whileHover={{ scale: 1.1 }}
                        >
                            {msg.role[0]}
                        </motion.div>
                        <div className={`p-3 rounded-lg rounded-tl-none text-xs leading-relaxed border ${cardBg} ${cardBorder} ${textSecondary}`}>
                            <span className={`block text-[10px] font-bold mb-1 uppercase ${textMuted}`}>{msg.role}</span>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
            </div>
        )
    }
    // 6. Quality Check
    if (type === 'quality-check') {
        return (
            <div className="h-full p-6 flex flex-col justify-center">
                <motion.div
                    className={`rounded-xl overflow-hidden border ${cardBg} ${cardBorder}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <div className={`px-4 py-2 border-b flex justify-between items-center ${headerBg} ${headerBorder}`}>
                        <span className={`text-xs font-bold ${textMuted}`}>DEEPEVAL REPORT</span>
                        <motion.span
                            className="w-2 h-2 rounded-full bg-green-500"
                            animate={{ boxShadow: ["0 0 0px #22c55e", "0 0 15px #22c55e", "0 0 0px #22c55e"] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </div>
                    <div className={`divide-y ${isDark ? 'divide-zinc-800' : 'divide-zinc-200'}`}>
                        {content.tests.map((test: any, i: number) => (
                            <motion.div
                                key={i}
                                className="px-4 py-3 flex items-center justify-between"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.15 }}
                            >
                                <span className={`text-sm ${textSecondary}`}>{test.name}</span>
                                <div className="flex items-center gap-3">
                                    <span className={`font-mono text-xs ${textMuted}`}>{test.score}</span>
                                    <span className="px-2 py-0.5 bg-green-900/30 text-green-400 text-[10px] font-bold rounded border border-green-900/50">
                                        {test.status}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        )
    }
    // 7. Timeline
    if (type === 'timeline') {
        return (
            <div className="h-full p-6 flex flex-col justify-center">
                <div className="space-y-4">
                    {content.steps.map((step: any, i: number) => (
                        <motion.div
                            key={i}
                            className="relative"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <div className={`flex justify-between text-xs mb-1 ${textSecondary}`}>
                                <span>{step.name}</span>
                                <span className={`font-mono ${textMuted}`}>{step.time}</span>
                            </div>
                            <div className={`h-2 rounded-full overflow-hidden ${inputBg}`}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400"
                                />
                            </div>
                        </motion.div>
                    ))}
                    <motion.div
                        className={`pt-4 mt-4 border-t flex justify-between items-center ${cardBorder}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <span className="text-xs text-emerald-400 font-bold uppercase">Total</span>
                        <span className={`font-mono font-bold ${textPrimary}`}>{content.total}</span>
                    </motion.div>
                </div>
            </div>
        )
    }
    // 8. Compliance
    if (type === 'compliance') {
        return (
            <div className="h-full p-6 flex flex-col justify-center items-center">
                <motion.div
                    className="border border-red-900/30 bg-red-950/10 p-6 rounded-xl text-center w-full relative overflow-hidden"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <motion.div
                        className="absolute -right-4 -top-4 w-16 h-16 bg-red-500/20 blur-xl rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                    <Shield className="w-10 h-10 text-red-400 mx-auto mb-4" />
                    <h3 className={`font-bold mb-1 ${textPrimary}`}>PII Detected</h3>
                    <p className="text-xs text-red-300 mb-6">{content.policy}</p>
                    <div className={`p-3 rounded border text-left font-mono text-xs mb-2 ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-100 border-zinc-200'}`}>
                        <span className={`block mb-1 ${textMuted}`}>{content.field}:</span>
                        <div className={`flex justify-between items-center ${textSecondary}`}>
                            <span>{content.value}</span>
                            <motion.span
                                className="text-[10px] text-red-400 font-bold border border-red-900/50 bg-red-950/30 px-1 rounded"
                                animate={{ opacity: [1, 0.5, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                {content.action}
                            </motion.span>
                        </div>
                    </div>
                </motion.div>
            </div>
        )
    }
    return null;
}

