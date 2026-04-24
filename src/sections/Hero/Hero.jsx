import "./Hero.css";
import rvceImage from "../../assets/rvce_img2.jpeg";

function Hero() {
  return (
    <section className="hero">
      {/* BACKGROUND IMAGE */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${rvceImage})` }}
      ></div>

      {/* CONTENT */}
      <div className="hero-content">
        <div className="hero-left">
          {/* BADGE */}
          <div className="hero-badge">
            <span></span>
            ADMISSIONS OPEN · BANGALORE
          </div>

          {/* TITLE */}
          <h1 className="hero-title">RVCE</h1>

          {/* SUBTITLE */}
          <h2 className="hero-subtitle">
            India's leading engineering institution.
          </h2>

          {/* DESCRIPTION */}
          <p className="hero-desc">
            Get expert guidance for admissions through Management, COMEDK and
            KCET / KEA quotas. Trusted, transparent and end-to-end support.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">
            <button className="btn-primary">Book Free Consultation →</button>

            <button className="btn-secondary">Explore Admissions</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
