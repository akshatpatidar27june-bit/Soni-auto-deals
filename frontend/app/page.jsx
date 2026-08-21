const cars = [
  { name: 'Hyundai Creta', price: '₹12,50,000', details: '2022  •  Petrol  •  Automatic' },
  { name: 'Mahindra XUV700', price: '₹18,50,000', details: '2023  •  Diesel  •  Automatic' },
  { name: 'Maruti Suzuki Swift', price: '₹7,00,000', details: '2021  •  Petrol  •  Manual' },
];

const whatsappNumber = '919827004779';

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a href="#top" className="brand">Soni Auto Deals</a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#cars">Available Cars</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="wa-btn" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-inner">
            <p className="eyebrow">Soni Auto Deals • Mandsaur</p>
            <h1>Trusted used cars in Mandsaur.</h1>
            <p>Find a reliable pre-owned car with clear details and a simple way to enquire directly with our team.</p>
            <div className="hero-actions">
              <a className="primary-btn" href="#cars">Explore Cars</a>
              <a className="secondary-btn" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="section" id="cars">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow muted">Our current listings</p>
                <h2>Available Cars</h2>
              </div>
              <p className="muted">Simple. Clear. Ready to enquire.</p>
            </div>

            <div className="cars-grid">
              {cars.map((car) => (
                <article className="car-card" key={car.name}>
                  <div className="car-image">Car photo</div>
                  <div className="car-body">
                    <h3>{car.name}</h3>
                    <div className="price">{car.price}</div>
                    <div className="details">{car.details}</div>
                    <a className="enquire-btn" href={`/enquiry?car=${encodeURIComponent(car.name)}`}>Enquire Now</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow muted">Why Soni Auto Deals</p>
                <h2>A straightforward car-buying experience.</h2>
              </div>
            </div>
            <div className="info-grid">
              <div className="info-card"><h3>Trusted Cars</h3><p>Browse the cars currently available and view their important details before enquiring.</p></div>
              <div className="info-card"><h3>Local Dealer</h3><p>Serving customers looking for pre-owned cars in Mandsaur and nearby areas.</p></div>
              <div className="info-card"><h3>Quick Enquiry</h3><p>Send your details through the enquiry form and continue the conversation on WhatsApp.</p></div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-box">
            <div><p className="eyebrow muted">Get in touch</p><h2>Looking for a car?</h2><p className="muted">Contact Soni Auto Deals for current availability and pricing.</p></div>
            <a className="wa-btn" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container"><span>© {new Date().getFullYear()} Soni Auto Deals</span><span>Mandsaur, Madhya Pradesh</span></div></footer>
    </>
  );
}