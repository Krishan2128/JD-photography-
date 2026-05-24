import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Wedding() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const galleryImages = [
    "nLJF2zu2MmnyYcZ28wfhmA/192111/dscf2534.jpg",
    "oKrwyI2VHHfPAriyj-0jzw/192111/dscf9513.jpg",
    "9RrcK_vCUxM9ejsLf6Pc3w/192111/dscf4645.jpg",
    "dMKjNwWA2i6SHxwKjcNXBw/192111/img_0176.jpg",
    "N4PhoKvjzBpD2GD5MnLJOQ/192111/dscf2543.jpg",
    "mJi3Hi7ldZGZgUgvxY3oQQ/192111/img_0173.jpg",
    "YlQyli6_xlCBI5XDtLIk5A/192111/dscf9486.jpg",
    "hF2cbiGdArrwu0s2ZuSxLg/192111/img_0177.jpg",
    "at_tNZZV6zULjdREAEoPGw/192111/img_0167.jpg",
    "UmObHc88L7uXaz6Og60TMw/192111/img_0168.jpg",
    "V8QwkOANrwhx2axbtQZrCw/192111/img_0164.jpg",
    "odt82qMCHqEQ3_Du8CNN5w/192111/dscf9496.jpg",
    "1069mS55dSCqTVxtcoDlMg/192111/dscf9400.jpg",
  ];

  const CDN_BASE = "https://static.showit.co/600/";
  const CDN_LARGE = "https://static.showit.co/1600/";

  // Just do simple columns for React, instead of raw DOM manipulation
  const cols = [[], [], []];
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    cols.pop(); // 2 columns for mobile
  }

  galleryImages.forEach((img, idx) => {
    cols[idx % cols.length].push({ img, idx });
  });

  const nextImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (currentImageIndex !== null) {
      setCurrentImageIndex((currentImageIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentImageIndex === null) return;
      if (e.key === 'Escape') setCurrentImageIndex(null);
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <>
      <section className="hero-section" style={{ height: '30vh', background: 'var(--color-bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 className="hero-title">Wedding Gallery</h1>
      </section>

      <section className="gallery-section mt-12" id="gallery-section">
        <div className="gallery-grid" id="gallery-grid">
          {cols.map((col, colIdx) => (
            <div className="gallery-col" key={colIdx}>
              {col.map((item) => (
                <div 
                  className="gallery-item fade-in visible" 
                  key={item.idx} 
                  onClick={() => setCurrentImageIndex(item.idx)}
                >
                  <img src={CDN_BASE + item.img} alt={`Wedding photo ${item.idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="connect-section" id="connect-section" style={{ background: 'var(--color-accent-1)', padding: '100px 20px', textAlign: 'center' }}>
        <div className="connect-content">
            <p className="connect-script" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '32px', marginBottom: '20px' }}>let's work together</p>
            <h2 className="connect-heading" style={{ fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '40px' }}>LET'S CAPTURE<br/>YOUR STORY</h2>
            <Link to="/contact" className="connect-btn" style={{ padding: '15px 40px', border: '1px solid var(--color-dark)', textDecoration: 'none', color: 'var(--color-dark)', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '2px' }}>
                <span>Get in Touch</span>
            </Link>
        </div>
      </section>

      {/* Lightbox */}
      <div 
        className={`lightbox ${currentImageIndex !== null ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains('lightbox-img-wrap')) {
            setCurrentImageIndex(null);
          }
        }}
      >
        <button className="lightbox-close" onClick={() => setCurrentImageIndex(null)} aria-label="Close lightbox">&times;</button>
        <button className="lightbox-prev" onClick={prevImage} aria-label="Previous image">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <div className="lightbox-img-wrap">
          {currentImageIndex !== null && (
            <img src={CDN_LARGE + galleryImages[currentImageIndex]} alt={`Gallery image ${currentImageIndex + 1}`} />
          )}
        </div>
        <button className="lightbox-next" onClick={nextImage} aria-label="Next image">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {currentImageIndex !== null && (
          <div className="lightbox-counter">{currentImageIndex + 1} / {galleryImages.length}</div>
        )}
      </div>
    </>
  );
}
