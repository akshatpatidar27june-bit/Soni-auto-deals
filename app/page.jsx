"use client";

const PHONE = "919827004779";
const displayPhone = "+91 98270 04779";
const whatsapp = (message) => "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(message);

const cars = [
  {id:"01",name:"2022 Maruti Suzuki Brezza",price:"₹8.45 Lakh*",year:"2022",km:"42,000 km*",fuel:"Petrol*",gear:"Manual*",tag:"POPULAR",note:"Demo listing — replace with dealership stock"},
  {id:"02",name:"2021 Hyundai Creta",price:"₹11.20 Lakh*",year:"2021",km:"38,500 km*",fuel:"Petrol*",gear:"Automatic*",tag:"FEATURED",note:"Demo listing — replace with dealership stock"},
  {id:"03",name:"2020 Honda City",price:"₹9.10 Lakh*",year:"2020",km:"51,000 km*",fuel:"Petrol*",gear:"Manual*",tag:"SEDAN",note:"Demo listing — replace with dealership stock"},
  {id:"04",name:"2022 Tata Nexon",price:"₹8.75 Lakh*",year:"2022",km:"35,000 km*",fuel:"Petrol*",gear:"Manual*",tag:"SUV",note:"Demo listing — replace with dealership stock"},
  {id:"05",name:"2021 Maruti Suzuki Baleno",price:"₹6.65 Lakh*",year:"2021",km:"44,000 km*",fuel:"Petrol*",gear:"Manual*",tag:"CITY",note:"Demo listing — replace with dealership stock"},
  {id:"06",name:"2019 Toyota Innova Crysta",price:"₹15.40 Lakh*",year:"2019",km:"68,000 km*",fuel:"Diesel*",gear:"Manual*",tag:"PREMIUM",note:"Demo listing — replace with dealership stock"}
];

