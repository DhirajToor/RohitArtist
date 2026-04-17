import DJ from '../images/Dj_video_mp4.mp4';
import './bio.css';
export default function Bio() {
  return (
    <section id="bio" className="  ">
      <div className='bio-container'>
       

        <div className='container_dj'> 
        <video  autoPlay loop muted  className="  DjVideo">
        <source src={DJ}   />
      </video>

                   <div className='biography'>
         
      <h2>Artist • Producer • DJ</h2>

      <p style={{ maxWidth: "1080px", lineHeight: "1.6" }}>
    
Rohit Sharma is a Toronto-based Punjabi singer, songwriter, producer and DJ crafting modern Punjabi pop with a global edge. Blending hypnotic melodies, hip-hop energy and raw romantic storytelling, his sound hits both the heart and the dancefloor. From studio to stage, he doesn’t just make music he creates a vibe you remember.  
 
      </p>

             

      
        </div>

        
        <div className='marquee'> <div  direction="left" className='marquee-content'>  Available For Booking Contact: sharmarohit9322@gmail.com    <span className='mm'> Mob +1 647 782-4497 </span>   </div></div>

     
        </div>
      </div>
    </section>
  );
}