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
        <img width={180} height={240}
           src= {shows1}     alt=""/>
        <p>Toronto — April 12</p>
        <p>New York — May 5</p>
      </div>
      
       <div className='release'>
        <img width={180} height={240}
           src= {shows2}     alt=""/>
        <p>Toronto — April 12</p>
        <p>New York — May 5</p>
      </div>

      
       <div className='release'>
        <img width={180} height={240}
           src= {shows3}     alt=""/>
        <p>Toronto — April 12</p>
        <p>New York — May 5</p>
      </div>

      
       <div className='release'>
        <img width={180} height={240}
           src= {shows4}     alt=""/>
        <p>Toronto — April 12</p>
        <p>New York — May 5</p>
      </div>

      
       <div className='release'>
        <img width={180} height={240}
           src= {shows5}     alt=""/>
        <p>Toronto — April 12</p>
        <p>New York — May 5</p>
      </div> 
      
       <div className='release'>
        <img width={180} height={240}
           src= {nakhre}     alt=""/>
        <p>Toronto — April 12</p>
        <p>New York — May 5</p>
      </div> 
      
       <div    className='release'>
        <img width={180} height={240}
           src= {lembo}     alt=""/>
        <p>Toronto — April 12</p>
        <p>New York — May 5</p>
      </div> 
      
       <div   className='release' >
        <img  
           src= {gym}     alt=""/>
        <p>Toronto — April 12</p>
        <p>New York — May 5</p>
      </div> 
      

      </div>

              {/* <p  className='quote'>
        Music isn’t heard it’s felt.
      </p> */}
    </div>
     

     
    </section>
  );
}