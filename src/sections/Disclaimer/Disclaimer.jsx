import React from "react";
import "./Disclaimer.css";
import { FaInfoCircle, FaGlobe } from "react-icons/fa";
import disclaimerImg from "../../assets/disclaimer.jpg";

const Disclaimer = () => {
  return (
    <div className="disclaimer-wrapper">
      {/* ── BANNER ── */}
      <div className="d-banner">
        <div className="d-banner-text">
          <h1>Disclaimer</h1>
          <div className="underline"></div>
          <p>
            The information provided on this website is for general
            informational purposes only. By using this website, you agree to the
            terms of this disclaimer.
          </p>
        </div>
        <div className="d-banner-img">
          <img src={disclaimerImg} alt="Disclaimer" />
        </div>
      </div>

      {/* ── POINTS ── */}
      <div className="disclaimer-points">
        <div className="point">
          <div className="icon-circle">
            <svg
              viewBox="0 0 48 48"
              width="32"
              height="32"
              fill="none"
              stroke="#1E3A8A"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="10" y="6" width="22" height="28" rx="3" />
              <line x1="15" y1="14" x2="27" y2="14" />
              <line x1="15" y1="19" x2="27" y2="19" />
              <line x1="15" y1="24" x2="21" y2="24" />
              <circle
                cx="33"
                cy="34"
                r="8"
                fill="#EFF6FF"
                stroke="#1E3A8A"
                strokeWidth="1.8"
              />
              <line x1="33" y1="31" x2="33" y2="37" />
              <circle cx="33" cy="29.5" r="1.1" fill="#1E3A8A" stroke="none" />
            </svg>
          </div>
          <div className="point-body">
            <h3>Information Accuracy</h3>
            <p>
              While we strive to provide accurate and up-to-date information, we
              do not guarantee the completeness, accuracy, or reliability of any
              information on this website. Information related to colleges,
              courses, admissions, fees, cut-offs, placements and other details
              may change from time to time.
            </p>
          </div>
        </div>

        <div className="point">
          <div className="icon-circle">
            <svg
              viewBox="0 0 48 48"
              width="32"
              height="32"
              fill="none"
              stroke="#1E3A8A"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="22" cy="16" r="7" />
              <path d="M8 38c0-7.732 6.268-14 14-14" />
              <circle
                cx="35"
                cy="34"
                r="8"
                fill="#EFF6FF"
                stroke="#1E3A8A"
                strokeWidth="1.8"
              />
              <polyline points="30,34 33.5,37.5 40,31" />
            </svg>
          </div>
          <div className="point-body">
            <h3>No Professional Advice</h3>
            <p>
              The content on this website is not intended to be a substitute for
              professional advice. Our consultancy services are meant to provide
              guidance only. Final decisions regarding admissions, colleges, or
              careers should be taken by students and parents after thorough
              research and verification.
            </p>
          </div>
        </div>

        <div className="point">
          <div className="icon-circle">
            <svg
              viewBox="0 0 48 48"
              width="32"
              height="32"
              fill="none"
              stroke="#1E3A8A"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="8" y="20" width="32" height="18" rx="1" />
              <polygon points="24,8 6,20 42,20" />
              <rect x="14" y="28" width="5" height="10" rx="1" />
              <rect x="21.5" y="28" width="5" height="10" rx="1" />
              <rect x="29" y="28" width="5" height="10" rx="1" />
            </svg>
          </div>
          <div className="point-body">
            <h3>No Affiliation</h3>
            <p>
              We are an independent education consultancy and are not affiliated
              with, endorsed by, or officially connected to any university,
              college, or government authority unless explicitly stated.
            </p>
          </div>
        </div>

        <div className="point">
          <div className="icon-circle">
            <svg
              viewBox="0 0 48 48"
              width="32"
              height="32"
              fill="none"
              stroke="#1E3A8A"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 18h6l14-8v20L18 22h-6a2 2 0 01-2-2v-2a2 2 0 012-2z" />
              <path d="M18 22v10" />
              <path d="M36 16c2 2 2 8 0 10" />
              <path d="M39 13c4 3.5 4 12.5 0 16" />
            </svg>
          </div>
          <div className="point-body">
            <h3>External Links</h3>
            <p>
              This website may contain links to external websites for additional
              information. We do not control or endorse the content of those
              websites and are not responsible for their accuracy or
              availability.
            </p>
          </div>
        </div>

        <div className="point">
          <div className="icon-circle">
            <svg
              viewBox="0 0 48 48"
              width="32"
              height="32"
              fill="none"
              stroke="#1E3A8A"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M24 6L10 12v12c0 9 6.3 17.4 14 20 7.7-2.6 14-11 14-20V12L24 6z" />
              <polyline points="18,24 22,28 31,19" strokeWidth="2" />
            </svg>
          </div>
          <div className="point-body">
            <h3>Limitation of Liability</h3>
            <p>
              We shall not be liable for any direct, indirect, incidental, or
              consequential losses or damages arising from the use of this
              website or reliance on any information provided herein.
            </p>
          </div>
        </div>
      </div>

      {/* ── OFFICIAL SECTION ── */}
      <div className="official-section">
        <div className="official-title">
          <div className="title-line" />
          <h2>
            <FaGlobe />
            Official Websites
          </h2>
          <div className="title-line" />
        </div>
        <p>
          For official information, updates, notifications and counselling
          related to admissions, please visit the respective official websites:
        </p>

        <div className="official-cards">
          <div className="official-card">
            <img src="/assets/comedk.png" alt="COMEDK" />
            <div className="card-info">
              <h3>COMEDK</h3>
              <p>
                Consortium of Medical, Engineering and Dental Colleges of
                Karnataka
              </p>
              <a href="https://www.comedk.org" target="_blank" rel="noreferrer">
                <FaGlobe /> https://www.comedk.org
              </a>
            </div>
          </div>

          <div className="official-card">
            <img src="/assets/kea.png" alt="KEA" />
            <div className="card-info">
              <h3>KCET (KEA)</h3>
              <p>Karnataka Examinations Authority</p>
              <a
                href="https://cetonline.karnataka.gov.in"
                target="_blank"
                rel="noreferrer"
              >
                <FaGlobe /> https://cetonline.karnataka.gov.in
              </a>
            </div>
          </div>
        </div>

        <div className="note">
          <FaInfoCircle className="note-icon" />
          <p>
            We recommend students and parents to always refer to the official
            websites for authentic information and notifications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
