import { Icon } from './Icon';
import { IMAGES } from '../data/content';
import '../styles/cta.css';

export default function CTA({ onOpenModal }) {
  return (
    <section id="contact" className="section cta-section">
      <div className="cta-bg">
        <img src={IMAGES.cta} alt="" className="cta-bg-img" />
        <div className="cta-overlay"></div>
      </div>

      <div className="container">
        <div className="cta-content reveal">
          <div className="cta-offer-badge">
            <Icon name="sparkle" size={16} />
            Special Offer for New Customers
          </div>
          <h2 className="cta-title">Ready to Put Your Brand in Motion?</h2>
          <p className="cta-text">
            New clients qualify for discounted introductory rates, free creative design
            onboarding, and a complimentary route strategy session. Let's build a campaign
            that moves — literally.
          </p>
          <button className="btn btn-primary btn-lg cta-btn" onClick={onOpenModal}>
            <Icon name="arrow" size={18} />
            Learn More & Request a Quote
          </button>
          <p className="cta-note">No commitment required. We'll respond within 24 hours.</p>
        </div>
      </div>
    </section>
  );
}
