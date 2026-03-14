import { useEffect, useState } from 'react';
import type { GalleryItem } from '../content/content';
import './Gallery.css';

interface GalleryProps {
    items: GalleryItem[];
}

function Gallery({ items }: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    useEffect(() => {
        if (!selectedImage) {
            return undefined;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [selectedImage]);

    return (
        <section id="gallery" className="gallery" aria-labelledby="gallery-heading">
            <div className="gallery__header">
                <span className="section-label">Recent work</span>
                <h2 id="gallery-heading">Gallery images now come straight from Decap uploads.</h2>
                <p>
                    Add or remove gallery entries in the CMS and this section updates automatically using the uploaded image path,
                    title, alt text and caption.
                </p>
            </div>

            <div className="gallery__grid">
                {items.map((image) => (
                    <button
                        type="button"
                        className="gallery__item"
                        key={`${image.title}-${image.date}`}
                        onClick={() => setSelectedImage(image)}
                    >
                        <img src={image.image} alt={image.alt} loading="lazy" />
                        <span className="gallery__overlay">
                            <strong>{image.title}</strong>
                            {image.caption ? <span>{image.caption}</span> : null}
                        </span>
                    </button>
                ))}
            </div>

            {selectedImage ? (
                <div className="gallery__lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.title} onClick={() => setSelectedImage(null)}>
                    <div className="gallery__lightbox-panel" onClick={(event) => event.stopPropagation()}>
                        <button type="button" className="gallery__lightbox-close" onClick={() => setSelectedImage(null)}>
                            <span className="sr-only">Close gallery image</span>
                            ×
                        </button>
                        <img src={selectedImage.image} alt={selectedImage.alt} />
                        <div className="gallery__lightbox-copy">
                            <strong>{selectedImage.title}</strong>
                            {selectedImage.caption ? <p>{selectedImage.caption}</p> : null}
                        </div>
                    </div>
                </div>
            ) : null}
        </section>
    );
}

export default Gallery;
