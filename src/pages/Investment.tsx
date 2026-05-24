import { Link } from "react-router-dom";

export default function Investment() {
  return (
    <>
      <style>{`
        .hero-section { background-color: var(--color-white); padding: 100px 20px 60px; text-align: center; color: var(--color-dark); }
        .intro-text { max-width: 700px; margin: 0 auto 60px; font-family: var(--font-heading); font-size: 1.2rem; line-height: 1.8; opacity: 0.8; }
        
        .pricing-section { background: var(--color-accent-1); padding: 100px 20px; }
        .pricing-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; max-width: 1200px; margin: 0 auto; }
        .pricing-card { background: var(--color-white); border: 1px solid var(--color-border); width: 100%; max-width: 350px; text-align: center; padding-bottom: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .pricing-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; margin-bottom: 30px; }
        .pricing-card h3 { font-family: var(--font-heading); font-size: 14px; letter-spacing: 2px; text-transform: uppercase; color: var(--color-dark); margin-bottom: 10px; }
        .pricing-price { font-family: var(--font-display); font-style: italic; font-size: 2rem; color: var(--color-dark); margin-bottom: 20px; }
        .pricing-features { list-style: none; padding: 0 30px; margin-bottom: 30px; text-align: left; }
        .pricing-features li { font-family: var(--font-heading); text-align: center; font-size: 1rem; border-bottom: 1px solid var(--color-border); padding: 12px 0; color: var(--color-dark); opacity: 0.8; }
        .btn-outline { display: inline-block; padding: 12px 30px; border: 1px solid var(--color-dark); color: var(--color-dark); text-decoration: none; font-family: var(--font-heading); font-size: 12px; text-transform: uppercase; letter-spacing: 2px; transition: 0.3s; }
        .btn-outline:hover { background: var(--color-dark); color: white; }
      `}</style>
      
      <section className="hero-section">
        <h1 className="hero-title">Investment</h1>
        <p className="intro-text">We believe in transparent pricing and customized experiences. Every wedding is unique, and our packages are designed to provide comprehensive coverage while allowing flexibility to fit your specific vision.</p>
      </section>

      <section className="pricing-section">
        <div className="pricing-grid">
          <div className="pricing-card">
            <img src="https://static.showit.co/600/hCcy5k0WMVRxtxeE_KqurA/192111/w-2.jpg" alt="Photography" className="pricing-img" />
            <h3>Photography</h3>
            <div className="pricing-price">Starting at $3,500</div>
            <ul className="pricing-features">
              <li>8 Hours of Coverage</li>
              <li>2 Lead Photographers</li>
              <li>Online Hi-Res Gallery</li>
              <li>Timeline Planning</li>
              <li>Engagement Session</li>
            </ul>
            <Link to="/contact" className="btn-outline">Inquire</Link>
          </div>
          <div className="pricing-card">
            <img src="https://static.showit.co/600/NP2S5cF5R-qYu5stYzVAqg/192111/img_0438.jpg" alt="Videography" className="pricing-img" />
            <h3>Videography</h3>
            <div className="pricing-price">Starting at $4,500</div>
            <ul className="pricing-features">
              <li>8 Hours of Coverage</li>
              <li>2 Lead Videographers</li>
              <li>Cinematic Highlight Film</li>
              <li>Full Ceremony Edit</li>
              <li>Drone Footage</li>
            </ul>
            <Link to="/contact" className="btn-outline">Inquire</Link>
          </div>
          <div className="pricing-card">
            <img src="https://static.showit.co/600/M4I-rsy2_a819Tfk_PtTqQ/192111/img_1909.jpg" alt="The Collection" className="pricing-img" />
            <h3>The Collection</h3>
            <div className="pricing-price">Starting at $7,500</div>
            <ul className="pricing-features">
              <li>Photo & Video Coverage</li>
              <li>4-Person Media Team</li>
              <li>Premium Album included</li>
              <li>Full Wedding Film</li>
              <li>All standard inclusions</li>
            </ul>
            <Link to="/contact" className="btn-outline">Inquire</Link>
          </div>
        </div>
      </section>
    </>
  );
}
