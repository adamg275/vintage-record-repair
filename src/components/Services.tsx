import type { ServicesContent } from '../content/content';
import './Services.css';

interface ServicesProps {
    content: ServicesContent;
    onSelectService: (service: string) => void;
}

function Services({ content, onSelectService }: ServicesProps) {
    return (
        <section id="services" className="services" aria-labelledby="services-heading">
            <div className="services__header">
                <span className="section-label">Services</span>
                <h2 id="services-heading">Repair work that starts with the right level of intervention.</h2>
                <p>
                    Choose the service that sounds closest to what you need, then use the enquiry button and Gary will come back with the
                    most sensible route for your player.
                </p>
            </div>

            <div className="services__grid">
                {content.categories.map((category) => (
                    <article className="services__card" key={category.category}>
                        <div className="services__card-head">
                            <h3>{category.category}</h3>
                            <p>{category.description}</p>
                        </div>
                        <ul className="services__list">
                            {category.items.map((item) => (
                                <li key={item.name}>
                                    <div>
                                        <div className="services__item-topline">
                                            <span className="services__item-name">{item.name}</span>
                                        </div>
                                        <p>{item.summary}</p>
                                    </div>
                                    <button type="button" className="services__button" onClick={() => onSelectService(item.name)}>
                                        Enquire about this service
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>

            <div className="services__note">
                <strong>Good workshop practice:</strong>
                <p>{content.note}</p>
            </div>
        </section>
    );
}

export default Services;