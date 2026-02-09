import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { articles } from '../data/articles';
import { ArrowLeft, ArrowRight, Clock, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

// Translations
const translations = {
    es: {
        home: 'Inicio',
        insights: 'Artículos',
        by: 'por',
        search: 'Buscar...',
        readMore: 'Leer más',
        moreArticles: 'Más Artículos',
        noArticles: 'No se encontraron artículos.',
        clearFilters: 'Limpiar filtros',
        byAuthor: 'Por',
        all: 'Todos',
        seoTitle: 'Blog | Autonomis',
        seoDescription: 'Artículos, tutoriales y casos de estudio sobre agentes de IA, automatización y la ingeniería detrás de ellos.'
    },
    en: {
        home: 'Home',
        insights: 'Insights',
        by: 'by',
        search: 'Search...',
        readMore: 'Read more',
        moreArticles: 'More Articles',
        noArticles: 'No articles found matching your criteria.',
        clearFilters: 'Clear filters',
        byAuthor: 'By',
        all: 'All',
        seoTitle: 'Blog | Autonomis',
        seoDescription: 'Insights, tutorials, and case studies on AI agents, automation, and the detailed engineering behind them.'
    }
};

// Featured Article Card - Large hero style (Theme-aware)
const FeaturedArticle: React.FC<{ article: typeof articles[0]; reversed?: boolean; t: typeof translations['en']; language: 'en' | 'es'; isDark: boolean }> = ({ article, reversed = false, t, language, isDark }) => {
    const content = article[language];
    return (
        <Link to={`/blog/${article.slug}`} className="group block">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${reversed ? 'lg:direction-rtl' : ''}`}
            >
                {/* Text Content */}
                <div className={`space-y-3 sm:space-y-4 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    {content.category && (
                        <p className={`text-xs sm:text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                            {content.category}
                        </p>
                    )}
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight transition-colors ${isDark ? 'text-white group-hover:text-indigo-400' : 'text-zinc-900 group-hover:text-indigo-600'}`}>
                        {content.title}
                    </h2>
                    <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {content.excerpt}
                    </p>
                    <div className={`flex items-center gap-2 sm:gap-4 text-xs sm:text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                        <span>{t.byAuthor} {article.author}</span>
                        <span className={`w-1 h-1 rounded-full ${isDark ? 'bg-zinc-600' : 'bg-zinc-400'}`} />
                        <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>{content.readTime}</span>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className={`${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className={`relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border ${isDark ? 'border-white/10' : 'border-zinc-200 shadow-lg'}`}>
                        <img
                            src={article.image}
                            alt={content.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/40 to-transparent' : 'bg-gradient-to-t from-black/20 to-transparent'}`} />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

// Small Article Card - Grid style (Theme-aware)
const ArticleCard: React.FC<{ article: typeof articles[0]; showImage?: boolean; t: typeof translations['en']; language: 'en' | 'es'; isDark: boolean }> = ({ article, showImage = true, t, language, isDark }) => {
    const content = article[language];
    return (
        <Link to={`/blog/${article.slug}`} className="group block">
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="h-full"
            >
                {showImage && (
                    <div className={`relative aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4 border ${isDark ? 'border-white/10' : 'border-zinc-200 shadow-md'}`}>
                        <img
                            src={article.image}
                            alt={content.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/40 to-transparent' : 'bg-gradient-to-t from-black/20 to-transparent'}`} />
                    </div>
                )}
                {content.category && (
                    <p className={`text-xs font-semibold uppercase tracking-wider mb-1.5 sm:mb-2 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                        {content.category}
                    </p>
                )}
                <h3 className={`text-base sm:text-lg lg:text-xl font-bold transition-colors leading-snug ${isDark ? 'text-white group-hover:text-indigo-400' : 'text-zinc-900 group-hover:text-indigo-600'}`}>
                    {content.title}
                </h3>
                {!showImage && (
                    <div className={`mt-2 flex items-center text-xs sm:text-sm font-medium group-hover:gap-2 transition-all ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                        <span>{t.readMore}</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1" />
                    </div>
                )}
            </motion.article>
        </Link>
    );
};

// Article Grid - 4 columns (Theme-aware)
const ArticleGrid: React.FC<{ articles: typeof articles; showImages?: boolean; t: typeof translations['en']; language: 'en' | 'es'; isDark: boolean }> = ({ articles: gridArticles, showImages = true, t, language, isDark }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {gridArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} showImage={showImages} t={t} language={language} isDark={isDark} />
            ))}
        </div>
    );
};

const BlogIndex: React.FC = () => {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const t = translations[language];
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    // Extract unique categories (based on current language)
    const categories = useMemo(() => {
        const cats = new Set(articles.map(a => a[language].category).filter(Boolean));
        return [language === 'es' ? 'Todos' : 'All', ...Array.from(cats)];
    }, [language]);

    // Filter articles
    const filteredArticles = useMemo(() => {
        // Check if showing all articles (either language's "all" label)
        const isShowingAll = selectedCategory === 'All' || selectedCategory === 'Todos';
        return articles.filter(article => {
            const content = article[language];
            const matchesCategory = isShowingAll || content.category === selectedCategory;
            const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                content.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery, language]);

    // Split articles into sections
    const heroArticle1 = filteredArticles[0];
    const gridArticles1 = filteredArticles.slice(1, 5);
    const heroArticle2 = filteredArticles[5];
    const gridArticles2 = filteredArticles.slice(6, 10);

    return (
        <>
            <SEO
                title={t.seoTitle}
                description={t.seoDescription}
            />

            <div className={`min-h-screen pt-24 pb-20 relative overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-slate-50 text-zinc-900'}`}>
                {/* Background Gradients - Responsive */}
                <div className={`absolute top-0 right-0 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none ${isDark ? 'bg-indigo-900/20' : 'bg-indigo-500/10'}`} />
                <div className={`absolute bottom-0 left-0 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] pointer-events-none ${isDark ? 'bg-purple-900/10' : 'bg-purple-500/5'}`} />

                {/* Header Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Logo/Title */}
                    <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 py-4 sm:py-6 border-b mb-8 sm:mb-12 ${isDark ? 'border-white/10' : 'border-zinc-200'}`}>
                        <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start">
                            <Link
                                to="/"
                                className={`group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full border text-xs sm:text-sm transition-all duration-200 ${isDark
                                        ? 'bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20'
                                        : 'bg-white border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 hover:border-zinc-300 shadow-sm'
                                    }`}
                            >
                                <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:-translate-x-0.5" />
                                <span>{t.home}</span>
                            </Link>

                            {/* Mobile Title - Only shows on small screens */}
                            <Link to="/blog" className="sm:hidden group block text-center">
                                <h1 className={`text-xl font-bold tracking-tight bg-clip-text text-transparent ${isDark
                                        ? 'bg-gradient-to-r from-white via-indigo-200 to-white'
                                        : 'bg-gradient-to-r from-zinc-900 via-indigo-600 to-zinc-900'
                                    }`}>
                                    {t.insights}
                                </h1>
                            </Link>
                        </div>

                        {/* Desktop Title - Hidden on mobile */}
                        <Link to="/blog" className="hidden sm:block group text-center">
                            <div className="relative inline-block">
                                <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent ${isDark
                                        ? 'bg-gradient-to-r from-white via-indigo-200 to-white'
                                        : 'bg-gradient-to-r from-zinc-900 via-indigo-600 to-zinc-900'
                                    }`}>
                                    {t.insights}
                                </h1>
                                {/* Animated underline accent */}
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-300" />
                            </div>
                            <p className={`text-xs uppercase tracking-widest mt-2 font-medium ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                                {t.by} <span className={isDark ? 'text-indigo-400' : 'text-indigo-600'}>Autonomis</span>
                            </p>
                        </Link>

                        {/* Search */}
                        <div className="relative w-full sm:w-auto">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder={t.search}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={`rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors w-full sm:w-48 ${isDark
                                        ? 'bg-white/5 border border-white/10 text-white placeholder:text-zinc-500'
                                        : 'bg-white border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 shadow-sm'
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Category Pills */}
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat as string)}
                                className={`
                                    px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0
                                    ${selectedCategory === cat
                                        ? 'bg-indigo-600 text-white'
                                        : isDark
                                            ? 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10'
                                            : 'bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 border border-zinc-200 shadow-sm'}
                                `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-12 sm:space-y-16 lg:space-y-20">
                        {/* Featured Article 1 */}
                        {heroArticle1 && (
                            <section>
                                <FeaturedArticle article={heroArticle1} t={t} language={language} isDark={isDark} />
                            </section>
                        )}

                        {/* Article Grid 1 */}
                        {gridArticles1.length > 0 && (
                            <section>
                                <ArticleGrid articles={gridArticles1} t={t} language={language} isDark={isDark} />
                            </section>
                        )}

                        {/* Featured Article 2 (reversed) */}
                        {heroArticle2 && (
                            <section>
                                <FeaturedArticle article={heroArticle2} reversed t={t} language={language} isDark={isDark} />
                            </section>
                        )}

                        {/* Article Grid 2 - Text only style */}
                        {gridArticles2.length > 0 && (
                            <section className={`-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 rounded-xl sm:rounded-2xl lg:rounded-3xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-zinc-200 shadow-sm'
                                }`}>
                                <h3 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${isDark ? 'text-white' : 'text-zinc-900'}`}>{t.moreArticles}</h3>
                                <ArticleGrid articles={gridArticles2} showImages={false} t={t} language={language} isDark={isDark} />
                            </section>
                        )}
                    </div>

                    {/* Empty State */}
                    {filteredArticles.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-zinc-500 text-lg">{t.noArticles}</p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                                className={`mt-4 font-medium ${isDark ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'}`}
                            >
                                {t.clearFilters}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export { BlogIndex };
