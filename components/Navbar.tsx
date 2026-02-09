import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Globe, Sun, Moon, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = {
    es: {
      solutions: 'Soluciones',
      methodology: 'Metodología',
      tools: 'Herramientas',
      agentTeams: 'Equipos IA',
      demo: 'Agendar Llamada'
    },
    en: {
      solutions: 'Solutions',
      methodology: 'Methodology',
      tools: 'Tools',
      agentTeams: 'AI Teams',
      demo: 'Book a Call'
    }
  };

  const t = content[language];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: t.solutions, id: 'soluciones' },
    { label: t.methodology, id: 'metodologia' },
    { label: t.tools, id: 'herramientas' },
    { label: t.agentTeams, id: 'clawd-bot', isPage: true }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex items-center justify-center transition-transform group-hover:scale-105">
              <Logo className="w-7 h-7 sm:w-8 sm:h-8" isDark={theme === 'dark'} />
            </div>
            <span className={`font-bold text-lg sm:text-xl tracking-tight ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>Autonomis</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.label}
                  to={`/${item.id}`}
                  className={`text-sm transition-colors font-medium ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'}`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => {
                    if (window.location.pathname !== '/') {
                      window.location.href = `/#${item.id}`;
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className={`text-sm transition-colors font-medium bg-transparent border-none cursor-pointer ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                >
                  {item.label}
                </button>
              )
            ))}
            <Link
              to="/blog"
              className={`text-sm transition-colors font-medium ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                }`}
            >
              Blog
            </Link>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${theme === 'dark'
                ? 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
                }`}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 sm:gap-2 text-xs font-mono transition-colors px-2 py-1 rounded border border-transparent ${theme === 'dark'
                ? 'text-zinc-400 hover:text-white hover:border-zinc-800'
                : 'text-zinc-600 hover:text-zinc-900 hover:border-zinc-300'
                }`}
            >
              <Globe className="w-3 h-3" />
              <span>{language === 'es' ? 'ES' : 'EN'}</span>
            </button>

            {/* CTA Button - Hidden on mobile */}
            <Button variant="primary" className="hidden sm:flex h-9 px-4 text-xs" onClick={() => scrollToSection('contact')}>
              {t.demo}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${theme === 'dark'
                ? 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
                }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm`} />
        </div>
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-[60] md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className={`mx-4 rounded-xl border shadow-xl ${
          theme === 'dark'
            ? 'bg-zinc-900/95 border-zinc-800'
            : 'bg-white/95 border-zinc-200'
        } backdrop-blur-lg`}>
          <div className="py-4 px-6 space-y-1">
            {navItems.map((item) => (
              item.isPage ? (
                <Link
                  key={item.label}
                  to={`/${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                    theme === 'dark' ? 'text-zinc-300 hover:bg-zinc-800' : 'text-zinc-700 hover:bg-zinc-100'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
              <button
                key={item.label}
                onClick={() => {
                  if (window.location.pathname !== '/') {
                    window.location.href = `/#${item.id}`;
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className={`w-full text-left py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                  theme === 'dark'
                    ? 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                    : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {item.label}
              </button>
              )
            ))}
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`block w-full text-left py-3 px-4 rounded-lg text-base font-medium transition-colors ${
                theme === 'dark'
                  ? 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                  : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              Blog
            </Link>

            {/* Mobile CTA Button */}
            <div className="pt-3 px-4">
              <Button
                variant="primary"
                className="w-full h-11 text-sm"
                onClick={() => scrollToSection('contact')}
              >
                {t.demo}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
