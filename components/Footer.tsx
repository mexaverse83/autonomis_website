import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const content = {
    es: {
      tagline: "La plataforma de orquestación de agentes para empresas que buscan automatización real, escalable y gobernada.",
      solutions: "Soluciones",
      s1: "Soporte Automatizado",
      s2: "Ventas Outbound",
      s3: "Análisis de Datos",
      s4: "Casos de Éxito",
      resources: "Recursos",
      r1: "Documentación Técnica",
      r2: "API & SDKs",
      r3: "Comunidad Discord",
      r4: "Blog de Ingeniería",
      company: "Compañía",
      c1: "Sobre Autonomis",
      c2: "Carreras",
      c3: "Términos de Servicio",
      c4: "Contacto",
      rights: "© 2024 Autonomis Inc. Todos los derechos reservados."
    },
    en: {
      tagline: "The agent orchestration platform for enterprises seeking real, scalable, and governed automation.",
      solutions: "Solutions",
      s1: "Automated Support",
      s2: "Outbound Sales",
      s3: "Data Analysis",
      s4: "Success Stories",
      resources: "Resources",
      r1: "Technical Docs",
      r2: "API & SDKs",
      r3: "Discord Community",
      r4: "Engineering Blog",
      company: "Company",
      c1: "About Autonomis",
      c2: "Careers",
      c3: "Terms of Service",
      c4: "Contact",
      rights: "© 2024 Autonomis Inc. All rights reserved."
    }
  };

  const t = content[language];

  const scrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`py-8 sm:py-12 border-t ${isDark ? 'bg-black border-zinc-900' : 'bg-slate-50 border-zinc-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Logo className="w-6 h-6" isDark={isDark} />
              <span className={`font-bold text-lg tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}>Autonomis</span>
            </div>
            <p className={`text-sm pr-4 ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
              {t.tagline}
            </p>
          </div>

          <div>
            <h4 className={`font-medium mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.solutions}</h4>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
              <li><a href="#soluciones" onClick={(e) => scrollTo('soluciones', e)} className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-zinc-900'}`}>{t.s4}</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-medium mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.resources}</h4>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
              <li><a href="/blog" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-zinc-900'}`}>{t.r4}</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-medium mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.company}</h4>
            <ul className={`space-y-2 text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
              <li><a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-zinc-900'}`}>{t.c1}</a></li>
              <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-zinc-900'}`}>{t.c2}</a></li>
              <li><a href="#" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-zinc-900'}`}>{t.c3}</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo('contact', e)} className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-zinc-900'}`}>{t.c4}</a></li>
            </ul>
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t gap-4 ${isDark ? 'border-zinc-900' : 'border-zinc-200'}`}>
          <div className={`text-xs sm:text-sm text-center sm:text-left ${isDark ? 'text-zinc-600' : 'text-zinc-500'}`}>
            {t.rights}
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-400 hover:text-zinc-900'}`}><Github className="w-4 h-4 sm:w-5 sm:h-5" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-400 hover:text-zinc-900'}`}><Twitter className="w-4 h-4 sm:w-5 sm:h-5" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-400 hover:text-zinc-900'}`}><Linkedin className="w-4 h-4 sm:w-5 sm:h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};