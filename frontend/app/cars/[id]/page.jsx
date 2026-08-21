import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCar } from '../../data/cars';

const whatsappNumber = '919827004779';

export default async function CarDetailsPage({ params }) {
  const { id } = await params;
  const car = getCar(id);

  if (!car) notFound();

  const message = encodeURIComponent(`Hello Soni Auto Deals, I am interested in the ${car.name}. Please share more details.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <main className="details-page">
      <section className="section">
        <div className="container">
          <Link className="back-link" href="/cars">← Back to available cars</Link>
          <div className="details-grid">
            <div className="details-photo-wrap">
              <img className="details-photo" src={car.image} alt={car.name} />
            </div>
            <div className="details-content">
              <p className="eyebrow muted">Available in Mandsaur</p>
              <h1>{car.name}</h1>
              <div className="details-price">{car.price}</div>
              <div className="spec-grid">
                <div><span>Year</span><strong>{car.year}</strong></div>
                <div><span>Kilometres</span><strong>{car.km}</strong></div>
                <div><span>Fuel</span><strong>{car.fuel}</strong></div>
                <div><span>Transmission</span><strong>{car.transmission}</strong></div>
              </div>
              <p className="details-description">{car.description}</p>
              <div className="detail-actions">
                <Link className="primary-btn dark" href={`/enquiry?car=${encodeURIComponent(car.name)}`}>Enquire Now</Link>
                <a className="wa-btn" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
