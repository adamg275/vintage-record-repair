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
                <h1 id="shop-heading">Finished players, previous sales and stock worth asking about.</h1>
                <p>
                    This page shows the kind of machines we prepare and the standard of finish to expect. If something catches your eye,
                    send an enquiry and the form will be filled in for that exact player.
                </p>
            </div>

            <div className="shop-grid">
                {listings.map((listing) => {
                    const enquiryLabel = `Shop item: ${listing.title}`;
                    const isAvailable = listing.status === 'available';

                    return (
                        <article className={`shop-card ${listing.featured ? 'shop-card--featured' : ''}`} key={listing.slug}>
                            <div className="shop-card__image-wrap">
                                <img src={listing.image} alt={listing.alt} loading="lazy" />
                                <span className={`shop-card__status shop-card__status--${listing.status}`}>{statusLabel(listing.status)}</span>
                            </div>
                            <div className="shop-card__body">
                                <div className="shop-card__heading">
                                    <h2>{listing.title}</h2>
                                </div>
                                <p className="shop-card__meta">{listing.era} | {listing.condition}</p>
                                <p>{listing.shortDescription}</p>
                                <p className="shop-card__description">{listing.description}</p>
                                <div className="shop-card__actions">
                                    <button type="button" className="btn btn-primary" onClick={() => onSelectService(enquiryLabel)}>
                                        {isAvailable ? 'Ask about this player' : 'Ask about similar stock'}
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