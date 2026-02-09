import React from 'react';
import { motion } from 'framer-motion';

// Actual tools from the ecosystem, organized by workflow phase
const workflowTools = {
  labeling: {
    name: "Snorkel AI",
    logo: "/logos/snorkel.png",
    x: 8,
    y: 35,
  },
  tracking: {
    name: "Weights & Biases",
    logo: "/logos/wandb.png",
    x: 22,
    y: 55,
  },
  experiments: {
    name: "MLflow",
    logo: "/logos/mlflow.png",
    x: 36,
    y: 30,
  },
  orchestration: {
    name: "CrewAI",
    logo: "/logos/crewai.png",
    x: 50,
    y: 50,
  },
  langgraph: {
    name: "LangGraph",
    logo: "/logos/langgraph.png",
    x: 58,
    y: 62,
  },

  testing: {
    name: "DeepEval",
    logo: "/logos/deepeval.png",
    x: 64,
    y: 35,
  },
  observability: {
    name: "Langfuse",
    logo: "/logos/langfuse.png",
    x: 78,
    y: 55,
  },
  governance: {
    name: "Credo AI",
    logo: "/logos/credo.png",
    x: 92,
    y: 40,
  },
};

// Flow path through the tools (simulating data flow)
const flowPath = [
  'labeling',
  'tracking',
  'experiments',
  'orchestration',
  'langgraph',
  'testing',
  'observability',
  'governance',
];

// Floating logo particle that moves along the workflow
const FlowingLogo: React.FC<{
  logo: string;
  name: string;
  pathIndex: number;
  delay: number;
  isDark: boolean;
}> = ({ logo, name, pathIndex, delay, isDark }) => {
  // Calculate the path points
  const pathPoints = flowPath.map(key => workflowTools[key as keyof typeof workflowTools]);

  // Create keyframes for the entire path
  const xKeyframes = pathPoints.map(p => `${p.x}%`);
  const yKeyframes = pathPoints.map(p => `${p.y}%`);

  return (
    <motion.div
      className="absolute"
      style={{
        left: xKeyframes[0],
        top: yKeyframes[0],
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        left: xKeyframes,
        top: yKeyframes,
        opacity: [0, 0.7, 0.7, 0.7, 0.7, 0.7, 0],
        scale: [0.6, 1, 1, 1, 1, 1, 0.6],
      }}
      transition={{
        duration: 14,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
      }}
    >
      <div className={`w-8 h-8 rounded-lg backdrop-blur-sm p-1.5 shadow-lg ${isDark ? 'bg-zinc-900/60 border border-zinc-700/40' : 'bg-white/80 border border-zinc-200 shadow-md'}`}>
        <img
          src={logo}
          alt={name}
          className={`w-full h-full object-contain rounded-sm ${isDark ? 'opacity-80' : 'opacity-90'}`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${name}&background=${isDark ? '18181b' : 'f8fafc'}&color=${isDark ? 'fff' : '1e293b'}&size=32`;
          }}
        />
      </div>
    </motion.div>
  );
};

// Static tool node that shows in the background
const ToolNode: React.FC<{
  tool: typeof workflowTools[keyof typeof workflowTools];
  index: number;
  isDark: boolean;
}> = ({ tool, index, isDark }) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${tool.x}%`,
        top: `${tool.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
    >
      <motion.div
        className={`relative w-12 h-12 rounded-xl backdrop-blur-sm flex items-center justify-center p-2 ${isDark ? 'bg-zinc-900/40 border border-zinc-800/50' : 'bg-white/60 border border-zinc-200/70 shadow-sm'}`}
        animate={{
          boxShadow: isDark
            ? [
              '0 0 0 0 rgba(139, 92, 246, 0)',
              '0 0 15px 2px rgba(139, 92, 246, 0.15)',
              '0 0 0 0 rgba(139, 92, 246, 0)',
            ]
            : [
              '0 0 0 0 rgba(99, 102, 241, 0)',
              '0 0 20px 4px rgba(99, 102, 241, 0.15)',
              '0 0 0 0 rgba(99, 102, 241, 0)',
            ],
        }}
        transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
      >
        <img
          src={tool.logo}
          alt={tool.name}
          className={`w-full h-full object-contain rounded-md ${isDark ? 'opacity-40' : 'opacity-50'}`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${tool.name}&background=${isDark ? '18181b' : 'f8fafc'}&color=${isDark ? 'fff' : '1e293b'}&size=48`;
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// Connection line between nodes
const ConnectionLine: React.FC<{
  from: typeof workflowTools[keyof typeof workflowTools];
  to: typeof workflowTools[keyof typeof workflowTools];
  index: number;
  isDark: boolean;
}> = ({ from, to, index, isDark }) => {
  const length = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2));
  const angle = Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);

  return (
    <motion.div
      className="absolute h-px origin-left"
      style={{
        left: `${from.x}%`,
        top: `${from.y}%`,
        width: `${length}%`,
        transform: `rotate(${angle}deg)`,
        background: isDark
          ? 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent)'
          : 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent)',
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: index * 0.15, ease: "easeOut" }}
    />
  );
};

