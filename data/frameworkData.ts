import {
    FileText,
    User,
    Brain,
    Wrench,
    MessageSquare,
    Cloud,
    Users
} from 'lucide-react';

export const generalContent = {
    es: {
        badge: "METODOLOGÍA DE DESPLIEGUE",
        titleStart: "Framework de Equipos",
        titleEnd: "Autónomos",
        descPreview: "7 fases para desplegar equipos de agentes IA coordinados que trabajan juntos.",
        descExpanded: "Explore cómo estructuramos, desplegamos y orquestamos equipos de agentes autónomos.",
        expandBtn: "VER FRAMEWORK COMPLETO",
        clickHint: 'Haga clic en cada fase para ver los detalles de implementación.',
        closeBtn: "Cerrar Vista",
        prevBtn: "Anterior",
        nextBtn: "Siguiente",
        businessOutcome: "Resultado",
        techView: "Ver Código",
        visualView: "Ver Resultado",
        phasePrefix: "Fase",
        codePreviewLabel: "Configuración",
        demoLabel: "Framework",
        demo1Title: "Estructura del Agente",
        demo2Title: "Despliegue del Equipo"
    },
    en: {
        badge: "DEPLOYMENT METHODOLOGY",
        titleStart: "Autonomous Team",
        titleEnd: "Framework",
        descPreview: "7 phases to deploy coordinated AI agent teams that work together.",
        descExpanded: "Explore how we structure, deploy, and orchestrate autonomous agent teams.",
        expandBtn: "VIEW FULL FRAMEWORK",
        clickHint: 'Click each phase to see implementation details.',
        closeBtn: "Close View",
        prevBtn: "Previous",
        nextBtn: "Next",
        businessOutcome: "Outcome",
        techView: "View Code",
        visualView: "View Result",
        phasePrefix: "Phase",
        codePreviewLabel: "Configuration",
        demoLabel: "Framework",
        demo1Title: "Agent Structure",
        demo2Title: "Team Deployment"
    }
};

const phase1 = {
    es: {
        id: 0,
        title: "Estructura",
        previewLabel: "AGENTS.md",
        subtitle: "Reglas Operativas",
        icon: FileText,
        color: "#ffffff",
        description: "Fase 1: Cada agente recibe un archivo AGENTS.md que define sus reglas operativas — memoria, seguridad, herramientas y flujo de trabajo.",
        tech: "AGENTS.md",
        outcome: "Comportamiento consistente y predecible en cada sesión.",
        visualType: "email",
        visualContent: {
            from: "sistema",
            subject: "Estructura del Agente",
            body: "Lee SOUL.md, lee USER.md, revisa la memoria diaria. Sigue las reglas de seguridad. Usa skills para herramientas.",
            timestamp: "Cada inicio de sesión"
        },
        codeTitle: "AGENTS.md",
        code: `# AGENTS.md — Operating Rules

## Every Session
1. Read SOUL.md — this is who you are
2. Read USER.md — this is who you're helping
3. Read memory/YYYY-MM-DD.md for context

## Memory
- Daily notes: memory/YYYY-MM-DD.md
- Long-term: MEMORY.md (curated)
- Write it down — no "mental notes"

## Safety
- Don't exfiltrate private data
- trash > rm (recoverable)
- When in doubt, ask

## Tools
- Skills provide your tools
- Check SKILL.md when you need one`,
        codePreview: `# AGENTS.md
1. Read SOUL.md — identity
2. Read USER.md — context
3. Check memory/ — continuity`
    },
    en: {
        id: 0,
        title: "Structure",
        previewLabel: "AGENTS.md",
        subtitle: "Operating Rules",
        icon: FileText,
        color: "#ffffff",
        description: "Phase 1: Every agent receives an AGENTS.md file defining operating rules — memory, safety, tools, and workflow.",
        tech: "AGENTS.md",
        outcome: "Consistent, predictable behavior across every session.",
        visualType: "email",
        visualContent: {
            from: "system",
            subject: "Agent Structure",
            body: "Read SOUL.md, read USER.md, check daily memory. Follow safety rules. Use skills for tools.",
            timestamp: "Every session start"
        },
        codeTitle: "AGENTS.md",
        code: `# AGENTS.md — Operating Rules

## Every Session
1. Read SOUL.md — this is who you are
2. Read USER.md — this is who you're helping
3. Read memory/YYYY-MM-DD.md for context

## Memory
- Daily notes: memory/YYYY-MM-DD.md
- Long-term: MEMORY.md (curated)
- Write it down — no "mental notes"

## Safety
- Don't exfiltrate private data
- trash > rm (recoverable)
- When in doubt, ask

## Tools
- Skills provide your tools
- Check SKILL.md when you need one`,
        codePreview: `# AGENTS.md
1. Read SOUL.md — identity
2. Read USER.md — context
3. Check memory/ — continuity`
    }
};

