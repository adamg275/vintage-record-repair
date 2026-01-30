import { useState } from 'react';
import './Gallery.css';

interface GalleryImage {
    src: string;
    alt: string;
    caption?: string;
}

function Gallery() {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    // These will eventually come from Decap CMS
    const images: GalleryImage[] = [
        {
            src: 'https://images.unsplash.com/photo-1558584673-c834fb1cc3ca?w=800',
            alt: 'Vintage record player restoration',
            caption: 'Dansette Bermuda - Full restoration'
        },
        {
            src: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=800',
            alt: 'Classic turntable',
            caption: 'Bush SRP31 - Cabinet re-covering'
        },
        {
            src: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=800',
            alt: 'Record player detail',
            caption: 'HMV 2000 - Motor replacement'
        },
        {
            src: 'https://images.unsplash.com/photo-1594623930572-300a3011d9ae?w=800',
            alt: 'Vintage audio equipment',
            caption: 'Pye Black Box - Full service'
        },
        {
            src: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=800',
            alt: 'Turntable closeup',
            caption: 'Fidelity HF42 - Belt replacement'
        },
        {
            src: 'https://images.unsplash.com/photo-1526394931762-90052e97b376?w=800',
            alt: 'Record collection',
            caption: 'Alba 536 - Complete overhaul'
        },
    ];

    return (
        <section id="gallery" className="gallery">
            <div className="gallery-header">
                <span className="section-label">My Work</span>
                <h2>Restoration Gallery</h2>
                <p className="gallery-intro">
                    A selection of recent restorations and repairs. Every player has its own story.
                </p>
            </div>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div
                        className="gallery-item"
                        key={index}
                        onClick={() => setSelectedImage(image)}
                    >
                        <img src={image.src} alt={image.alt} />
                        <div className="gallery-item-overlay">
                            <span>{image.caption}</span>
                        </div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="lightbox" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        {selectedImage.caption && (
                            <p className="lightbox-caption">{selectedImage.caption}</p>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Gallery;