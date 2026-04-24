import "./Disclaimer.css";

const COMEDK_URL = "https://www.comedk.org";
const KCET_URL = "https://cetonline.karnataka.gov.in/kea";

export default function Disclaimer() {
  return (
    <section className="disclaimer-section">
      <div className="disclaimer-container">
        {/* ── Disclaimer Heading ── */}
        <div className="disclaimer-heading-block">
          <h2 className="disclaimer-title">Disclaimer</h2>
          <div className="disclaimer-divider" />
        </div>

        {/* ── Disclaimer body text ── */}
        <p className="disclaimer-body">
          The information provided on this website is for general informational
          purposes only. By using this website, you agree to the terms of this
          disclaimer.
        </p>

        {/* ── Official Websites ── */}
        <div className="official-websites-box">
          <div className="ow-title-row">
            <span className="ow-globe">🌐</span>
            <h3 className="ow-title">Official Websites</h3>
          </div>
          <p className="ow-subtitle">
            For official information, updates, notifications and counselling
            related to admissions, please visit the respective official
            websites:
          </p>

          {/* cards grid */}
          <div className="ow-cards">
            {/* COMEDK */}
            <div className="ow-card">
              <div className="ow-card-logo comedk-logo">
                <span className="comedk-text">
                  <span className="c">C</span>
                  <span className="omed">OMED</span>
                  <span className="k">K</span>
                </span>
              </div>
              <div className="ow-card-info">
                <h4 className="ow-card-name">COMEDK</h4>
                <p className="ow-card-desc">
                  Consortium of Medical, Engineering and Dental Colleges of
                  Karnataka
                </p>
                <a
                  href={COMEDK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ow-link-btn"
                >
                  <span className="ow-link-globe">🌐</span>
                  {COMEDK_URL.replace("https://", "")}
                </a>
              </div>
            </div>

            {/* KCET / KEA */}
            <div className="ow-card">
              <div className="ow-card-logo kea-logo">
                <span className="kea-k">K</span>
                <span className="kea-e">E</span>
                <span className="kea-a">A</span>
              </div>
              <div className="ow-card-info">
                <h4 className="ow-card-name">KCET (KEA)</h4>
                <p className="ow-card-desc">Karnataka Examinations Authority</p>
                <a
                  href={KCET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ow-link-btn"
                >
                  <span className="ow-link-globe">🌐</span>
                  {KCET_URL.replace("https://", "")}
                </a>
              </div>
            </div>
          </div>

          {/* info note */}
          <div className="ow-note">
            <span className="ow-note-icon">ℹ</span>
            <p>
              We recommend students and parents to always refer to the official
              websites for authentic information and notifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