const waForCar = (car) => whatsapp("Hello Soni Auto Deal, I am interested in the " + car.name + ". Please confirm availability, final price, RC/insurance details and share current photos.");

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home"><span className="mark">SA</span><span><b>SONI</b><small>AUTO DEAL</small></span></a>
        <nav><a href="#home">Home</a><a href="#inventory">Cars</a><a href="#why">Why Soni</a><a href="#process">Process</a><a href="#contact">Contact</a></nav>
        <a className="navButton" href={whatsapp("Hello Soni Auto Deal, I want to enquire about a car.")} target="_blank" rel="noreferrer">WhatsApp ↗</a>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <div className="eyebrow"><i /> MANDSAUR · PRE-OWNED CARS</div>
          <h1>Drive something<br /><em>worth owning.</em></h1>
          <p>A premium digital showroom for Soni Auto Deal. Browse the demo inventory below, then enquire directly on WhatsApp for the dealership's current stock.</p>
          <div className="demoBadge">DEMO INVENTORY · REPLACE WITH LIVE STOCK BEFORE LAUNCH</div>
          <div className="actions"><a className="primary" href="#inventory">Browse cars ↓</a><a className="secondary" href={whatsapp("Hello Soni Auto Deal 👋 Please share today's available cars.")} target="_blank" rel="noreferrer">● Chat on WhatsApp</a></div>
          <div className="stats"><div><b>6</b><span>Demo cars</span></div><div><b>458001</b><span>Mandsaur</span></div><div><b>{displayPhone}</b><span>Call / WhatsApp</span></div></div>
        </div>
        <div className="hero3d">
          <div className="halo h1" /><div className="halo h2" /><div className="glow" />
          <div className="car"><div className="roof" /><div className="window" /><div className="body" /><div className="wheel left" /><div className="wheel right" /><div className="lamp" /></div>
          <div className="float one"><small>01</small><b>PREMIUM</b><span>3D showroom experience</span></div>
          <div className="float two"><small>02</small><b>WHATSAPP</b><span>Direct vehicle enquiry</span></div>
          <div className="serial">SONI / AUTO / 458001</div>
        </div>
      </section>

      <div className="ticker">BUY · SELL · ENQUIRE · FINANCE · TEST DRIVE · BUY · SELL · ENQUIRE · FINANCE · TEST DRIVE ·</div>

      <section id="inventory" className="section inventory">
        <div className="sectionTop"><div><label>01 / LIVE-STYLE INVENTORY</label><h2>Cars that<br /><em>move fast.</em></h2></div><p>Six realistic demo cards are loaded for now so the website feels complete. Replace these with Soni Auto Deal's actual cars, prices and photos before publishing.</p></div>
        <div className="filters"><button className="active">All Cars</button><button>SUV</button><button>Sedan</button><button>Hatchback</button><span>6 vehicles · Mandsaur</span></div>
        <div className="carGrid">
          {cars.map(car => <article className="listing" key={car.id}>
            <div className="listingVisual"><span className="stockId">{car.id}</span><span className="tag">{car.tag}</span><div className={"listingCar lc" + car.id}><div className="lRoof"/><div className="lWindow"/><div className="lBody"/><i/><i/></div><div className="imageHint">PHOTO SLOT</div></div>
            <div className="listingBody"><div className="demoLine">DEMO · VERIFY STOCK</div><h3>{car.name}</h3><strong>{car.price}</strong><div className="specs"><span>{car.year}</span><span>{car.km}</span><span>{car.fuel}</span><span>{car.gear}</span></div><p>{car.note}</p><a href={waForCar(car)} target="_blank" rel="noreferrer">Enquire on WhatsApp ↗</a></div>
          </article>)}
        </div>
        <div className="inventoryCta"><div><b>Looking for something specific?</b><span>Tell Soni Auto Deal your budget and preferred car.</span></div><a className="primary" href={whatsapp("Hello Soni Auto Deal, I am looking for a used car. My budget is ₹____ and I prefer _____. Please share matching cars.")} target="_blank" rel="noreferrer">Find my car on WhatsApp ↗</a></div>
      </section>

      <section id="why" className="dark">
        <div className="sectionTop light"><div><label>02 / WHY SONI</label><h2>Local trust.<br /><em>Modern buying.</em></h2></div><p>One polished website, one local showroom and one direct line to the dealership.</p></div>
        <div className="features"><div><b>01</b><h3>LOCAL ADDRESS</h3><p>18, Stadium Market, BPL Chouraha, Mandsaur.</p></div><div><b>02</b><h3>WHATSAPP FIRST</h3><p>Every vehicle can open a pre-filled enquiry directly in WhatsApp.</p></div><div><b>03</b><h3>BUY OR SELL</h3><p>Find a car or start a conversation about selling your own.</p></div><div><b>04</b><h3>REAL DATA READY</h3><p>Inventory structure is ready for actual photos, prices and documents.</p></div></div>
      </section>

      <section id="process" className="section process"><label>03 / THE SIMPLE WAY</label><h2>From search to<br /><em>steering wheel.</em></h2><div className="steps">{[["01","SEARCH","Pick a car or tell us your budget."],["02","WHATSAPP","Ask for current photos, price and availability."],["03","VISIT","Come to Stadium Market, BPL Chouraha."],["04","INSPECT","Check the vehicle and decide with confidence."]].map(([n,t,d])=><div className="step" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>)}</div></section>

      <section className="sell"><div className="sellVisual"><div className="rings"/><strong>SELL<br /><em>YOUR</em><br />CAR</strong></div><div className="sellCopy"><label>04 / SELL YOUR CAR</label><h2>Ready for<br /><em>something new?</em></h2><p>Send your car's make, model, year, kilometres and photos through WhatsApp to start a conversation with Soni Auto Deal.</p><a className="primary" href={whatsapp("Hello Soni Auto Deal, I want to sell my car. Please tell me what details and photos you need.")} target="_blank" rel="noreferrer">Start on WhatsApp ↗</a></div></section>

      <section id="contact" className="contact"><div><label>05 / CONTACT</label><h2>Let's talk<br /><em>cars.</em></h2></div><div className="contactBox"><div><span>PHONE / WHATSAPP</span><a href={whatsapp("Hello Soni Auto Deal, I would like to enquire about a car.")} target="_blank" rel="noreferrer">{displayPhone} ↗</a></div><div><span>ADDRESS</span><p>18, Stadium Market, BPL Chouraha,<br />Mandsaur, Madhya Pradesh 458001</p></div><div><span>HOURS</span><p>Every day · 11:00 AM — 7:00 PM</p></div><a className="map" href="https://www.google.com/maps/search/?api=1&query=Soni+Auto+Deal+18+Stadium+Market+BPL+Chouraha+Mandsaur" target="_blank" rel="noreferrer">Open in Google Maps ↗</a></div></section>

      <footer><div className="footerBrand"><span className="mark">SA</span><b>SONI AUTO DEAL</b></div><p>Pre-owned cars · Mandsaur, Madhya Pradesh</p><a href={whatsapp("Hello Soni Auto Deal 👋")} target="_blank" rel="noreferrer">WhatsApp ↗</a><small>* Demo vehicle figures are placeholders and must be replaced with verified dealership inventory before public launch. © {new Date().getFullYear()} Soni Auto Deal.</small></footer>
      <a className="floating" href={whatsapp("Hello Soni Auto Deal 👋 I found you through your website.")} target="_blank" rel="noreferrer">● <span>WhatsApp</span></a>
    </main>
  );
}
