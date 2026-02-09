import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { SEO } from '../components/SEO';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, Linkedin, Twitter, Copy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

// Translations
const translations = {
    es: {
        articleNotFound: 'Artículo No Encontrado',
        returnToBlog: 'Volver al Blog',
        backToInsights: 'Volver a Artículos',
        share: 'Compartir:',
        shareOnLinkedIn: 'Compartir en LinkedIn',
        shareOnTwitter: 'Compartir en Twitter',
        copyLink: 'Copiar enlace',
        authorBio: 'Escritor contribuidor en Autonomis, cubriendo agentes de IA, automatización y tecnología empresarial.',
        moreFromInsights: 'Más de Artículos'
    },
    en: {
        articleNotFound: 'Article Not Found',
        returnToBlog: 'Return to Blog',
        backToInsights: 'Back to Insights',
        share: 'Share:',
        shareOnLinkedIn: 'Share on LinkedIn',
        shareOnTwitter: 'Share on Twitter',
        copyLink: 'Copy link',
        authorBio: 'Contributing writer at Autonomis, covering AI agents, automation, and enterprise technology.',
        moreFromInsights: 'More from Insights'
    }
};

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { language } = useLanguage();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const t = translations[language];
    const article = articles.find((a) => a.slug === slug);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    if (!article) {
        return (
            <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${isDark ? 'bg-black' : 'bg-slate-50'}`}>
                <h1 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.articleNotFound}</h1>
                <Link to="/blog" className={isDark ? 'text-indigo-400 hover:underline' : 'text-indigo-600 hover:underline'}>{t.returnToBlog}</Link>
            </div>
        );
    }

    // Handle Share
    const handleShare = (platform?: string) => {
        const url = window.location.href;
        const text = article[language].title;

        if (platform === 'linkedin') {
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        } else if (platform === 'twitter') {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        } else {
            navigator.clipboard.writeText(url);
        }
    };

    return (
        <>
            <SEO
                title={`${article[language].title} | Autonomis`}
                description={article[language].excerpt}
                image={article.image}
                type="article"
            />

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
                style={{ scaleX }}
            />

            <article className={`min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20 relative overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-slate-50 text-zinc-900'}`}>
                {/* Background Gradients */}
                <div className={`absolute top-0 right-0 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none ${isDark ? 'bg-indigo-900/20' : 'bg-indigo-500/10'}`} />
                <div className={`absolute bottom-1/2 left-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none ${isDark ? 'bg-purple-900/10' : 'bg-purple-500/5'}`} />

                {/* Navigation */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 relative z-10">
                    <Link to="/blog" className={`inline-flex items-center transition-colors gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium group ${isDark ? 'text-zinc-500 hover:text-white' : 'text-zinc-500 hover:text-zinc-900'}`}>
                        <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-1" />
                        {t.backToInsights}
                    </Link>
                </div>

                {/* Article Header */}
                <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 relative z-10">
                    {/* Category */}
                    {article[language].category && (
                        <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3 sm:mb-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                            {article[language].category}
                        </p>
                    )}

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}
                    >
                        {article[language].title}
                    </motion.h1>

                    {/* Excerpt */}
                    <p className={`text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {article[language].excerpt}
                    </p>

                    {/* Meta */}
                    <div className={`flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm pb-6 sm:pb-8 border-b ${isDark ? 'text-zinc-500 border-white/10' : 'text-zinc-500 border-zinc-200'}`}>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm sm:text-base font-bold">
                                {article.author.charAt(0)}
                            </div>
                            <div>
                                <p className={`font-medium text-xs sm:text-sm ${isDark ? 'text-white' : 'text-zinc-900'}`}>{article.author}</p>
                                <p className={`text-[10px] sm:text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{article.date}</p>
                            </div>
                        </div>
                        <span className={`hidden sm:block w-1 h-1 rounded-full ${isDark ? 'bg-zinc-600' : 'bg-zinc-400'}`} />
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>{article[language].readTime}</span>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 relative z-10">
                    <div className={`relative aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border ${isDark ? 'border-white/10' : 'border-zinc-200 shadow-lg'}`}>
                        <img
                            src={article.image}
                            alt={article[language].title}
                            className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/30 to-transparent' : 'bg-gradient-to-t from-black/10 to-transparent'}`} />
                    </div>
                </div>

                {/* Article Content */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div
                        id="article-content"
                        className={`prose prose-lg max-w-none ${isDark ? 'prose-invert' : ''}`}
                        dangerouslySetInnerHTML={{ __html: article[language].content }}
                    />

                    {/* Share Section */}
                    <div className={`mt-8 sm:mt-12 pt-6 sm:pt-8 border-t ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {article[language].tags.map(tag => (
                                    <span key={tag} className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm transition-colors cursor-default border ${isDark ? 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border-white/10' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 border-zinc-200'}`}>
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <span className="text-xs sm:text-sm text-zinc-500 mr-1 sm:mr-2">{t.share}</span>
                                <button
                                    onClick={() => handleShare('linkedin')}
                                    className={`p-2 rounded-full transition-colors border ${isDark ? 'bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border-white/10' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 border-zinc-200'}`}
                                    title={t.shareOnLinkedIn}
                                >
                                    <Linkedin className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleShare('twitter')}
                                    className={`p-2 rounded-full transition-colors border ${isDark ? 'bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border-white/10' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 border-zinc-200'}`}
                                    title={t.shareOnTwitter}
                                >
                                    <Twitter className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => handleShare()}
                                    className={`p-2 rounded-full transition-colors border ${isDark ? 'bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border-white/10' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 border-zinc-200'}`}
                                    title={t.copyLink}
                                >
                                    <Copy className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Author Bio */}
                    <div className={`mt-8 sm:mt-12 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-zinc-200 shadow-sm'}`}>
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-base sm:text-lg lg:text-xl font-bold flex-shrink-0">
                                {article.author.charAt(0)}
                            </div>
                            <div>
                                <p className={`font-bold text-base sm:text-lg ${isDark ? 'text-white' : 'text-zinc-900'}`}>{article.author}</p>
                                <p className={`mt-1 text-sm sm:text-base ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                    {t.authorBio}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Related Articles */}
                    <div className="mt-10 sm:mt-16">
                        <h3 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.moreFromInsights}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                            {articles
                                .filter(a => a.slug !== article.slug)
                                .slice(0, 2)
                                .map(relatedArticle => (
                                    <Link key={relatedArticle.slug} to={`/blog/${relatedArticle.slug}`} className="group">
                                        <div className={`aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4 border ${isDark ? 'border-white/10' : 'border-zinc-200 shadow-md'}`}>
                                            <img
                                                src={relatedArticle.image}
                                                alt={relatedArticle[language].title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        {relatedArticle[language].category && (
                                            <p className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1.5 sm:mb-2 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                                                {relatedArticle[language].category}
                                            </p>
                                        )}
                                        <h4 className={`text-base sm:text-lg font-bold transition-colors leading-snug ${isDark ? 'text-white group-hover:text-indigo-400' : 'text-zinc-900 group-hover:text-indigo-600'}`}>
                                            {relatedArticle[language].title}
                                        </h4>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export { BlogPost };
