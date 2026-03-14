import { useEffect, useState } from 'react';
import { siteSettings } from '../content/content';
import Logo from './Logo';
import './Header.css';

interface HeaderProps {
    currentPath: string;
}

function sectionLink(currentPath: string, section: string) {
    return currentPath === '/' ? `#${section}` : `/#${section}`;
}

function Header({ currentPath }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 16);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.classList.toggle('menu-open', isOpen);
        return () => document.body.classList.remove('menu-open');
    }, [isOpen]);

    const isTransparent = currentPath === '/' && !isScrolled;
    const links = [
        { href: '/', label: 'Home', isCurrent: currentPath === '/' },
        { href: '/how-it-works', label: 'How It Works', isCurrent: currentPath === '/how-it-works' },
        { href: '/shop', label: 'Shop', isCurrent: currentPath === '/shop' },
        { href: sectionLink(currentPath, 'gallery'), label: 'Gallery', isCurrent: false },
        { href: '#contact', label: 'Contact', isCurrent: false },
    ];

    return (
        <header className={`site-header ${isTransparent ? 'site-header--transparent' : 'site-header--scrolled'}`}>
            <div className="site-header__inner">
                <a href="/" className="site-header__brand" aria-label={siteSettings.brand.businessName} onClick={() => setIsOpen(false)}>
                    <Logo light={isTransparent} />
                    <span className="site-header__brand-copy">
                        <strong>{siteSettings.brand.businessName}</strong>
                        <span>{siteSettings.brand.tagline}</span>
                    </span>
                </a>

                <button
                    type="button"
                    className="site-header__toggle"
                    aria-expanded={isOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setIsOpen((open) => !open)}
                >
                    <span className="sr-only">Toggle navigation</span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav aria-label="Primary" className={`site-header__nav ${isOpen ? 'site-header__nav--open' : ''}`} id="primary-navigation">
                    <ul>
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    aria-current={link.isCurrent ? 'page' : undefined}
                                    className={link.label === 'Contact' ? 'site-header__cta' : undefined}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
