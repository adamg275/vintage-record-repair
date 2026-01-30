import { useState, useEffect } from 'react';
import Logo from './Logo';
import './Header.css';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <a href="#home" className="logo-link">
                <Logo light={!scrolled} />
                <span className="logo-text">Vintage Record Player Repair & Restoration</span>
            </a>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact" className="nav-cta">Get a Quote</a></li>
            </ul>
        </nav>
    );
}

export default Header;