const phase2 = {
    es: {
        id: 1,
        title: "Identidad",
        previewLabel: "SOUL.md",
        subtitle: "Personalidad del Agente",
        icon: User,
        color: "#a78bfa",
        description: "Fase 2: SOUL.md define quién es el agente — su rol, personalidad, expertise y estilo de comunicación. Framework > prompt.",
        tech: "SOUL.md",
        outcome: "Agentes con personalidad consistente y especialización clara.",
        visualType: "compliance",
        visualContent: {
            policy: "Identidad del Agente",
            action: "CONFIGURADO",
            field: "Rol definido",
            value: "Full-Stack Developer"
        },
        codeTitle: "SOUL.md",
        code: `# SOUL.md — Agent Identity

name: COOPER
role: Full-Stack Developer
mission: Ship production code

personality:
  - Direct and opinionated
  - Ships fast, iterates faster
  - Tests everything before pushing

expertise:
  - TypeScript, React, Next.js
  - Tailwind CSS, Supabase
  - CI/CD, Docker, Git

communication:
  - Technical, no fluff
  - Code blocks with syntax highlighting
  - Reference specific files and lines`,
        codePreview: `# SOUL.md
name: COOPER
role: Full-Stack Developer
mission: Ship production code`
    },
    en: {
        id: 1,
        title: "Identity",
        previewLabel: "SOUL.md",
        subtitle: "Agent Personality",
        icon: User,
        color: "#a78bfa",
        description: "Phase 2: SOUL.md defines who the agent is — role, personality, expertise, and communication style. Framework > prompt.",
        tech: "SOUL.md",
        outcome: "Agents with consistent personality and clear specialization.",
        visualType: "compliance",
        visualContent: {
            policy: "Agent Identity",
            action: "CONFIGURED",
            field: "Role defined",
            value: "Full-Stack Developer"
        },
        codeTitle: "SOUL.md",
        code: `# SOUL.md — Agent Identity

name: COOPER
role: Full-Stack Developer
mission: Ship production code

personality:
  - Direct and opinionated
  - Ships fast, iterates faster
  - Tests everything before pushing

expertise:
  - TypeScript, React, Next.js
  - Tailwind CSS, Supabase
  - CI/CD, Docker, Git

communication:
  - Technical, no fluff
  - Code blocks with syntax highlighting
  - Reference specific files and lines`,
        codePreview: `# SOUL.md
name: COOPER
role: Full-Stack Developer
mission: Ship production code`
    }
};

