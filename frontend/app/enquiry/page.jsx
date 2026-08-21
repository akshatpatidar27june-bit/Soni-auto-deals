'use client';

import { useState } from 'react';

const whatsappNumber = '919827004779';

export default function Enquiry() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get('name');
    const phone = form.get('phone');
    const car = form.get('car');
    const message = form.get('message');

    const text = `Hello Soni Auto Deals,\n\nI am interested in: ${car}\n\nName: ${name}\nMobile: ${phone}\nMessage: ${message || 'I would like more details about this car.'}`;
    setSent(true);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a href="/" className="brand">Soni Auto Deals</a>
          <a className="wa-btn" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </header>

      <main className="form-page">
        <div className="container">
          <div className="form-wrap">
            <p className="eyebrow muted">Soni Auto Deals</p>
            <h1>Car Enquiry</h1>
            <p>Fill in your details. We will continue the enquiry with you on WhatsApp.</p>

            <form onSubmit={handleSubmit}>
              <div className="field"><label htmlFor="name">Name *</label><input id="name" name="name" required placeholder="Your name" /></div>
              <div className="field"><label htmlFor="phone">Mobile Number *</label><input id="phone" name="phone" type="tel" inputMode="numeric" required placeholder="10-digit mobile number" /></div>
              <div className="field"><label htmlFor="car">Interested Car *</label><input id="car" name="car" required placeholder="e.g. Hyundai Creta" /></div>
              <div className="field"><label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="Anything you would like to ask?" /></div>
              <button className="submit-btn" type="submit">Send Enquiry on WhatsApp</button>
              <div className="form-note">Your WhatsApp message will be prepared automatically after you submit.</div>
              {sent && <div className="form-note">Enquiry prepared. Please complete the message in WhatsApp.</div>}
            </form>
          </div>
        </div>
      </main>
    </>
  );
}