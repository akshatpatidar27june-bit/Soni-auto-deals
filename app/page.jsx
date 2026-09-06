"use client";

const PHONE = "919827004779";
const displayPhone = "+91 98270 04779";
const whatsapp = (message) => "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(message);

const categories = [
  ["01", "SUV", "Power, space & road presence"],
  ["02", "SEDAN", "Comfort for every drive"],
  ["03", "HATCHBACK", "Smart city-ready choices"]
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home"><span className="mark">SA</span><span><b>SONI</b><small>AUTO DEAL</small></span></a>
        <nav><a href="#home">Home</a><a href="#inventory">Inventory</a><a href="#why">Why Soni</a><a href="#process">Process</a><a href="#contact">Contact</a></nav>
        <a className="navButton" href={whatsapp("Hello Soni Auto Deal, I want to enquire about a car.")} target="_blank" rel="noreferrer">WhatsApp ↗</a>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <div className="eyebrow"><i /> MANDSAUR · PRE-OWNED CARS</div>
          <h1>Drive something<br /><em>worth owning.</em></h1>
          <p>Welcome to Soni Auto Deal — a local used-car destination in Mandsaur where your next car conversation starts directly with the dealership.</p>
          <div className="actions"><a className="primary" href="#inventory">Explore the showroom ↓</a><a className="secondary" href={whatsapp("Hello Soni Auto Deal 👋 Please share today's available cars.")} target="_blank" rel="noreferrer">● Chat on WhatsApp</a></div>
          <div className="stats"><div><b>11–7</b><span>Daily hours</span></div><div><b>MP-458001</b><span>Mandsaur</span></div><div><b>+91 98270 04779</b><span>Call / WhatsApp</span></div></div>
        </div>
        <div className="hero3d">
          <div className="halo h1" /><div className="halo h2" /><div className="glow" />
          <div className="car"><div className="roof" /><div className="window" /><div className="body" /><div className="wheel left" /><div className="wheel right" /><div className="lamp" /></div>
          <div className="float one"><small>01</small><b>LOCAL</b><span>Mandsaur showroom</span></div>
          <div className="float two"><small>02</small><b>DIRECT</b><span>WhatsApp enquiries</span></div>
          <div className="serial">SONI / AUTO / 458001</div>
        </div>
      </section>

      <div className="ticker">BUY · SELL · ENQUIRE · VISIT · TEST DRIVE · BUY · SELL · ENQUIRE · VISIT · TEST DRIVE ·</div>

      <section id="inventory" className="section">
        <div className="sectionTop"><div><label>01 / SHOWROOM</label><h2>Find your<br /><em>next car.</em></h2></div><p>We keep the website honest: individual vehicles are only published when real stock details are supplied by the dealership. Ask for today's live list on WhatsApp.</p></div>
        <div className="cards">{categories.map(([n,t,d]) => <article className="card" key={n}><div className="carStage"><span>{n}</span><b>{t}</b><div className={"mini " + t.toLowerCase()} /></div><div className="cardBody"><h3>{t}</h3><p>{d}</p><a href={whatsapp("Hello Soni Auto Deal, please send me your current " + t.toLowerCase() + " cars with price, year, km and photos.")} target="_blank" rel="noreferrer">Request live cars ↗</a></div></article>)}</div>
        <div className="notice">● Live stock changes. <a href={whatsapp("Hello Soni Auto Deal, please send me today's available cars.")} target="_blank" rel="noreferrer">Get today's inventory on WhatsApp →</a></div>
      </section>

      <section id="why" className="dark">
        <div className="sectionTop light"><div><label>02 / WHY SONI</label><h2>Local trust.<br /><em>Modern buying.</em></h2></div><p>Everything important is close: the dealership, the phone number and a direct WhatsApp conversation.</p></div>
        <div className="features">
          <div><b>01</b><h3>LOCAL ADDRESS</h3><p>18, Stadium Market, BPL Chouraha, Mandsaur.</p></div>
          <div><b>02</b><h3>ONE-TAP WHATSAPP</h3><p>Ask for current cars, photos, pricing and availability without a complicated form.</p></div>
          <div><b>03</b><h3>BUY OR SELL</h3><p>Tell the dealership what you need, or start a conversation about your own car.</p></div>
          <div><b>04</b><h3>NO FAKE STOCK</h3><p>The site does not invent car listings. Real vehicles can be added as stock arrives.</p></div>
        </div>
      </section>

      <section id="process" className="section process">
        <label>03 / THE SIMPLE WAY</label><h2>Four steps to<br /><em>your next drive.</em></h2>
        <div className="steps">
          {[
            ["01","MESSAGE","Share your budget, preferred model or car type."],
            ["02","SHORTLIST","Get the current available options from the dealership."],
            ["03","VISIT","Come to Stadium Market, BPL Chouraha, Mandsaur."],
            ["04","DECIDE","Inspect, ask questions and proceed when you're ready."]
          ].map(([n,t,d]) => <div className="step" key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>)}
        </div>
      </section>

      <section className="sell">
        <div className="sellVisual"><div className="rings" /><strong>SELL<br /><em>YOUR</em><br />CAR</strong></div>
        <div className="sellCopy"><label>04 / SELL YOUR CAR</label><h2>Ready for<br /><em>something new?</em></h2><p>Send the make, model, year, kilometres and a few photos through WhatsApp. Start the conversation with the dealership and take it from there.</p><a className="primary" href={whatsapp("Hello Soni Auto Deal, I want to sell my car. Please tell me what details and photos you need.")} target="_blank" rel="noreferrer">Start on WhatsApp ↗</a></div>
      </section>

      <section id="contact" className="contact">
        <div><label>05 / CONTACT</label><h2>Let's talk<br /><em>cars.</em></h2></div>
        <div className="contactBox">
          <div><span>PHONE / WHATSAPP</span><a href={whatsapp("Hello Soni Auto Deal, I would like to enquire about a car.")} target="_blank" rel="noreferrer">{displayPhone} ↗</a></div>
          <div><span>ADDRESS</span><p>18, Stadium Market, BPL Chouraha,<br />Mandsaur, Madhya Pradesh 458001</p></div>
          <div><span>HOURS</span><p>Every day · 11:00 AM — 7:00 PM</p></div>
          <a className="map" href="https://www.google.com/maps/search/?api=1&query=Soni+Auto+Deal+18+Stadium+Market+BPL+Chouraha+Mandsaur" target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
        </div>
      </section>

      <footer><div className="footerBrand"><span className="mark">SA</span><b>SONI AUTO DEAL</b></div><p>Pre-owned cars · Mandsaur, Madhya Pradesh</p><a href={whatsapp("Hello Soni Auto Deal 👋")} target="_blank" rel="noreferrer">WhatsApp ↗</a><small>© {new Date().getFullYear()} Soni Auto Deal · 18, Stadium Market, BPL Chouraha, Mandsaur 458001</small></footer>
      <a className="floating" href={whatsapp("Hello Soni Auto Deal 👋 I found you through your website.")} target="_blank" rel="noreferrer">● <span>WhatsApp</span></a>
    </main>
  );
}
