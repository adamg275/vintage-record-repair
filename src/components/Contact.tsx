import { useState } from 'react';
import './Contact.css';

interface ContactProps {
    selectedService: string;
}

function Contact({ selectedService }: ContactProps) {
    const [manualService, setManualService] = useState('');
    const [files, setFiles] = useState<FileList | null>(null);

    // Use the prop if set, otherwise use manual selection
    const service = selectedService || manualService;

    const serviceOptions = [
        {
            group: 'Repairs', items: [
                'Diagnostic Assessment',
                'Motor Repair/Replacement',
                'Belt Replacement',
                'Electrical Fault Repair',
                'Speaker Repair/Replacement',
                'Stylus/Cartridge Replacement',
            ]
        },
        {
            group: 'Restoration', items: [
                'Full Mechanical Restoration',
                'Cabinet Re-covering',
                'Full Restoration (Mechanical + Re-cover)',
            ]
        },
        {
            group: 'Servicing', items: [
                'Basic Service (clean, lubricate, test)',
                'Full Service (basic + belt + stylus check)',
            ]
        },
    ];

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles(e.target.files);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <span className="section-label">Get In Touch</span>
                    <h2>Ready to Restore Your Player?</h2>
                    <p>
                        Have a vintage record player that needs some love? Send me the details
                        and I'll get back to you with a quote. The more information you can
                        provide, the more accurate my estimate will be.
                    </p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>West Yorkshire, UK</span>
                        </div>
                        <div className="contact-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>Usually respond within 24 hours</span>
                        </div>
                    </div>
                </div>  
                <form
                    className="contact-form"
                    name="enquiry"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    encType="multipart/form-data"
                    action="/success"
                >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="enquiry" />
                    <input type="hidden" name="subject" value="New enquiry from vintagerecordplayers.co.uk" />

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone (optional)</label>
                            <input type="tel" id="phone" name="phone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="player">Brand & Model</label>
                            <input
                                type="text"
                                id="player"
                                name="player"
                                placeholder="e.g. Dansette Monarch"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="service">Service Required</label>
                        <select
                            id="service"
                            name="service"
                            value={service}
                            onChange={(e) => setManualService(e.target.value)}
                            required
                        >
                            <option value="">-- Select a service --</option>
                            {serviceOptions.map((group) => (
                                <optgroup label={group.group} key={group.group}>
                                    {group.items.map((item) => (
                                        <option value={item} key={item}>{item}</option>
                                    ))}
                                </optgroup>
                            ))}
                            <option value="Other">Other (please describe below)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Tell Me More</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Describe the issues, any history you know, what you'd like done..."
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="photos">Photos (optional)</label>
                        <div className="file-upload">
                            <input
                                type="file"
                                id="photos"
                                name="photos"
                                accept=".jpg,.jpeg,.png,.gif,.webp"
                                multiple
                                onChange={handleFileChange}
                            />
                            <div className="file-upload-label">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="17 8 12 3 7 8" />
                                    <line x1="12" y1="3" x2="12" y2="15" />
                                </svg>
                                <span>
                                    {files && files.length > 0
                                        ? `${files.length} file${files.length > 1 ? 's' : ''} selected`
                                        : 'Click to upload photos'
                                    }
                                </span>
                                <small>JPG, PNG, GIF or WebP (max 10MB each)</small>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Send Enquiry</button>
                </>
            </div>
        </section>
    );
}

export default Contact;