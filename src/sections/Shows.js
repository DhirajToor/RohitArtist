import shows1 from '../images/shows1.jpeg';
import shows2 from '../images/shows2.jpeg';
import shows3 from '../images/shows3.jpeg';
import shows4 from '../images/shows4.jpeg';
import shows5 from '../images/shows5.png';
import gym from '../images/gym.jpeg';
import nakhre from '../images/nakhre.jpeg';
import lembo from '../images/lembo.jpeg';
import './shows.css';
export default function Shows()

{
  return (
    <section id="shows" className=" ">
    <div className='releases'>
       <h1>Releases</h1>
      <div className="release-container">
       <div className='release'>
                <a
      href="https://www.youtube.com/watch?v=XO-2_rqjAJE"
      target="_blank"
      rel="noopener noreferrer"
    >
        <img width={180} height={240}
           src= {shows1}     alt=""/>
        <p>Boss</p>
        <p> Dec 6, 2025</p>
    </a>
      
      </div>
      
       <div className='release'>
         <a  
               href="https://www.youtube.com/watch?v=x0wvJC0J89A"
               target="_blank"
               rel="noopener noreferrer">
              <img width={180} height={240}
           src= {shows2}     alt=""/>
        <p>Koke Waliye</p>
        <p> Jan 23, 2026 </p>
         </a>
      </div>

      
       <div className='release'>
           <a  
               href="https://www.youtube.com/watch?v=iOFK3Iu6W3E"
               target="_blank"
               rel="noopener noreferrer">
                      <img width={180} height={240}
           src= {shows3}     alt=""/>
        <p>Dubai Vibe</p>
        <p>Oct 2, 2025</p>
               </a>
    
      </div>

      
       <div className='release'>
        <a  
               href="https://www.youtube.com/watch?v=awZZz-9WSa4&list=RDawZZz-9WSa4&start_radio=1"
               target="_blank"
               rel="noopener noreferrer">
                   <img width={180} height={240}
           src= {shows4}     alt=""/>
        <p>Kheeji Kheeji</p>
        <p>Jan 6, 2026</p>
               </a>
       
      </div>

      
       <div className='release'>
              <a  
               href="https://www.youtube.com/watch?v=SKTSEPN2HhU"
               target="_blank"
               rel="noopener noreferrer">
                  <img width={180} height={240}
           src= {shows5}     alt=""/>
        <p>Phagware Da King</p>
        <p>Aug 30, 2025 </p>
               </a>
        
      </div> 
        
       <div className='release'>
          <a  
               href="https://www.youtube.com/watch?v=uzDl8vwYayY"
               target="_blank"
               rel="noopener noreferrer"> 
                <img width={180} height={240}
           src= {nakhre}     alt=""/>
           
        <p>Nakhre </p>
        <p> Feb 25, 2025</p>

               </a>
        
      </div> 
      
       <div    className='release'>

       
          <a  
               href="https://www.youtube.com/watch?v=OQiM-lqA7bQ"
               target="_blank"
               rel="noopener noreferrer"> 
        
        <img width={180} height={240}
           src= {lembo}     alt=""/>
        <p>Lamborghini </p>
        <p> May 3, 2025</p>
               </a>  


      </div> 
      
       <div   className='release' >

         <a  
               href="https://www.youtube.com/watch?v=4siinZp4KHQ&list=RD4siinZp4KHQ&start_radio=1"
               target="_blank"
               rel="noopener noreferrer"> 
        <img  
           src= {gym}     alt=""/>
        <p>Gym vs Love </p>
        <p>May 31, 2024 </p>
        </a>
      </div> 
      

      </div>

              {/* <p  className='quote'>
        Music isn’t heard it’s felt.
      </p> */}
    </div>
     

     
    </section>
  );
}