// Small data particles flowing between nodes
const DataParticle: React.FC<{
  from: typeof workflowTools[keyof typeof workflowTools];
  to: typeof workflowTools[keyof typeof workflowTools];
  delay: number;
  isDark: boolean;
}> = ({ from, to, delay, isDark }) => {
  return (
    <motion.div
      className={`absolute w-1 h-1 rounded-full ${isDark ? 'bg-purple-400/60' : 'bg-indigo-500/70'}`}
      style={{ left: `${from.x}%`, top: `${from.y}%` }}
      animate={{
        left: [`${from.x}%`, `${to.x}%`],
        top: [`${from.y}%`, `${to.y}%`],
        opacity: [0, 0.8, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

interface HeroBackgroundProps {
  isDark?: boolean;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ isDark = true }) => {
  const toolsArray = Object.values(workflowTools);

  // Create connection pairs
  const connections = flowPath.slice(0, -1).map((key, i) => ({
    from: workflowTools[key as keyof typeof workflowTools],
    to: workflowTools[flowPath[i + 1] as keyof typeof workflowTools],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay for depth */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-transparent via-transparent to-black/60' : 'bg-gradient-to-b from-transparent via-transparent to-white/40'}`} />

      {/* Radial fade to keep focus on center */}
      <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(ellipse_at_center,transparent_30%,black_80%)]' : 'bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(248,250,252,0.9)_80%)]'}`} />

      {/* Connection lines */}
      {connections.map((conn, index) => (
        <ConnectionLine
          key={`line-${index}`}
          from={conn.from}
          to={conn.to}
          index={index}
          isDark={isDark}
        />
      ))}

      {/* Static tool nodes in background */}
      {toolsArray.map((tool, index) => (
        <ToolNode key={tool.name} tool={tool} index={index} isDark={isDark} />
      ))}

      {/* Data particles flowing between nodes */}
      {connections.map((conn, index) => (
        <React.Fragment key={`particles-${index}`}>
          <DataParticle from={conn.from} to={conn.to} delay={index * 0.8} isDark={isDark} />
          <DataParticle from={conn.from} to={conn.to} delay={index * 0.8 + 1.5} isDark={isDark} />
        </React.Fragment>
      ))}

      {/* Flowing logo animations - staggered */}
      <FlowingLogo
        logo="/logos/crewai.png"
        name="CrewAI"
        pathIndex={0}
        delay={0}
        isDark={isDark}
      />
      <FlowingLogo
        logo="/logos/langgraph.png"
        name="LangGraph"
        pathIndex={0}
        delay={2}
        isDark={isDark}
      />
      <FlowingLogo
        logo="/logos/langfuse.png"
        name="Langfuse"
        pathIndex={1}
        delay={4.5}
        isDark={isDark}
      />
      <FlowingLogo
        logo="/logos/deepeval.png"
        name="DeepEval"
        pathIndex={2}
        delay={9}
        isDark={isDark}
      />

      {/* Ambient glow effects */}
      <motion.div
        className={`absolute w-40 h-40 rounded-full blur-3xl ${isDark ? 'bg-blue-500/8' : 'bg-blue-400/15'}`}
        style={{ left: '15%', top: '40%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute w-48 h-48 rounded-full blur-3xl ${isDark ? 'bg-purple-500/8' : 'bg-purple-400/15'}`}
        style={{ right: '20%', top: '35%' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute w-32 h-32 rounded-full blur-3xl ${isDark ? 'bg-indigo-500/10' : 'bg-indigo-400/20'}`}
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </div>
  );
};

