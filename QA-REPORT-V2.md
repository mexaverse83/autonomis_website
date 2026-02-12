# Website V2 QA Report — autonomis_website

**Commits:** `67c5e81` + `5ed2329`
**Date:** 2026-02-12

## Code Review Findings

### ✅ Code Snippets — ACCURATE
All 7 phases reviewed against actual OpenClaw framework:
- Phase 1 (AGENTS.md): Correct — matches real operating rules structure
- Phase 2 (SOUL.md): Correct — shows COOPER identity as example
- Phase 3 (MEMORY.md): Correct — shows real decisions/lessons format
- Phase 4 (Skills): Correct — weather skill example matches real skill structure
- Phase 5 (Messaging): Correct — file-based Redis messaging paths match real system
- Phase 6 (Deployment): Correct — openclaw CLI commands accurate
- Phase 7 (Orchestration): Correct — team roles match actual squad structure

### ✅ Bilingual Content (EN/ES)
- All 7 framework phases have both ES and EN translations
- Hero section: both languages present
- ComparisonTable: both languages
- ChannelStrip: both languages
- ClawdBot page: all sections bilingual
- No missing translations found

### ✅ New Components
- **ComparisonTable**: Clean comparison vs CrewAI/LangChain/AutoGen. Check/X/Minus icons render correctly.
- **ChannelStrip**: Infinite scroll carousel of channel logos. Uses `onError` fallback to ui-avatars.com — good.

### ⚠️ Issues Found

1. **MEDIUM — Channel logo paths may 404**
   - `ChannelStrip.tsx` references `/logos/whatsapp.png`, `/logos/telegram.png`, etc.
   - Need to verify these files exist in `/public/logos/`
   - Has fallback via `onError` handler, so not critical

2. **LOW — ComparisonTable header says "Autonomis" not "OpenClaw"**
   - Column header uses `Autonomis` but site is pivoting to OpenClaw branding
   - Consider updating to match new positioning

3. **LOW — ChannelStrip animation may cause issues on low-end mobile**
   - Infinite scroll with `animate={{ x: [0, -50 * channels.length * 3] }}` 
   - `duration: 30` is reasonable but no `prefers-reduced-motion` respect

4. **INFO — Home page section order**
   - Hero → Judgment → Framework → Features → AgentTeams → Comparison → Channels → TechStack → Contact
   - ComparisonTable and ChannelStrip sit between AgentTeams and TechStack — makes sense

### Test Results
- **21/21 passing** (updated for new content)
- Tests updated: hero headline, "What is" section, bullet points, Home page composition, English translations
