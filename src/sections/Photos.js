
import rs from "../images/rs.jpeg"

export default function Photos() {
  return (
    <section id="photos" className="section">
      <h1>Gallery</h1>

      <div className="grid">
        <img src={rs} alt="" />
        <img src={rs} alt="" />
        <img src={rs} alt="" />
      </div>
    </section>
  );
}