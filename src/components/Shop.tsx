import type { ShopListing } from '../content/content';
import './Shop.css';

interface ShopProps {
    listings: ShopListing[];
    onSelectService: (service: string) => void;
}

function statusLabel(status: ShopListing['status']) {
    switch (status) {
        case 'available':
            return 'Available';
        case 'reserved':
            return 'Reserved';
        case 'sold':
            return 'Sold';
        default:
            return status;
    }
}

function Shop({ listings, onSelectService }: ShopProps) {
    return (
        <section className="shop-page" aria-labelledby="shop-heading">
            <div className="page-intro">
                <span className="section-label">Webshop</span>
                <h1 id="shop-heading">Sale listings that are easy to update, photograph and publish.</h1>
                <p>
                    Each listing is driven by Decap content. Add photographs, descriptions, prices and an optional checkout link.
                    If a PayPal checkout URL is present, the card shows a direct purchase button automatically.
                </p>
            </div>

            <div className="shop-grid">
                {listings.map((listing) => {
                    const enquiryLabel = `Shop enquiry - ${listing.title}`;
                    const isAvailable = listing.status === 'available';
                    const hasCheckout = Boolean(listing.checkoutUrl);

                    return (
                        <article className={`shop-card ${listing.featured ? 'shop-card--featured' : ''}`} key={listing.slug}>
                            <div className="shop-card__image-wrap">
                                <img src={listing.image} alt={listing.alt} loading="lazy" />
                                <span className={`shop-card__status shop-card__status--${listing.status}`}>{statusLabel(listing.status)}</span>
                            </div>
                            <div className="shop-card__body">
                                <div className="shop-card__heading">
                                    <h2>{listing.title}</h2>
                                    <span>{listing.price}</span>
                                </div>
                                <p className="shop-card__meta">{listing.era} · {listing.condition}</p>
                                <p>{listing.shortDescription}</p>
                                <p className="shop-card__description">{listing.description}</p>
                                <div className="shop-card__actions">
                                    {isAvailable && hasCheckout ? (
                                        <a className="btn btn-primary" href={listing.checkoutUrl} target="_blank" rel="noreferrer">Buy now</a>
                                    ) : (
                                        <button type="button" className="btn btn-primary" onClick={() => onSelectService(enquiryLabel)}>
                                            {isAvailable ? 'Ask about this player' : 'Ask for similar stock'}
                                        </button>
                                    )}
                                    <button type="button" className="btn btn-secondary" onClick={() => onSelectService(enquiryLabel)}>
                                        Enquire
                                    </button>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default Shop;

