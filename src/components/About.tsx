import type { AboutContent as AboutData } from '../content/content';
import './About.css';

interface AboutProps {
    content: AboutData;
    specialisms: string[];
    ebayUrl?: string;
}

function About({ content, specialisms, ebayUrl }: AboutProps) {
    return (
        <section id="about" className="about" aria-labelledby="about-heading">
            <div className="about__inner">
                <div className="about__visual">
                    <img src={content.image} alt={content.imageAlt} />
                </div>

                <div className="about__copy">
                    <span className="section-label">Workshop background</span>
                    <h2 id="about-heading">{content.title}</h2>
                    {content.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}

                    <div className="about__highlights">
                        <div>
                            <strong>Honest assessment</strong>
                            <span>Clear advice on what is worth repairing, restoring or leaving alone.</span>
                        </div>
                        <div>
                            <strong>Presentable finished work</strong>
                            <span>Descriptions and photographs focus on the actual machine, not stock filler.</span>
                        </div>
                    </div>

                    {ebayUrl ? (
                        <a href={ebayUrl} target="_blank" rel="noreferrer" className="about__link">
                            Browse recent eBay sales
                        </a>
                    ) : null}
                </div>
            </div>

            <div className="about__specialisms" aria-label="Brands serviced">
                {specialisms.map((brand) => (
                    <span key={brand}>{brand}</span>
                ))}
            </div>
        </section>
    );
}

export default About;
