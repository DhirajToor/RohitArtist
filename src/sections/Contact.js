import './contact.css'
import logo from '../images/logo_no_back.png';
export default function Contact() {
  return (
    <section id="contact" className="section">
    <div className='contact'>
    
      <img className="contact-logo" src={logo} alt="" />
             <form>
             
      <h2>Bookings</h2>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <textarea placeholder="Message" />
        <button>Send</button>
      </form>
      
    </div>

     
    </section>
  );
}