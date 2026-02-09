
import {
    MessageSquare,
    Shield,
    Bot,
    ScanEye,
    Activity,
    Send
} from 'lucide-react';

export const generalContent = {
    es: {
        badge: "ARQUITECTURA DE CICLO DE VIDA",
        titleStart: "Motor de Procesamiento",
        titleEnd: "Inteligente",
        descPreview: "Unimos las 5 fases esenciales de la automatización inteligente en un solo flujo continuo.",
        descExpanded: "Siga el viaje de un ticket de soporte real a través de nuestra arquitectura autónoma.",
        expandBtn: "VER DEMO INTERACTIVA",
        clickHint: 'Haga clic para ver cómo se resuelve un caso real de "Error de Facturación".',
        closeBtn: "Cerrar Vista",
        prevBtn: "Anterior",
        nextBtn: "Siguiente",
        businessOutcome: "Resultado de Negocio",
        techView: "Ver Código Técnico",
        visualView: "Ver Visualización de Resultado",
        phasePrefix: "Fase",
        codePreviewLabel: "Código en ejecución",
        demoLabel: "Demo",
        demo1Title: "Soporte: Error de Facturación",
        demo2Title: "Ventas: Lead Qualification"
    },
    en: {
        badge: "LIFECYCLE ARCHITECTURE",
        titleStart: "Intelligent Processing",
        titleEnd: "Engine",
        descPreview: "We unify the 5 essential phases of intelligent automation into a single continuous flow.",
        descExpanded: "Follow the journey of a real support ticket through our autonomous architecture.",
        expandBtn: "VIEW INTERACTIVE DEMO",
        clickHint: 'Click to see how a real "Billing Error" case is resolved.',
        closeBtn: "Close View",
        prevBtn: "Previous",
        nextBtn: "Next",
        businessOutcome: "Business Outcome",
        techView: "View Technical Code",
        visualView: "View Result Visualization",
        phasePrefix: "Phase",
        codePreviewLabel: "Code running",
        demoLabel: "Demo",
        demo1Title: "Support: Billing Error",
        demo2Title: "Sales: Lead Qualification"
    }
};

