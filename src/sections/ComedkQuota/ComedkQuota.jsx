import "./ComedkQuota.css";

const info = [
  "National-level exam for private engineering colleges in Karnataka.",
  "Around 30% seats are filled through COMEDK quota.",
  "Open to students across India with no Karnataka domicile requirement.",
];

const benefits = [
  "Provides access to top colleges like RVCE for non-Karnataka students.",
  "Rank-based centralized counselling ensures transparency.",
  "Wider opportunity pool with all-India competition.",
];

function ComedkQuota() {
  return (
    <section className="kcet-section">
      <div className="container">
        <h2 className="title">COMEDK QUOTA</h2>

        <div className="subtitle-box">
          Why COMEDK Quota is Important in RVCE?
        </div>

        {/* SPLIT */}
        <div className="kcet-layout">
          {/* LEFT */}
          <div className="kcet-left">
            <h3 className="section-heading">About COMEDK</h3>

            {info.map((item, index) => (
              <div className="kcet-card" key={index}>
                <div className="number">{index + 1}</div>
                <p>{item}</p>
                <div className="accent"></div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="kcet-right">
            <h3 className="section-heading green">Benefits of COMEDK Quota</h3>

            {benefits.map((item, index) => (
              <div className="kcet-card green" key={index}>
                <div className="number">{index + 1}</div>
                <p>{item}</p>
                <div className="accent"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-box">APPLY NOW FOR COMEDK COUNSELLING GUIDANCE</div>
      </div>
    </section>
  );
}

export default ComedkQuota;
