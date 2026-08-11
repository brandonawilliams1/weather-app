import { Icon } from './Icon';
import { COLLAGE_ITEMS, IMAGES } from '../data/content';
import '../styles/collage.css';

export default function Collage() {
  return (
    <section id="why-lovo" className="section collage-section">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Why LoVo</span>
          <h2 className="section-title">The LoVo Advantage</h2>
          <p className="section-subtitle">
            Technology, creative firepower, and proof of performance — woven into every campaign.
            Here's what sets us apart from a standard LED truck rental.
          </p>
        </div>

        <div className="collage-grid">
          {COLLAGE_ITEMS.map((item, i) => {
            if (item.type === 'advantage') {
              return (
                <div className="collage-card advantage-card reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={i}>
                  <div className="advantage-icon">
                    <Icon name={item.icon} size={28} strokeWidth={1.8} />
                  </div>
                  <h3 className="advantage-label">{item.label}</h3>
                  <p className="advantage-caption">{item.caption}</p>
                  <div className="advantage-shine"></div>
                </div>
              );
            }
            return (
              <div className="collage-card truck-card reveal" style={{ transitionDelay: `${i * 0.1}s` }} key={i}>
                <img src={IMAGES.collage[item.image]} alt={item.caption} />
                <div className="truck-card-overlay">
                  <span className="truck-card-badge">
                    <Icon name="truck" size={14} />
                    In Action
                  </span>
                  <p className="truck-card-caption">{item.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
