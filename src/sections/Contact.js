import './contact.css'
import logo from '../images/logo_no_back.png';

import { FaPhone, FaEnvelope, FaTeamspeak } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
export default function Contact() {
  return (
    
     <section id="contact" className="contact-section">
     
      <img className="contact-logo" src={logo} alt="" />
      <h2 className="contact-title">BOOKINGS</h2>

      <div className="contact-grid">
        <div className="contact-item">
        
        <a   href="tel:+16477824497" target="_blank" rel="noopener noreferrer">
            <div className="icon-circle">
            <FaPhone />
          </div>
          <h3>PHONE</h3>
          <p>+1 647 782-4497</p>

        </a>
         
        </div>

        <div className="contact-item">
        <a   href="mailto:djtigerclaw1093@gmail.com" target="_blank" rel="noopener noreferrer">
           <div className="icon-circle">
            <IoPeople />
          </div>
          <h3>MANAGEMENT</h3>
          <p>Rohit Sharma</p>
        
        </a>
        </div>

        <div className="contact-item">
        
        <a   href="mailto:sharmarohit9322@gmail.com" target="_blank" rel="noopener noreferrer">
          <div className="icon-circle">
            <FaEnvelope />
          </div>
          <h3>EMAIL</h3>
          <p>sharmarohit9322@gmail.com</p>

        </a>
         
        </div>
      </div>
    </section>
  );
}