export const phasesData = {
    es: [
        {
            id: 0,
            title: "Ticket de Cliente",
            previewLabel: "Ingesta",
            subtitle: "Entrada de Solicitud",
            icon: MessageSquare,
            color: "#ffffff",
            description: "Fase 1: Recepción del ticket. El sistema captura el correo electrónico de Ana y normaliza los datos para su procesamiento inmediato.",
            tech: "Ingesta Multicanal",
            outcome: "Entrada cruda convertida en objeto digital estructurado.",
            visualType: "email",
            visualContent: {
                from: "ana.garcia@cliente.com",
                subject: "URGENTE: Error en cobro mensual",
                body: "Hola equipo, acabo de ver mi estado de cuenta y parece que me cobraron dos veces la suscripción de Marzo. ¿Me pueden ayudar?",
                timestamp: "Hoy, 10:42 AM"
            },
            codeTitle: "ticket_payload.json",
            code: `{
  "id": "tkt_88219",
  "channel": "email",
  "customer_id": "cust_12345",
  "content": "Error en cobro mensual...",
  "timestamp": "2024-03-15T10:42:00Z"
}`,
            codePreview: `{ "id": "tkt_88219", "channel": "email" }`
        },
        {
            id: 1,
            title: "Guardrails AI",
            previewLabel: "Validación",
            subtitle: "Seguridad de Entrada",
            icon: Shield,
            color: "#a78bfa",
            description: "Fase 2: Guardrails valida la entrada. Detecta PII, bloquea inyecciones de prompt y sanitiza datos sensibles antes del procesamiento.",
            tech: "Guardrails AI",
            outcome: "Entrada validada y sanitizada. PII redactado automáticamente.",
            visualType: "compliance",
            visualContent: {
                policy: "Protección de Entrada",
                action: "SANITIZED",
                field: "Email detectado",
                value: "[EMAIL_REDACTED]"
            },
            codeTitle: "guardrails/validators.py",
            code: `from src.guardrails.validators import InputGuard

class InputGuard:
    """Validates and sanitizes user input."""

    PII_PATTERNS = {
        "ssn": r"\\b\\d{3}-\\d{2}-\\d{4}\\b",
        "credit_card": r"\\b(?:\\d{4}[- ]?){3}\\d{4}\\b",
        "email": r"\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b",
    }

    INJECTION_PATTERNS = [
        r"ignore\\s+all\\s+previous\\s+instructions?",
        r"pretend\\s+(you('re| are)|to\\s+be)",
        r"act\\s+as\\s+(if|a|an)\\s+",
    ]

    def validate(self, text: str) -> GuardResult:
        # Check for prompt injection
        if self._detect_injection(text):
            return GuardResult(passed=False, reason="Injection blocked")

        # Sanitize PII
        sanitized = self._sanitize_pii(text)
        return GuardResult(passed=True, sanitized_content=sanitized)`,
            codePreview: `guard = InputGuard()
result = guard.validate(ticket_text)
# PII detected: email
# Status: SANITIZED ✓`
        },
        {
            id: 2,
            title: "CrewAI",
            previewLabel: "Orquestación",
            subtitle: "Agentes IA",
            icon: Bot,
            color: "#f87171",
            description: "Fase 3: Un equipo de agentes con juicio integrado. Triage decide urgencia, Respuesta determina acción, Escalación juzga si se necesita intervención humana. Cada decisión es registrada y puntuada.",
            tech: "CrewAI + Gemini + HubSpot",
            outcome: "Resolución autónoma con puntos de decisión documentados. Confianza: 87%.",
            visualType: "agent-chat",
            visualContent: [
                { role: "Triage", text: "Clasificado: BILLING, Urgencia: HIGH. Cliente VIP detectado." },
                { role: "Response", text: "Verificando historial... Cargo duplicado de $49.00 encontrado. Generando respuesta personalizada." },
                { role: "Escalation", text: "Cliente VIP + problema financiero = Escalación recomendada para seguimiento." }
            ],
            codeTitle: "agents/crew.py",
            code: `from crewai import Crew, Agent, Task
from src.agents.triage import create_triage_agent
from src.agents.response import create_response_agent
from src.agents.escalation import create_escalation_agent

class SupportCrew:
    """Multi-agent crew for support ticket processing."""

    def __init__(self):
        self.triage_agent = create_triage_agent()
        self.response_agent = create_response_agent()
        self.escalation_agent = create_escalation_agent()

    def process_ticket(self, ticket_text: str, ticket_id: str):
        # Phase 1: Triage classification
        triage_result = self._run_triage(ticket_text, ticket_id)

        # Phase 2: Response generation
        response_result = self._run_response(
            ticket_text, ticket_id, triage_result
        )

        # Phase 3: Escalation decision
        escalation_result = self._run_escalation(
            ticket_text, response_result
        )

        return TicketResult(
            category=triage_result.category,
            urgency=triage_result.urgency,
            response=response_result.response,
            needs_escalation=escalation_result.needs_escalation
        )`,
            codePreview: `crew = SupportCrew()
result = crew.process_ticket(text, id)
# category: "billing"
# urgency: "high"
# needs_escalation: True`
        },
        {
            id: 3,
            title: "Verificación de Juicio",
            previewLabel: "Juicio",
            subtitle: "Control de Decisiones",
            icon: ScanEye,
            color: "#fbbf24",
            description: "Fase 4: El sistema se juzga a sí mismo. ¿Es la decisión apropiada? ¿Está calibrada la confianza? ¿Debimos haber consultado a un humano? DeepEval mide confianza, no solo precisión.",
            tech: "DeepEval + LLM-as-Judge",
            outcome: "Decisión validada: Confianza 87%, Humano no requerido.",
            visualType: "quality-check",
            visualContent: {
                tests: [
                    { name: "Relevancia", status: "PASS", score: "0.98" },
                    { name: "Calidad de Decisión", status: "PASS", score: "0.91" },
                    { name: "Calibración", status: "PASS", score: "0.87" },
                    { name: "¿Humano Necesario?", status: "NO", score: "0.87" }
                ]
            },
            codeTitle: "evaluation/metrics.py",
            code: `from deepeval import evaluate
from deepeval.metrics import GEval
from deepeval.test_case import LLMTestCase

def get_metrics():
    """Define quality metrics for response evaluation."""
    return [
        GEval(
            name="Response Relevance",
            criteria="Does the response directly address the customer's issue?",
            threshold=0.7,
        ),
        GEval(
            name="Tone Appropriateness",
            criteria="Is the tone professional, empathetic, and helpful?",
            threshold=0.7,
        ),
        GEval(
            name="Response Completeness",
            criteria="Does response have greeting, acknowledgment, solution, and closing?",
            threshold=0.7,
        ),
        GEval(
            name="Actionability",
            criteria="Are clear next steps provided for the customer?",
            threshold=0.6,
        ),
    ]

def evaluate_response(ticket_text: str, response: str):
    test_case = LLMTestCase(input=ticket_text, actual_output=response)
    results = evaluate(test_cases=[test_case], metrics=get_metrics())
    return results.passed`,
            codePreview: `metrics = [
    GEval(name="Relevance", threshold=0.7),
    GEval(name="Tone", threshold=0.7),
    GEval(name="Completeness", threshold=0.7)
]
results = evaluate(test_cases, metrics)`
        },
        {
            id: 4,
            title: "Langfuse",
            previewLabel: "Contexto",
            subtitle: "Registro de Decisiones",
            icon: Activity,
            color: "#34d399",
            description: "Fase 5: Registramos contexto de decisiones, no solo resultados. Por qué se tomó cada decisión, qué alternativas se consideraron, y niveles de confianza — acumulando valor con el tiempo.",
            tech: "Langfuse + Decision Context",
            outcome: "Contexto completo para aprendizaje continuo y auditoría.",
            visualType: "timeline",
            visualContent: {
                steps: [
                    { name: "Input Guard", time: "15ms" },
                    { name: "CRM Lookup", time: "120ms" },
                    { name: "Triage Agent", time: "450ms" },
                    { name: "Response Agent", time: "680ms" },
                    { name: "Output Guard", time: "12ms" }
                ],
                total: "1.28s"
            },
            codeTitle: "guardrails/runner.py",
            code: `from src.observability.langfuse_client import get_langfuse

class GuardedPipeline:
    """Pipeline with full Langfuse observability."""

    def process_ticket(self, ticket_text: str, ticket_id: str):
        langfuse = get_langfuse()
        trace_id = uuid.uuid4().hex

        # Create root span
        root_span = langfuse.start_span(
            trace_context={"trace_id": trace_id},
            name="guarded-ticket-processing",
            input={"ticket_id": ticket_id}
        )

        # Step 1: Validate input
        input_span = langfuse.start_span(
            trace_context={"trace_id": trace_id, "parent_span_id": root_span.id},
            name="input-guard-validation"
        )
        input_result = self.input_guard.validate(ticket_text)
        input_span.end()

        # Step 2: Process with agents
        agent_span = langfuse.start_span(...)
        ticket_result = self.crew.process_ticket(ticket_text, ticket_id)
        agent_span.end()

        # Step 3: Validate output
        output_span = langfuse.start_span(...)
        output_result = self.output_guard.validate(ticket_result.response)
        output_span.end()

        # Record score
        langfuse.create_score(trace_id=trace_id, name="guardrails_status", value=1)
        root_span.end()`,
            codePreview: `root_span = langfuse.start_span(
    name="guarded-ticket-processing"
)
# input-guard: 15ms
# agent-processing: 1130ms
# output-guard: 12ms
# Total: 1.28s | Cost: $0.003`
        },
        {
            id: 5,
            title: "Respuesta",
            previewLabel: "Resolución",
            subtitle: "Salida Final",
            icon: Send,
            color: "#e4e4e7",
            description: "Fase 6: Ana recibe la confirmación. Problema resuelto en <2 minutos sin intervención humana. Ticket escalado para seguimiento VIP.",
            tech: "SMTP / API",
            outcome: "Ciclo cerrado. Cliente satisfecho. Ticket escalado para seguimiento.",
            visualType: "email",
            visualContent: {
                from: "soporte@autonomis.ai",
                subject: "Re: URGENTE: Error en cobro mensual",
                body: "Hola Ana, he confirmado el error de duplicidad. He procesado el reembolso de $49.00 a tu tarjeta. Como cliente VIP, un especialista te contactará para asegurar que todo esté resuelto.",
                timestamp: "Hoy, 10:44 AM"
            },
            codeTitle: "result_output.json",
            code: `{
  "ticket_id": "tkt_88219",
  "status": "resolved",
  "category": "billing",
  "urgency": "high",
  "response_sent": true,
  "needs_escalation": true,
  "escalate_to_team": "vip_support",
  "processing_time_ms": 1280,
  "guardrails_passed": true,
  "evaluation_scores": {
    "relevance": 0.98,
    "tone": 0.95,
    "completeness": 0.92
  }
}`,
            codePreview: `{
  "status": "resolved",
  "processing_time": "1.28s",
  "guardrails": "PASSED",
  "evaluation": "PASSED"
}`
        }
    ],
    en: [
        {
            id: 0,
            title: "Customer Ticket",
            previewLabel: "Ingestion",
            subtitle: "Request Entry",
            icon: MessageSquare,
            color: "#ffffff",
            description: "Phase 1: Ticket reception. System captures Ana's email and normalizes input data for immediate processing.",
            tech: "Multi-channel Ingest",
            outcome: "Raw input converted into structured digital object.",
            visualType: "email",
            visualContent: {
                from: "ana.garcia@client.com",
                subject: "URGENT: Monthly billing error",
                body: "Hi team, I just checked my statement and it looks like I was charged twice for March subscription. Can you help?",
                timestamp: "Today, 10:42 AM"
            },
            codeTitle: "ticket_payload.json",
            code: `{
  "id": "tkt_88219",
  "channel": "email",
  "customer_id": "cust_12345",
  "content": "Monthly billing error...",
  "timestamp": "2024-03-15T10:42:00Z"
}`,
            codePreview: `{ "id": "tkt_88219", "channel": "email" }`
        },
        {
            id: 1,
            title: "Guardrails AI",
            previewLabel: "Validation",
            subtitle: "Input Security",
            icon: Shield,
            color: "#a78bfa",
            description: "Phase 2: Guardrails validates input. Detects PII, blocks prompt injections, and sanitizes sensitive data before processing.",
            tech: "Guardrails AI",
            outcome: "Input validated and sanitized. PII automatically redacted.",
            visualType: "compliance",
            visualContent: {
                policy: "Input Protection",
                action: "SANITIZED",
                field: "Email detected",
                value: "[EMAIL_REDACTED]"
            },
            codeTitle: "guardrails/validators.py",
            code: `from src.guardrails.validators import InputGuard

class InputGuard:
    """Validates and sanitizes user input."""

    PII_PATTERNS = {
        "ssn": r"\\b\\d{3}-\\d{2}-\\d{4}\\b",
        "credit_card": r"\\b(?:\\d{4}[- ]?){3}\\d{4}\\b",
        "email": r"\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b",
    }

    INJECTION_PATTERNS = [
        r"ignore\\s+all\\s+previous\\s+instructions?",
        r"pretend\\s+(you('re| are)|to\\s+be)",
        r"act\\s+as\\s+(if|a|an)\\s+",
    ]

    def validate(self, text: str) -> GuardResult:
        # Check for prompt injection
        if self._detect_injection(text):
            return GuardResult(passed=False, reason="Injection blocked")

        # Sanitize PII
        sanitized = self._sanitize_pii(text)
        return GuardResult(passed=True, sanitized_content=sanitized)`,
            codePreview: `guard = InputGuard()
result = guard.validate(ticket_text)
# PII detected: email
# Status: SANITIZED ✓`
        },
        {
            id: 2,
            title: "CrewAI",
            previewLabel: "Orchestration",
            subtitle: "AI Agents",
            icon: Bot,
            color: "#f87171",
            description: "Phase 3: Agent team with built-in judgment. Triage decides urgency, Response determines action, Escalation judges if human intervention is needed. Every decision is logged and scored.",
            tech: "CrewAI + Gemini + HubSpot",
            outcome: "Autonomous resolution with documented decision points. Confidence: 87%.",
            visualType: "agent-chat",
            visualContent: [
                { role: "Triage", text: "Classified: BILLING, Urgency: HIGH. VIP customer detected." },
                { role: "Response", text: "Checking history... Duplicate charge of $49.00 found. Generating personalized response." },
                { role: "Escalation", text: "VIP customer + financial issue = Escalation recommended for follow-up." }
            ],
            codeTitle: "agents/crew.py",
            code: `from crewai import Crew, Agent, Task
from src.agents.triage import create_triage_agent
from src.agents.response import create_response_agent
from src.agents.escalation import create_escalation_agent

class SupportCrew:
    """Multi-agent crew for support ticket processing."""

    def __init__(self):
        self.triage_agent = create_triage_agent()
        self.response_agent = create_response_agent()
        self.escalation_agent = create_escalation_agent()

    def process_ticket(self, ticket_text: str, ticket_id: str):
        # Phase 1: Triage classification
        triage_result = self._run_triage(ticket_text, ticket_id)

        # Phase 2: Response generation
        response_result = self._run_response(
            ticket_text, ticket_id, triage_result
        )

        # Phase 3: Escalation decision
        escalation_result = self._run_escalation(
            ticket_text, response_result
        )

        return TicketResult(
            category=triage_result.category,
            urgency=triage_result.urgency,
            response=response_result.response,
            needs_escalation=escalation_result.needs_escalation
        )`,
            codePreview: `crew = SupportCrew()
result = crew.process_ticket(text, id)
# category: "billing"
# urgency: "high"
# needs_escalation: True`
        },
        {
            id: 3,
            title: "Judgment Verification",
            previewLabel: "Judgment",
            subtitle: "Decision Control",
            icon: ScanEye,
            color: "#fbbf24",
            description: "Phase 4: The system judges itself. Is the decision appropriate? Is confidence calibrated? Should we have asked a human? DeepEval measures trust, not just accuracy.",
            tech: "DeepEval + LLM-as-Judge",
            outcome: "Decision validated: 87% Confidence, Human not needed.",
            visualType: "quality-check",
            visualContent: {
                tests: [
                    { name: "Relevance", status: "PASS", score: "0.98" },
                    { name: "Decision Quality", status: "PASS", score: "0.91" },
                    { name: "Calibration", status: "PASS", score: "0.87" },
                    { name: "Human Needed?", status: "NO", score: "0.87" }
                ]
            },
            codeTitle: "evaluation/metrics.py",
            code: `from deepeval import evaluate
from deepeval.metrics import GEval
from deepeval.test_case import LLMTestCase

def get_metrics():
    """Define quality metrics for response evaluation."""
    return [
        GEval(
            name="Response Relevance",
            criteria="Does the response directly address the customer's issue?",
            threshold=0.7,
        ),
        GEval(
            name="Tone Appropriateness",
            criteria="Is the tone professional, empathetic, and helpful?",
            threshold=0.7,
        ),
        GEval(
            name="Response Completeness",
            criteria="Does response have greeting, acknowledgment, solution, and closing?",
            threshold=0.7,
        ),
        GEval(
            name="Actionability",
            criteria="Are clear next steps provided for the customer?",
            threshold=0.6,
        ),
    ]

def evaluate_response(ticket_text: str, response: str):
    test_case = LLMTestCase(input=ticket_text, actual_output=response)
    results = evaluate(test_cases=[test_case], metrics=get_metrics())
    return results.passed`,
            codePreview: `metrics = [
    GEval(name="Relevance", threshold=0.7),
    GEval(name="Tone", threshold=0.7),
    GEval(name="Completeness", threshold=0.7)
]
results = evaluate(test_cases, metrics)`
        },
        {
            id: 4,
            title: "Langfuse",
            previewLabel: "Context",
            subtitle: "Decision Logging",
            icon: Activity,
            color: "#34d399",
            description: "Phase 5: We record decision context, not just outputs. Why each decision was made, what alternatives were considered, and confidence levels — compounding value over time.",
            tech: "Langfuse + Decision Context",
            outcome: "Full context for continuous learning and audit.",
            visualType: "timeline",
            visualContent: {
                steps: [
                    { name: "Input Guard", time: "15ms" },
                    { name: "CRM Lookup", time: "120ms" },
                    { name: "Triage Agent", time: "450ms" },
                    { name: "Response Agent", time: "680ms" },
                    { name: "Output Guard", time: "12ms" }
                ],
                total: "1.28s"
            },
            codeTitle: "guardrails/runner.py",
            code: `from src.observability.langfuse_client import get_langfuse

class GuardedPipeline:
    """Pipeline with full Langfuse observability."""

    def process_ticket(self, ticket_text: str, ticket_id: str):
        langfuse = get_langfuse()
        trace_id = uuid.uuid4().hex

        # Create root span
        root_span = langfuse.start_span(
            trace_context={"trace_id": trace_id},
            name="guarded-ticket-processing",
            input={"ticket_id": ticket_id}
        )

        # Step 1: Validate input
        input_span = langfuse.start_span(
            trace_context={"trace_id": trace_id, "parent_span_id": root_span.id},
            name="input-guard-validation"
        )
        input_result = self.input_guard.validate(ticket_text)
        input_span.end()

        # Step 2: Process with agents
        agent_span = langfuse.start_span(...)
        ticket_result = self.crew.process_ticket(ticket_text, ticket_id)
        agent_span.end()

        # Step 3: Validate output
        output_span = langfuse.start_span(...)
        output_result = self.output_guard.validate(ticket_result.response)
        output_span.end()

        # Record score
        langfuse.create_score(trace_id=trace_id, name="guardrails_status", value=1)
        root_span.end()`,
            codePreview: `root_span = langfuse.start_span(
    name="guarded-ticket-processing"
)
# input-guard: 15ms
# agent-processing: 1130ms
# output-guard: 12ms
# Total: 1.28s | Cost: $0.003`
        },
        {
            id: 5,
            title: "Response",
            previewLabel: "Resolution",
            subtitle: "Final Output",
            icon: Send,
            color: "#e4e4e7",
            description: "Phase 6: Ana receives confirmation. Issue resolved in <2 mins without humans. Ticket escalated for VIP follow-up.",
            tech: "SMTP / API",
            outcome: "Loop closed. Customer satisfied. Ticket escalated for follow-up.",
            visualType: "email",
            visualContent: {
                from: "support@autonomis.ai",
                subject: "Re: URGENT: Monthly billing error",
                body: "Hi Ana, I confirmed the duplicate error. I have processed the refund of $49.00 to your card. As a VIP customer, a specialist will contact you to ensure everything is resolved.",
                timestamp: "Today, 10:44 AM"
            },
            codeTitle: "result_output.json",
            code: `{
  "ticket_id": "tkt_88219",
  "status": "resolved",
  "category": "billing",
  "urgency": "high",
  "response_sent": true,
  "needs_escalation": true,
  "escalate_to_team": "vip_support",
  "processing_time_ms": 1280,
  "guardrails_passed": true,
  "evaluation_scores": {
    "relevance": 0.98,
    "tone": 0.95,
    "completeness": 0.92
  }
}`,
            codePreview: `{
  "status": "resolved",
  "processing_time": "1.28s",
  "guardrails": "PASSED",
  "evaluation": "PASSED"
}`
        }
    ]
};
