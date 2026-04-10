import type { ServicesContent } from '../content/content';
import './HowItWorks.css';

interface HowItWorksProps {
    content: ServicesContent;
    onSelectService: (service: string) => void;
}

function HowItWorks({ content, onSelectService }: HowItWorksProps) {
    return (
        <section className="workflow-page" aria-labelledby="workflow-heading">
            <div className="page-intro page-intro--narrow">
                <span className="section-label">How it works</span>
                <h1 id="workflow-heading">A clear route from first enquiry to a player ready to return.</h1>
                <p>
                    Start with the type of help you need, decide whether you will send the player yourself or want collection discussed,
                    and we will confirm the most sensible route from there.
                </p>
            </div>

            <div className="workflow-steps">
                {content.processSteps.map((step, index) => (
                    <article className="workflow-step" key={step.title}>
                        <span className="workflow-step__number">0{index + 1}</span>
                        <h2>{step.title}</h2>
                        <p>{step.description}</p>
                    </article>
                ))}
            </div>

            <div className="workflow-plans">
                {content.servicePlans.map((plan) => (
                    <article className="workflow-plan" key={plan.name}>
                        <div className="workflow-plan__header">
                            <h2>{plan.name}</h2>
                            <p>{plan.summary}</p>
                        </div>
                        <ul>
                            {plan.includes.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <div className="workflow-plan__options">
                            {plan.options.map((option) => (
                                <button type="button" key={option.prefillService} onClick={() => onSelectService(option.prefillService)}>
                                    <strong>{option.name}</strong>
                                    <small>{option.summary}</small>
                                    <span>Ask about this route</span>
                                </button>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            <div className="workflow-note">
                <strong>Shipping note</strong>
                <p>{content.shippingNote}</p>
            </div>
        </section>
    );
}

export default HowItWorks;