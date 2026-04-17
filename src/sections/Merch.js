import money from '../images/money.mp4'
import hoodie from '../images/hoodie_white.jpg'
import cap from '../images/cap_white_square.png'
import tshirt from '../images/white_bg_square.jpg'
import bracelet from '../images/bracelet_white_bg.png'
import './merch.css';
export default function Merch() {
  return (
    <section id="merch" className=" section">
      <h2>Merch</h2>
      <div className="Merch-container  ">

          <div className="card-container">
        <div className="grid">
          <img className="item" 
          src={hoodie} 
          alt="" />
          <h3>Hoodie</h3>
          <p>$65</p>
          <button className="gold-btn">Coming Soon</button>
        </div>

        
        <div className="grid">
          <img className="item" 
         src={bracelet}  alt="" />
          <h3>Bracelet</h3>
          <p>$40</p>
          <button  className="gold-btn">Coming Soon</button>
        </div>
        
      
 
        
        
        <div className="grid">
          <img className="item" 
         src={cap}  alt="" />
          <h3>Cap</h3>
          <p>$35</p>
          <button  className="gold-btn">Coming Soon</button>
        </div>
        <div className="grid">
          <img className="item" 
          src={tshirt} alt="" />
          <h3>T-Shirt</h3>
          <p>$25</p>
          <button  className="gold-btn">Coming Soon</button>
        </div>
      </div>
      <div className='merch-video'>
      <video autoPlay loop muted  className="money-video">
             <source src={money}   />
           </video>

      </div>

      </div>

         

  
    </section>
  );
}