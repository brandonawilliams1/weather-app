import { Icon } from './Icon';
import { SERVICES } from '../data/content';
import '../styles/services.css';

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="reveal">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Services Built for Maximum Exposure</h2>
          <p className="section-subtitle">
            Three core offerings that move your message from screen to street —
            each engineered for a different kind of impact.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <div
              className="service-card reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
              key={service.title}
            >
              <div className="service-card-glow"></div>
              <div className="service-icon">
                <Icon name={service.icon} size={32} strokeWidth={1.8} />
              </div>
              <div className="service-num">0{i + 1}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <div className="service-link">
                Learn more
                <Icon name="arrow" size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
