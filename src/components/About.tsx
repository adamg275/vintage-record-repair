import './About.css';

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?q=80&w=1000"
                        alt="Vintage record player being restored"
                    />
                    <div className="about-image-accent"></div>
                </div>
                <div className="about-content">
                    <span className="section-label">About Me</span>
                    <h2>A Lifelong Passion for Vintage Sound</h2>
                    <p>
                        My love of vintage record players started young - I grew up listening to Elvis
                        and was always tinkering with the internals of whatever player I could get my
                        hands on.
                    </p>
                    <p>
                        What began as a hobby became a passion, and since the mid-2000s I've been
                        restoring and recovering vintage players from my workshop in West Yorkshire.
                        I've sold hundreds through eBay over the years, and now offer my services
                        directly to collectors and music lovers.
                    </p>
                    <div className="about-features">
                        <div className="feature">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <div className="feature-text">
                                <strong>Original Parts</strong>
                                <span>Authentic components where possible</span>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <div className="feature-text">
                                <strong>Personal Service</strong>
                                <span>Every job gets my full attention</span>
                            </div>
                        </div>
                    </div>
                    <a href="https://www.ebay.co.uk/usr/tracypaper" target="_blank" rel="noopener noreferrer" className="ebay-link">
                        Browse my eBay shop
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="brands-section">
                <span className="section-label">Specialists In</span>
                <div className="brands-list">
                    <span>Dansette</span>
                    <span>Bush</span>
                    <span>HMV</span>
                    <span>Pye</span>
                    <span>Fidelity</span>
                    <span>Alba</span>
                    <span>Ferguson</span>
                    <span>Elizabethan</span>
                </div>
            </div>
        </section>
    );
}

export default About;