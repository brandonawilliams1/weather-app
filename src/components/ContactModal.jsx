import { useState } from 'react';
import { Icon } from './Icon';
import { QUOTE_SUBJECT, QUOTE_BODY } from '../data/content';
import { useBodyScrollLock } from '../hooks/useScrollReveal';
import '../styles/contactModal.css';

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY',
];

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  useBodyScrollLock(isOpen);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="Close">
          <Icon name="close" size={22} />
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">
              <Icon name="check" size={40} strokeWidth={2.5} />
            </div>
            <h2>Request Sent</h2>
            <p>
              Thank you for reaching out to LoVo Advertising. Our team will review your
              campaign requirements and respond with a detailed quotation within 24 hours.
            </p>
            <button className="btn btn-primary" onClick={handleClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="modal-eyebrow">Request a Quote</span>
              <h2>Let's Build Your Campaign</h2>
              <p>Fill out the form below and we'll send you a detailed quotation tailored to your needs.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input id="firstName" type="text" required placeholder="John" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input id="lastName" type="text" required placeholder="Doe" />
                </div>
              </div>

              <div className="form-row form-row-3">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input id="city" type="text" required placeholder="Chicago" />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <select id="state" required defaultValue="IL">
                    <option value="" disabled>Select</option>
                    {US_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="zip">ZIP *</label>
                  <input id="zip" type="text" required placeholder="78701" maxLength={5} pattern="\d{5}" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name *</label>
                <input id="company" type="text" required placeholder="Your Company LLC" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input id="email" type="email" required placeholder="john@company.com" />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" defaultValue={QUOTE_SUBJECT} />
              </div>

              <div className="form-group">
                <label htmlFor="body">Message</label>
                <textarea id="body" rows={12} defaultValue={QUOTE_BODY} />
              </div>

              <button type="submit" className="btn btn-primary btn-lg form-submit">
                Send Request
                <Icon name="arrow" size={18} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
