import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    article?: boolean;
    slug?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    image,
    article,
    slug = ''
}) => {
    const siteName = 'Autonomis';
    const defaultTitle = 'Autonomis | Automatización de IA Empresarial';
    const defaultDescription = 'Despliegue fuerzas de trabajo autónomas que razonan, planifican y ejecutan. Un marco de trabajo probado desde la ingesta de datos hasta la gobernanza.';
    const siteUrl = 'https://autonomis.co';
    const defaultImage = `${siteUrl}/og-image.png`;

    const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
    const fullDescription = description || defaultDescription;
    const fullImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;
    const fullUrl = `${siteUrl}${slug}`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={fullDescription} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={fullDescription} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={fullDescription} />
            <meta name="twitter:image" content={fullImage} />
        </Helmet>
    );
};
