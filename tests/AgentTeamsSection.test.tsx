/**
 * QA Tests — ClawdBot Page + Home Page Regression
 * Repo: mexaverse83/autonomis_website (commit 794de04)
 */

import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { ClawdBot } from '../pages/ClawdBot'
import { LanguageProvider } from '../context/LanguageContext'
import { ThemeProvider } from '../context/ThemeContext'

// Mock react-helmet-async
vi.mock('react-helmet-async', () => ({
  Helmet: ({ children }: any) => <div data-testid="helmet">{children}</div>,
}))

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <ThemeProvider>
      <LanguageProvider>
        {ui}
      </LanguageProvider>
    </ThemeProvider>
  )
}

describe('ClawdBot Page — Spanish (default)', () => {
  it('renders hero badge', () => {
    renderWithProviders(<ClawdBot />)
    expect(screen.getByText('Servicio Especializado')).toBeInTheDocument()
  })

  it('renders hero headline', () => {
    renderWithProviders(<ClawdBot />)
    expect(screen.getByText('Tu Equipo de IA,')).toBeInTheDocument()
    expect(screen.getByText('Desplegado.')).toBeInTheDocument()
  })

  it('renders hero subheadline', () => {
    renderWithProviders(<ClawdBot />)
    expect(screen.getByText(/Desplegamos, configuramos y gestionamos/)).toBeInTheDocument()
  })

  it('renders hero CTA button', () => {
    renderWithProviders(<ClawdBot />)
    expect(screen.getByText('Solicitar Consultoría')).toBeInTheDocument()
  })

  it('renders "What is OpenClaw" section', () => {
    renderWithProviders(<ClawdBot />)
    expect(screen.getByText('¿Qué es OpenClaw?')).toBeInTheDocument()
    expect(screen.getByText(/OpenClaw es la plataforma/)).toBeInTheDocument()
  })

  it('renders 6 "what is" bullet points', () => {
    renderWithProviders(<ClawdBot />)
    expect(screen.getByText(/Equipos multi-agente/)).toBeInTheDocument()
    expect(screen.getByText(/Cualquier canal/)).toBeInTheDocument()
    expect(screen.getByText(/Memoria persistente/)).toBeInTheDocument()
    expect(screen.getByText(/Auto-hospedado/)).toBeInTheDocument()
    expect(screen.getByText(/Setup en 5 minutos/)).toBeInTheDocument()
    expect(screen.getByText(/Habilidades modulares/)).toBeInTheDocument()
  })

  it('renders "Our Expertise" section with 6 items', () => {
    renderWithProviders(<ClawdBot />)
    expect(screen.getByText('Nuestra Experiencia')).toBeInTheDocument()
    expect(screen.getByText('Diseño de Arquitectura')).toBeInTheDocument()
    expect(screen.getByText('Coordinación de Agentes')).toBeInTheDocument()
    expect(screen.getByText('Comunicación Inter-Agente')).toBeInTheDocument()
    expect(screen.getByText('Gestión de Memoria')).toBeInTheDocument()
    expect(screen.getByText('Diseño Basado en Skills')).toBeInTheDocument()
    expect(screen.getByText('Monitoreo y Observabilidad')).toBeInTheDocument()
  })

  it('renders "Our Framework" section with 5 steps', () => {
    renderWithProviders(<ClawdBot />)
    expect(screen.getByText('Nuestro Framework')).toBeInTheDocument()
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('Descubrimiento')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('Arquitectura')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('Implementación')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
    expect(screen.getByText('Observabilidad')).toBeInTheDocument()
    expect(screen.getByText('05')).toBeInTheDocument()
    expect(screen.getByText('Optimización')).toBeInTheDocument()
  })

  it('renders "Deployment Flexibility" section with 4 options', () => {
    renderWithProviders(<ClawdBot />)
    expect(screen.getByText('Flexibilidad de Despliegue')).toBeInTheDocument()
    expect(screen.getByText('Cloud')).toBeInTheDocument()
    expect(screen.getByText('On-Premise')).toBeInTheDocument()
    expect(screen.getByText('Híbrido')).toBeInTheDocument()
    expect(screen.getByText('Contenedorizado')).toBeInTheDocument()
  })

  it('renders final CTA section', () => {
    renderWithProviders(<ClawdBot />)
    expect(screen.getByText('¿Listo para Desplegar tu Equipo de Agentes?')).toBeInTheDocument()
    expect(screen.getByText('Agendar Consultoría')).toBeInTheDocument()
  })
})

