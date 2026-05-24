import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <style>{`
        .hero-section { background-color: var(--color-accent-1); position: relative; height: 50vh; display: flex; align-items: center; justify-content: center; text-align: center; color: var(--color-dark); }
        
        .contact-section { background: var(--color-white); padding: 100px 20px; }
        .contact-container { max-width: 900px; margin: 0 auto; background: var(--color-white); padding: 60px; border: 1px solid var(--color-border); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .contact-container h2 { font-family: var(--font-display); font-size: 2.5rem; font-style: italic; color: var(--color-dark); text-align: center; margin-bottom: 40px; }
        
        .form-row { display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap; }
        .form-group { flex: 1; min-width: 250px; }
        .form-group label { display: block; font-family: var(--font-heading); font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: var(--color-dark); margin-bottom: 8px; }
        .form-group input, .form-group select, .form-group textarea { width: 100%; padding: 12px; border: 1px solid var(--color-border); background: transparent; font-family: var(--font-heading); font-size: 1rem; color: var(--color-dark); }
        .form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--color-dark); }
        .form-group textarea { min-height: 150px; resize: vertical; }
        
        .submit-btn { background: var(--color-dark); color: white; border: none; padding: 15px 40px; font-family: var(--font-heading); font-size: 13px; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; transition: 0.3s; margin-top: 20px; width: 100%; }
        .submit-btn:hover { opacity: 0.8; }
        
        @media (max-width: 768px) {
            .contact-container { padding: 30px 20px; }
        }
      `}</style>
      
      <section className="hero-section">
        <h1 className="hero-title">Get In Touch</h1>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <h2>Let's Tell Your Story</h2>
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>Wedding Date</label>
                <input type="date" />
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>Wedding Venue & Location</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Tell us about your vision</label>
              <textarea required placeholder="We'd love to hear details about your day..."></textarea>
            </div>
            <button 
              type="submit" 
              className="submit-btn"
              style={submitted ? { background: '#232323' } : {}}
            >
              {submitted ? 'Message Sent!' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
