import type { IntroductionContent } from '../content/content';
import './Introduction.css';

interface IntroductionProps {
    content: IntroductionContent;
}

function Introduction({ content }: IntroductionProps) {
    return (
        <section className="introduction" aria-labelledby="introduction-heading">
            <div className="introduction__inner">
                <span className="section-label">A quick introduction</span>
                <h2 id="introduction-heading">{content.title}</h2>
                <p>{content.summary}</p>
            </div>
        </section>
    );
}

export default Introduction;