describe('ClawdBot Page — No specific agents or pricing', () => {
  it('does NOT mention specific agent names', () => {
    const fs = require('fs')
    const content = fs.readFileSync('./pages/ClawdBot.tsx', 'utf-8')
    // Should not reference our specific agents
    expect(content).not.toMatch(/\bTARS\b/)
    expect(content).not.toMatch(/\bCOOPER\b/)
    expect(content).not.toMatch(/\bMURPH\b/)
    expect(content).not.toMatch(/\bBRAND\b/)
    // MANN could appear in generic text, but not as agent name reference
    expect(content).not.toMatch(/name:\s*['"]MANN['"]/)
  })

  it('does NOT contain pricing tiers', () => {
    const fs = require('fs')
    const content = fs.readFileSync('./pages/ClawdBot.tsx', 'utf-8')
    expect(content).not.toContain('$997')
    expect(content).not.toContain('$2,997')
    expect(content).not.toContain('$7,997')
    expect(content).not.toContain('Starter')
    expect(content).not.toContain('Professional')
    expect(content).not.toContain('Enterprise')
  })

  it('is platform-agnostic (not tied to specific agent count)', () => {
    renderWithProviders(<ClawdBot />)
    const { container } = renderWithProviders(<ClawdBot />)
    const text = container.textContent || ''
    // Should not have "5 agents" or "133 tests" specific stats
    expect(text).not.toContain('133')
    expect(text).not.toContain('5 agentes especializados')
  })
})

describe('ClawdBot Page — Security', () => {
  it('no hardcoded secrets', () => {
    const fs = require('fs')
    const content = fs.readFileSync('./pages/ClawdBot.tsx', 'utf-8')
    expect(content).not.toMatch(/sk-proj-[A-Za-z0-9_-]{20,}/)
    expect(content).not.toMatch(/sk-ant-[A-Za-z0-9_-]{20,}/)
    expect(content).not.toMatch(/eyJhbGciOi[A-Za-z0-9_-]{50,}/)
  })

  it('SEO metadata is set', () => {
    renderWithProviders(<ClawdBot />)
    expect(screen.getByTestId('helmet')).toBeInTheDocument()
  })
})

describe('Home Page — Regression', () => {
  it('AgentTeamsSection is present on Home', () => {
    const fs = require('fs')
    const homeContent = fs.readFileSync('./pages/Home.tsx', 'utf-8')
    expect(homeContent).toContain('AgentTeamsSection')
    expect(homeContent).toContain('ComparisonTable')
    expect(homeContent).toContain('ChannelStrip')
  })

  it('all original sections still present on Home', () => {
    const fs = require('fs')
    const homeContent = fs.readFileSync('./pages/Home.tsx', 'utf-8')
    expect(homeContent).toContain('<Hero')
    expect(homeContent).toContain('<JudgmentSection')
    expect(homeContent).toContain('<FrameworkDeepDive')
    expect(homeContent).toContain('<Features')
    expect(homeContent).toContain('<TechStack')
    expect(homeContent).toContain('<Contact')
  })
})

describe('Routing & Navigation', () => {
  it('App.tsx has /clawd-bot route', () => {
    const fs = require('fs')
    const appContent = fs.readFileSync('./App.tsx', 'utf-8')
    expect(appContent).toContain('path="/clawd-bot"')
    expect(appContent).toContain('ClawdBot')
  })

  it('Navbar links to /clawd-bot page (not section scroll)', () => {
    const fs = require('fs')
    const navContent = fs.readFileSync('./components/Navbar.tsx', 'utf-8')
    expect(navContent).toContain("id: 'clawd-bot'")
    expect(navContent).toContain('isPage: true')
  })

  it('Navbar has bilingual labels', () => {
    const fs = require('fs')
    const navContent = fs.readFileSync('./components/Navbar.tsx', 'utf-8')
    expect(navContent).toContain("agentTeams: 'Equipos IA'")
    expect(navContent).toContain("agentTeams: 'AI Teams'")
  })
})

describe('English Content Verification', () => {
  it('contains English translations for all sections', () => {
    const fs = require('fs')
    const content = fs.readFileSync('./pages/ClawdBot.tsx', 'utf-8')
    // Hero
    expect(content).toContain('Your AI Team,')
    expect(content).toContain('Deployed.')
    // What is
    expect(content).toContain('What is OpenClaw?')
    // Expertise
    expect(content).toContain('Our Expertise')
    expect(content).toContain('Architecture Design')
    expect(content).toContain('Agent Coordination')
    // Framework
    expect(content).toContain('Our Framework')
    expect(content).toContain('Discovery')
    // Deployment
    expect(content).toContain('Deployment Flexibility')
    // CTA
    expect(content).toContain('Ready to Deploy Your Agent Team?')
    expect(content).toContain('Book Consultation')
  })
})
