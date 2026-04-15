import './footer.css'
import { FaInstagram, FaYoutube,  FaSpotify, FaEnvelope, FaApple } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Branding */}
        <div className="footer-left">
          <h2>Rohit Sharma</h2>
          <p>Creating immersive sound & visual experiences.</p>
        </div>

        {/* Social Links */}
        <div className="footer-middle">
          <h3>Connect</h3>
          <ul>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram /> @rsharma__official 
              </a>
            </li>
{/* 
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaApple /> Twitter / X
              </a>
            </li> */}

            <li>
              <a href="https://www.youtube.com/@RohitSharma-pb4ks" target="_blank" rel="noreferrer">
                <FaYoutube /> YouTube
              </a>
            </li>

            <li>
              <a href=" https://open.spotify.com/artist/3fqMBwSYEOoksmhiaX9mui" target="_blank" rel="noreferrer">
                <FaSpotify /> Spotify
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-right">
          <h3>Contact</h3>

          <p>
            <FaEnvelope /> sharmarohit9322@gmail.com
          </p>

          <p>Bookings & inquiries welcome</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rohit Sharma</p> 
      </div>
    </footer>
  );
}