const phase3 = {
    es: {
        id: 2,
        title: "Memoria",
        previewLabel: "MEMORY.md",
        subtitle: "Memoria Persistente",
        icon: Brain,
        color: "#f87171",
        description: "Fase 3: Los agentes mantienen memoria entre sesiones — notas diarias y un archivo curado de memoria a largo plazo.",
        tech: "MEMORY.md + memory/",
        outcome: "Contexto acumulativo. Los agentes aprenden y mejoran con el tiempo.",
        visualType: "agent-chat",
        visualContent: [
            { role: "Sistema", text: "MEMORY.md cargado — 23 decisiones clave, 15 lecciones aprendidas." },
            { role: "Diario", text: "memory/2026-02-12.md — Dashboard V2 completado, 5 fases enviadas." },
            { role: "Contexto", text: "El dueño prefiere opiniones fuertes. Reviews los viernes. Standups 8 AM CST." }
        ],
        codeTitle: "MEMORY.md",
        code: `# MEMORY.md — Long-Term Memory

## Key Decisions
- Dashboard built from scratch (not forked)
- Supabase + Vercel stack chosen
- Feature branch strategy for V2

## Lessons Learned
- Containers are ephemeral — persist to /workspace/
- "In Progress" needs proof (commits, metrics)
- New agents need patience on first boot

## Team Context
- Owner prefers strong opinions > hedging
- Friday performance reviews
- Daily standups 8 AM CST`,
        codePreview: `# MEMORY.md
## Key Decisions
- Stack: Supabase + Vercel
## Lessons Learned
- Persist to /workspace/`
    },
    en: {
        id: 2,
        title: "Memory",
        previewLabel: "MEMORY.md",
        subtitle: "Persistent Memory",
        icon: Brain,
        color: "#f87171",
        description: "Phase 3: Agents maintain memory across sessions — daily notes and a curated long-term memory file.",
        tech: "MEMORY.md + memory/",
        outcome: "Cumulative context. Agents learn and improve over time.",
        visualType: "agent-chat",
        visualContent: [
            { role: "System", text: "MEMORY.md loaded — 23 key decisions, 15 lessons learned." },
            { role: "Daily", text: "memory/2026-02-12.md — Dashboard V2 completed, 5 phases shipped." },
            { role: "Context", text: "Owner prefers strong opinions. Friday reviews. Standups 8 AM CST." }
        ],
        codeTitle: "MEMORY.md",
        code: `# MEMORY.md — Long-Term Memory

## Key Decisions
- Dashboard built from scratch (not forked)
- Supabase + Vercel stack chosen
- Feature branch strategy for V2

## Lessons Learned
- Containers are ephemeral — persist to /workspace/
- "In Progress" needs proof (commits, metrics)
- New agents need patience on first boot

## Team Context
- Owner prefers strong opinions > hedging
- Friday performance reviews
- Daily standups 8 AM CST`,
        codePreview: `# MEMORY.md
## Key Decisions
- Stack: Supabase + Vercel
## Lessons Learned
- Persist to /workspace/`
    }
};

const phase4 = {
    es: {
        id: 3,
        title: "Habilidades",
        previewLabel: "Skills",
        subtitle: "Herramientas Personalizadas",
        icon: Wrench,
        color: "#fbbf24",
        description: "Fase 4: Los skills dan capacidades específicas a los agentes — clima, código, investigación. Modulares y reutilizables.",
        tech: "Skills Framework",
        outcome: "Agentes con herramientas especializadas para cada tarea.",
        visualType: "quality-check",
        visualContent: {
            tests: [
                { name: "Skill cargado", status: "PASS", score: "✓" },
                { name: "Herramientas disponibles", status: "PASS", score: "4" },
                { name: "Permisos", status: "PASS", score: "exec" },
                { name: "Estado", status: "ACTIVO", score: "✓" }
            ]
        },
        codeTitle: "skills/weather/SKILL.md",
        code: `# Weather Skill
name: weather
description: Get weather and forecasts
tools_required: [exec]

## Usage
1. Read location from context
2. Fetch via wttr.in API
3. Format for user's platform
4. Return conditions + forecast

## Example
> "What's the weather in Austin?"
→ Fetches wttr.in/Austin
→ Returns: "72°F, partly cloudy"`,
        codePreview: `# skills/weather/SKILL.md
name: weather
tools: [exec]
→ "72°F, partly cloudy"`
    },
    en: {
        id: 3,
        title: "Skills",
        previewLabel: "Skills",
        subtitle: "Custom Tools",
        icon: Wrench,
        color: "#fbbf24",
        description: "Phase 4: Skills give agents specific capabilities — weather, coding, research. Modular and reusable.",
        tech: "Skills Framework",
        outcome: "Agents with specialized tools for every task.",
        visualType: "quality-check",
        visualContent: {
            tests: [
                { name: "Skill loaded", status: "PASS", score: "✓" },
                { name: "Tools available", status: "PASS", score: "4" },
                { name: "Permissions", status: "PASS", score: "exec" },
                { name: "Status", status: "ACTIVE", score: "✓" }
            ]
        },
        codeTitle: "skills/weather/SKILL.md",
        code: `# Weather Skill
name: weather
description: Get weather and forecasts
tools_required: [exec]

## Usage
1. Read location from context
2. Fetch via wttr.in API
3. Format for user's platform
4. Return conditions + forecast

## Example
> "What's the weather in Austin?"
→ Fetches wttr.in/Austin
→ Returns: "72°F, partly cloudy"`,
        codePreview: `# skills/weather/SKILL.md
name: weather
tools: [exec]
→ "72°F, partly cloudy"`
    }
};

