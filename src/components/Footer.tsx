import type { BrandContent, ContactContent } from '../content/content';
import Logo from './Logo';
import './Footer.css';

interface FooterProps {
    brand: BrandContent;
    contact: ContactContent;
}

function Footer({ brand, contact }: FooterProps) {
    return (
        <footer className="site-footer">
            <div className="site-footer__inner">
                <div className="site-footer__brand">
                    <Logo light={true} />
                    <div>
                        <strong>{brand.businessName}</strong>
                        <p>{brand.tagline}</p>
                    </div>
                </div>

                <div className="site-footer__links">
                    <a href="/">Home</a>
                    <a href="/how-it-works">How It Works</a>
                    <a href="/shop">Shop</a>
                    <a href="/#gallery">Gallery</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="site-footer__meta">
                    <span>{contact.location}</span>
                    <span>{brand.responseTime}</span>
                    <span>Copyright {new Date().getFullYear()} {brand.businessName}</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
