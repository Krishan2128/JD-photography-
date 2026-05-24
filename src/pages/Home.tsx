import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <style>{`
        .hero-section { position: relative; height: 100vh; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: center; color: white; margin-top: 0 !important; }
        .hero-video { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; opacity: 0.6; }
        .hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.6); z-index: 2; }
        .hero-content { position: relative; z-index: 3; padding: 20px; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; }
        
        .hero-title { font-family: var(--font-display); font-size: 5rem; letter-spacing: 2px; margin-bottom: 0; font-weight: normal; }
        .hero-subtitle { font-family: var(--font-script); font-weight: 400; letter-spacing: 2px; font-size: 3.5rem; margin-bottom: 40px; text-transform: none; color: var(--color-gold); margin-top: -10px; }
        
        .lux-btn {
           display: inline-block;
           padding: 18px 56px;
           border: 1px solid rgba(197, 160, 89, 0.4);
           color: var(--color-gold);
           text-decoration: none;
           font-family: var(--font-heading);
           font-size: 11px;
           text-transform: uppercase;
           letter-spacing: 5px;
           transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
           background: linear-gradient(135deg, rgba(20,20,20,0.4) 0%, rgba(0,0,0,0.6) 100%);
           backdrop-filter: blur(8px);
           border-radius: 40px;
           box-shadow: 0 4px 20px rgba(0,0,0,0.3), inset 0 0 15px rgba(197, 160, 89, 0.05);
        }
        .lux-btn:hover { 
           background: var(--color-gold); 
           color: white; 
           border-color: var(--color-gold);
           box-shadow: 0 8px 30px rgba(197, 160, 89, 0.4); 
           transform: translateY(-2px);
        }
        
        .featured-section { background: var(--color-white); padding: 120px 20px; text-align: center; border-top: 1px solid var(--color-border); }
        .section-subtitle { font-family: var(--font-heading); font-size: 11px; text-transform: uppercase; letter-spacing: 4px; color: var(--color-gold); margin-bottom: 20px; display: block; }
        .section-title { font-family: var(--font-display); font-size: 2.8rem; color: var(--color-dark); margin-bottom: 60px; font-weight: normal; }
        .featured-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; max-width: 1100px; margin: 0 auto; }
        
        .featured-card { padding: 15px; background: white; border: 1px solid var(--color-border); transition: transform 0.4s ease; box-shadow: 0 15px 40px rgba(0,0,0,0.03); }
        .featured-card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(0,0,0,0.06); }
        .featured-card img { width: 100%; aspect-ratio: 2/3; object-fit: cover; }
        .featured-card h3 { font-family: var(--font-display); color: var(--color-dark); font-size: 1.6rem; margin: 25px 0 5px; font-weight: normal; }
        .featured-card p.location { font-family: var(--font-script); color: var(--color-gold); font-size: 1.8rem; margin: 0; }
        
        .testimonials { background: var(--color-dark); padding: 120px 20px; text-align: center; position: relative; color: white; }
        .test-content { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; }
        .test-quote { font-family: var(--font-display); font-size: 2rem; font-style: italic; margin-bottom: 40px; line-height: 1.6; font-weight: 300; }
        .test-name { font-family: var(--font-heading); font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: var(--color-gold); }
        .test-script { font-family: var(--font-script); font-size: 3.5rem; color: rgba(255,255,255,0.08); position: absolute; top: -60px; left: 50%; transform: translateX(-50%); white-space: nowrap; line-height: 1;}
      `}</style>
      <section className="hero-section">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="https://static.showit.co/file/tA2BMIDMQ_2oT1mLfQ6hRg/192111/final_web.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">JD Photography</h1>
          <p className="hero-subtitle">fine art aesthetics</p>
          <Link to="/wedding" className="lux-btn">Look More</Link>
        </div>
      </section>

      <section className="featured-section">
        <span className="section-subtitle">Real Weddings</span>
        <h2 className="section-title">Featured Stories</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <img src="https://static.showit.co/600/-0IpHrSERfqBxyRJnRwRVw/shared/tfm-3.jpg" alt="Wedding 1" />
            <h3>Sarah & James</h3>
            <p className="location">Seattle, WA</p>
          </div>
          <div className="featured-card">
            <img src="https://static.showit.co/600/10-AxCSTRwCjE_N-FMXpNw/192111/1_page_web4-1.jpg" alt="Wedding 2" />
            <h3>Emily & Michael</h3>
            <p className="location">Bellevue, WA</p>
          </div>
          <div className="featured-card">
            <img src="https://static.showit.co/600/np3GripyQEyd8HCq60Korg/192111/g_and_m_web-19.jpg" alt="Wedding 3" />
            <h3>Priya & Raj</h3>
            <p className="location">Portland, OR</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="test-content">
          <div className="test-script">Kind Words</div>
          <p className="test-quote">"They captured every emotion perfectly. Our wedding film feels like a cinematic masterpiece that we will cherish forever."</p>
          <p className="test-name">Jessica & Thomas</p>
        </div>
      </section>
    </>
  );
}
