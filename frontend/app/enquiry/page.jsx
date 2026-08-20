export default function Enquiry(){
 return <main className="p-10">
  <h1>Car Enquiry</h1>
  <form>
   <input placeholder="Name"/><br/>
   <input placeholder="Mobile Number"/><br/>
   <textarea placeholder="Interested Car"/><br/>
   <button type="submit">Send Enquiry</button>
  </form>
 </main>
}