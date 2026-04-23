import React from "react";
import "./FeeStructure.css";
import rvceImg from "../../assets/rvce.jpg";
import {
  FaLaptopCode,
  FaRobot,
  FaDatabase,
  FaShieldAlt,
  FaMicrochip,
  FaSatelliteDish,
  FaBolt,
  FaIndustry,
  FaCogs,
  FaFlask,
  FaPlane,
  FaLeaf,
  FaBrain,
} from "react-icons/fa";

const categories = [
  {
    id: "cs",
    label: "Computer Science Branches",
    tagline: "Driving India's digital economy",
    desc: "RVCE's CS programs are among India's most competitive — equipped with world-class labs, tie-ups with Google, Microsoft & Amazon, and near-100% placement records.",
    stats: [
      { label: "Programs", value: "4" },
      { label: "1st Yr from", value: "₹22L" },
      { label: "Avg Package", value: "18+ LPA" },
    ],
    accent: "#1E3A8A",
    accentBg: "rgba(30,58,138,0.12)",
    branches: [
      {
        title: "Computer Science",
        sub: "Core CSE",
        y1: 36,
        yRest: 13,
        icon: <FaLaptopCode />,
      },
      {
        title: "CSE (AI & ML)",
        sub: "Artificial Intelligence",
        y1: 31,
        yRest: 12,
        icon: <FaRobot />,
      },
      {
        title: "CSE (Data Science)",
        sub: "Data Engineering",
        y1: 24,
        yRest: 12,
        icon: <FaDatabase />,
      },
      {
        title: "CSE (Cyber Security)",
        sub: "InfoSec & Networks",
        y1: 22,
        yRest: 11,
        icon: <FaShieldAlt />,
      },
    ],
  },
  {
    id: "circuit",
    label: "Circuit Branches",
    tagline: "Building tomorrow's electronics",
    desc: "RVCE's electronics programs offer deep expertise in VLSI, signal processing, and embedded systems — backed by partnerships with Intel, Texas Instruments, and Samsung.",
    stats: [
      { label: "Programs", value: "3" },
      { label: "1st Yr from", value: "₹7L" },
      { label: "Specialised Labs", value: "20+" },
      { label: "Specialised Labs", value: "20+" },
    ],
    accent: "#7c3aed",
    accentBg: "rgba(124,58,237,0.12)",
    branches: [
      {
        title: "Electronics & Telecommunication",
        sub: "Signal & RF Systems",
        y1: 8,
        yRest: 8,
        icon: <FaMicrochip />,
      },
      {
        title: "Electronics & Communication",
        sub: "VLSI & Embedded",
        y1: 19,
        yRest: 8,
        icon: <FaSatelliteDish />,
      },
      {
        title: "Electrical & Electronics",
        sub: "Power Systems",
        y1: 7,
        yRest: 7,
        icon: <FaBolt />,
      },
      {
        title: "Electrical & Electronics",
        sub: "Power Systems",
        y1: 7,
        yRest: 7,
        icon: <FaBolt />,
      },
    ],
  },
  {
    id: "core",
    label: "Core Engineering Branches",
    tagline: "Engineering India's infrastructure",
    desc: "RVCE's core engineering programs have shaped India's industry for over 60 years — producing civil, mechanical, chemical, and aerospace engineers who lead across sectors.",
    stats: [
      { label: "Programs", value: "4" },
      { label: "1st Yr from", value: "₹4.5L" },
      { label: "Est.", value: "1963" },
    ],
    accent: "#16a34a",
    accentBg: "rgba(22,163,74,0.12)",
    branches: [
      {
        title: "Civil Engineering",
        sub: "Structures & Infrastructure",
        y1: 7,
        yRest: 7,
        icon: <FaIndustry />,
      },
      {
        title: "Mechanical Engineering",
        sub: "Design & Manufacturing",
        y1: 7,
        yRest: 7,
        icon: <FaCogs />,
      },
      {
        title: "Chemical Engineering",
        sub: "Process & Materials",
        y1: 4.5,
        yRest: 4.5,
        icon: <FaFlask />,
      },
      {
        title: "Aerospace Engineering",
        sub: "Avionics & Propulsion",
        y1: 11,
        yRest: 8,
        icon: <FaPlane />,
      },
    ],
  },
  {
    id: "other",
    label: "Other Branches",
    tagline: "Specialised & interdisciplinary",
    desc: "Biotechnology and Industrial Management at RVCE combine scientific rigour with management depth — opening careers in pharma, biotech R&D, and manufacturing leadership.",
    stats: [
      { label: "Programs", value: "2" },
      { label: "1st Yr from", value: "₹6L" },
      { label: "Placement", value: "100%" },
    ],
    accent: "#0ea5a5",
    accentBg: "rgba(14,165,165,0.12)",
    branches: [
      {
        title: "Biotechnology",
        sub: "Life Sciences & Biotech",
        y1: 10,
        yRest: 6,
        icon: <FaLeaf />,
      },
      {
        title: "Industrial Management",
        sub: "Operations & Management",
        y1: 6,
        yRest: 6,
        icon: <FaBrain />,
      },
      {
        title: "Biotechnology",
        sub: "Life Sciences & Biotech",
        y1: 10,
        yRest: 6,
        icon: <FaLeaf />,
      },
      {
        title: "Industrial Management",
        sub: "Operations & Management",
        y1: 6,
        yRest: 6,
        icon: <FaBrain />,
      },
    ],
  },
];

