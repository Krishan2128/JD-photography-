export default function About() {
  return (
    <>
      <style>{`
        .hero-section { position: relative; height: 60vh; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: center; color: var(--color-dark); background: var(--color-bg-light); border-bottom: 1px solid var(--color-border); }
        .hero-video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; opacity: 0.7; }
        .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(242, 240, 237, 0.4); z-index: 2; }
        .hero-content { position: relative; z-index: 3; }
        
        .story-section { background: var(--color-white); padding: 100px 20px; }
        .story-container { display: flex; flex-wrap: wrap; max-width: 1200px; margin: 0 auto; gap: 60px; align-items: center; }
        .story-img { flex: 1; min-width: 300px; }
        .story-img img { width: 100%; aspect-ratio: 3/4; object-fit: cover; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .story-text { flex: 1; min-width: 300px; color: var(--color-dark); }
        .story-text h2 { font-family: var(--font-display); font-size: 3rem; margin-bottom: 20px; font-style: italic; letter-spacing: -1px; }
        .story-text p { font-family: var(--font-heading); font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px; opacity: 0.8; }
      `}</style>
      
      <section className="hero-section">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="https://static.showit.co/file/Ciq377eeRpiiuysBSixejA/shared/test_111_2.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">About Us</h1>
          <p style={{fontFamily: "var(--font-heading)", letterSpacing: "2px", textTransform: "uppercase"}}>The Artists Behind the Lens</p>
        </div>
      </section>

      <section className="story-section">
        <div className="story-container">
          <div className="story-img">
            <img src="https://static.showit.co/600/sjrjll9wTvWixafluEqmkg/shared/tfm-76.jpg" alt="Photographer" />
          </div>
          <div className="story-text">
            <h2>Our Story</h2>
            <p>We are a team of passionate wedding filmmakers and photographers based in the beautiful Pacific Northwest.</p>
            <p>Our approach is deeply rooted in storytelling. We believe that every couple has a unique narrative, and our mission is to capture the authentic, unscripted emotions that define your special day.</p>
            <p>With years of experience blending cinematic techniques with editorial elegance, we create timeless visual heirlooms that will allow you to relive your wedding day for generations to come.</p>
          </div>
        </div>
      </section>
    </>
  );
}
