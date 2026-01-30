import './Hero.css';

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <span className="hero-tagline">West Yorkshire's Vintage Audio Specialist</span>
                <h1>Bringing Classic Sound<br />Back to Life</h1>
                <p className="hero-description">
                    Expert repair and restoration of vintage record players.
                    From Dansette to Bush, I give these beautiful machines the care they deserve.
                </p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Request a Quote</a>
                    <a href="#about" className="btn btn-secondary">Learn More</a>
                </div>
            </div>
            <div className="hero-scroll">
                <span>Scroll to explore</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}

export default Hero;