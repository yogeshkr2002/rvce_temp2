import React, { useState } from "react";
import "./FeeStructure.css";

// ── Category images — swap these paths to your actual assets ──
import imgCS from "../../assets/computer_branch.png";
import imgCircuit from "../../assets/circuit_branch.png";
import imgCore from "../../assets/core_branch.png";
import imgOther from "../../assets/other_branch.png";

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

const GRADIENT = "linear-gradient(135deg, #2563eb, #ec4899)";

const ACCENT = {
  accent: "#1E3A8A",
  accentBg: "rgba(30,58,138,0.08)",
  accentBorder: "rgba(30,58,138,0.35)",
  accentShadow: "rgba(30,58,138,0.14)",
};

const categories = [
  {
    id: "cs",
    label: "Computer Science Branches",
    image: imgCS,
    imageAlt: "RVCE Computer Science Lab",
    ...ACCENT,
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
    image: imgCircuit,
    imageAlt: "RVCE Electronics & Circuit Lab",
    ...ACCENT,
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
    ],
  },
  {
    id: "core",
    label: "Core Engineering Branches",
    image: imgCore,
    imageAlt: "RVCE Core Engineering Workshop",
    ...ACCENT,
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
        title: "Industrial Management",
        sub: "Operations & Management",
        y1: 6,
        yRest: 6,
        icon: <FaBrain />,
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
    image: imgOther,
    imageAlt: "RVCE Biotech & Architecture Studio",
    ...ACCENT,
    branches: [
      {
        title: "Biotechnology",
        sub: "Life Sciences & Biotech",
        y1: 10,
        yRest: 6,
        icon: <FaLeaf />,
      },
      {
        title: "Chemical Engineering",
        sub: "Process & Materials",
        y1: 4.5,
        yRest: 4.5,
        icon: <FaFlask />,
      },
      {
        title: "B.Arch",
        sub: "Architecture",
        y1: 6,
        yRest: 6,
        fiveYear: true,
        icon: <FaBrain />,
      },
    ],
  },
];

const total4 = (b) => b.y1 + b.yRest * 3;
const total5 = (b) => b.y1 + b.yRest * 4;

/* ─── Branch Card ─── */
const BranchCard = ({ b, cat }) => {
  const [hovered, setHovered] = useState(false);
  const isFiveYear = !!b.fiveYear;
  const totalFee = isFiveYear ? total5(b) : total4(b);

  return (
    <div
      className="branch-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? cat.accentBorder : undefined,
        boxShadow: hovered ? `0 10px 28px ${cat.accentShadow}` : undefined,
        transform: hovered ? "translateY(-4px)" : undefined,
      }}
    >
      {/* Gradient accent bar — slides in from left on hover */}
      <div
        className="bc-accent-bar"
        style={{
          background: GRADIENT,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />

      <div className="bc-top">
        <div
          className="bc-icon"
          style={{ background: GRADIENT, color: "#ffffff" }}
        >
          {b.icon}
        </div>
        <div className="bc-title-wrap">
          <h4 className="bc-name">{b.title}</h4>
          <span className="bc-sub">{b.sub}</span>
        </div>
      </div>

      {isFiveYear ? (
        <div className="bc-table-row bc-table-row--5yr">
          <div className="bc-col">
            <span>1st Yr</span>
            <strong>₹{b.y1}L</strong>
          </div>
          <div className="bc-col">
            <span>2nd Yr</span>
            <strong>₹{b.yRest}L</strong>
          </div>
          <div className="bc-col">
            <span>3rd Yr</span>
            <strong>₹{b.yRest}L</strong>
          </div>
          <div className="bc-col">
            <span>4th Yr</span>
            <strong>₹{b.yRest}L</strong>
          </div>
          <div className="bc-col">
            <span>5th Yr</span>
            <strong>₹{b.yRest}L</strong>
          </div>
          <div className="bc-col total" style={{ background: GRADIENT }}>
            <span>Total</span>
            <strong>₹{totalFee}L</strong>
          </div>
        </div>
      ) : (
        <div className="bc-table-row">
          <div className="bc-col">
            <span>1st Yr</span>
            <strong>₹{b.y1}L</strong>
          </div>
          <div className="bc-col">
            <span>2nd Yr</span>
            <strong>₹{b.yRest}L</strong>
          </div>
          <div className="bc-col">
            <span>3rd Yr</span>
            <strong>₹{b.yRest}L</strong>
          </div>
          <div className="bc-col">
            <span>4th Yr</span>
            <strong>₹{b.yRest}L</strong>
          </div>
          <div className="bc-col total" style={{ background: GRADIENT }}>
            <span>Total</span>
            <strong>₹{totalFee}L</strong>
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── Main Component ─── */
const FeeStructure = () => (
  <section className="fee-section">
    <div className="container">
      <div className="fee-header">
        <h2>Fee Structure (Management Quota)</h2>
        <p>RVCE Bangalore · 2026–27 · All figures in Lakh (₹)</p>
      </div>

      {categories.map((cat) => (
        <div className="fee-category" key={cat.id}>
          <div className="cat-heading">
            <span className="cat-bar" style={{ background: GRADIENT }} />
            <h3 style={{ color: cat.accent }}>{cat.label}</h3>
          </div>

          <div className="cat-layout">
            {/* LEFT — full-height image, no effects */}
            <div className="cat-left">
              <div className="cat-img-box">
                <img src={cat.image} alt={cat.imageAlt} className="cat-img" />
              </div>
            </div>

            {/* RIGHT — branch cards */}
            <div className="cat-right">
              <div className={`branch-grid grid-${cat.branches.length}`}>
                {cat.branches.map((b, i) => (
                  <BranchCard key={i} b={b} cat={cat} />
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
