import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const channels = [
  { name: 'WhatsApp', logo: '/logos/whatsapp.png' },
  { name: 'Telegram', logo: '/logos/telegram.png' },
  { name: 'Discord', logo: '/logos/discord.png' },
  { name: 'Slack', logo: '/logos/slack.png' },
  { name: 'iMessage', logo: '/logos/imessage.png' },
  { name: 'WebChat', logo: '/logos/webchat.png' },
];

const duplicated = [...channels, ...channels];

export const ChannelStrip: React.FC = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const title = language === 'es'
    ? 'Funciona donde tú trabajas'
    : 'Works where you do';

  return (
    <section className={`py-12 border-t border-b relative overflow-hidden ${isDark ? 'bg-black border-zinc-900' : 'bg-slate-50 border-zinc-200'}`}>
      <div className={`absolute inset-0 z-10 pointer-events-none ${isDark ? 'bg-gradient-to-r from-black via-transparent to-black' : 'bg-gradient-to-r from-slate-50 via-transparent to-slate-50'}`} />

      <div className="max-w-7xl mx-auto px-6 text-center relative">
        <h3 className={`text-sm font-semibold uppercase tracking-widest mb-8 ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
          {title}
        </h3>

        <div className="relative overflow-hidden">
          <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${isDark ? 'bg-gradient-to-r from-black to-transparent' : 'bg-gradient-to-r from-slate-50 to-transparent'}`} />
          <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${isDark ? 'bg-gradient-to-l from-black to-transparent' : 'bg-gradient-to-l from-slate-50 to-transparent'}`} />

          <motion.div
            className="flex gap-8 items-center justify-center"
            animate={{ x: [0, -50 * channels.length * 3] }}
            transition={{ x: { duration: 30, repeat: Infinity, ease: 'linear' } }}
          >
            {duplicated.map((channel, i) => (
              <div
                key={`${channel.name}-${i}`}
                className={`flex items-center gap-3 px-5 py-3 rounded-full border shrink-0 ${isDark
                  ? 'border-zinc-800/50 bg-zinc-900/20'
                  : 'border-zinc-200 bg-white/80 shadow-sm'
                }`}
              >
                <div className={`w-8 h-8 rounded-full border p-1.5 flex items-center justify-center overflow-hidden ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'}`}>
                  <img
                    src={channel.logo}
                    alt={channel.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${channel.name}&background=${isDark ? '18181b' : 'f4f4f5'}&color=${isDark ? 'fff' : '18181b'}&size=32`;
                    }}
                  />
                </div>
                <span className={`text-sm font-medium whitespace-nowrap ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  {channel.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
