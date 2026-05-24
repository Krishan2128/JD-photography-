import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Film", path: "/film" },
    { name: "About", path: "/about" },
    { name: "Wedding", path: "/wedding" },
    { name: "Investment", path: "/investment" },
    { name: "Contact", path: "/contact" },
  ];

  const socialImages = [
    "https://static.showit.co/600/UFJn7tw1QkqivBHyhlFm3w/shared/tfm-24-affa46ce.jpg",
    "https://static.showit.co/600/5GrOWNkfTOeoUJFp2TOg5Q/shared/tfm-25.jpg",
    "https://static.showit.co/600/32yBW8fYTUqKOw7UAyNEYA/shared/tfm-26.jpg",
    "https://static.showit.co/600/UwuM6UuASi22wKvwZIGs8A/shared/tfm-90.jpg"
  ];

  return (
    <div id="app-wrapper">
      <div className={`loader-overlay ${!loading ? "hidden" : ""}`}>
        <div className="jd-logo-container loader-logo">
           <span className="jd-initials loader-initials">JD</span>
           <span className="jd-subtext loader-subtext" style={{marginTop: '10px'}}>PHOTOGRAPHY</span>
        </div>
        <div className="loader-line-container">
           <div className="loader-line"></div>
        </div>
      </div>

      <aside className="sidebar-left hide-on-mobile">
         <div className="sidebar-text">Visual Narratives — Est. {new Date().getFullYear()}</div>
      </aside>

      <div className="main-content-scroll">
        <main>
          <Outlet />
        </main>

        <footer className="site-footer">
          <div className="footer-top">
            <nav className="footer-nav">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path}>{link.name}</Link>
              ))}
            </nav>
          </div>
          <div className="footer-divider-top"></div>
          <div className="footer-body">
            <div className="footer-logo-area jd-logo-container" style={{color: "var(--color-dark)", alignItems: 'flex-start'}}>
              <span className="jd-initials">JD</span>
              <span className="jd-subtext">PHOTOGRAPHY</span>
            </div>
            <div className="footer-right">
              <p className="footer-tagline">Seattle Wedding Photography + Videography</p>
              <div className="footer-social-grid">
                {socialImages.map((src, idx) => (
                  <img key={idx} src={src} alt="Social feed" />
                ))}
              </div>
            </div>
            <div className="footer-sidebar">
              <div 
                className="footer-scroll-top"
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="footer-scroll-text">Back to top</span>
              <div className="footer-social-icons">
                 <a href="#"><Instagram size={18} /></a>
                 <a href="#"><Facebook size={18} /></a>
                 <a href="#"><Youtube size={18} /></a>
              </div>
            </div>
          </div>
          <div className="footer-divider-bottom"></div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} JD Photography &nbsp;|&nbsp; Seattle Wedding Photography + Videography &nbsp;|&nbsp; All Rights Reserved</p>
          </div>
        </footer>
      </div>

      <header className={`site-header ${scrolled ? "scrolled" : ""}`} id="site-header">
        <div className="header-inner">
          <div className="header-logo-container">
            <Link to="/" className="jd-logo-container">
              <span className="jd-initials">JD</span>
              <span className="hide-on-mobile jd-subtext" style={{marginTop: '10px'}}>PHOTOGRAPHY</span>
            </Link>
          </div>
          
          <nav className="main-nav">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={location.pathname === link.path ? "active" : ""}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="desktop-header-bottom hide-on-mobile">
            <div className="accent-line"></div>
            <p>Specializing in minimalist architectural form and cinematic portraits. Captured across Europe and Northern Africa.</p>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
      </header>

      <div className={`mobile-nav-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-content">
          <button 
            className="mobile-close-btn" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
          <div className="mobile-nav-logo jd-logo-container" style={{color: "var(--color-dark)", marginBottom: "40px"}}>
              <span className="jd-initials">JD</span>
              <span className="jd-subtext">PHOTOGRAPHY</span>
          </div>
          <div className="mobile-nav-divider"></div>
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={location.pathname === link.path ? "active" : ""}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
