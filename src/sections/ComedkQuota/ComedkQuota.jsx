import "./ComedkQuota.css";

const points = [
  "COMEDK quota allows private colleges like RVCE to admit 30% intake based on COMEDK UGET rank.",
  "Admissions are conducted through centralized online counselling.",
  "Open to all India students (unlike KCET which is Karnataka-only).",
  "Fees are higher than KCET but lower than management quota.",
];

function ComedkQuota() {
  return (
    <section className="quota-section">
      <div className="container">
        <h2 className="title">COMEDK QUOTA</h2>

        <div className="subtitle-box">
          Why COMEDK Quota is Important in RVCE?
        </div>

        <div className="quota-list">
          {points.map((item, index) => (
            <div className="quota-card" key={index}>
              <div className="number">{index + 1}</div>
              <p>{item}</p>
              <div className="accent"></div>
            </div>
          ))}
        </div>

        <div className="cta-box">APPLY NOW FOR COMEDK COUNSELLING GUIDANCE</div>
      </div>
    </section>
  );
}

export default ComedkQuota;
