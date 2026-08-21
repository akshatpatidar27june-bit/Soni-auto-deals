import Link from 'next/link';
import { cars } from '../data/cars';

const whatsappNumber = '919827004779';

export default function CarsPage() {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link href="/" className="brand">Soni Auto Deals</Link>
          <nav className="nav-links" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/cars">Available Cars</Link>
            <Link href="/#about">About Us</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <a className="wa-btn" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </header>

      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow muted">Soni Auto Deals • Mandsaur</p>
            <h1>Available Cars</h1>
            <p>Browse our current pre-owned cars and open any listing for complete details.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cars-grid">
              {cars.map((car) => (
                <article className="car-card" key={car.id}>
                  <img className="car-image photo" src={car.image} alt={car.name} />
                  <div className="car-body">
                    <h2>{car.name}</h2>
                    <div className="price">{car.price}</div>
                    <div className="spec-row">
                      <span>{car.year}</span><span>{car.km}</span><span>{car.fuel}</span><span>{car.transmission}</span>
                    </div>
                    <Link className="enquire-btn" href={`/cars/${car.id}`}>View Details</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container"><span>© {new Date().getFullYear()} Soni Auto Deals</span><span>Mandsaur, Madhya Pradesh</span></div></footer>
    </>
  );
}
