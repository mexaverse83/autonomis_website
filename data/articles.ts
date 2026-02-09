export interface ArticleTranslations {
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  tags: string[];
  category?: string;
}

export interface Article {
  slug: string;
  date: string;
  image: string;
  author: string;
  en: ArticleTranslations;
  es: ArticleTranslations;
}

export const articles: Article[] = [
  // --- Hero 1 (Featured) ---
  {
    slug: 'judgment-first-ai-why-resilience-matters-more-than-autonomy',
    date: 'Dec 30, 2025',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop',
    author: 'Bernardo',
    en: {
      title: 'Judgment-First AI: Why Resilience Matters More Than Autonomy',
      excerpt: 'Most AI systems will fail not because the models are weak, but because judgment is missing. Learn why building systems that know when to stop is more valuable than systems that never fail.',
      readTime: '10 min read',
      tags: ['Judgment', 'Resilience', 'Production'],
      category: 'Philosophy',
      content: `
<h2>The Uncomfortable Truth About AI Agents</h2>
<p>I honestly believed better models, better prompts, and better agent loops would get us there. It did not.</p>
<p>After months of building AI agents for production environments, I learned something that changed how I approach every project: <strong>the magic is real, but autonomy only starts to work when judgment is built into the loop, not bolted on later.</strong></p>
<p>What I underestimated was everything that lives outside the model — the evaluation systems, the decision boundaries, the escalation logic, and the ability to know when the answer is simply "I don't know."</p>

<h2>The Core Problem</h2>
<p>Most AI systems will fail not because the models are weak, but because judgment is missing.</p>
<p>We've become excellent at measuring accuracy. But accuracy is the wrong metric for autonomous systems. The question isn't "Is this answer correct?" — it's "Should this decision be made at all?"</p>
<p>Consider a customer support agent that resolves 95% of tickets correctly. Sounds great, right? But what about the 5% it gets wrong? If those failures include refunding $10,000 to the wrong customer or sending confidential data to the wrong email, the 95% success rate becomes meaningless.</p>

<h2>Resilience Over Autonomy</h2>
<p><strong>Resilience matters more than autonomy.</strong></p>
<p>This is counterintuitive. We want AI systems that can handle everything autonomously. But the reality is that systems designed to fail gracefully outperform systems designed to never fail.</p>
<p>A resilient system knows:</p>
<ul>
  <li>When to act with confidence</li>
  <li>When to escalate to a human</li>
  <li>When to ask for more information</li>
  <li>When to simply stop and say "I'm not sure"</li>
</ul>
<p>This isn't a limitation — it's the feature that makes production deployment possible.</p>

<h2>The Three Pillars of Judgment-First Design</h2>

<h3>1. Evaluate Whether to Decide</h3>
<p>Our evaluations must shift from "Is this correct?" to "Should this decision be made at all?"</p>
<p>Not every problem needs an autonomous answer. The most valuable AI systems are those that recognize the boundary between "I can handle this" and "A human should see this."</p>
<p>In our framework, we use <strong>DeepEval</strong> not just to verify accuracy, but to measure trust. Every response is evaluated for:</p>
<ul>
  <li><strong>Decision quality:</strong> Is this the right action given the context?</li>
  <li><strong>Confidence calibration:</strong> Is the system's confidence level appropriate?</li>
  <li><strong>Escalation judgment:</strong> Should a human have been consulted?</li>
</ul>

<h3>2. Record Context, Not Just Outputs</h3>
<p>Systems that record decision context, not just outputs, compound value over time.</p>
<p>When something goes wrong (and it will), you need to understand:</p>
<ul>
  <li>What information did the system have?</li>
  <li>What alternatives were considered?</li>
  <li>Why was this path chosen over others?</li>
  <li>What was the confidence level at each decision point?</li>
</ul>
<p>We use <strong>Langfuse</strong> to track not just what happened, but why. Every decision includes the reasoning chain, the alternatives considered, and the confidence scores. This creates an audit trail for compliance and a learning system for continuous improvement.</p>

<h3>3. Design for Failure Paths</h3>
<p>The hardest part of building AI systems isn't making them work — it's deciding what to do when the answer is unclear.</p>
<p>Every agent we build includes explicit failure paths:</p>
<ul>
  <li><strong>Low confidence:</strong> Escalate to human review</li>
  <li><strong>Missing context:</strong> Request additional information</li>
  <li><strong>Edge case detected:</strong> Flag for manual handling</li>
  <li><strong>Policy violation risk:</strong> Block and alert</li>
</ul>
<p><strong>Guardrails AI</strong> protects every interaction by blocking prompt injections, sanitizing PII, and validating responses before they reach customers. But more importantly, it defines clear boundaries for what the system should and shouldn't attempt.</p>

<h2>How Our Framework Implements Judgment</h2>

<h3>CrewAI: Orchestration with Built-in Judgment</h3>
<p>We don't use a single agent trying to do everything. <strong>CrewAI</strong> coordinates specialized agent teams where each agent has a clear responsibility and decision authority:</p>
<ul>
  <li><strong>Triage Agent:</strong> Decides urgency and routing — but also decides if the case is too complex for automation</li>
  <li><strong>Response Agent:</strong> Generates solutions — but flags when confidence drops below threshold</li>
  <li><strong>Escalation Agent:</strong> Judges when human intervention is needed</li>
</ul>
<p>Every decision is logged and scored. The system builds institutional knowledge over time.</p>

<h3>DeepEval: Judgment Verification</h3>
<p>DeepEval doesn't just check accuracy — it measures trust. Our custom LLM-as-Judge metrics evaluate:</p>
<ul>
  <li>Was the response appropriate for this specific customer context?</li>
  <li>Did the system correctly identify when it was uncertain?</li>
  <li>Would a human have made the same decision?</li>
</ul>
<p>Every response that fails judgment verification is flagged for review — not just for correction, but for learning.</p>

<h3>Langfuse: Decision Transparency</h3>
<p>Complete observability means tracking where decisions go wrong, not just where models perform well.</p>
<p>We record:</p>
<ul>
  <li>Execution times and costs at each decision point</li>
  <li>Confidence scores throughout the pipeline</li>
  <li>Escalation triggers and their outcomes</li>
  <li>Human override patterns (teaching moments for the system)</li>
</ul>

<h3>Guardrails AI: Safety Boundaries</h3>
<p>Every interaction passes through safety guardrails that define what the system should never do — even if the model thinks it's a good idea.</p>
<ul>
  <li>Block prompt injection attempts</li>
  <li>Sanitize sensitive data before processing</li>
  <li>Validate response appropriateness before sending</li>
  <li>Enforce business rules regardless of model output</li>
</ul>

<h2>The Advice I Wish I Had Earlier</h2>
<p>If you are building with AI, here's what I wish someone had told me from the start:</p>
<blockquote>
  <p><strong>Define judgment early. Measure it. Design for it.</strong></p>
</blockquote>
<p>Don't bolt on evaluation after your system is built. Don't add escalation logic as an afterthought. Don't assume the model will "figure it out."</p>
<p>Start with these questions:</p>
<ul>
  <li>What decisions should this system never make alone?</li>
  <li>How will we measure decision quality, not just accuracy?</li>
  <li>What happens when confidence is low?</li>
  <li>How do we create learning loops from human corrections?</li>
</ul>

<h2>The Path Forward</h2>
<p>The future of AI agents isn't about building systems that never fail. It's about building systems that fail gracefully, learn continuously, and know their limits.</p>
<p><strong>Resilience matters more than autonomy.</strong></p>
<p>The most valuable AI systems aren't the ones that handle 100% of cases autonomously. They're the ones that handle 80% flawlessly and escalate the other 20% intelligently.</p>
<p>That's judgment-first design. That's what we build.</p>

<h2>Key Takeaways</h2>
<blockquote>
  <p>Most AI systems fail not because models are weak, but because judgment is missing. Evals must shift from "Is this correct?" to "Should this decision be made at all?" Systems that record decision context compound value over time. Resilience — knowing when to stop — matters more than autonomy.</p>
</blockquote>
      `
    },
    es: {
      title: 'IA con Juicio Primero: Por Qué la Resiliencia Importa Más que la Autonomía',
      excerpt: 'La mayoría de los sistemas de IA fallarán no porque los modelos sean débiles, sino porque falta el juicio. Aprende por qué construir sistemas que saben cuándo detenerse es más valioso que sistemas que nunca fallan.',
      readTime: '10 min de lectura',
      tags: ['Juicio', 'Resiliencia', 'Producción'],
      category: 'Filosofía',
      content: `
<h2>La Verdad Incómoda Sobre los Agentes de IA</h2>
<p>Honestamente creí que mejores modelos, mejores prompts y mejores loops de agentes nos llevarían al objetivo. No fue así.</p>
<p>Después de meses construyendo agentes de IA para entornos de producción, aprendí algo que cambió mi enfoque en cada proyecto: <strong>la magia es real, pero la autonomía solo comienza a funcionar cuando el juicio está integrado en el loop, no agregado después.</strong></p>
<p>Lo que subestimé fue todo lo que vive fuera del modelo — los sistemas de evaluación, los límites de decisión, la lógica de escalación, y la capacidad de saber cuándo la respuesta es simplemente "no lo sé."</p>

<h2>El Problema Central</h2>
<p>La mayoría de los sistemas de IA fallarán no porque los modelos sean débiles, sino porque falta el juicio.</p>
<p>Nos hemos vuelto excelentes midiendo precisión. Pero la precisión es la métrica equivocada para sistemas autónomos. La pregunta no es "¿Es correcta esta respuesta?" — es "¿Debería tomarse esta decisión?"</p>
<p>Considera un agente de soporte al cliente que resuelve el 95% de los tickets correctamente. Suena genial, ¿verdad? Pero ¿qué pasa con el 5% que falla? Si esos errores incluyen reembolsar $10,000 al cliente equivocado o enviar datos confidenciales al email incorrecto, el 95% de éxito se vuelve irrelevante.</p>

<h2>Resiliencia Sobre Autonomía</h2>
<p><strong>La resiliencia importa más que la autonomía.</strong></p>
<p>Esto es contraintuitivo. Queremos sistemas de IA que manejen todo de forma autónoma. Pero la realidad es que los sistemas diseñados para fallar graciosamente superan a los sistemas diseñados para nunca fallar.</p>
<p>Un sistema resiliente sabe:</p>
<ul>
  <li>Cuándo actuar con confianza</li>
  <li>Cuándo escalar a un humano</li>
  <li>Cuándo pedir más información</li>
  <li>Cuándo simplemente detenerse y decir "no estoy seguro"</li>
</ul>
<p>Esto no es una limitación — es la característica que hace posible el despliegue en producción.</p>

<h2>Los Tres Pilares del Diseño con Juicio Primero</h2>

<h3>1. Evaluar Si Decidir</h3>
<p>Nuestras evaluaciones deben cambiar de "¿Es esto correcto?" a "¿Debería tomarse esta decisión?"</p>
<p>No todo problema necesita una respuesta autónoma. Los sistemas de IA más valiosos son aquellos que reconocen el límite entre "puedo manejar esto" y "un humano debería ver esto."</p>
<p>En nuestro framework, usamos <strong>DeepEval</strong> no solo para verificar precisión, sino para medir confianza. Cada respuesta es evaluada por:</p>
<ul>
  <li><strong>Calidad de decisión:</strong> ¿Es esta la acción correcta dado el contexto?</li>
  <li><strong>Calibración de confianza:</strong> ¿Es apropiado el nivel de confianza del sistema?</li>
  <li><strong>Juicio de escalación:</strong> ¿Debería haberse consultado a un humano?</li>
</ul>

<h3>2. Registrar Contexto, No Solo Resultados</h3>
<p>Los sistemas que registran contexto de decisiones, no solo resultados, acumulan valor con el tiempo.</p>
<p>Cuando algo sale mal (y pasará), necesitas entender:</p>
<ul>
  <li>¿Qué información tenía el sistema?</li>
  <li>¿Qué alternativas se consideraron?</li>
  <li>¿Por qué se eligió este camino sobre otros?</li>
  <li>¿Cuál era el nivel de confianza en cada punto de decisión?</li>
</ul>
<p>Usamos <strong>Langfuse</strong> para rastrear no solo qué pasó, sino por qué. Cada decisión incluye la cadena de razonamiento, las alternativas consideradas y los scores de confianza. Esto crea una pista de auditoría para cumplimiento y un sistema de aprendizaje para mejora continua.</p>

<h3>3. Diseñar para Caminos de Fallo</h3>
<p>La parte más difícil de construir sistemas de IA no es hacerlos funcionar — es decidir qué hacer cuando la respuesta no está clara.</p>
<p>Cada agente que construimos incluye caminos de fallo explícitos:</p>
<ul>
  <li><strong>Baja confianza:</strong> Escalar a revisión humana</li>
  <li><strong>Contexto faltante:</strong> Solicitar información adicional</li>
  <li><strong>Caso edge detectado:</strong> Marcar para manejo manual</li>
  <li><strong>Riesgo de violación de política:</strong> Bloquear y alertar</li>
</ul>
<p><strong>Guardrails AI</strong> protege cada interacción bloqueando inyecciones de prompt, sanitizando PII y validando respuestas antes de que lleguen a los clientes. Pero más importante, define límites claros para lo que el sistema debería y no debería intentar.</p>

<h2>Cómo Nuestro Framework Implementa el Juicio</h2>

<h3>CrewAI: Orquestación con Juicio Integrado</h3>
<p>No usamos un solo agente tratando de hacer todo. <strong>CrewAI</strong> coordina equipos de agentes especializados donde cada agente tiene una responsabilidad clara y autoridad de decisión:</p>
<ul>
  <li><strong>Agente de Triaje:</strong> Decide urgencia y enrutamiento — pero también decide si el caso es demasiado complejo para automatización</li>
  <li><strong>Agente de Respuesta:</strong> Genera soluciones — pero marca cuando la confianza cae por debajo del umbral</li>
  <li><strong>Agente de Escalación:</strong> Juzga cuándo se necesita intervención humana</li>
</ul>
<p>Cada decisión se registra y puntúa. El sistema construye conocimiento institucional con el tiempo.</p>

<h3>DeepEval: Verificación de Juicio</h3>
<p>DeepEval no solo verifica precisión — mide confianza. Nuestras métricas personalizadas de LLM-as-Judge evalúan:</p>
<ul>
  <li>¿Fue apropiada la respuesta para este contexto específico de cliente?</li>
  <li>¿Identificó correctamente el sistema cuándo estaba incierto?</li>
  <li>¿Habría tomado un humano la misma decisión?</li>
</ul>
<p>Cada respuesta que falla la verificación de juicio se marca para revisión — no solo para corrección, sino para aprendizaje.</p>

<h3>Langfuse: Transparencia de Decisiones</h3>
<p>Observabilidad completa significa rastrear dónde las decisiones fallan, no solo dónde los modelos funcionan bien.</p>
<p>Registramos:</p>
<ul>
  <li>Tiempos de ejecución y costos en cada punto de decisión</li>
  <li>Scores de confianza a lo largo del pipeline</li>
  <li>Disparadores de escalación y sus resultados</li>
  <li>Patrones de override humano (momentos de enseñanza para el sistema)</li>
</ul>

<h3>Guardrails AI: Límites de Seguridad</h3>
<p>Cada interacción pasa por guardrails de seguridad que definen lo que el sistema nunca debería hacer — incluso si el modelo piensa que es buena idea.</p>
<ul>
  <li>Bloquear intentos de inyección de prompt</li>
  <li>Sanitizar datos sensibles antes de procesar</li>
  <li>Validar apropiación de respuesta antes de enviar</li>
  <li>Aplicar reglas de negocio independientemente del output del modelo</li>
</ul>

<h2>El Consejo que Desearía Haber Tenido Antes</h2>
<p>Si estás construyendo con IA, esto es lo que desearía que alguien me hubiera dicho desde el principio:</p>
<blockquote>
  <p><strong>Define el juicio temprano. Mídelo. Diseña para él.</strong></p>
</blockquote>
<p>No agregues evaluación después de construir tu sistema. No añadas lógica de escalación como algo secundario. No asumas que el modelo "lo resolverá."</p>
<p>Comienza con estas preguntas:</p>
<ul>
  <li>¿Qué decisiones nunca debería tomar este sistema solo?</li>
  <li>¿Cómo mediremos calidad de decisión, no solo precisión?</li>
  <li>¿Qué pasa cuando la confianza es baja?</li>
  <li>¿Cómo creamos loops de aprendizaje de correcciones humanas?</li>
</ul>

<h2>El Camino Hacia Adelante</h2>
<p>El futuro de los agentes de IA no se trata de construir sistemas que nunca fallen. Se trata de construir sistemas que fallen graciosamente, aprendan continuamente y conozcan sus límites.</p>
<p><strong>La resiliencia importa más que la autonomía.</strong></p>
<p>Los sistemas de IA más valiosos no son los que manejan el 100% de los casos de forma autónoma. Son los que manejan el 80% impecablemente y escalan el otro 20% inteligentemente.</p>
<p>Eso es diseño con juicio primero. Eso es lo que construimos.</p>

<h2>Conclusiones Clave</h2>
<blockquote>
  <p>La mayoría de los sistemas de IA fallan no porque los modelos sean débiles, sino porque falta el juicio. Las evaluaciones deben cambiar de "¿Es esto correcto?" a "¿Debería tomarse esta decisión?" Los sistemas que registran contexto de decisiones acumulan valor con el tiempo. La resiliencia — saber cuándo detenerse — importa más que la autonomía.</p>
</blockquote>
      `
    }
  },
  // --- Hero 2 ---
  {
    slug: 'building-production-ready-ai-agents',
    date: 'Dec 22, 2025',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop',
    author: 'Bernardo',
    en: {
      title: 'Building Production-Ready AI Agents: A Strategic Framework',
      excerpt: 'Move beyond prototypes. Learn the architecture, constraints, and decision frameworks needed to deploy autonomous agents that drive real business value securely and reliably.',
      readTime: '12 min read',
      tags: ['Architecture', 'Production'],
      category: 'Engineering',
      content: `
<h2>Executive Summary</h2>
<p>This article describes an engineering framework for building AI agents designed from the start to operate in production. The approach prioritizes reliability, control, observability, and governance, integrating specialized tools at each stage of the agent lifecycle. The goal is to move from functional prototypes to sustainable operating systems in enterprise environments.</p>

<h2>The Problem</h2>
<p>Most AI agent implementations fail when faced with real data, real users, and real business requirements.</p>
<p>Common problems include:</p>
<ul>
  <li>Agents that work in demos but don't scale in production</li>
  <li>Lack of control over decisions, costs, and latency</li>
  <li>Absence of clear quality metrics and traceability</li>
  <li>Compliance, security, and governance risks</li>
</ul>

<h2>Why Traditional Approaches Fail</h2>
<ul>
  <li>Exclusive reliance on generative models without deterministic components</li>
  <li>Lack of separation between classification, reasoning, and execution</li>
  <li>Absence of automatic evaluations before responding to the user</li>
  <li>Weak or nonexistent orchestration between multiple agents</li>
  <li>Lack of complete traces for auditing, debugging, and optimization</li>
</ul>

<h2>What "Production-Ready" Means</h2>
<p>A production-ready agent is not a chatbot, but a distributed system with clearly defined responsibilities.</p>
<p><strong>Key requirements:</strong></p>
<ul>
  <li>Classification and decision-making based on trained models</li>
  <li>Explicit orchestration between specialized agents</li>
  <li>Automatic quality and security evaluation</li>
  <li>Complete observability of each interaction</li>
  <li>Formal governance and compliance layer</li>
</ul>

<h2>Reference Architecture</h2>
<p>The framework is built as a chain of decoupled components, each optimized for a specific function:</p>
<ul>
  <li><strong>Snorkel AI</strong> for programmatic labeling and robust classifier training</li>
  <li><strong>Weights & Biases</strong> for experiment tracking and model versioning</li>
  <li><strong>Ray Serve</strong> as serving infrastructure for classifiers and LLM endpoints</li>
  <li><strong>CrewAI</strong> for coordinating specialized triage, response, and escalation agents</li>
  <li><strong>DeepEval</strong> for hallucination, relevance, and safety validations</li>
  <li><strong>Langfuse</strong> for detailed logging of latency, costs, and conversational flows</li>
  <li><strong>Credo AI</strong> as a policy, controls, and compliance reporting layer</li>
</ul>

<h2>Build vs Buy vs Partner</h2>
<ul>
  <li><strong>Build:</strong> When the internal team has maturity in MLOps, agents, and governance</li>
  <li><strong>Buy:</strong> When the use case is generic and non-critical</li>
  <li><strong>Partner:</strong> When you need to accelerate time-to-production without compromising architecture, security, or compliance</li>
</ul>

<h2>Key Takeaways</h2>
<blockquote>
  <p>Production AI agents are complete systems, not simple prompts. Classification and orchestration are as important as the language model. Without evaluation or observability, there is no reliability. Governance is not optional in enterprise environments.</p>
</blockquote>
      `
    },
    es: {
      title: 'Construyendo Agentes de IA Listos para Producción: Un Marco Estratégico',
      excerpt: 'Supera los prototipos. Aprende la arquitectura, restricciones y marcos de decisión necesarios para desplegar agentes autónomos que generen valor real de negocio de forma segura y confiable.',
      readTime: '12 min de lectura',
      tags: ['Arquitectura', 'Producción'],
      category: 'Ingeniería',
      content: `
<h2>Resumen Ejecutivo</h2>
<p>Este artículo describe un marco de ingeniería para construir agentes de IA diseñados desde el inicio para operar en producción. El enfoque prioriza confiabilidad, control, observabilidad y gobernanza, integrando herramientas especializadas en cada etapa del ciclo de vida del agente. El objetivo es pasar de prototipos funcionales a sistemas operativos sostenibles en entornos empresariales.</p>

<h2>El Problema</h2>
<p>La mayoría de las implementaciones de agentes de IA fallan cuando se enfrentan a datos reales, usuarios reales y requisitos empresariales reales.</p>
<p>Los problemas más comunes incluyen:</p>
<ul>
  <li>Agentes que funcionan en demostraciones pero no escalan en producción</li>
  <li>Falta de control sobre decisiones, costos y latencia</li>
  <li>Ausencia de métricas claras de calidad y trazabilidad</li>
  <li>Riesgos de cumplimiento, seguridad y gobernanza</li>
</ul>

<h2>Por Qué los Enfoques Tradicionales Fallan</h2>
<ul>
  <li>Dependencia exclusiva de modelos generativos sin componentes deterministas</li>
  <li>Falta de separación entre clasificación, razonamiento y ejecución</li>
  <li>Ausencia de evaluaciones automáticas antes de responder al usuario</li>
  <li>Orquestación débil o inexistente entre múltiples agentes</li>
  <li>Falta de trazas completas para auditoría, depuración y optimización</li>
</ul>

<h2>Qué Significa "Listo para Producción"</h2>
<p>Un agente listo para producción no es un chatbot, sino un sistema distribuido con responsabilidades claramente definidas.</p>
<p><strong>Requisitos clave:</strong></p>
<ul>
  <li>Clasificación y toma de decisiones basadas en modelos entrenados</li>
  <li>Orquestación explícita entre agentes especializados</li>
  <li>Evaluación automática de calidad y seguridad</li>
  <li>Observabilidad completa de cada interacción</li>
  <li>Capa formal de gobernanza y cumplimiento</li>
</ul>

<h2>Arquitectura de Referencia del Marco</h2>
<p>El marco se construye como una cadena de componentes desacoplados, cada uno optimizado para una función específica:</p>
<ul>
  <li><strong>Snorkel AI</strong> para generar datos etiquetados de forma programática y entrenar clasificadores robustos</li>
  <li><strong>Weights & Biases</strong> para seguimiento de experimentos, registro de modelos y control de versiones</li>
  <li><strong>Ray Serve</strong> como infraestructura de serving para clasificadores y endpoints de modelos de lenguaje</li>
  <li><strong>CrewAI</strong> para coordinar agentes especializados de triaje, respuesta y escalamiento</li>
  <li><strong>DeepEval</strong> para validaciones de alucinación, relevancia y seguridad antes de emitir respuestas</li>
  <li><strong>Langfuse</strong> para registro detallado de latencia, costos y flujos conversacionales</li>
  <li><strong>Credo AI</strong> como capa de políticas, controles y reportes de cumplimiento</li>
</ul>

<h2>Construir vs Comprar vs Asociarse</h2>
<ul>
  <li><strong>Construir:</strong> Cuando el equipo interno tiene madurez en MLOps, agentes y gobernanza</li>
  <li><strong>Comprar:</strong> Cuando el caso de uso es genérico y no crítico</li>
  <li><strong>Asociarse:</strong> Cuando se necesita acelerar la llegada a producción sin comprometer arquitectura, seguridad o cumplimiento</li>
</ul>

<h2>Conclusiones Clave</h2>
<blockquote>
  <p>Los agentes de IA en producción son sistemas completos, no simples prompts. La clasificación y la orquestación son tan importantes como el modelo de lenguaje. Sin evaluación ni observabilidad, no hay confiabilidad. La gobernanza no es opcional en entornos empresariales.</p>
</blockquote>
      `
    }
  },
  // --- Grid 1 ---
  {
    slug: 'future-of-ai-agents',
    date: 'Dec 12, 2025',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop',
    author: 'Bernardo',
    en: {
      title: 'The Future of AI Agents: Beyond Chatbots',
      excerpt: 'Why autonomous agents are the next evolution in generative AI, moving from conversation to action and complex problem solving.',
      readTime: '10 min read',
      tags: ['Strategy', 'Future'],
      category: 'Vision',
      content: `
<h2>Executive Summary</h2>
<p>AI agents are rapidly evolving beyond basic conversational interfaces. The real value is not in "talking" to systems, but in designing agents capable of making decisions, executing actions, and operating within real business processes. This article explores where AI agents are headed and what capabilities will be necessary for them to function reliably in production.</p>

<h2>The Problem</h2>
<p>Over the last few years, the AI conversation has focused almost exclusively on chatbots. However, this approach limits the real potential of agents.</p>
<p>Main limitations of the current paradigm:</p>
<ul>
  <li>Agents reduced to text interfaces with no real operational impact</li>
  <li>Lack of integration with enterprise processes, data, and systems</li>
  <li>Absence of control, evaluation, and governance</li>
  <li>Excessive reliance on non-deterministic generative responses</li>
</ul>

<h2>Why Chatbots Are Not the Future</h2>
<p>Chatbots were an entry point, not the final destination.</p>
<p>Their structural limitations are clear:</p>
<ul>
  <li>They don't make structured decisions</li>
  <li>They don't reliably execute complex actions</li>
  <li>They don't operate under formal quality metrics</li>
  <li>They don't offer complete traceability or auditing</li>
  <li>They don't meet enterprise governance requirements</li>
</ul>
<p>The future requires agents with clear responsibilities, not just conversational interfaces.</p>

<h2>What Will Define Future Agents</h2>
<p>AI agents of the future will be operating systems, not conversation products.</p>
<p><strong>Key capabilities:</strong></p>
<ul>
  <li>Decision-making based on classification and rules, not just generation</li>
  <li>Orchestration between multiple specialized agents</li>
  <li>Automatic evaluation before any action or response</li>
  <li>Complete observability of behavior, costs, and latency</li>
  <li>Governance integrated from design</li>
</ul>

<h2>Architecture Enabling the Future of Agents</h2>
<p>The advancement of AI agents depends on modular and observable architectures, not increasingly complex prompts.</p>
<p>A modern framework includes:</p>
<ul>
  <li><strong>Snorkel AI</strong> for creating scalable training signals that enable more reliable decisions from the start</li>
  <li><strong>Weights & Biases</strong> as a foundation for comparing, auditing, and evolving models systematically</li>
  <li><strong>Ray Serve</strong> for exposing models and agents with latency control and scalability</li>
  <li><strong>CrewAI</strong> for coordinating agents with defined roles and explicit responsibility flows</li>
  <li><strong>DeepEval</strong> as a control mechanism before executing actions or issuing responses</li>
  <li><strong>Langfuse</strong> to understand how, why, and at what cost agents act</li>
  <li><strong>Credo AI</strong> for applying policies, limits, and auditing in autonomous systems</li>
</ul>

<h2>New Use Cases Beyond Chat</h2>
<p>This approach enables agents that operate within real systems:</p>
<ul>
  <li>Internal operations automation</li>
  <li>Intelligent triage and workflow prioritization</li>
  <li>Coordination between systems and human teams</li>
  <li>Assisted decisions with complete traceability</li>
  <li>Automatic escalation under clear rules</li>
</ul>
<p>In these scenarios, conversation is secondary; execution is central.</p>

<h2>Key Takeaways</h2>
<blockquote>
  <p>Chatbots are just the starting point. The future belongs to agents that execute, not just converse. Without evaluation, observability, and governance, there is no real autonomy. Architecture defines the limit of what an agent can do.</p>
</blockquote>
      `
    },
    es: {
      title: 'El Futuro de los Agentes de IA: Más Allá de los Chatbots',
      excerpt: 'Por qué los agentes autónomos son la próxima evolución en IA generativa, pasando de la conversación a la acción y resolución de problemas complejos.',
      readTime: '10 min de lectura',
      tags: ['Estrategia', 'Futuro'],
      category: 'Visión',
      content: `
<h2>Resumen Ejecutivo</h2>
<p>Los agentes de IA están evolucionando rápidamente más allá de interfaces conversacionales básicas. El verdadero valor no está en "hablar" con sistemas, sino en diseñar agentes capaces de tomar decisiones, ejecutar acciones y operar dentro de procesos empresariales reales. Este artículo explora hacia dónde se dirigen los agentes de IA y qué capacidades serán necesarias para que funcionen de forma confiable en producción.</p>

<h2>El Problema</h2>
<p>Durante los últimos años, la conversación sobre IA se ha centrado casi exclusivamente en chatbots. Sin embargo, este enfoque limita el potencial real de los agentes.</p>
<p>Las principales limitaciones del paradigma actual incluyen:</p>
<ul>
  <li>Agentes reducidos a interfaces de texto sin impacto operativo real</li>
  <li>Falta de integración con procesos, datos y sistemas empresariales</li>
  <li>Ausencia de control, evaluación y gobernanza</li>
  <li>Dependencia excesiva de respuestas generativas no deterministas</li>
</ul>

<h2>Por Qué los Chatbots No Son el Futuro</h2>
<p>Los chatbots fueron un punto de entrada, no el destino final.</p>
<p>Sus limitaciones estructurales son claras:</p>
<ul>
  <li>No toman decisiones estructuradas</li>
  <li>No ejecutan acciones complejas de forma confiable</li>
  <li>No operan bajo métricas de calidad formales</li>
  <li>No ofrecen trazabilidad ni auditoría completa</li>
  <li>No cumplen requisitos de gobernanza empresarial</li>
</ul>
<p>El futuro requiere agentes con responsabilidades claras, no solo interfaces conversacionales.</p>

<h2>Qué Definirá a los Agentes del Futuro</h2>
<p>Los agentes de IA del futuro serán sistemas operativos, no productos de conversación.</p>
<p><strong>Capacidades clave:</strong></p>
<ul>
  <li>Decisión basada en clasificación y reglas, no solo generación</li>
  <li>Orquestación entre múltiples agentes especializados</li>
  <li>Evaluación automática antes de cualquier acción o respuesta</li>
  <li>Observabilidad completa de comportamiento, costos y latencia</li>
  <li>Gobernanza integrada desde el diseño</li>
</ul>

<h2>Arquitectura que Habilita el Futuro de los Agentes</h2>
<p>El avance de los agentes de IA depende de arquitecturas modulares y observables, no de prompts cada vez más complejos.</p>
<p>Un marco moderno incluye:</p>
<ul>
  <li><strong>Snorkel AI</strong> para crear señales de entrenamiento escalables que permitan decisiones más confiables desde el inicio</li>
  <li><strong>Weights & Biases</strong> como base para comparar, auditar y evolucionar modelos de forma sistemática</li>
  <li><strong>Ray Serve</strong> para exponer modelos y agentes con control de latencia y escalabilidad</li>
  <li><strong>CrewAI</strong> para coordinar agentes con roles definidos y flujos explícitos de responsabilidad</li>
  <li><strong>DeepEval</strong> como mecanismo de control antes de ejecutar acciones o emitir respuestas</li>
  <li><strong>Langfuse</strong> para entender cómo, por qué y a qué costo actúan los agentes</li>
  <li><strong>Credo AI</strong> para aplicar políticas, límites y auditoría en sistemas autónomos</li>
</ul>

<h2>Nuevos Casos de Uso Más Allá del Chat</h2>
<p>Este enfoque habilita agentes que operan dentro de sistemas reales:</p>
<ul>
  <li>Automatización de operaciones internas</li>
  <li>Triaje y priorización inteligente de flujos de trabajo</li>
  <li>Coordinación entre sistemas y equipos humanos</li>
  <li>Decisiones asistidas con trazabilidad completa</li>
  <li>Escalamiento automático bajo reglas claras</li>
</ul>
<p>En estos escenarios, la conversación es secundaria; la ejecución es lo central.</p>

<h2>Conclusiones Clave</h2>
<blockquote>
  <p>Los chatbots son solo el punto de partida. El futuro pertenece a agentes que ejecutan, no solo conversan. Sin evaluación, observabilidad y gobernanza, no hay autonomía real. La arquitectura define el límite de lo que un agente puede hacer.</p>
</blockquote>
      `
    }
  },
  {
    slug: 'optimizing-llm-orchestration',
    date: 'Dec 05, 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    author: 'Bernardo',
    en: {
      title: 'Optimizing LLM Orchestration with CrewAI',
      excerpt: 'A deep dive into how we use CrewAI to manage multi-agent workflows efficiently.',
      readTime: '12 min read',
      tags: ['Engineering', 'CrewAI'],
      category: 'Tutorial',
      content: `
<h2>Executive Summary</h2>
<p>As language model-based systems evolve, the complexity is no longer in the individual model, but in how multiple capabilities are coordinated reliably. This article explores how to optimize language model orchestration through specialized agents, using CrewAI as the central layer to build scalable, controllable, and production-ready systems.</p>

<h2>The Problem</h2>
<p>Many language model-based systems start as linear flows: one input, one prompt, one response. This approach breaks down quickly when the system must:</p>
<ul>
  <li>Make decisions before responding</li>
  <li>Execute multiple dependent steps</li>
  <li>Integrate with external systems</li>
  <li>Handle errors, exceptions, or human escalation</li>
</ul>
<p>Without explicit orchestration, these systems become fragile, difficult to maintain, and opaque.</p>

<h2>Why Orchestration is the Real Challenge</h2>
<p>The performance of a language model system depends not only on the model, but on how responsibilities are coordinated.</p>
<p>Common problems without proper orchestration include:</p>
<ul>
  <li>Business logic embedded in prompts</li>
  <li>Agents that try to do everything</li>
  <li>Lack of control over decision flow</li>
  <li>Difficulty debugging unexpected behaviors</li>
  <li>Scaling limited to simple cases</li>
</ul>
<p>Orchestration is not an implementation detail—it's an architectural decision.</p>

<h2>What It Means to Orchestrate Language Models</h2>
<p>Orchestrating language models means explicitly defining:</p>
<ul>
  <li>Which agent acts at each stage</li>
  <li>What information it receives and what it can do</li>
  <li>When to delegate, validate, or escalate</li>
  <li>What conditions allow advancing or stopping the flow</li>
</ul>
<p>This transforms a generative system into an operating system.</p>

<h2>CrewAI as an Orchestration Layer</h2>
<p>CrewAI allows structuring agent-based systems with clearly defined roles, objectives, and flows.</p>
<p>Within the framework, CrewAI is used to:</p>
<ul>
  <li>Define specialized agents with bounded responsibilities</li>
  <li>Coordinate sequences of dependent tasks</li>
  <li>Establish clear interaction rules between agents</li>
  <li>Separate reasoning, decision, and execution</li>
</ul>
<p>This approach reduces cognitive complexity and improves system reliability.</p>

<h2>CrewAI Integration within the Production Framework</h2>
<p>Orchestration doesn't happen in isolation. CrewAI integrates with other system layers:</p>
<ul>
  <li><strong>Snorkel AI</strong> and trained classifiers allow CrewAI to receive structured context, not just free text</li>
  <li><strong>Ray Serve</strong> exposes models and agents with latency control and scalability</li>
  <li><strong>DeepEval</strong> introduces automatic validations that can block, redirect, or escalate orchestrated flows</li>
  <li><strong>Langfuse</strong> records every step, decision, and cost associated with system behavior</li>
  <li><strong>Credo AI</strong> defines policies that limit and audit what agents can do</li>
</ul>

<h2>Common Orchestration Patterns with CrewAI</h2>
<p>Some patterns that emerge when using CrewAI effectively:</p>
<ul>
  <li>Triage agents that decide the flow</li>
  <li>Execution agents with limited permissions</li>
  <li>Validation agents that act as gates</li>
  <li>Escalation agents toward humans</li>
</ul>
<p>These patterns allow building predictable systems without sacrificing flexibility.</p>

<h2>Key Takeaways</h2>
<blockquote>
  <p>Orchestration defines system quality, not the model. CrewAI enables explicitly structuring multi-agent systems. Without orchestration, models don't scale reliably. Observability and evaluation are part of the flow, not extras.</p>
</blockquote>
      `
    },
    es: {
      title: 'Optimizando la Orquestación de LLMs con CrewAI',
      excerpt: 'Una inmersión profunda en cómo usamos CrewAI para gestionar flujos de trabajo multi-agente eficientemente.',
      readTime: '12 min de lectura',
      tags: ['Ingeniería', 'CrewAI'],
      category: 'Tutorial',
      content: `
<h2>Resumen Ejecutivo</h2>
<p>A medida que los sistemas basados en modelos de lenguaje evolucionan, la complejidad ya no está en el modelo individual, sino en cómo se coordinan múltiples capacidades de forma confiable. Este artículo explora cómo optimizar la orquestación de modelos de lenguaje mediante agentes especializados, utilizando CrewAI como capa central para construir sistemas escalables, controlables y listos para producción.</p>

<h2>El Problema</h2>
<p>Muchos sistemas basados en modelos de lenguaje comienzan como flujos lineales: una entrada, un prompt, una respuesta. Este enfoque se rompe rápidamente cuando el sistema debe:</p>
<ul>
  <li>Tomar decisiones antes de responder</li>
  <li>Ejecutar múltiples pasos dependientes</li>
  <li>Integrarse con sistemas externos</li>
  <li>Manejar errores, excepciones o escalamiento humano</li>
</ul>
<p>Sin una orquestación explícita, estos sistemas se vuelven frágiles, difíciles de mantener y opacos.</p>

<h2>Por Qué la Orquestación es el Verdadero Desafío</h2>
<p>El rendimiento de un sistema con modelos de lenguaje no depende solo del modelo, sino de cómo se coordinan las responsabilidades.</p>
<p>Los problemas más comunes sin orquestación adecuada incluyen:</p>
<ul>
  <li>Lógica de negocio embebida en prompts</li>
  <li>Agentes que intentan hacerlo todo</li>
  <li>Falta de control sobre el flujo de decisiones</li>
  <li>Dificultad para depurar comportamientos inesperados</li>
  <li>Escalamiento limitado a casos simples</li>
</ul>
<p>La orquestación no es un detalle de implementación, es una decisión arquitectónica.</p>

<h2>Qué Significa Orquestar Modelos de Lenguaje</h2>
<p>Orquestar modelos de lenguaje implica definir explícitamente:</p>
<ul>
  <li>Qué agente actúa en cada etapa</li>
  <li>Qué información recibe y qué puede hacer</li>
  <li>Cuándo se delega, se valida o se escala</li>
  <li>Qué condiciones permiten avanzar o detener el flujo</li>
</ul>
<p>Esto transforma un sistema generativo en un sistema operativo.</p>

<h2>CrewAI como Capa de Orquestación</h2>
<p>CrewAI permite estructurar sistemas basados en agentes con roles, objetivos y flujos claramente definidos.</p>
<p>Dentro del marco, CrewAI se utiliza para:</p>
<ul>
  <li>Definir agentes especializados con responsabilidades acotadas</li>
  <li>Coordinar secuencias de tareas dependientes</li>
  <li>Establecer reglas claras de interacción entre agentes</li>
  <li>Separar razonamiento, decisión y ejecución</li>
</ul>
<p>Este enfoque reduce la complejidad cognitiva y mejora la confiabilidad del sistema.</p>

<h2>Integración de CrewAI dentro del Marco de Producción</h2>
<p>La orquestación no ocurre de forma aislada. CrewAI se integra con otras capas del sistema:</p>
<ul>
  <li><strong>Snorkel AI</strong> y clasificadores entrenados permiten que CrewAI reciba contexto estructurado, no solo texto libre</li>
  <li><strong>Ray Serve</strong> expone los modelos y agentes con control de latencia y escalabilidad</li>
  <li><strong>DeepEval</strong> introduce validaciones automáticas que pueden bloquear, redirigir o escalar flujos orquestados</li>
  <li><strong>Langfuse</strong> registra cada paso, decisión y costo asociado al comportamiento del sistema</li>
  <li><strong>Credo AI</strong> define políticas que limitan y auditan lo que los agentes pueden hacer</li>
</ul>

<h2>Patrones Comunes de Orquestación con CrewAI</h2>
<p>Algunos patrones que emergen al usar CrewAI de forma efectiva incluyen:</p>
<ul>
  <li>Agentes de triaje que deciden el flujo</li>
  <li>Agentes de ejecución con permisos limitados</li>
  <li>Agentes de validación que actúan como compuertas</li>
  <li>Agentes de escalamiento hacia humanos</li>
</ul>
<p>Estos patrones permiten construir sistemas predecibles sin sacrificar flexibilidad.</p>

<h2>Conclusiones Clave</h2>
<blockquote>
  <p>La orquestación define la calidad del sistema, no el modelo. CrewAI permite estructurar sistemas multiagente de forma explícita. Sin orquestación, los modelos no escalan de forma confiable. La observabilidad y la evaluación son parte del flujo, no extras.</p>
</blockquote>
      `
    }
  },
  {
    slug: 'agentic-patterns-at-scale',
    date: 'Nov 28, 2025',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2670&auto=format&fit=crop',
    author: 'Team Autonomis',
    en: {
      title: 'Agentic Patterns at Scale: Dealing with Loop Errors',
      excerpt: 'Practical strategies for monitoring and preventing infinite loops in autonomous agent systems.',
      readTime: '12 min read',
      tags: ['DevOps', 'Reliability'],
      category: 'Engineering',
      content: `
<h2>Executive Summary</h2>
<p>As AI agent systems scale, one of the most critical—and least visible—risks are loop errors. These occur when agents repeat actions, reasoning, or delegations without converging to a valid result. This article analyzes why loops appear in agentic architectures, how they manifest in production, and what patterns allow detecting, containing, and resolving them systematically.</p>

<h2>The Problem</h2>
<p>In simple systems, errors are usually obvious. In scaled agentic systems, failures can be silent.</p>
<p>Loop errors typically cause:</p>
<ul>
  <li>Uncontrolled token consumption and costs</li>
  <li>Increased latency without added value</li>
  <li>Non-deterministic behaviors difficult to debug</li>
  <li>Infrastructure saturation</li>
  <li>Operational and compliance risks</li>
</ul>
<p>In production, an undetected loop is a systemic failure.</p>

<h2>What Are Loop Errors in Agentic Systems</h2>
<p>A loop error occurs when one or more agents:</p>
<ul>
  <li>Re-evaluate the same information without new data</li>
  <li>Delegate tasks to each other without progress</li>
  <li>Retry failed actions without exit conditions</li>
  <li>Generate responses that trigger the same flow repeatedly</li>
</ul>
<p>These loops are not traditional "code errors," but system design failures.</p>

<h2>Why Loops Appear at Scale</h2>
<p>At scale, loops emerge for structural reasons:</p>
<ul>
  <li>Agents with poorly defined responsibilities</li>
  <li>Lack of explicit termination criteria</li>
  <li>Implicit orchestration based on prompts</li>
  <li>Absence of intermediate automatic validations</li>
  <li>Lack of visibility into flow state</li>
</ul>
<p>The more agents and decisions, the greater the risk without control.</p>

<h2>Patterns to Prevent Loop Errors</h2>
<p>Robust agentic systems incorporate defensive patterns from design:</p>

<h3>1. Single Responsibility Patterns</h3>
<p>Each agent must have a bounded objective, explicit allowed actions, and clear success/failure conditions. This reduces redundant reasoning cycles.</p>

<h3>2. Counter and Limit Patterns</h3>
<p>Every flow must include maximum iteration limits, token or time budgets, and hard termination conditions. A system without limits will always find a loop.</p>

<h3>3. Validation as Gate Patterns</h3>
<p>Before continuing a flow, validate the agent's output and decide whether to advance, correct, or stop. <strong>DeepEval</strong> allows blocking responses that don't meet minimum quality, relevance, or safety criteria.</p>

<h3>4. Flow Observability Patterns</h3>
<p>Without traceability, loops go unnoticed. Observability must capture complete decision sequences, retry counts, and costs per iteration. <strong>Langfuse</strong> enables detecting repetitive patterns before they scale.</p>

<h3>5. Explicit Orchestration Patterns</h3>
<p>Loops often arise when orchestration is implicit. Using a dedicated layer like <strong>CrewAI</strong> allows defining finite flows, controlling delegations, and avoiding unintentional cycles between agents.</p>

<h2>Runtime Loop Handling</h2>
<p>Even with good patterns, some loops occur. In production, the system must be able to:</p>
<ul>
  <li>Detect state repetitions</li>
  <li>Automatically cut the flow</li>
  <li>Escalate to human intervention</li>
  <li>Log the event for later analysis</li>
</ul>
<p>This handling converts silent failures into controlled events.</p>

<h2>Key Takeaways</h2>
<blockquote>
  <p>Loop errors are inevitable in scaled agentic systems. The risk is not the loop, but not detecting it. Explicit orchestration reduces emergent cycles. Evaluation, observability, and governance are active defenses. Clear limits are a form of control, not a limitation.</p>
</blockquote>
      `
    },
    es: {
      title: 'Patrones Agénticos a Escala: Manejando Errores de Bucle',
      excerpt: 'Estrategias prácticas para monitorear y prevenir bucles infinitos en sistemas de agentes autónomos.',
      readTime: '12 min de lectura',
      tags: ['DevOps', 'Confiabilidad'],
      category: 'Ingeniería',
      content: `
<h2>Resumen Ejecutivo</h2>
<p>A medida que los sistemas de agentes de IA escalan, uno de los riesgos más críticos —y menos visibles— son los errores de bucle. Estos ocurren cuando los agentes repiten acciones, razonamientos o delegaciones sin converger a un resultado válido. Este artículo analiza por qué los bucles aparecen en arquitecturas agénticas, cómo se manifiestan en producción y qué patrones permiten detectarlos, contenerlos y resolverlos de forma sistemática.</p>

<h2>El Problema</h2>
<p>En sistemas simples, los errores suelen ser evidentes. En sistemas agénticos a escala, los fallos pueden ser silenciosos.</p>
<p>Los errores de bucle suelen provocar:</p>
<ul>
  <li>Consumo descontrolado de tokens y costos</li>
  <li>Incremento de latencia sin valor agregado</li>
  <li>Comportamientos no deterministas difíciles de depurar</li>
  <li>Saturación de infraestructura</li>
  <li>Riesgos operativos y de cumplimiento</li>
</ul>
<p>En producción, un bucle no detectado es un fallo sistémico.</p>

<h2>Qué Son los Errores de Bucle en Sistemas Agénticos</h2>
<p>Un error de bucle ocurre cuando uno o más agentes:</p>
<ul>
  <li>Reevalúan la misma información sin nuevos datos</li>
  <li>Se delegan tareas mutuamente sin progreso</li>
  <li>Reintentan acciones fallidas sin condiciones de salida</li>
  <li>Generan respuestas que disparan el mismo flujo repetidamente</li>
</ul>
<p>Estos bucles no son "errores de código" tradicionales, sino fallos de diseño del sistema.</p>

<h2>Por Qué los Bucles Aparecen al Escalar</h2>
<p>A escala, los bucles emergen por razones estructurales:</p>
<ul>
  <li>Agentes con responsabilidades mal definidas</li>
  <li>Falta de criterios explícitos de finalización</li>
  <li>Orquestación implícita basada en prompts</li>
  <li>Ausencia de validaciones automáticas intermedias</li>
  <li>Falta de visibilidad sobre el estado del flujo</li>
</ul>
<p>Cuantos más agentes y decisiones, mayor el riesgo si no hay control.</p>

<h2>Patrones para Prevenir Errores de Bucle</h2>
<p>Los sistemas agénticos robustos incorporan patrones defensivos desde el diseño:</p>

<h3>1. Patrones de Responsabilidad Única</h3>
<p>Cada agente debe tener un objetivo acotado, acciones permitidas explícitas y condiciones claras de éxito y fallo. Esto reduce ciclos de razonamiento redundante.</p>

<h3>2. Patrones de Contador y Límite</h3>
<p>Todo flujo debe incluir límites máximos de iteraciones, presupuestos de tokens o tiempo, y condiciones duras de terminación. Un sistema sin límites siempre encontrará un bucle.</p>

<h3>3. Patrones de Validación como Compuerta</h3>
<p>Antes de continuar un flujo, se valida la salida del agente y se decide si avanzar, corregir o detener. <strong>DeepEval</strong> permite bloquear respuestas que no cumplen criterios mínimos de calidad, relevancia o seguridad.</p>

<h3>4. Patrones de Observabilidad del Flujo</h3>
<p>Sin trazabilidad, los bucles pasan desapercibidos. La observabilidad debe capturar secuencia completa de decisiones, número de reintentos y costos por iteración. <strong>Langfuse</strong> permite detectar patrones repetitivos antes de que escalen.</p>

<h3>5. Patrones de Orquestación Explícita</h3>
<p>Los bucles suelen surgir cuando la orquestación es implícita. Usar una capa dedicada como <strong>CrewAI</strong> permite definir flujos finitos, controlar delegaciones y evitar ciclos no intencionales entre agentes.</p>

<h2>Manejo de Bucles en Tiempo de Ejecución</h2>
<p>Incluso con buenos patrones, algunos bucles ocurren. En producción, el sistema debe poder:</p>
<ul>
  <li>Detectar repeticiones de estado</li>
  <li>Cortar el flujo automáticamente</li>
  <li>Escalar a intervención humana</li>
  <li>Registrar el evento para análisis posterior</li>
</ul>
<p>Este manejo convierte fallos silenciosos en eventos controlados.</p>

<h2>Conclusiones Clave</h2>
<blockquote>
  <p>Los errores de bucle son inevitables en sistemas agénticos a escala. El riesgo no es el bucle, sino no detectarlo. La orquestación explícita reduce ciclos emergentes. Evaluación, observabilidad y gobernanza son defensas activas. Los límites claros son una forma de control, no una limitación.</p>
</blockquote>
      `
    }
  },
  {
    slug: 'human-in-the-loop-workflows',
    date: 'Nov 15, 2025',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop',
    author: 'Sarah Chen',
    en: {
      title: 'Designing Effective Human-in-the-Loop Workflows',
      excerpt: 'Balancing autonomy with control: where to insert human checkpoints in your AI pipelines.',
      readTime: '12 min read',
      tags: ['Design', 'Safety'],
      category: 'Product',
      content: `
<h2>Executive Summary</h2>
<p>Total autonomy is not the goal for AI agent systems in enterprise environments. The real challenge is designing flows where agents and humans collaborate in a structured, safe, and measurable way. This article describes how to incorporate humans in the loop as an integral part of the system—not as an emergency resource—and what patterns allow scaling this collaboration without operational friction.</p>

<h2>The Problem</h2>
<p>Many AI systems are designed under a false dichotomy: either they're fully automatic or require constant human intervention.</p>
<p>This approach generates:</p>
<ul>
  <li>Chaotic and unprioritized human escalations</li>
  <li>Late interventions, when the error has already occurred</li>
  <li>Lack of clear criteria on when to intervene</li>
  <li>Excessive dependence on manual reviews</li>
  <li>Compliance and liability risks</li>
</ul>
<p>Without explicit design, the human in the loop becomes a bottleneck.</p>

<h2>Why Full Autonomy Is Not the Goal</h2>
<p>In production, autonomy without control is a risk.</p>
<p>Agents:</p>
<ul>
  <li>Operate under uncertainty</li>
  <li>Face incomplete or ambiguous data</li>
  <li>Can fail in non-obvious ways</li>
</ul>
<p>Human in the loop allows:</p>
<ul>
  <li>Validating critical decisions</li>
  <li>Resolving edge cases</li>
  <li>Contributing contextual judgment</li>
  <li>Meeting regulatory requirements</li>
  <li>Learning and improving the system</li>
</ul>
<p>The key is not to always intervene, but to intervene when appropriate.</p>

<h2>What It Means to Design Human-in-the-Loop</h2>
<p>Designing human-in-the-loop means explicitly defining:</p>
<ul>
  <li>At what points in the flow a human can intervene</li>
  <li>What information they receive to make a decision</li>
  <li>What actions they can approve, correct, or reject</li>
  <li>How that decision is reincorporated into the system</li>
</ul>
<p>This transforms human intervention into a system function, not an exception.</p>

<h2>Architecture for Hybrid Flows</h2>
<p>An effective human-in-the-loop flow relies on multiple coordinated layers:</p>
<ul>
  <li><strong>Snorkel AI</strong> trains classifiers that determine when a case requires human review before continuing</li>
  <li><strong>CrewAI</strong> defines explicit pause, validation, and human escalation points within the flow</li>
  <li><strong>DeepEval</strong> acts as an automatic gate, reducing human load by filtering low-quality responses</li>
  <li><strong>Langfuse</strong> provides complete traces so humans understand what happened before intervening</li>
  <li><strong>Credo AI</strong> defines policies that require human intervention in sensitive or regulated decisions</li>
</ul>

<h2>Common Human-in-the-Loop Patterns</h2>
<h3>1. Conditional Validation</h3>
<p>Humans intervene only when system confidence is low, automatic evaluation fails, or error impact is high.</p>

<h3>2. Approval Before Action</h3>
<p>The agent proposes an action but doesn't execute without human approval. Records the decision and justification. Common in critical flows.</p>

<h3>3. Guided Correction</h3>
<p>Humans correct agent output and provide structured feedback. This information can be reused to improve models and rules.</p>

<h3>4. Escalation by Exception</h3>
<p>The flow continues automatically until an anomaly is detected or a risk/cost limit is reached. Humans act as containment mechanisms.</p>

<h2>Key Takeaways</h2>
<blockquote>
  <p>Human-in-the-loop is a requirement, not a weakness. Autonomy without control doesn't scale in production. Intervention points must be explicitly designed. Evaluation and observability reduce human load. Governance defines when humans are mandatory.</p>
</blockquote>
      `
    },
    es: {
      title: 'Diseñando Flujos de Trabajo Efectivos con Humano en el Bucle',
      excerpt: 'Equilibrando autonomía con control: dónde insertar puntos de control humanos en tus pipelines de IA.',
      readTime: '12 min de lectura',
      tags: ['Diseño', 'Seguridad'],
      category: 'Producto',
      content: `
<h2>Resumen Ejecutivo</h2>
<p>La autonomía total no es el objetivo de los sistemas de agentes de IA en entornos empresariales. El verdadero reto es diseñar flujos donde los agentes y los humanos colaboren de forma estructurada, segura y medible. Este artículo describe cómo incorporar al humano en el bucle como parte integral del sistema, no como un recurso de emergencia, y qué patrones permiten escalar esta colaboración sin fricción operativa.</p>

<h2>El Problema</h2>
<p>Muchos sistemas de IA se diseñan bajo una falsa dicotomía: o son totalmente automáticos o requieren intervención humana constante.</p>
<p>Este enfoque genera:</p>
<ul>
  <li>Escalamientos humanos caóticos y no priorizados</li>
  <li>Intervenciones tardías, cuando el error ya ocurrió</li>
  <li>Falta de criterios claros sobre cuándo intervenir</li>
  <li>Dependencia excesiva de revisiones manuales</li>
  <li>Riesgos de cumplimiento y responsabilidad</li>
</ul>
<p>Sin un diseño explícito, el humano en el bucle se convierte en un cuello de botella.</p>

<h2>Por Qué la Autonomía Total No es el Objetivo</h2>
<p>En producción, la autonomía sin control es un riesgo.</p>
<p>Los agentes:</p>
<ul>
  <li>Operan bajo incertidumbre</li>
  <li>Enfrentan datos incompletos o ambiguos</li>
  <li>Pueden fallar de formas no evidentes</li>
</ul>
<p>El humano en el bucle permite:</p>
<ul>
  <li>Validar decisiones críticas</li>
  <li>Resolver casos límite</li>
  <li>Aportar juicio contextual</li>
  <li>Cumplir requisitos regulatorios</li>
  <li>Aprender y mejorar el sistema</li>
</ul>
<p>La clave no es intervenir siempre, sino intervenir cuando corresponde.</p>

<h2>Qué Significa Diseñar Humano en el Bucle</h2>
<p>Diseñar humano en el bucle implica definir explícitamente:</p>
<ul>
  <li>En qué puntos del flujo puede intervenir un humano</li>
  <li>Qué información recibe para tomar una decisión</li>
  <li>Qué acciones puede aprobar, corregir o rechazar</li>
  <li>Cómo se reincorpora esa decisión al sistema</li>
</ul>
<p>Esto transforma la intervención humana en una función del sistema, no en una excepción.</p>

<h2>Arquitectura para Flujos Híbridos</h2>
<p>Un flujo efectivo con humano en el bucle se apoya en múltiples capas coordinadas:</p>
<ul>
  <li><strong>Snorkel AI</strong> permite entrenar clasificadores que determinan cuándo un caso requiere revisión humana antes de continuar</li>
  <li><strong>CrewAI</strong> define puntos explícitos de pausa, validación y escalamiento humano dentro del flujo</li>
  <li><strong>DeepEval</strong> actúa como compuerta automática, reduciendo la carga humana al filtrar respuestas de baja calidad</li>
  <li><strong>Langfuse</strong> proporciona trazas completas para que el humano entienda qué ocurrió antes de intervenir</li>
  <li><strong>Credo AI</strong> define políticas que obligan a intervención humana en decisiones sensibles o reguladas</li>
</ul>

<h2>Patrones Comunes de Humano en el Bucle</h2>
<h3>1. Validación Condicional</h3>
<p>El humano interviene solo cuando la confianza del sistema es baja, la evaluación automática falla o el impacto del error es alto.</p>

<h3>2. Aprobación Antes de Acción</h3>
<p>El agente propone una acción, pero no la ejecuta sin aprobación humana. Registra la decisión y su justificación. Este patrón es común en flujos críticos.</p>

<h3>3. Corrección Guiada</h3>
<p>El humano corrige la salida del agente y proporciona feedback estructurado. Esta información puede reutilizarse para mejorar modelos y reglas.</p>

<h3>4. Escalamiento por Excepción</h3>
<p>El flujo continúa de forma automática hasta que se detecta una anomalía o se alcanza un límite de riesgo o costo. El humano actúa como mecanismo de contención.</p>

<h2>Conclusiones Clave</h2>
<blockquote>
  <p>El humano en el bucle es un requisito, no una debilidad. La autonomía sin control no escala en producción. Los puntos de intervención deben diseñarse explícitamente. Evaluación y observabilidad reducen la carga humana. La gobernanza define cuándo el humano es obligatorio.</p>
</blockquote>
      `
    }
  },
  // --- Grid 2 ---
  {
    slug: 'cost-optimization-strategies',
    date: 'Oct 20, 2025',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop',
    author: 'DevOps Team',
    en: {
      title: 'LLM Cost Optimization Strategies for High-Volume Agents',
      excerpt: 'Token caching, model routing, and other techniques to keep your bill under control.',
      readTime: '12 min read',
      tags: ['Cost', 'Infrastructure'],
      category: 'Engineering',
      content: `
<h2>Executive Summary</h2>
<p>In high-volume AI agents, optimizing costs is not a finance or prompt task: it's a system observability problem. Without detailed visibility of tokens, latency, and execution paths, any optimization is speculation. This article explores how to use Langfuse as the central layer to measure, understand, and reduce LLM costs in production agentic systems.</p>

<h2>The Real Cost Problem in Agents</h2>
<p>Most teams detect the problem when the bill is already high, but don't know why.</p>
<p>Common problems:</p>
<ul>
  <li>Not knowing which agent consumes the most tokens</li>
  <li>Not distinguishing costs by flow type</li>
  <li>Not detecting silent loops or retries</li>
  <li>Not knowing which prompts grow over time</li>
  <li>Not being able to associate cost with business value</li>
</ul>
<p>Without observability, optimizing costs is impossible.</p>

<h2>Langfuse as Financial Observability Layer</h2>
<p>Langfuse is not just prompt logging: it's an operational accounting tool for LLMs.</p>
<p>It enables:</p>
<ul>
  <li>Measuring costs by request, agent, and flow</li>
  <li>Breaking down input/output tokens</li>
  <li>Correlating latency, errors, and cost</li>
  <li>Auditing system decisions</li>
  <li>Detecting anomalous spending patterns</li>
</ul>
<p>Langfuse turns spending into actionable data.</p>

<h2>Cost-Aware Architecture</h2>
<p>In well-designed systems, Langfuse isn't added at the end: it's designed from the start.</p>
<p>Each step is traced in Langfuse, recording tokens, model used, responsible agent, and execution time. This enables answering: How much does this flow cost? Where does spending spike? Which agents generate lower ROI?</p>

<h2>Identifying Main Cost Drivers</h2>
<p>With Langfuse, these findings typically emerge:</p>
<h3>1. Over-Orchestrated Agents</h3>
<p>Too many agents for simple tasks. Accumulated costs from unnecessary steps.</p>

<h3>2. Inflated Prompts</h3>
<p>Contexts that grow over time. Complete histories passed without filtering.</p>

<h3>3. Invisible Loops</h3>
<p>Silent retries. Partial failures that re-execute flows.</p>

<h3>4. Wrong Models for the Task</h3>
<p>Large models used for simple classification. Lack of routing by complexity.</p>

<h2>Integration with the Agent Framework</h2>
<p>Langfuse integrates naturally with the rest of the stack:</p>
<ul>
  <li><strong>CrewAI</strong> allows instrumenting each agent and measuring its real cost</li>
  <li><strong>Ray Serve</strong> exposes endpoints with clear throughput vs cost metrics</li>
  <li><strong>DeepEval</strong> helps compare cost vs quality in generative outputs</li>
  <li><strong>Weights & Biases</strong> complements analysis when comparing models and configurations</li>
</ul>
<p>Langfuse acts as the junction point between engineering, quality, and finance.</p>

<h2>Key Metrics That Actually Matter</h2>
<ul>
  <li>Average cost per request</li>
  <li>Cost by flow type</li>
  <li>Tokens per agent</li>
  <li>Cost of errors and retries</li>
  <li>Cost vs latency ratio</li>
  <li>Cost per successful result</li>
</ul>
<p>These metrics enable budgeting, not just reacting.</p>

<h2>Key Takeaways</h2>
<blockquote>
  <p>You can't optimize what you don't measure. LLM cost is an architecture problem. Langfuse makes the invisible visible. Cost optimization is a continuous process. Observability turns spending into control.</p>
</blockquote>
      `
    },
    es: {
      title: 'Estrategias de Optimización de Costos de LLM para Agentes de Alto Volumen',
      excerpt: 'Caché de tokens, enrutamiento de modelos y otras técnicas para mantener tu factura bajo control.',
      readTime: '12 min de lectura',
      tags: ['Costos', 'Infraestructura'],
      category: 'Ingeniería',
      content: `
<h2>Resumen Ejecutivo</h2>
<p>En agentes de IA de alto volumen, optimizar costos no es una tarea de finanzas ni de prompts: es un problema de observabilidad del sistema. Sin visibilidad detallada de tokens, latencia y rutas de ejecución, cualquier optimización es especulación. Este artículo explora cómo usar Langfuse como la capa central para medir, entender y reducir costos de LLM en sistemas agénticos en producción.</p>

<h2>El Verdadero Problema de Costos en Agentes</h2>
<p>La mayoría de los equipos detectan el problema cuando la factura ya es alta, pero no saben por qué.</p>
<p>Problemas comunes:</p>
<ul>
  <li>No saber qué agente consume más tokens</li>
  <li>No distinguir costos por tipo de flujo</li>
  <li>No detectar loops o retries silenciosos</li>
  <li>No saber qué prompts crecen con el tiempo</li>
  <li>No poder asociar costo con valor de negocio</li>
</ul>
<p>Sin observabilidad, optimizar costos es imposible.</p>

<h2>Langfuse como Capa de Observabilidad Financiera</h2>
<p>Langfuse no es solo logging de prompts: es una herramienta de contabilidad operativa para LLMs.</p>
<p>Permite:</p>
<ul>
  <li>Medir costos por request, agente y flujo</li>
  <li>Desglosar tokens de input/output</li>
  <li>Correlacionar latencia, errores y costo</li>
  <li>Auditar decisiones del sistema</li>
  <li>Detectar patrones de gasto anómalos</li>
</ul>
<p>Langfuse convierte el gasto en datos accionables.</p>

<h2>Arquitectura Orientada a Costos (Cost-Aware Architecture)</h2>
<p>En sistemas bien diseñados, Langfuse no se agrega al final: se diseña desde el inicio.</p>
<p>Cada paso se traza en Langfuse, registrando tokens, modelo usado, agente responsable y tiempo de ejecución. Esto permite responder: ¿Cuánto cuesta este flujo? ¿Dónde se dispara el gasto? ¿Qué agentes generan menor ROI?</p>

<h2>Identificando los Principales Drivers de Costo</h2>
<p>Con Langfuse, típicamente aparecen estos hallazgos:</p>
<h3>1. Agentes Sobre-Orquestados</h3>
<p>Demasiados agentes para tareas simples. Costos acumulados por pasos innecesarios.</p>

<h3>2. Prompts Inflados</h3>
<p>Contextos que crecen con el tiempo. Historiales completos pasados sin filtro.</p>

<h3>3. Loops Invisibles</h3>
<p>Reintentos silenciosos. Fallos parciales que re-ejecutan flujos.</p>

<h3>4. Modelos Incorrectos para la Tarea</h3>
<p>Modelos grandes usados para clasificación simple. Falta de ruteo por complejidad.</p>

<h2>Integración con el Framework de Agentes</h2>
<p>Langfuse se integra naturalmente con el resto del stack:</p>
<ul>
  <li><strong>CrewAI</strong> permite instrumentar cada agente y medir su costo real</li>
  <li><strong>Ray Serve</strong> expone endpoints con métricas claras de throughput vs costo</li>
  <li><strong>DeepEval</strong> ayuda a comparar costo vs calidad en outputs generativos</li>
  <li><strong>Weights & Biases</strong> complementa el análisis cuando se comparan modelos y configuraciones</li>
</ul>
<p>Langfuse actúa como el punto de unión entre ingeniería, calidad y finanzas.</p>

<h2>Métricas Clave que Realmente Importan</h2>
<ul>
  <li>Costo promedio por solicitud</li>
  <li>Costo por tipo de flujo</li>
  <li>Tokens por agente</li>
  <li>Costo de errores y retries</li>
  <li>Relación costo vs latencia</li>
  <li>Costo por resultado exitoso</li>
</ul>
<p>Estas métricas permiten presupuestar, no solo reaccionar.</p>

<h2>Conclusiones Clave</h2>
<blockquote>
  <p>No se puede optimizar lo que no se mide. El costo de LLM es un problema de arquitectura. Langfuse hace visible lo invisible. Optimizar costos es un proceso continuo. Observabilidad convierte gasto en control.</p>
</blockquote>
      `
    }
  },
  {
    slug: 'security-first-agent-design',
    date: 'Oct 10, 2025',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop',
    author: 'Security Team',
    en: {
      title: 'Security-First Agent Design: Prevention against Injection',
      excerpt: 'Why prompt injection is the SQL injection of 2025, and how to define your defense in depth.',
      readTime: '12 min read',
      tags: ['Security', 'Cybersecurity'],
      category: 'Security',
      content: `
<h2>Executive Summary</h2>
<p>In production agentic systems, security is not an "extra": it's a structural property of design. As agents consume dynamic instructions, external tools, and untrusted inputs, the risk of prompt injection, behavior deviation, and policy violations increases exponentially. This article describes how to design agents with a security-first approach, using Credo AI as a governance, control, and active prevention layer.</p>

<h2>The Real Risk: Agents That Obey Too Much</h2>
<p>Modern agents are designed to be flexible, adaptive, and autonomous. That same flexibility introduces attack vectors:</p>
<ul>
  <li>Hidden instructions in user inputs</li>
  <li>Malicious payloads in external tools</li>
  <li>Prompts that try to override system rules</li>
  <li>Agents executing actions outside their original intent</li>
  <li>Privilege escalation between agents</li>
</ul>
<p>The problem isn't the LLM, but the lack of explicit and verifiable limits.</p>

<h2>What is Injection in Agentic Systems?</h2>
<p>In multi-agent architectures, injection doesn't only occur in the initial prompt.</p>
<p>It appears in:</p>
<ul>
  <li>User inputs</li>
  <li>Tool results</li>
  <li>Long-term memory</li>
  <li>Messages between agents</li>
  <li>Data labeled as "trusted context"</li>
</ul>
<p>Without controls, the agent cannot distinguish between valid instruction and manipulation.</p>

<h2>Credo AI as Security Governance Layer</h2>
<p>Credo AI introduces a key principle: Agents must not only reason well, but obey the right rules.</p>
<p>Credo AI enables:</p>
<ul>
  <li>Defining explicit behavior policies</li>
  <li>Validating inputs and outputs against those policies</li>
  <li>Blocking executions that violate rules</li>
  <li>Auditing decisions for compliance and security</li>
</ul>
<p>It's not passive detection: it's active enforcement.</p>

<h2>Security by Design (Not by Filters)</h2>
<p>A common error is trying to "clean" prompts after the fact.</p>
<p>A security-first design:</p>
<ul>
  <li>Defines what each agent can and cannot do</li>
  <li>Separates system instructions from external inputs</li>
  <li>Validates each action before executing it</li>
  <li>Records decisions for auditing</li>
</ul>
<p>Credo AI allows formalizing these rules as executable policies.</p>

<h2>Runtime Injection Prevention</h2>
<p>Credo AI acts at multiple critical points:</p>
<h3>1. Input Validation</h3>
<p>Detects attempts to override instructions. Blocks known manipulation patterns. Applies rules based on agent role.</p>

<h3>2. Action Control</h3>
<p>Prevents an agent from executing unauthorized tools. Prevents privilege escalation. Limits side effects.</p>

<h3>3. Output Verification</h3>
<p>Reviews responses before sending them. Prevents policy violations, data leaks, or unsafe behavior.</p>

<h2>Integration with the Production Framework</h2>
<p>Credo AI doesn't replace the rest of the stack: it protects it.</p>
<ul>
  <li><strong>CrewAI</strong> executes agents under explicit, not implicit policies</li>
  <li><strong>DeepEval</strong> measures quality; Credo ensures compliance</li>
  <li><strong>Langfuse</strong> records what happened; Credo validates if it should have happened</li>
  <li><strong>Ray Serve</strong> executes models; Credo governs behavior</li>
</ul>

<h2>Key Takeaways</h2>
<blockquote>
  <p>Injection is a structural problem, not textual. Agents must operate under explicit policies. Security must happen at runtime. Governance is part of design, not deployment. Credo AI turns rules into guarantees.</p>
</blockquote>
      `
    },
    es: {
      title: 'Diseño de Agentes con Seguridad Primero: Prevención contra Inyección',
      excerpt: 'Por qué la inyección de prompts es la inyección SQL de 2025, y cómo definir tu defensa en profundidad.',
      readTime: '12 min de lectura',
      tags: ['Seguridad', 'Ciberseguridad'],
      category: 'Seguridad',
      content: `
<h2>Resumen Ejecutivo</h2>
<p>En sistemas agénticos en producción, la seguridad no es un "extra": es una propiedad estructural del diseño. A medida que los agentes consumen instrucciones dinámicas, herramientas externas y entradas no confiables, el riesgo de inyección de prompts, desviación de comportamiento y violaciones de política aumenta exponencialmente. Este artículo describe cómo diseñar agentes con un enfoque security-first, usando Credo AI como capa de gobernanza, control y prevención activa.</p>

<h2>El Riesgo Real: Agentes que Obedecen Demasiado</h2>
<p>Los agentes modernos están diseñados para ser flexibles, adaptativos y autónomos. Esa misma flexibilidad introduce vectores de ataque:</p>
<ul>
  <li>Instrucciones ocultas en entradas de usuario</li>
  <li>Payloads maliciosos en herramientas externas</li>
  <li>Prompts que intentan sobrescribir reglas del sistema</li>
  <li>Agentes que ejecutan acciones fuera de su intención original</li>
  <li>Escalamiento de privilegios entre agentes</li>
</ul>
<p>El problema no es el LLM, sino la falta de límites explícitos y verificables.</p>

<h2>¿Qué es la Inyección en Sistemas Agénticos?</h2>
<p>En arquitecturas con múltiples agentes, la inyección no ocurre solo en el prompt inicial.</p>
<p>Aparece en:</p>
<ul>
  <li>Entradas de usuario</li>
  <li>Resultados de herramientas</li>
  <li>Memoria de largo plazo</li>
  <li>Mensajes entre agentes</li>
  <li>Datos etiquetados como "contexto confiable"</li>
</ul>
<p>Sin controles, el agente no distingue entre instrucción válida y manipulación.</p>

<h2>Credo AI como Capa de Gobernanza de Seguridad</h2>
<p>Credo AI introduce un principio clave: Los agentes no solo deben razonar bien, sino obedecer las reglas correctas.</p>
<p>Credo AI permite:</p>
<ul>
  <li>Definir políticas de comportamiento explícitas</li>
  <li>Validar entradas y salidas contra esas políticas</li>
  <li>Bloquear ejecuciones que violen reglas</li>
  <li>Auditar decisiones para compliance y seguridad</li>
</ul>
<p>No es detección pasiva: es enforcement activo.</p>

<h2>Seguridad por Diseño (No por Filtros)</h2>
<p>Un error común es intentar "limpiar" prompts después del hecho.</p>
<p>Un diseño security-first:</p>
<ul>
  <li>Define qué puede y qué no puede hacer cada agente</li>
  <li>Separa instrucciones del sistema de entradas externas</li>
  <li>Valida cada acción antes de ejecutarla</li>
  <li>Registra decisiones para auditoría</li>
</ul>
<p>Credo AI permite formalizar estas reglas como políticas ejecutables.</p>

<h2>Prevención de Inyección en Tiempo de Ejecución</h2>
<p>Credo AI actúa en múltiples puntos críticos:</p>
<h3>1. Validación de Entradas</h3>
<p>Detecta intentos de sobrescribir instrucciones. Bloquea patrones de manipulación conocidos. Aplica reglas según el rol del agente.</p>

<h3>2. Control de Acciones</h3>
<p>Evita que un agente ejecute herramientas no autorizadas. Previene escalamiento de permisos. Limita efectos colaterales.</p>

<h3>3. Verificación de Salidas</h3>
<p>Revisa respuestas antes de enviarlas. Impide violaciones de política, fuga de datos o comportamiento inseguro.</p>

<h2>Integración con el Framework de Producción</h2>
<p>Credo AI no reemplaza al resto del stack: lo protege.</p>
<ul>
  <li><strong>CrewAI</strong> ejecuta agentes bajo políticas explícitas, no implícitas</li>
  <li><strong>DeepEval</strong> mide calidad; Credo asegura cumplimiento</li>
  <li><strong>Langfuse</strong> registra qué pasó; Credo valida si debía pasar</li>
  <li><strong>Ray Serve</strong> ejecuta modelos; Credo gobierna comportamiento</li>
</ul>

<h2>Conclusiones Clave</h2>
<blockquote>
  <p>La inyección es un problema estructural, no textual. Los agentes deben operar bajo políticas explícitas. La seguridad debe ocurrir en runtime. Gobernanza es parte del diseño, no del despliegue. Credo AI convierte reglas en garantías.</p>
</blockquote>
      `
    }
  },
  // --- New Tutorial: Email Classifier Agent ---
  {
    slug: 'building-email-classifier-agent-langgraph',
    date: 'Dec 28, 2025',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=2574&auto=format&fit=crop',
    author: 'Bernardo',
    en: {
      title: 'Building an Email Classification Agent with LangGraph: A Complete Implementation Guide',
      excerpt: 'A hands-on tutorial on building a production-ready email classifier using the DOE Framework with LangGraph, Langfuse observability, DeepEval quality metrics, and multi-provider LLM support.',
      readTime: '15 min read',
      tags: ['LangGraph', 'Tutorial', 'Gmail'],
      category: 'Tutorial',
      content: `
<h2>Executive Summary</h2>
<p>This article walks through the complete implementation of an AI-powered email classification agent built with our DOE Framework (Directives + Orchestration + Execution). Unlike simple chatbot examples, this agent integrates with real systems (Gmail API), includes production-grade observability (Langfuse), automated quality evaluation (DeepEval), and input/output guardrails—all orchestrated through LangGraph's state machine architecture.</p>

<h2>The Problem</h2>
<p>Email overload is a universal challenge. Professionals spend hours manually sorting, labeling, and prioritizing messages. Existing email filters are rule-based and brittle—they can't understand context, nuance, or adapt to changing patterns.</p>
<p>We needed an agent that could:</p>
<ul>
  <li>Classify emails using natural language understanding, not rigid rules</li>
  <li>Integrate directly with Gmail to fetch and label emails automatically</li>
  <li>Provide full traceability of every decision for debugging and auditing</li>
  <li>Evaluate its own output quality before applying changes</li>
  <li>Work with any LLM provider (Gemini, Anthropic, OpenAI, or local Ollama)</li>
</ul>

<h2>Why LangGraph for Orchestration</h2>
<p>We chose LangGraph over simpler LangChain approaches for several reasons:</p>
<ul>
  <li><strong>Explicit State Management:</strong> Every piece of data flows through a typed state dictionary, making debugging trivial</li>
  <li><strong>Node-Based Architecture:</strong> Each step (fetch, classify, apply, evaluate) is an isolated node with clear inputs and outputs</li>
  <li><strong>Conditional Routing:</strong> The graph can branch based on evaluation results or error conditions</li>
  <li><strong>Built-in Persistence:</strong> State can be checkpointed for long-running workflows</li>
</ul>
<p>This approach transforms what could be a fragile script into a robust, observable pipeline.</p>

<h2>The DOE Framework Architecture</h2>
<p>Our agent follows the DOE Framework pattern, separating concerns into three layers:</p>

<h3>1. Directives Layer</h3>
<p>All agent behavior is defined in markdown files, not code. This allows non-engineers to modify prompts, examples, and guardrail rules without touching Python:</p>
<ul>
  <li><strong>directives/agents/classifier.md</strong> — Defines the classifier's role, goals, and examples</li>
  <li><strong>directives/guardrails/input_rules.md</strong> — Specifies what constitutes valid email input</li>
  <li><strong>directives/system/context.md</strong> — Provides domain-specific context for classification</li>
</ul>
<p>This separation means the engineering team owns the infrastructure, while domain experts own the behavior.</p>

<h3>2. Orchestration Layer (LangGraph)</h3>
<p>The pipeline is a directed graph with five nodes:</p>
<ul>
  <li><strong>fetch-labels:</strong> Retrieves available Gmail labels to use for classification</li>
  <li><strong>fetch-emails:</strong> Gets unprocessed emails (those without the _AI_Processed label)</li>
  <li><strong>classify-emails:</strong> Sends emails to the LLM for classification with guardrail validation</li>
  <li><strong>apply-labels:</strong> Applies the recommended labels via Gmail API</li>
  <li><strong>evaluate:</strong> Runs DeepEval metrics on a sample of classifications</li>
</ul>

<h3>3. Execution Layer</h3>
<p>The actual work happens here: Gmail API calls, LLM invocations, label application. Each execution is wrapped in observability spans for full traceability.</p>

<h2>Implementation Deep Dive</h2>

<h3>State Definition</h3>
<p>LangGraph requires a typed state dictionary. Ours tracks everything the pipeline needs:</p>
<pre><code>class ClassifierState(TypedDict):
    batch_size: int
    emails: List[EmailData]
    labels: List[LabelData]
    classifications: List[ClassificationResult]
    evaluation_results: List[EvaluationResult]
    status: ProcessingStatus
    messages: Annotated[List[str], operator.add]  # Accumulates logs</code></pre>
<p>The <code>messages</code> field uses LangGraph's accumulator pattern—each node can append status messages without overwriting previous ones.</p>

<h3>Tracing with Langfuse SDK v3</h3>
<p>Every pipeline run creates a hierarchical trace in Langfuse. We implemented three context managers:</p>
<ul>
  <li><strong>trace_pipeline:</strong> Wraps the entire batch, creating the root trace with session grouping</li>
  <li><strong>trace_node:</strong> Creates spans for each LangGraph node (fetch, classify, apply)</li>
  <li><strong>trace_generation:</strong> Specifically for LLM calls, capturing token usage and cost</li>
</ul>
<p>This gives us a complete timeline: how long each step took, what the LLM received and returned, and exactly what labels were applied.</p>

<h3>LLM Generation Tracing</h3>
<p>The classification node wraps the LLM call to capture detailed metrics:</p>
<pre><code>with trace_generation("llm-classification", model=model_name) as gen:
    response = llm.invoke(messages, config={"callbacks": callbacks})
    if gen:
        gen.update(
            output=response.content[:1000],
            usage={
                "input": token_usage.get('prompt_tokens', 0),
                "output": token_usage.get('completion_tokens', 0),
            }
        )</code></pre>
<p>In the Langfuse dashboard, this appears as a "generation" observation showing exact token counts and estimated costs.</p>

<h3>Input and Output Guardrails</h3>
<p>Before classification, we validate each email:</p>
<ul>
  <li><strong>Required Fields:</strong> Must have id, subject, and snippet</li>
  <li><strong>PII Detection:</strong> Warns (but doesn't block) on potential sensitive data</li>
  <li><strong>Injection Prevention:</strong> Blocks emails containing prompt injection patterns</li>
</ul>
<p>After classification, we validate the LLM output:</p>
<ul>
  <li><strong>Structure Check:</strong> Must include email_id, labels, confidence, and reasoning</li>
  <li><strong>Confidence Normalization:</strong> Auto-repairs invalid confidence values to "medium"</li>
  <li><strong>Label Validation:</strong> Ensures recommended labels exist or are flagged for creation</li>
</ul>
<p>This defense-in-depth approach catches errors at multiple stages.</p>

<h3>Quality Evaluation with DeepEval</h3>
<p>Not every classification needs evaluation—that would be expensive. We sample 20% by default:</p>
<pre><code>sample_size = max(1, int(len(classifications) * settings.evaluation_sample_rate))
sampled = random.sample(classifications, min(sample_size, len(classifications)))</code></pre>
<p>Sampled classifications run through two metric types:</p>
<ul>
  <li><strong>Structural Metrics (Fast):</strong> Deterministic checks on output format—no LLM needed</li>
  <li><strong>LLM-as-Judge Metrics:</strong> Uses a separate LLM call to assess quality, relevance, and reasoning</li>
</ul>
<p>Results are logged as batch-level scores in Langfuse, not per-email (which would flood the dashboard).</p>

<h3>Multi-Provider LLM Support</h3>
<p>The agent isn't locked to any provider. Configuration determines which LLM to use:</p>
<pre><code># config.py
default_llm_provider: Literal["gemini", "anthropic", "openai", "xai", "ollama"]</code></pre>
<p>The LLM factory initializes the appropriate LangChain wrapper with callbacks for observability:</p>
<pre><code>if provider == "gemini":
    return ChatGoogleGenerativeAI(model=settings.gemini_model, ...)
elif provider == "anthropic":
    return ChatAnthropic(model=settings.anthropic_model, ...)</code></pre>
<p>Switching providers is a single environment variable change—no code modifications required.</p>

<h2>The CLI Interface</h2>
<p>We built a Typer-based CLI with Rich formatting for a professional developer experience:</p>
<ul>
  <li><strong>info:</strong> Shows current configuration, API connectivity status, and Langfuse connection</li>
  <li><strong>demo:</strong> Runs the pipeline with mock data—no Gmail credentials needed</li>
  <li><strong>process:</strong> Processes a single batch of real emails</li>
  <li><strong>watch:</strong> Continuous mode—polls for new emails on an interval</li>
</ul>
<p>The demo command is particularly valuable for testing prompt changes without affecting real email.</p>

<h2>Docker Deployment</h2>
<p>The agent ships with production-ready Docker configuration:</p>
<ul>
  <li><strong>Multi-stage build:</strong> ~300MB final image vs ~1GB without optimization</li>
  <li><strong>Non-root user:</strong> Security best practice for container workloads</li>
  <li><strong>Health checks:</strong> Built-in for orchestration platforms (ECS, Cloud Run, Kubernetes)</li>
  <li><strong>Hot-reload directives:</strong> Mount the directives folder to update prompts without rebuilding</li>
</ul>
<pre><code>docker run -d \\
  --name email-classifier \\
  -e GEMINI_API_KEY=your-key \\
  -e LANGFUSE_PUBLIC_KEY=pk-xxx \\
  -e LANGFUSE_SECRET_KEY=sk-xxx \\
  -v ./credentials:/app/credentials:ro \\
  email-classifier:latest watch --interval 60</code></pre>

<h2>Lessons Learned</h2>
<p>Building this agent taught us several important lessons:</p>
<ul>
  <li><strong>Batch-level scoring is essential:</strong> Per-item Langfuse scores flood the dashboard and make trends invisible</li>
  <li><strong>SDK v3 patterns matter:</strong> Langfuse's new <code>start_as_current_observation</code> context manager simplifies nesting</li>
  <li><strong>Guardrails prevent garbage-in-garbage-out:</strong> Validating inputs catches issues before expensive LLM calls</li>
  <li><strong>Sampling evaluation is practical:</strong> 100% evaluation is expensive; 20% sampling catches quality regressions</li>
  <li><strong>Directives empower non-engineers:</strong> Separating prompts from code accelerates iteration</li>
</ul>

<h2>What's Next</h2>
<p>This email classifier is one instantiation of the DOE Framework. The same patterns apply to:</p>
<ul>
  <li>Support ticket routing (HubSpot, Zendesk integration)</li>
  <li>Slack message classification and routing</li>
  <li>Document processing and categorization</li>
  <li>Any workflow that needs intelligent classification with auditability</li>
</ul>
<p>We've packaged the architecture into reusable templates—copy the observability layer, swap the integration client, and customize the directives for your domain.</p>

<h2>Key Takeaways</h2>
<blockquote>
  <p>Production AI agents require more than prompts—they need orchestration, observability, and governance. LangGraph provides the structure; Langfuse provides the visibility; DeepEval provides the quality assurance. Separate what changes (directives) from what stays stable (infrastructure). Build for the real world: API integrations, error handling, and graceful degradation.</p>
</blockquote>
`
    },
    es: {
      title: 'Construyendo un Agente Clasificador de Emails con LangGraph: Guía Completa de Implementación',
      excerpt: 'Un tutorial práctico sobre cómo construir un clasificador de emails listo para producción usando el DOE Framework con LangGraph, observabilidad Langfuse, métricas de calidad DeepEval y soporte multi-proveedor de LLMs.',
      readTime: '15 min de lectura',
      tags: ['LangGraph', 'Tutorial', 'Gmail'],
      category: 'Tutorial',
      content: `
<h2>Resumen Ejecutivo</h2>
<p>Este artículo presenta la implementación completa de un agente de clasificación de emails potenciado por IA, construido con nuestro DOE Framework (Directivas + Orquestación + Ejecución). A diferencia de ejemplos simples de chatbots, este agente se integra con sistemas reales (API de Gmail), incluye observabilidad de nivel producción (Langfuse), evaluación automática de calidad (DeepEval) y validaciones de entrada/salida—todo orquestado a través de la arquitectura de máquina de estados de LangGraph.</p>

<h2>El Problema</h2>
<p>La sobrecarga de emails es un desafío universal. Los profesionales pasan horas ordenando, etiquetando y priorizando mensajes manualmente. Los filtros de email existentes están basados en reglas rígidas—no pueden entender contexto, matices ni adaptarse a patrones cambiantes.</p>
<p>Necesitábamos un agente que pudiera:</p>
<ul>
  <li>Clasificar emails usando comprensión de lenguaje natural, no reglas rígidas</li>
  <li>Integrarse directamente con Gmail para obtener y etiquetar emails automáticamente</li>
  <li>Proporcionar trazabilidad completa de cada decisión para depuración y auditoría</li>
  <li>Evaluar la calidad de su propia salida antes de aplicar cambios</li>
  <li>Funcionar con cualquier proveedor de LLM (Gemini, Anthropic, OpenAI u Ollama local)</li>
</ul>

<h2>Por Qué LangGraph para Orquestación</h2>
<p>Elegimos LangGraph sobre enfoques más simples de LangChain por varias razones:</p>
<ul>
  <li><strong>Gestión de Estado Explícita:</strong> Cada dato fluye a través de un diccionario de estado tipado, haciendo trivial la depuración</li>
  <li><strong>Arquitectura Basada en Nodos:</strong> Cada paso (obtener, clasificar, aplicar, evaluar) es un nodo aislado con entradas y salidas claras</li>
  <li><strong>Enrutamiento Condicional:</strong> El grafo puede ramificarse según resultados de evaluación o condiciones de error</li>
  <li><strong>Persistencia Integrada:</strong> El estado puede guardarse para flujos de trabajo de larga duración</li>
</ul>
<p>Este enfoque transforma lo que podría ser un script frágil en un pipeline robusto y observable.</p>

<h2>La Arquitectura del DOE Framework</h2>
<p>Nuestro agente sigue el patrón DOE Framework, separando responsabilidades en tres capas:</p>

<h3>1. Capa de Directivas</h3>
<p>Todo el comportamiento del agente se define en archivos markdown, no en código. Esto permite que no-ingenieros modifiquen prompts, ejemplos y reglas de validación sin tocar Python:</p>
<ul>
  <li><strong>directives/agents/classifier.md</strong> — Define el rol, objetivos y ejemplos del clasificador</li>
  <li><strong>directives/guardrails/input_rules.md</strong> — Especifica qué constituye una entrada de email válida</li>
  <li><strong>directives/system/context.md</strong> — Proporciona contexto específico del dominio para clasificación</li>
</ul>
<p>Esta separación significa que el equipo de ingeniería es dueño de la infraestructura, mientras los expertos del dominio son dueños del comportamiento.</p>

<h3>2. Capa de Orquestación (LangGraph)</h3>
<p>El pipeline es un grafo dirigido con cinco nodos:</p>
<ul>
  <li><strong>fetch-labels:</strong> Obtiene las etiquetas de Gmail disponibles para clasificación</li>
  <li><strong>fetch-emails:</strong> Obtiene emails no procesados (aquellos sin la etiqueta _AI_Processed)</li>
  <li><strong>classify-emails:</strong> Envía emails al LLM para clasificación con validación de guardrails</li>
  <li><strong>apply-labels:</strong> Aplica las etiquetas recomendadas vía API de Gmail</li>
  <li><strong>evaluate:</strong> Ejecuta métricas DeepEval en una muestra de clasificaciones</li>
</ul>

<h3>3. Capa de Ejecución</h3>
<p>El trabajo real ocurre aquí: llamadas a la API de Gmail, invocaciones de LLM, aplicación de etiquetas. Cada ejecución está envuelta en spans de observabilidad para trazabilidad completa.</p>

<h2>Implementación en Profundidad</h2>

<h3>Definición de Estado</h3>
<p>LangGraph requiere un diccionario de estado tipado. El nuestro rastrea todo lo que el pipeline necesita:</p>
<pre><code>class ClassifierState(TypedDict):
    batch_size: int
    emails: List[EmailData]
    labels: List[LabelData]
    classifications: List[ClassificationResult]
    evaluation_results: List[EvaluationResult]
    status: ProcessingStatus
    messages: Annotated[List[str], operator.add]  # Acumula logs</code></pre>
<p>El campo <code>messages</code> usa el patrón acumulador de LangGraph—cada nodo puede agregar mensajes de estado sin sobrescribir los anteriores.</p>

<h3>Trazado con Langfuse SDK v3</h3>
<p>Cada ejecución del pipeline crea una traza jerárquica en Langfuse. Implementamos tres gestores de contexto:</p>
<ul>
  <li><strong>trace_pipeline:</strong> Envuelve todo el lote, creando la traza raíz con agrupación de sesión</li>
  <li><strong>trace_node:</strong> Crea spans para cada nodo de LangGraph (fetch, classify, apply)</li>
  <li><strong>trace_generation:</strong> Específicamente para llamadas LLM, capturando uso de tokens y costo</li>
</ul>
<p>Esto nos da una línea temporal completa: cuánto tardó cada paso, qué recibió y devolvió el LLM, y exactamente qué etiquetas se aplicaron.</p>

<h3>Trazado de Generación LLM</h3>
<p>El nodo de clasificación envuelve la llamada LLM para capturar métricas detalladas:</p>
<pre><code>with trace_generation("llm-classification", model=model_name) as gen:
    response = llm.invoke(messages, config={"callbacks": callbacks})
    if gen:
        gen.update(
            output=response.content[:1000],
            usage={
                "input": token_usage.get('prompt_tokens', 0),
                "output": token_usage.get('completion_tokens', 0),
            }
        )</code></pre>
<p>En el dashboard de Langfuse, esto aparece como una observación de "generación" mostrando conteos exactos de tokens y costos estimados.</p>

<h3>Guardrails de Entrada y Salida</h3>
<p>Antes de la clasificación, validamos cada email:</p>
<ul>
  <li><strong>Campos Requeridos:</strong> Debe tener id, asunto y fragmento</li>
  <li><strong>Detección de PII:</strong> Advierte (pero no bloquea) sobre datos potencialmente sensibles</li>
  <li><strong>Prevención de Inyección:</strong> Bloquea emails que contienen patrones de inyección de prompts</li>
</ul>
<p>Después de la clasificación, validamos la salida del LLM:</p>
<ul>
  <li><strong>Verificación de Estructura:</strong> Debe incluir email_id, etiquetas, confianza y razonamiento</li>
  <li><strong>Normalización de Confianza:</strong> Auto-repara valores de confianza inválidos a "medium"</li>
  <li><strong>Validación de Etiquetas:</strong> Asegura que las etiquetas recomendadas existan o estén marcadas para creación</li>
</ul>
<p>Este enfoque de defensa en profundidad detecta errores en múltiples etapas.</p>

<h3>Evaluación de Calidad con DeepEval</h3>
<p>No toda clasificación necesita evaluación—eso sería costoso. Muestreamos 20% por defecto:</p>
<pre><code>sample_size = max(1, int(len(classifications) * settings.evaluation_sample_rate))
sampled = random.sample(classifications, min(sample_size, len(classifications)))</code></pre>
<p>Las clasificaciones muestreadas pasan por dos tipos de métricas:</p>
<ul>
  <li><strong>Métricas Estructurales (Rápidas):</strong> Verificaciones deterministas del formato de salida—sin LLM necesario</li>
  <li><strong>Métricas LLM-como-Juez:</strong> Usa una llamada LLM separada para evaluar calidad, relevancia y razonamiento</li>
</ul>
<p>Los resultados se registran como puntuaciones a nivel de lote en Langfuse, no por email (lo que inundaría el dashboard).</p>

<h3>Soporte Multi-Proveedor de LLM</h3>
<p>El agente no está atado a ningún proveedor. La configuración determina qué LLM usar:</p>
<pre><code># config.py
default_llm_provider: Literal["gemini", "anthropic", "openai", "xai", "ollama"]</code></pre>
<p>La fábrica de LLM inicializa el wrapper apropiado de LangChain con callbacks para observabilidad:</p>
<pre><code>if provider == "gemini":
    return ChatGoogleGenerativeAI(model=settings.gemini_model, ...)
elif provider == "anthropic":
    return ChatAnthropic(model=settings.anthropic_model, ...)</code></pre>
<p>Cambiar de proveedor es un cambio de variable de entorno—sin modificaciones de código requeridas.</p>

<h2>La Interfaz CLI</h2>
<p>Construimos una CLI basada en Typer con formato Rich para una experiencia profesional de desarrollador:</p>
<ul>
  <li><strong>info:</strong> Muestra configuración actual, estado de conectividad de API y conexión Langfuse</li>
  <li><strong>demo:</strong> Ejecuta el pipeline con datos mock—sin credenciales de Gmail necesarias</li>
  <li><strong>process:</strong> Procesa un lote único de emails reales</li>
  <li><strong>watch:</strong> Modo continuo—consulta nuevos emails en un intervalo</li>
</ul>
<p>El comando demo es particularmente valioso para probar cambios de prompts sin afectar emails reales.</p>

<h2>Despliegue con Docker</h2>
<p>El agente incluye configuración Docker lista para producción:</p>
<ul>
  <li><strong>Build multi-etapa:</strong> ~300MB imagen final vs ~1GB sin optimización</li>
  <li><strong>Usuario no-root:</strong> Mejor práctica de seguridad para cargas de trabajo en contenedores</li>
  <li><strong>Health checks:</strong> Integrados para plataformas de orquestación (ECS, Cloud Run, Kubernetes)</li>
  <li><strong>Hot-reload de directivas:</strong> Monta la carpeta de directivas para actualizar prompts sin reconstruir</li>
</ul>
<pre><code>docker run -d \\
  --name email-classifier \\
  -e GEMINI_API_KEY=tu-clave \\
  -e LANGFUSE_PUBLIC_KEY=pk-xxx \\
  -e LANGFUSE_SECRET_KEY=sk-xxx \\
  -v ./credentials:/app/credentials:ro \\
  email-classifier:latest watch --interval 60</code></pre>

<h2>Lecciones Aprendidas</h2>
<p>Construir este agente nos enseñó varias lecciones importantes:</p>
<ul>
  <li><strong>Las puntuaciones a nivel de lote son esenciales:</strong> Las puntuaciones por item en Langfuse inundan el dashboard y hacen invisibles las tendencias</li>
  <li><strong>Los patrones SDK v3 importan:</strong> El nuevo gestor de contexto <code>start_as_current_observation</code> de Langfuse simplifica el anidamiento</li>
  <li><strong>Los guardrails previenen basura-entra-basura-sale:</strong> Validar entradas detecta problemas antes de llamadas costosas al LLM</li>
  <li><strong>La evaluación por muestreo es práctica:</strong> 100% evaluación es costoso; 20% muestreo detecta regresiones de calidad</li>
  <li><strong>Las directivas empoderan a no-ingenieros:</strong> Separar prompts del código acelera la iteración</li>
</ul>

<h2>Qué Sigue</h2>
<p>Este clasificador de emails es una instanciación del DOE Framework. Los mismos patrones aplican a:</p>
<ul>
  <li>Enrutamiento de tickets de soporte (integración HubSpot, Zendesk)</li>
  <li>Clasificación y enrutamiento de mensajes de Slack</li>
  <li>Procesamiento y categorización de documentos</li>
  <li>Cualquier flujo de trabajo que necesite clasificación inteligente con auditabilidad</li>
</ul>
<p>Hemos empaquetado la arquitectura en plantillas reutilizables—copia la capa de observabilidad, intercambia el cliente de integración y personaliza las directivas para tu dominio.</p>

<h2>Conclusiones Clave</h2>
<blockquote>
  <p>Los agentes de IA en producción requieren más que prompts—necesitan orquestación, observabilidad y gobernanza. LangGraph proporciona la estructura; Langfuse proporciona la visibilidad; DeepEval proporciona el aseguramiento de calidad. Separa lo que cambia (directivas) de lo que permanece estable (infraestructura). Construye para el mundo real: integraciones de API, manejo de errores y degradación elegante.</p>
</blockquote>
`
    }
  }
];
