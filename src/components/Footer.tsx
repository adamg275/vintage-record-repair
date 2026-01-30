import Logo from './Logo';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <Logo light={true} />
                    <span>Vintage Record Player Repair & Restoration</span>
                </div>
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact">Contact</a>
                </div>
                <p className="footer-copy">
                    Copyright {new Date().getFullYear()} Vintage Record Player Repair. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;