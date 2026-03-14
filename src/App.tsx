import { useEffect, useMemo, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Seo from './components/Seo';
import Services from './components/Services';
import Shop from './components/Shop';
import { galleryItems, servicesContent, shopListings, siteSettings } from './content/content';

function normalisePath(pathname: string) {
    if (pathname === '/' || pathname === '') {
        return '/';
    }

    return pathname.replace(/\/$/, '');
}

function scrollToHash(hash: string) {
    if (!hash) {
        return;
    }

    const id = hash.replace('#', '');
    window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

function App() {
    const [currentPath, setCurrentPath] = useState(() => normalisePath(window.location.pathname));
    const [selectedService, setSelectedService] = useState(() => new URLSearchParams(window.location.search).get('service') ?? '');

    useEffect(() => {
        const onPopState = () => {
            setCurrentPath(normalisePath(window.location.pathname));
            setSelectedService(new URLSearchParams(window.location.search).get('service') ?? '');
            scrollToHash(window.location.hash);
        };

        window.addEventListener('popstate', onPopState);
        scrollToHash(window.location.hash);
        return () => window.removeEventListener('popstate', onPopState);
    }, []);

    const handleSelectService = (service: string) => {
        setSelectedService(service);
        const url = new URL(window.location.href);
        url.searchParams.set('service', service);
        url.hash = 'contact';
        window.history.replaceState({}, '', url);
        scrollToHash('#contact');
    };

    const featuredGalleryImage = galleryItems.find((item) => item.featured) ?? galleryItems[0];

    const serviceOptions = useMemo(
        () => [
            ...servicesContent.categories.flatMap((category) => category.items.map((item) => item.name)),
            ...servicesContent.servicePlans.flatMap((plan) => plan.options.map((option) => option.prefillService)),
            ...shopListings.map((listing) => `Shop item: ${listing.title}`),
        ],
        [],
    );

    const pageMeta = useMemo(() => {
        switch (currentPath) {
            case '/how-it-works':
                return {
                    title: `How It Works | ${siteSettings.seo.defaultTitle}`,
                    description: 'Choose a repair or restoration service, compare self-shipping against courier-included pricing and book the right route for your player.',
                };
            case '/shop':
                return {
                    title: `Shop | ${siteSettings.seo.defaultTitle}`,
                    description: 'Browse restored and previously sold vintage record players with editable descriptions, images and optional PayPal checkout links.',
                };
            default:
                return {
                    title: siteSettings.seo.defaultTitle,
                    description: siteSettings.seo.description,
                };
        }
    }, [currentPath]);

    const structuredData = useMemo(() => {
        const baseBusiness = {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: siteSettings.brand.businessName,
            description: siteSettings.seo.description,
            areaServed: siteSettings.brand.serviceArea,
            image: siteSettings.seo.ogImage,
            url: siteSettings.seo.siteUrl || undefined,
            email: siteSettings.contact.email || undefined,
        };

        if (currentPath === '/shop') {
            return {
                '@context': 'https://schema.org',
                '@type': 'CollectionPage',
                name: 'Vintage record player shop',
                mainEntity: {
                    '@type': 'ItemList',
                    itemListElement: shopListings.map((listing, index) => ({
                        '@type': 'ListItem',
                        position: index + 1,
                        item: {
                            '@type': 'Product',
                            name: listing.title,
                            description: listing.description,
                            image: listing.image,
                            offers: {
                                '@type': 'Offer',
                                priceCurrency: 'GBP',
                                price: listing.price.replace(/[^\d.]/g, ''),
                                availability: listing.status === 'available'
                                    ? 'https://schema.org/InStock'
                                    : listing.status === 'reserved'
                                        ? 'https://schema.org/LimitedAvailability'
                                        : 'https://schema.org/SoldOut',
                            },
                        },
                    })),
                },
            };
        }

        return baseBusiness;
    }, [currentPath]);

    const showHome = currentPath !== '/shop' && currentPath !== '/how-it-works';

    return (
        <>
            <Seo
                title={pageMeta.title}
                description={pageMeta.description}
                siteName={siteSettings.seo.siteName}
                path={currentPath}
                image={siteSettings.seo.ogImage}
                siteUrl={siteSettings.seo.siteUrl}
                keywords={siteSettings.seo.keywords}
                structuredData={structuredData}
            />
            <a className="skip-link" href="#main-content">Skip to main content</a>
            <Header currentPath={currentPath} />
            <main id="main-content">
                {showHome ? (
                    <>
                        <Hero content={siteSettings.hero} featuredImage={featuredGalleryImage} />
                        <About content={siteSettings.about} specialisms={siteSettings.specialisms} ebayUrl={siteSettings.brand.ebayUrl} />
                        <Services content={servicesContent} onSelectService={handleSelectService} />
                        <Gallery items={galleryItems} />
                    </>
                ) : null}

                {currentPath === '/how-it-works' ? (
                    <HowItWorks content={servicesContent} onSelectService={handleSelectService} />
                ) : null}

                {currentPath === '/shop' ? (
                    <Shop listings={shopListings} onSelectService={handleSelectService} />
                ) : null}

                <Contact selectedService={selectedService} serviceOptions={serviceOptions} contact={siteSettings.contact} />
            </main>
            <Footer brand={siteSettings.brand} contact={siteSettings.contact} />
        </>
    );
}

export default App;