const phase5 = {
    es: {
        id: 4,
        title: "Comunicación",
        previewLabel: "Mensajería",
        subtitle: "Comunicación Inter-Agente",
        icon: MessageSquare,
        color: "#34d399",
        description: "Fase 5: Los agentes se comunican directamente via mensajería basada en archivos. Redis como bus de mensajes, workspace compartido.",
        tech: "Redis + File Messaging",
        outcome: "Coordinación en tiempo real entre agentes especializados.",
        visualType: "timeline",
        visualContent: {
            steps: [
                { name: "Escribir mensaje", time: "5ms" },
                { name: "Redis detecta", time: "10ms" },
                { name: "Entregar inbox", time: "15ms" },
                { name: "Agente lee", time: "20ms" },
                { name: "Respuesta enviada", time: "25ms" }
            ],
            total: "75ms"
        },
        codeTitle: "inter-agent-messaging",
        code: `# Agent-to-agent messaging via Redis

# Send a message:
/workspace/agents/cooper/send/to-tars.md
/workspace/agents/cooper/send/to-mann.md

# Receive messages:
/workspace/agents/cooper/inbox/

# Real-time coordination:
- File-based messaging bus
- Each agent watches their inbox
- Cross-agent task handoffs
- Shared workspace for collaboration

# Example message:
## Message to @tars
Phase 3 shipped. Commit 8131fc8.
Sending to Mann for QA.`,
        codePreview: `# Send: /agents/cooper/send/to-tars.md
# Recv: /agents/cooper/inbox/
# Bus: Redis pub/sub`
    },
    en: {
        id: 4,
        title: "Communication",
        previewLabel: "Messaging",
        subtitle: "Inter-Agent Comms",
        icon: MessageSquare,
        color: "#34d399",
        description: "Phase 5: Agents communicate directly via file-based messaging. Redis as message bus, shared workspace for collaboration.",
        tech: "Redis + File Messaging",
        outcome: "Real-time coordination between specialized agents.",
        visualType: "timeline",
        visualContent: {
            steps: [
                { name: "Write message", time: "5ms" },
                { name: "Redis detects", time: "10ms" },
                { name: "Deliver to inbox", time: "15ms" },
                { name: "Agent reads", time: "20ms" },
                { name: "Response sent", time: "25ms" }
            ],
            total: "75ms"
        },
        codeTitle: "inter-agent-messaging",
        code: `# Agent-to-agent messaging via Redis

# Send a message:
/workspace/agents/cooper/send/to-tars.md
/workspace/agents/cooper/send/to-mann.md

# Receive messages:
/workspace/agents/cooper/inbox/

# Real-time coordination:
- File-based messaging bus
- Each agent watches their inbox
- Cross-agent task handoffs
- Shared workspace for collaboration

# Example message:
## Message to @tars
Phase 3 shipped. Commit 8131fc8.
Sending to Mann for QA.`,
        codePreview: `# Send: /agents/cooper/send/to-tars.md
# Recv: /agents/cooper/inbox/
# Bus: Redis pub/sub`
    }
};