const total = (b) => b.y1 + b.yRest * 3;

const FeeStructure = () => (
  <section className="fee-section">
    <div className="container">
      <div className="fee-header">
        <h2>Fee Structure (Management Quota)</h2>
        <p>RVCE Bangalore · 2026–27 · All figures in Lakh (₹)</p>
      </div>

      {categories.map((cat) => (
        <div className="fee-category" key={cat.id}>
          {/* SUBHEADING */}
          <div className="cat-heading">
            <span className="cat-bar" style={{ background: cat.accent }} />
            <h3 style={{ color: cat.accent }}>{cat.label}</h3>
          </div>

          {/* TWO-COLUMN LAYOUT */}
          <div className="cat-layout">
            {/* LEFT: info + image */}
            <div className="cat-left">
              <div
                className="cat-desc"
                style={{ borderTop: `3px solid ${cat.accent}` }}
              >
                <p className="cat-tagline">{cat.tagline}</p>
                <p className="cat-text">{cat.desc}</p>
                <div className="cat-stats">
                  {cat.stats.map((s, i) => (
                    <div
                      className="cat-stat"
                      key={i}
                      style={{ borderColor: `${cat.accent}40` }}
                    >
                      <strong style={{ color: cat.accent }}>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cat-img-wrap">
                <img src={rvceImg} alt="RVCE Campus" />
                <div
                  className="cat-img-overlay"
                  style={{ background: `${cat.accent}20` }}
                />
              </div>
            </div>

            {/* RIGHT: branch cards */}
            <div className="cat-right">
              <div className={`branch-grid grid-${cat.branches.length}`}>
                {cat.branches.map((b, i) => (
                  <div className="branch-card" key={i}>
                    <div className="bc-top">
                      <div
                        className="bc-icon"
                        style={{ background: cat.accentBg, color: cat.accent }}
                      >
                        {b.icon}
                      </div>
                      <div className="bc-title-wrap">
                        <h4 className="bc-name">{b.title}</h4>
                        <span className="bc-sub">{b.sub}</span>
                      </div>
                    </div>
                    <div className="bc-fees">
                      <div className="bc-year">
                        <span>1st Year</span>
                        <strong style={{ color: cat.accent }}>₹{b.y1}L</strong>
                      </div>
                      <span className="bc-arrow">→</span>
                      <div className="bc-year">
                        <span>Yr 2–4</span>
                        <strong>₹{b.yRest}L/yr</strong>
                      </div>
                      <div
                        className="bc-total"
                        style={{ background: cat.accent }}
                      >
                        ₹{total(b)}L
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeeStructure;
