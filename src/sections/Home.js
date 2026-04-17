import SocialBar from '../components/SocialBar';
import './home.css';
// import lamb from '../images/lambh.jpeg'
export default function Home() {
  return (
    <section id="home" className="section home">
     <SocialBar />
      {/* <video autoPlay loop muted className="bg-video">
        <source src={lamb}   />
      </video> */} 
     <div className='overlay'>
     
        <div  >
        <h1>ROHIT SHARMA</h1>
        <p>  PUNJABI POP ARTIST AND DJ </p>
         
       
      </div>
      
     </div>
      
    </section>
  );
}