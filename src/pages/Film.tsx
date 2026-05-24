import { useState } from "react";

export default function Film() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const films = [
    {
      title: "Sarah & James",
      location: "Seattle, WA",
      img: "https://static.showit.co/1600/bVrJSfmoTGyUUYCnzn0jkQ/192111/wb11-1.jpg",
      video: "https://static.showit.co/file/tA2BMIDMQ_2oT1mLfQ6hRg/192111/final_web.mp4"
    },
    {
      title: "Priya & Raj",
      location: "Bellevue, WA",
      img: "https://static.showit.co/1600/-xY8oP_1S3GuCY-aoHMr9w/192111/1_page_web3-1.jpg",
      video: "https://static.showit.co/file/Ciq377eeRpiiuysBSixejA/shared/test_111_2.mp4"
    },
    {
      title: "Avreet & Sandeep",
      location: "Vancouver, BC",
      img: "https://static.showit.co/1600/r1l04ovLRpSly2LGyRtUhw/shared/alp06797.jpg",
      video: "https://static.showit.co/file/tA2BMIDMQ_2oT1mLfQ6hRg/192111/final_web.mp4"
    },
    {
      title: "Nina & David",
      location: "Portland, OR",
      img: "https://static.showit.co/1600/43XANDzeRTmXjR6sbnf2FQ/shared/aml04643.jpg",
      video: "https://static.showit.co/file/Ciq377eeRpiiuysBSixejA/shared/test_111_2.mp4"
    }
  ];

  return (
    <>
      <style>{`
        .hero-section { background-color: var(--color-white); position: relative; height: 50vh; display: flex; align-items: center; justify-content: center; text-align: center; color: var(--color-dark); border-bottom: 1px solid var(--color-border); }
        .hero-content { position: relative; z-index: 2; }
        
        .film-grid-section { background: var(--color-white); padding: 100px 20px; }
        .film-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px; max-width: 1400px; margin: 0 auto; }
        .film-card { position: relative; overflow: hidden; cursor: pointer; aspect-ratio: 16/9; background: var(--color-accent-1); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .film-card img { width: 100%; height: 100%; object-fit: cover; opacity: 0.9; transition: opacity 0.3s, transform 0.5s; }
        .film-card:hover img { opacity: 0.6; transform: scale(1.03); }
        .play-btn { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60px; height: 60px; color: var(--color-white); z-index: 2; pointer-events: none; }
        .film-info { position: absolute; bottom: 20px; left: 20px; color: white; z-index: 2; pointer-events: none; }
        .film-info h3 { font-family: var(--font-display); font-size: 2rem; margin: 0; font-style: italic; letter-spacing: -1px; }
        .film-info p { font-family: var(--font-heading); font-size: 13px; letter-spacing: 2px; text-transform: uppercase; margin-top: 5px; opacity: 0.9; }
        
        /* Video Lightbox */
        .video-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(242, 240, 237, 0.95); z-index: 9999; display: none; align-items: center; justify-content: center; }
        .video-modal.open { display: flex; }
        .video-modal-content { width: 90%; max-width: 1200px; aspect-ratio: 16/9; position: relative; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
        .video-modal video { width: 100%; height: 100%; background: #000; }
        .video-modal-close { position: absolute; top: -40px; right: 0; color: var(--color-dark); font-size: 30px; cursor: pointer; background: none; border: none; }
      `}</style>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Our Films</h1>
          <p style={{fontFamily: "var(--font-heading)", letterSpacing: "2px", textTransform: "uppercase"}}>Cinematic Wedding Stories</p>
        </div>
      </section>

      <section className="film-grid-section">
        <div className="film-grid">
          {films.map((film, idx) => (
            <div className="film-card" key={idx} onClick={() => setActiveVideo(film.video)}>
              <img src={film.img} alt={film.title} />
              <svg className="play-btn" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <div className="film-info">
                <h3>{film.title}</h3>
                <p>{film.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div 
        className={`video-modal ${activeVideo ? 'open' : ''}`} 
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveVideo(null);
        }}
      >
        <div className="video-modal-content">
          <button className="video-modal-close" onClick={() => setActiveVideo(null)}>&times;</button>
          {activeVideo && (
            <video src={activeVideo} controls autoPlay playsInline></video>
          )}
        </div>
      </div>
    </>
  );
}
