import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faInstagram,
  faSoundcloud,
  faSpotify, 
  faApple ,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./socialBar.css";

const SocialBar = () => {
  const links = [
    { icon: faSpotify, url: "https://open.spotify.com/artist/3fqMBwSYEOoksmhiaX9mui" },
    { icon: faSoundcloud, url: "https://on.soundcloud.com/Pc9BCwnsqdFY055OQq" },
    { icon: faApple , url: "https://music.apple.com/ca/artist/rohit-sharma/1749740087" },
    { icon: faInstagram, url: "https://www.instagram.com/rsharma__official?igsh=c2c3ZWxiYm5rOTJ4&utm_source=qr" },   
    { icon: faYoutube, url: "https://www.youtube.com/@RohitSharma-pb4ks" },
  ];

  return (
    <div className="social-bar">
      {links.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialBar;