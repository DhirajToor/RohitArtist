import './footer.css'
import {FaSoundcloud, FaYoutube,  FaSpotify, FaApple  } from "react-icons/fa";


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
              <a href="https://on.soundcloud.com/Pc9BCwnsqdFY055OQq" target="_blank" rel="noreferrer">
                <FaSoundcloud /> SoundCloud
              </a>
            </li>

            <li>
              <a href="https://music.apple.com/ca/artist/rohit-sharma/1749740087" target="_blank" rel="noreferrer">
                <FaApple /> Apple Music
              </a>
            </li>

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
            sharmarohit9322@gmail.com
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