import { Icon } from './Icon';
import { IMAGES } from '../data/content';
import '../styles/hero.css';

export default function Hero({ onOpenModal }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <img src={IMAGES.hero} alt="" className="hero-bg-img" />
        <div className="hero-overlay"></div>
        <div className="hero-grid-lines"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge animate-fade-up">
          <span className="badge-dot"></span>
          Low Voltage, High Impact
        </div>

        <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
          LoVo<span className="hero-title-accent">Advertising</span>
        </h1>

        <p className="hero-tagline animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Mobile LED display trucks that put your brand in front of the right eyes —
          anywhere, anytime. We bring the screen to your audience.
        </p>

        <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <button className="btn btn-primary btn-lg" onClick={onOpenModal}>
            Get a Free Quote
            <Icon name="arrow" size={18} />
          </button>
          <a href="#services" className="btn btn-outline btn-lg">
            Explore Services
          </a>
        </div>

        <div className="hero-stats animate-fade-up" style={{ animationDelay: '0.45s' }}>
          <div className="hero-stat">
            <span className="hero-stat-num">70K+</span>
            <span className="hero-stat-label">Daily Impressions</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-num">96%</span>
            <span className="hero-stat-label">Ad Recall Rate</span>
          </div>
          <div className="hero-stat-divider"></div>
          <div className="hero-stat">
            <span className="hero-stat-num">24/7</span>
            <span className="hero-stat-label">GPS Tracked</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}
