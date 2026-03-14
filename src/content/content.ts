export interface SeoContent {
    siteName: string;
    defaultTitle: string;
    description: string;
    siteUrl?: string;
    keywords?: string[];
    ogImage?: string;
}

export interface BrandContent {
    businessName: string;
    tagline: string;
    serviceArea: string;
    responseTime: string;
    ebayUrl?: string;
}

export interface HeroContent {
    eyebrow: string;
    headline: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    trustPoints: string[];
}

export interface AboutContent {
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
}

export interface ContactContent {
    location: string;
    responseTime: string;
    email?: string;
    phone?: string;
    emailSetupNote?: string;
}

export interface SiteSettings {
    seo: SeoContent;
    brand: BrandContent;
    hero: HeroContent;
    about: AboutContent;
    specialisms: string[];
    contact: ContactContent;
}

export interface ServiceItem {
    name: string;
    price: string;
    summary: string;
}

export interface ServiceCategory {
    category: string;
    description: string;
    items: ServiceItem[];
}

export interface ServicePlanOption {
    name: string;
    price: string;
    summary: string;
    prefillService: string;
}

export interface ServicePlan {
    name: string;
    startingPrice: string;
    summary: string;
    includes: string[];
    options: ServicePlanOption[];
}

export interface ProcessStep {
    title: string;
    description: string;
}

export interface ServicesContent {
    categories: ServiceCategory[];
    note: string;
    processSteps: ProcessStep[];
    servicePlans: ServicePlan[];
    shippingNote: string;
}

export interface GalleryItem {
    title: string;
    image: string;
    alt: string;
    caption?: string;
    date: string;
    featured?: boolean;
    showOnWebsite?: boolean;
}

export interface ShopListing {
    slug: string;
    title: string;
    price: string;
    status: 'available' | 'reserved' | 'sold';
    condition: string;
    era: string;
    shortDescription: string;
    description: string;
    image: string;
    alt: string;
    featured?: boolean;
    showOnWebsite?: boolean;
    checkoutUrl?: string;
}

function getSingleton<T>(modules: Record<string, { default: T }>, name: string): T {
    const values = Object.values(modules);
    if (values.length === 0) {
        throw new Error(`Missing content file for ${name}.`);
    }

    return values[0].default;
}

function loadCollection<T>(modules: Record<string, { default: T }>): T[] {
    return Object.values(modules).map((module) => module.default);
}

export const siteSettings = getSingleton(
    import.meta.glob('./site/settings.json', { eager: true }) as Record<string, { default: SiteSettings }>,
    'site settings',
);

export const servicesContent = getSingleton(
    import.meta.glob('./site/services.json', { eager: true }) as Record<string, { default: ServicesContent }>,
    'services content',
);

export const galleryItems = loadCollection(
    import.meta.glob('./gallery/*.json', { eager: true }) as Record<string, { default: GalleryItem }>,
)
    .filter((item) => item.showOnWebsite !== false)
    .sort((left, right) => Date.parse(right.date) - Date.parse(left.date));

export const shopListings = loadCollection(
    import.meta.glob('./listings/*.json', { eager: true }) as Record<string, { default: ShopListing }>,
)
    .filter((listing) => listing.showOnWebsite !== false)
    .sort((left, right) => {
        const featuredOrder = Number(Boolean(right.featured)) - Number(Boolean(left.featured));
        if (featuredOrder !== 0) {
            return featuredOrder;
        }

        return left.title.localeCompare(right.title);
    });
