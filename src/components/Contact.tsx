import { useEffect, useMemo, useState } from 'react';
import type { ContactContent } from '../content/content';
import './Contact.css';

interface ContactProps {
    selectedService: string;
    serviceOptions: string[];
    contact: ContactContent;
}

function buildPrefilledMessage(service: string) {
    if (service.startsWith('Shop item: ')) {
        const itemTitle = service.replace('Shop item: ', '');
        return `I am enquiring about ${itemTitle}. Please let me know if it is still available, the overall condition, and the delivery or collection options.`;
    }

    return '';
}

function Contact({ selectedService, serviceOptions, contact }: ContactProps) {
    const [manualService, setManualService] = useState(selectedService);
    const [message, setMessage] = useState(() => buildPrefilledMessage(selectedService));
    const [files, setFiles] = useState<FileList | null>(null);

    useEffect(() => {
        setManualService(selectedService);
        setMessage(buildPrefilledMessage(selectedService));
    }, [selectedService]);

    const uniqueServiceOptions = useMemo(
        () => Array.from(new Set(serviceOptions)).sort((left, right) => left.localeCompare(right)),
        [serviceOptions],
    );

    return (
        <section id="contact" className="contact" aria-labelledby="contact-heading">
            <div className="contact__inner">
                <div className="contact__intro">
                    <span className="section-label">Get in touch</span>
                    <h2 id="contact-heading">Tell Gary which player, service or sale item you want to discuss.</h2>
                    <p>
                        Use the form for repair enquiries, restoration bookings or questions about a shop listing. Netlify captures the
                        submission and forwards the details to Gary by email.
                    </p>

                    <dl className="contact__details">
                        <div>
                            <dt>Location</dt>
                            <dd>{contact.location}</dd>
                        </div>
                        <div>
                            <dt>Response time</dt>
                            <dd>{contact.responseTime}</dd>
                        </div>
                        {contact.email ? (
                            <div>
                                <dt>Email</dt>
                                <dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd>
                            </div>
                        ) : null}
                        {contact.phone ? (
                            <div>
                                <dt>Phone</dt>
                                <dd><a href={`tel:${contact.phone}`}>{contact.phone}</a></dd>
                            </div>
                        ) : null}
                    </dl>

                    {contact.emailSetupNote ? <p className="contact__note">{contact.emailSetupNote}</p> : null}
                </div>

                <form
                    className="contact__form"
                    name="enquiry"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    encType="multipart/form-data"
                    action="/success.html"
                >
                    <input type="hidden" name="form-name" value="enquiry" />
                    <input type="hidden" name="bot-field" />

                    <div className="contact__row">
                        <label>
                            <span>Your name</span>
                            <input type="text" name="name" autoComplete="name" required />
                        </label>
                        <label>
                            <span>Email address</span>
                            <input type="email" name="email" autoComplete="email" required />
                        </label>
                    </div>

                    <div className="contact__row">
                        <label>
                            <span>Phone</span>
                            <input type="tel" name="phone" autoComplete="tel" />
                        </label>
                        <label>
                            <span>Player brand and model</span>
                            <input type="text" name="player" placeholder="For example, Dansette Monarch" />
                        </label>
                    </div>

                    <label>
                        <span>Service or item</span>
                        <select name="service" value={manualService} onChange={(event) => setManualService(event.target.value)} required>
                            <option value="">Select a service or listing</option>
                            {uniqueServiceOptions.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                            <option value="Other">Other</option>
                        </select>
                    </label>

                    <fieldset className="contact__fieldset">
                        <legend>Shipping preference</legend>
                        <label className="contact__radio">
                            <input type="radio" name="shipping_option" value="I will arrange shipping" defaultChecked />
                            <span>I will arrange shipping or drop-off</span>
                        </label>
                        <label className="contact__radio">
                            <input type="radio" name="shipping_option" value="I want courier collection included" />
                            <span>I want the courier-included option</span>
                        </label>
                    </fieldset>

                    <label>
                        <span>Tell me more</span>
                        <textarea
                            name="message"
                            rows={6}
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder="Describe the fault, any known history, and whether this is a repair, restoration or purchase enquiry."
                            required
                        ></textarea>
                    </label>

                    <label>
                        <span>Photos</span>
                        <div className="contact__upload">
                            <input
                                type="file"
                                name="photos"
                                accept=".jpg,.jpeg,.png,.gif,.webp"
                                multiple
                                onChange={(event) => setFiles(event.target.files)}
                                aria-describedby="photo-help photo-status"
                            />
                            <div>
                                <strong>Upload current photos of the player</strong>
                                <p id="photo-help">JPG, PNG, GIF or WebP. Netlify will store them with the enquiry.</p>
                                <p id="photo-status" aria-live="polite">
                                    {files && files.length > 0
                                        ? `${files.length} file${files.length === 1 ? '' : 's'} selected`
                                        : 'No files selected yet'}
                                </p>
                            </div>
                        </div>
                    </label>

                    <button type="submit" className="btn btn-primary contact__submit">Send enquiry</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;