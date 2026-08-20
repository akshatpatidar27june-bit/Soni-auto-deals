export default function Home(){
 const cars=[
  {name:'Hyundai Creta',price:'₹12,50,000',details:'2022 | Petrol | Automatic'},
  {name:'Mahindra XUV700',price:'₹18,50,000',details:'2023 | Diesel | Automatic'},
  {name:'Maruti Suzuki Swift',price:'₹7,00,000',details:'2021 | Petrol | Manual'}
 ];
 return <main className="min-h-screen bg-gray-50 text-gray-900">
  <header className="flex justify-between items-center px-8 py-5 bg-black text-white">
   <h1 className="text-2xl font-bold">Soni Auto Deals</h1>
   <button className="bg-green-500 px-5 py-2 rounded-full">WhatsApp</button>
  </header>

  <section className="bg-black text-white px-8 py-20">
   <h2 className="text-5xl font-bold mb-4">Trusted Used Cars in Mandsaur</h2>
   <p className="text-xl text-gray-300">Find your perfect pre-owned car with Soni Auto Deals.</p>
   <button className="mt-8 bg-white text-black px-6 py-3 rounded-lg">Explore Cars</button>
  </section>

  <section className="px-8 py-12">
   <h2 className="text-3xl font-bold mb-8">Available Cars</h2>
   <div className="grid md:grid-cols-3 gap-8">
   {cars.map(car=><div key={car.name} className="bg-white rounded-2xl shadow-lg p-6">
    <div className="h-40 bg-gray-200 rounded-xl mb-5"></div>
    <h3 className="text-xl font-bold">{car.name}</h3>
    <p className="text-2xl font-semibold mt-2">{car.price}</p>
    <p className="text-gray-600 mt-2">{car.details}</p>
    <button className="mt-5 w-full bg-black text-white py-3 rounded-lg">Enquire Now</button>
   </div>)}
   </div>
  </section>
 </main>
}