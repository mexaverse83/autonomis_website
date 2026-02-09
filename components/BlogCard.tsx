import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Article } from '../data/articles';

interface BlogCardProps {
    article: Article;
    featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ article, featured = false }) => {
    return (
        <Link to={`/blog/${article.slug}`} className="group block h-full">
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`
          relative h-full flex flex-col overflow-hidden rounded-2xl 
          bg-white/5 border border-white/10 hover:border-blue-500/50 
          transition-colors duration-300
          ${featured ? 'lg:grid lg:grid-cols-2 lg:gap-8 bg-gradient-to-br from-white/5 to-white/0' : ''}
        `}
            >
                {/* Image Container */}
                <div className={`
          relative overflow-hidden
          ${featured ? 'h-64 lg:h-full' : 'h-48'}
        `}>
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                    {/* Category Badge */}
                    {article.category && (
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-blue-300 uppercase bg-blue-900/40 backdrop-blur-md border border-blue-500/30 rounded-full">
                                {article.category}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className={`
          flex flex-col justify-center p-6
          ${featured ? 'lg:p-12' : ''}
        `}>
                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{article.readTime}</span>
                        </div>
                    </div>

                    <h2 className={`
            font-bold text-white mb-3 group-hover:text-blue-400 transition-colors
            ${featured ? 'text-3xl lg:text-4xl leading-tight' : 'text-xl'}
          `}>
                        {article.title}
                    </h2>

                    <p className="text-gray-400 line-clamp-3 mb-6 flex-grow">
                        {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors mt-auto">
                        Read Article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </motion.article>
        </Link>
    );
};

export default BlogCard;
