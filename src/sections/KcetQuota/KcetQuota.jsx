import "./KcetQuota.css";

const info = [
  "KCET is the primary admission gateway for engineering seats in Karnataka.",
  "45% seats in private colleges are reserved under KCET Government quota.",
  "Students must be Karnataka domicile or meet KEA eligibility.",
];

const benefits = [
  "Lowest fee compared to COMEDK or Management quota.",
  "Merit-based allocation ensures transparency.",
  "Affordable quality engineering education.",
];

function KcetQuota() {
  return (
    <section className="kcet-section">
      <div className="container">
        <h2 className="title">KCET QUOTA</h2>

        <div className="subtitle-box">Why KCET Quota is Important in RVCE?</div>

        {/* SPLIT */}
        <div className="kcet-layout">
          {/* LEFT */}
          <div className="kcet-left">
            <h3 className="section-heading">About KCET</h3>

            {info.map((item, index) => (
              <div className="kcet-card" key={index}>
                <div
                  className="number"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #ec4899)",
                  }}
                >
                  {index + 1}
                </div>
                <p>{item}</p>
                <div
                  className="accent"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #ec4899)",
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="kcet-right">
            <h3 className="section-heading green">Benefits of KCET Quota</h3>

            {benefits.map((item, index) => (
              <div className="kcet-card green" key={index}>
                <div
                  className="number"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #ec4899)",
                  }}
                >
                  {index + 1}
                </div>
                <p>{item}</p>
                <div
                  className="accent"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #ec4899)",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-box">APPLY NOW FOR KCET COUNSELLING GUIDANCE</div>
      </div>
    </section>
  );
}

export default KcetQuota;
