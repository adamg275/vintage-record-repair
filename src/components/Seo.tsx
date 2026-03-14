import { useEffect } from 'react';

interface SeoProps {
    title: string;
    description: string;
    siteName: string;
    path: string;
    image?: string;
    siteUrl?: string;
    keywords?: string[];
    structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

function ensureMeta(attribute: 'name' | 'property', value: string) {
    const selector = `meta[${attribute}="${value}"]`;
    let element = document.head.querySelector(selector) as HTMLMetaElement | null;

    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
    }

    return element;
}

function ensureLink(rel: string) {
    let element = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

    if (!element) {
        element = document.createElement('link');
        element.rel = rel;
        document.head.appendChild(element);
    }

    return element;
}

export default function Seo({
    title,
    description,
    siteName,
    path,
    image,
    siteUrl,
    keywords,
    structuredData,
}: SeoProps) {
    useEffect(() => {
        document.title = title;

        ensureMeta('name', 'description').content = description;
        ensureMeta('property', 'og:title').content = title;
        ensureMeta('property', 'og:description').content = description;
        ensureMeta('property', 'og:type').content = 'website';
        ensureMeta('property', 'og:site_name').content = siteName;
        ensureMeta('name', 'twitter:card').content = image ? 'summary_large_image' : 'summary';
        ensureMeta('name', 'twitter:title').content = title;
        ensureMeta('name', 'twitter:description').content = description;

        if (keywords && keywords.length > 0) {
            ensureMeta('name', 'keywords').content = keywords.join(', ');
        }

        if (image) {
            ensureMeta('property', 'og:image').content = image;
            ensureMeta('name', 'twitter:image').content = image;
        }

        if (siteUrl) {
            const canonicalUrl = new URL(path === '/' ? '/' : path, `${siteUrl.replace(/\/$/, '')}/`).toString();
            ensureLink('canonical').href = canonicalUrl;
            ensureMeta('property', 'og:url').content = canonicalUrl;
        }

        if (structuredData) {
            let script = document.getElementById('structured-data') as HTMLScriptElement | null;
            if (!script) {
                script = document.createElement('script');
                script.id = 'structured-data';
                script.type = 'application/ld+json';
                document.head.appendChild(script);
            }

            script.textContent = JSON.stringify(structuredData);
        }
    }, [description, image, keywords, path, siteName, siteUrl, structuredData, title]);

    return null;
}
