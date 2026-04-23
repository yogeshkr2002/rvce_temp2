import React from "react";
import "./Eligibility.css";

/* -------- SVG ICONS -------- */

const GradIcon = () => (
  <svg viewBox="0 0 100 100" className="svg-icon">
    <ellipse cx="50" cy="65" rx="25" ry="10" fill="#e2e8f0" />
    <polygon points="50,20 85,40 50,60 15,40" fill="#1e293b" />
    <rect x="30" y="55" width="40" height="10" rx="3" fill="#3b82f6" />
    <line x1="65" y1="45" x2="65" y2="70" stroke="#f59e0b" strokeWidth="2" />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 100 100" className="svg-icon">
    <ellipse cx="50" cy="70" rx="25" ry="8" fill="#e2e8f0" />
    <rect x="25" y="45" width="10" height="25" rx="2" fill="#22c55e" />
    <rect x="45" y="35" width="10" height="35" rx="2" fill="#16a34a" />
    <rect x="65" y="25" width="10" height="45" rx="2" fill="#15803d" />
  </svg>
);

const LabIcon = () => (
  <svg viewBox="0 0 100 100" className="svg-icon">
    <ellipse cx="50" cy="70" rx="25" ry="8" fill="#e2e8f0" />
    <rect x="45" y="20" width="10" height="35" fill="#7c3aed" />
    <circle cx="50" cy="65" r="15" fill="#a78bfa" />
  </svg>
);

/* -------- DATA -------- */

const data = [
  {
    icon: <GradIcon />,
    badge: "✓",
    color: "blue",
    text: (
      <>
        Must have passed <br />
        <span className="highlight">Class 12 / 2nd PUC</span> / equivalent
      </>
    ),
  },
  {
    icon: <ChartIcon />,
    badge: "%",
    color: "green",
    text: (
      <>
        Minimum <span className="highlight">60%</span> in <br />
        Physics, Mathematics subjects separately
      </>
    ),
  },
  {
    icon: <LabIcon />,
    badge: "⚗",
    color: "purple",
    text: (
      <>
        One compulsory subject: <br />
        <span className="highlight">
          Chemistry / Biotechnology / Biology / Computer Science / Electronics
        </span>
      </>
    ),
  },
];

const Eligibility = () => {
  return (
    <section className="eligibility">
      <div className="container">
        {/* HEADER */}
        <div className="eligibility-header">
          <h2>Management Quota Eligibility Criteria</h2>
          <p>RVCE Bangalore</p>
        </div>

        {/* CARDS */}
        <div className="cards">
          {data.map((item, index) => (
            <div className={`card ${item.color}`} key={index}>
              <div className="icon-circle">
                {item.icon}
                <div className="badge">{item.badge}</div>
              </div>

              <p className="card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
