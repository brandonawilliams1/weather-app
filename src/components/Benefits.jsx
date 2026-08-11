import { Icon } from './Icon';
import { BENEFITS } from '../data/content';
import '../styles/benefits.css';

export default function Benefits() {
  return (
    <section id="benefits" className="section benefits-section">
      <div className="benefits-bg"></div>
      <div className="container">
        <div className="reveal">
          <span className="section-label">Why Mobile LED</span>
          <h2 className="section-title">The Top 5 Benefits, Backed by Data</h2>
          <p className="section-subtitle">
            Mobile LED advertising isn't just eye-catching — it's measurably more effective
            than nearly every traditional channel. Here's what the market data says.
          </p>
        </div>

        <div className="benefits-list">
          {BENEFITS.map((benefit, i) => (
            <div
              className="benefit-row reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
              key={benefit.title}
            >
              <div className="benefit-stat-block">
                <span className="benefit-stat">{benefit.stat}</span>
                <span className="benefit-rank">0{i + 1}</span>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-desc">{benefit.description}</p>
                <span className="benefit-source">
                  <Icon name="check" size={14} />
                  {benefit.source}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
