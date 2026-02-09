import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TableOfContentsProps {
    content?: string; // We might need to parse this or just pass the headers if we pre-process
}

// Since we are using dangerouslySetInnerHTML, we need to find headers from the DOM
// after the content renders.

const TableOfContents: React.FC = () => {
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // Wait for content to render
        const timeout = setTimeout(() => {
            const articleContent = document.getElementById('article-content');
            if (!articleContent) return;

            const elements = Array.from(articleContent.querySelectorAll('h2, h3'));
            const items = elements.map((elem, index) => {
                if (!elem.id) {
                    elem.id = `heading-${index}`;
                }
                return {
                    id: elem.id,
                    text: elem.textContent || '',
                    level: Number(elem.tagName.charAt(1)),
                };
            });
            setHeadings(items);
        }, 500); // Small delay to ensure render

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const headingElements = headings.map(h => document.getElementById(h.id));

            const current = headingElements.find(elem => {
                if (!elem) return false;
                const rect = elem.getBoundingClientRect();
                return rect.top >= 0 && rect.top <= 300; // Check if it's in the top viewport area
            });

            if (current) {
                setActiveId(current.id);
            } else if (window.scrollY < 100) {
                setActiveId('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <nav className="hidden lg:block sticky top-24 self-start max-h-[80vh] overflow-y-auto pr-4">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                On this page
            </h4>
            <ul className="space-y-1">
                {headings.map((heading) => (
                    <li key={heading.id}
                        className={`transition-colors duration-200 ${heading.level === 3 ? 'pl-4' : ''}`}
                    >
                        <a
                            href={`#${heading.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(heading.id);
                                if (element) {
                                    const y = element.getBoundingClientRect().top + window.pageYOffset - 100; // Offset for sticky header
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }}
                            className={`
                block text-sm py-1 border-l-2 pl-4 transition-all
                ${activeId === heading.id
                                    ? 'border-blue-500 text-blue-400 font-medium'
                                    : 'border-transparent text-gray-500 hover:text-gray-300 hover:border-gray-700'}
              `}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
