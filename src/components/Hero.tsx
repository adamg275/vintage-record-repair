import type { GalleryItem, HeroContent } from '../content/content';
import './Hero.css';

interface HeroProps {
    content: HeroContent;
    featuredImage?: GalleryItem;
    specialisms: string[];
}

function Hero({ content, featuredImage, specialisms }: HeroProps) {
    const reelItems = [...specialisms, 'Workshop assessments', 'Restoration enquiries', 'Sale stock'].filter(Boolean);

    return (
        <section className="hero" id="home" aria-labelledby="hero-heading">
            <div className="hero__grain" aria-hidden="true"></div>
            <div className="hero__inner">
                <div className="hero__copy">
                    <span className="section-label">{content.eyebrow}</span>
                    <h1 id="hero-heading">{content.headline}</h1>
                    <p className="hero__description">{content.description}</p>
                    <div className="hero__actions">
                        <a className="btn btn-primary" href="#contact">{content.primaryCtaLabel}</a>
                        <a className="btn btn-secondary" href="/how-it-works">{content.secondaryCtaLabel}</a>
                    </div>
                    <ul className="hero__trust-list">
                        {content.trustPoints.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </div>

                <div className="hero__panel">
                    <div className="hero__record" aria-hidden="true">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="hero__image-card">
                        {featuredImage ? (
                            <img src={featuredImage.image} alt={featuredImage.alt} />
                        ) : (
                            <div className="hero__image-fallback"></div>
                        )}
                        <div className="hero__image-caption">
                            <strong>{featuredImage?.title ?? 'Workshop ready'}</strong>
                            <span>{featuredImage?.caption ?? 'Repair, restoration and sale preparation handled from one workshop.'}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero__reel" aria-label="Workshop specialisms">
                <div className="hero__reel-track">
                    {[...reelItems, ...reelItems].map((item, index) => (
                        <span key={`${item}-${index}`}>{item}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;