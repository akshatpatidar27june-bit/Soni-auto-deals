export default function Home(){
 const cars=[
  {name:'Hyundai Creta',price:'₹12,50,000',details:'2022 | Petrol | Automatic'},
  {name:'Mahindra XUV700',price:'₹18,50,000',details:'2023 | Diesel | Automatic'},
  {name:'Maruti Suzuki Swift',price:'₹7,00,000',details:'2021 | Petrol | Manual'}
 ];
 return <main>
  <header className="p-6 flex justify-between"><h1>Soni Auto Deals</h1><button>WhatsApp</button></header>
  <section className="p-10"><h2>Trusted Used Cars in Mandsaur</h2><p>Find your perfect pre-owned car.</p></section>
  <section className="p-10"><h2>Available Cars</h2><div>{cars.map(car=><div key={car.name}><h3>{car.name}</h3><p>{car.price}</p><p>{car.details}</p><button>Enquire Now</button></div>)}</div></section>
 </main>
}