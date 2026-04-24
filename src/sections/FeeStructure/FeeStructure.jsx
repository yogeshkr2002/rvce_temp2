import React, { useState } from "react";
import "./FeeStructure.css";
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
  FaCheckCircle,
  FaStar,
  FaGraduationCap,
  FaBriefcase,
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
    tagline: "Driving India's digital economy",
    desc: "RVCE's CS programs are among India's most competitive — equipped with world-class labs, tie-ups with Google, Microsoft & Amazon, and near-100% placement records.",
    highlights: [
      "Dedicated AI/ML research labs with GPU clusters",
      "Industry partnerships with Google, Microsoft & Amazon",
      "Hackathon culture — 50+ national wins annually",
      "Near-100% placement with top product companies",
      "Curriculum updated every semester with industry input",
      "Strong alumni network across FAANG & global startups",
    ],
    extraStats: [
      { icon: <FaBriefcase />, value: "18+ LPA", label: "Avg CTC" },
      { icon: <FaGraduationCap />, value: "98%", label: "Placement Rate" },
      { icon: <FaStar />, value: "#3", label: "Private College Rank" },
    ],
    note: "Management quota seats are limited — early application strongly advised. Merit scholarships available for students above 95 percentile in KCET.",
    stats: [
      { label: "Programs", value: "4" },
      { label: "Avg Package", value: "18+ LPA" },
    ],
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
    tagline: "Building tomorrow's electronics",
    desc: "RVCE's electronics programs offer deep expertise in VLSI, signal processing, and embedded systems — preparing engineers for the semiconductor and telecom industries.",
    highlights: [
      "VLSI design lab with Cadence & Synopsys EDA toolchains",
      "Tie-ups with Qualcomm, Texas Instruments & Bosch",
      "Active research collaborations with ISRO and DRDO",
      "Hands-on embedded systems projects from Semester 1",
      "20+ specialised electronics & RF labs on campus",
      "Strong placement in core electronics & software IT sectors",
    ],
    extraStats: [
      { icon: <FaBriefcase />, value: "12+ LPA", label: "Avg CTC" },
      { icon: <FaGraduationCap />, value: "95%", label: "Placement Rate" },
      { icon: <FaStar />, value: "20+", label: "Specialised Labs" },
    ],
    note: "ECE students regularly qualify for ISRO, Intel & Qualcomm internships. VLSI specialisation track is available from 5th semester onwards.",
    stats: [
      { label: "Programs", value: "3" },
      { label: "Specialised Labs", value: "20+" },
    ],
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
    tagline: "Engineering India's infrastructure",
    desc: "RVCE's core engineering programs have shaped India's industry for over 60 years — producing civil, mechanical, and aerospace engineers who lead across public and private sectors.",
    highlights: [
      "60+ years of legacy with 10,000+ alumni across India",
      "Advanced CAD/CAM labs, CNC machines & 3D printing suites",
      "Live industry projects with BMRCL, L&T & HAL",
      "Aerospace wind tunnel, propulsion & avionics test rigs",
      "National-level competition wins in design & robotics",
      "Strong PSU placements — ISRO, DRDO, BHEL, NTPC & more",
    ],
    extraStats: [
      { icon: <FaBriefcase />, value: "9+ LPA", label: "Avg CTC" },
      { icon: <FaGraduationCap />, value: "92%", label: "Placement Rate" },
      { icon: <FaStar />, value: "1963", label: "Established" },
    ],
    note: "Core engineering students benefit from RVCE's long-standing PSU relationships. On-campus GATE coaching and competitive exam prep support is available.",
    stats: [
      { label: "Programs", value: "4" },
      { label: "Est.", value: "1963" },
    ],
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
    tagline: "Specialised & interdisciplinary",
    desc: "Biotechnology, Chemical Engineering, and Architecture at RVCE combine scientific rigour with creative depth — opening diverse paths into pharma, process industries, and design.",
    highlights: [
      "Biotech lab with genomics, proteomics & fermentation facilities",
      "Chemical plant simulation & process design software suites",
      "Architecture studio with nationally awarded design projects",
      "Interdisciplinary electives available across all engineering streams",
      "Internship tie-ups with pharma, FMCG & architecture firms",
      "100% placement record maintained consistently for all three programs",
    ],
    extraStats: [
      { icon: <FaBriefcase />, value: "8+ LPA", label: "Avg CTC" },
      { icon: <FaGraduationCap />, value: "100%", label: "Placement Rate" },
      { icon: <FaStar />, value: "3", label: "Unique Programs" },
    ],
    note: "B.Arch is a 5-year program. Architecture students regularly win state and national design awards. Biotech students have access to RVCE's dedicated bio-incubation centre.",
    stats: [
      { label: "Programs", value: "3" },
      { label: "Placement", value: "100%" },
    ],
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
      {/* Gradient accent bar — animates in on hover */}
      <div
        className="bc-accent-bar"
        style={{
          background: GRADIENT,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />

      <div className="bc-top">
        {/* Icon: always gradient bg, always white */}
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

/* ─── Left Info Panel ─── */
const CategoryDesc = ({ cat }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="cat-desc"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient accent bar — same slide-in animation as branch cards */}
      <div
        className="cat-desc-accent-bar"
        style={{
          background: GRADIENT,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />

      <p className="cat-tagline">{cat.tagline}</p>
      <p className="cat-text">{cat.desc}</p>

      {/* Highlight list */}
      <ul className="cat-highlights">
        {cat.highlights.map((h, i) => (
          <li key={i} className="cat-highlight-item">
            <FaCheckCircle
              className="cat-highlight-icon"
              style={{ color: cat.accent }}
            />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* Extra stat pills */}
      <div className="cat-extra-stats">
        {cat.extraStats.map((s, i) => (
          <div key={i} className="cat-extra-stat">
            <span className="ces-icon" style={{ background: GRADIENT }}>
              {s.icon}
            </span>
            <div className="ces-text">
              <strong style={{ color: cat.accent }}>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Note strip */}
      <div
        className="cat-note"
        style={{ borderLeft: `3px solid ${cat.accent}` }}
      >
        <p>{cat.note}</p>
      </div>

      {/* Stats row */}
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
            <div className="cat-left">
              <CategoryDesc cat={cat} />
            </div>
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
