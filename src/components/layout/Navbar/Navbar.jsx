import { useState } from "react";
import "./Navbar.css";
import logo from "../../../assets/rvce-logo.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        {/* LEFT */}
        <div className="nav-left">
          <img src={logo} alt="RVCE Logo" className="logo-img" />
          <h2 className="logo-text">RVCE</h2>
        </div>

        {/* CENTER — desktop only */}
        <ul className="nav-links">
          <li onClick={() => scrollToSection("admission")} className="active">
            Admission
          </li>
          <li onClick={() => scrollToSection("placement")}>Placement</li>
          <li onClick={() => scrollToSection("review")}>Review</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        {/* RIGHT — hamburger (mobile only) */}
        <div className="nav-right">
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div className={`mobile-menu${menuOpen ? " visible" : ""}`}>
        <ul className="mobile-links">
          <li onClick={() => scrollToSection("admission")}>Admission</li>
          <li onClick={() => scrollToSection("placement")}>Placement</li>
          <li onClick={() => scrollToSection("review")}>Review</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