const phase6 = {
    es: {
        id: 5,
        title: "Despliegue",
        previewLabel: "Deploy",
        subtitle: "Configuración Automatizada",
        icon: Cloud,
        color: "#60a5fa",
        description: "Fase 6: Despliegue flexible — local, Docker o Kubernetes. Un comando para iniciar todo el equipo.",
        tech: "Docker / K8s / Local",
        outcome: "Equipo completo desplegado y operativo en minutos.",
        visualType: "email",
        visualContent: {
            from: "deploy",
            subject: "Opciones de Despliegue",
            body: "Local: npm install + openclaw init. Docker: un solo container. Kubernetes: helm chart con auto-scaling.",
            timestamp: "Tiempo de despliegue: <5 min"
        },
        codeTitle: "deployment",
        code: `# Local (macOS/Linux)
npm install -g openclaw
openclaw init
openclaw gateway start

# Docker
docker run -d openclaw/openclaw \\
  --config /path/to/config.json

# Kubernetes
helm install openclaw openclaw/chart \\
  --set agents.count=6 \\
  --set redis.enabled=true`,
        codePreview: `# Local
openclaw init && openclaw gateway start
# Docker
docker run -d openclaw/openclaw`
    },
    en: {
        id: 5,
        title: "Deployment",
        previewLabel: "Deploy",
        subtitle: "Automated Setup",
        icon: Cloud,
        color: "#60a5fa",
        description: "Phase 6: Flexible deployment — local, Docker, or Kubernetes. One command to start the entire team.",
        tech: "Docker / K8s / Local",
        outcome: "Full team deployed and operational in minutes.",
        visualType: "email",
        visualContent: {
            from: "deploy",
            subject: "Deployment Options",
            body: "Local: npm install + openclaw init. Docker: single container. Kubernetes: helm chart with auto-scaling.",
            timestamp: "Deploy time: <5 min"
        },
        codeTitle: "deployment",
        code: `# Local (macOS/Linux)
npm install -g openclaw
openclaw init
openclaw gateway start

# Docker
docker run -d openclaw/openclaw \\
  --config /path/to/config.json

# Kubernetes
helm install openclaw openclaw/chart \\
  --set agents.count=6 \\
  --set redis.enabled=true`,
        codePreview: `# Local
openclaw init && openclaw gateway start
# Docker
docker run -d openclaw/openclaw`
    }
};

const phase7 = {
    es: {
        id: 6,
        title: "Orquestación",
        previewLabel: "Equipo",
        subtitle: "Equipo en Acción",
        icon: Users,
        color: "#e4e4e7",
        description: "Fase 7: El resultado — agentes especializados trabajando juntos. Coordinación, handoffs, standups, y entrega de resultados.",
        tech: "Multi-Agent Orchestration",
        outcome: "Equipo autónomo coordinado entregando trabajo real 24/7.",
        visualType: "agent-chat",
        visualContent: [
            { role: "Coordinator", text: "Tareas asignadas. Standup completado. 5/6 agentes online." },
            { role: "Developer", text: "Código enviado. Commit abc123. Pasando a QA para pruebas." },
            { role: "QA", text: "242/243 pruebas pasando. Sin bugs. Aprobado para producción." }
        ],
        codeTitle: "team-orchestration",
        code: `# The result: agents working together

Coordinator:
  → Assigns tasks, runs standups
  → Escalation point for blockers

Developer:
  → Ships code, manages Git
  → Hands designs to Designer

Designer:
  → Creates specs, design systems
  → Sends to Developer for implementation

QA:
  → Tests everything before it ships
  → Reports bugs back to Developer

Researcher:
  → Gathers data, analyzes patterns
  → Delivers reports to the team`,
        codePreview: `# Team in action
Coordinator → assigns tasks
Developer → ships code
QA → tests everything`
    },
    en: {
        id: 6,
        title: "Orchestration",
        previewLabel: "Team",
        subtitle: "Team in Action",
        icon: Users,
        color: "#e4e4e7",
        description: "Phase 7: The result — specialized agents working together. Coordination, handoffs, standups, and delivering results.",
        tech: "Multi-Agent Orchestration",
        outcome: "Coordinated autonomous team delivering real work 24/7.",
        visualType: "agent-chat",
        visualContent: [
            { role: "Coordinator", text: "Tasks assigned. Standup complete. 5/6 agents online." },
            { role: "Developer", text: "Code shipped. Commit abc123. Passing to QA for testing." },
            { role: "QA", text: "242/243 tests passing. Zero bugs. Approved for production." }
        ],
        codeTitle: "team-orchestration",
        code: `# The result: agents working together

Coordinator:
  → Assigns tasks, runs standups
  → Escalation point for blockers

Developer:
  → Ships code, manages Git
  → Hands designs to Designer

Designer:
  → Creates specs, design systems
  → Sends to Developer for implementation

QA:
  → Tests everything before it ships
  → Reports bugs back to Developer

Researcher:
  → Gathers data, analyzes patterns
  → Delivers reports to the team`,
        codePreview: `# Team in action
Coordinator → assigns tasks
Developer → ships code
QA → tests everything`
    }
};

export const phasesData = {
    es: [phase1.es, phase2.es, phase3.es, phase4.es, phase5.es, phase6.es, phase7.es],
    en: [phase1.en, phase2.en, phase3.en, phase4.en, phase5.en, phase6.en, phase7.en]
};
