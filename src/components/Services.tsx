import './Services.css';

interface ServicesProps {
    onEnquire: (service: string) => void;
}

function Services({ onEnquire }: ServicesProps) {
    const pound = '\u00A3';

    const services = [
        {
            category: 'Repairs',
            description: 'Targeted fixes for specific issues',
            items: [
                { name: 'Diagnostic Assessment', price: 'Free with repair' },
                { name: 'Motor Repair/Replacement', price: `From ${pound}40` },
                { name: 'Belt Replacement', price: `From ${pound}15` },
                { name: 'Electrical Fault Repair', price: `From ${pound}30` },
                { name: 'Speaker Repair/Replacement', price: `From ${pound}25` },
                { name: 'Stylus/Cartridge Replacement', price: `From ${pound}20` },
            ]
        },
        {
            category: 'Restoration',
            description: 'Complete overhauls and makeovers',
            items: [
                { name: 'Full Mechanical Restoration', price: `From ${pound}120` },
                { name: 'Cabinet Re-covering', price: `From ${pound}80` },
                { name: 'Full Restoration (Mechanical + Re-cover)', price: `From ${pound}180` },
            ]
        },
        {
            category: 'Servicing',
            description: 'Preventative care and maintenance',
            items: [
                { name: 'Basic Service (clean, lubricate, test)', price: `${pound}35` },
                { name: 'Full Service (basic + belt + stylus check)', price: `${pound}55` },
            ]
        }
    ];

    return (
        <section id="services" className="services">
            <div className="services-header">
                <span className="section-label">Services & Pricing</span>
                <h2>What I Offer</h2>
                <p className="services-intro">
                    Every player is different. These prices are a guide - send me the details
                    and I'll give you an accurate quote.
                </p>
            </div>
            <div className="services-grid">
                {services.map((category) => (
                    <div className="service-category" key={category.category}>
                        <div className="category-header">
                            <h3>{category.category}</h3>
                            <p>{category.description}</p>
                        </div>
                        <ul className="price-list">
                            {category.items.map((item) => (
                                <li key={item.name}>
                                    <div className="service-info">
                                        <span className="service-name">{item.name}</span>
                                        <span className="service-price">{item.price}</span>
                                    </div>
                                    <button
                                        className="enquire-button"
                                        onClick={() => onEnquire(item.name)}
                                    >
                                        Enquire
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="services-note">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <p>
                    I always try to use original parts where possible. If originals aren't available,
                    I'll source the best modern alternatives and discuss options with you first.
                </p>
            </div>
        </section>
    );
}

export default Services;