import "./WhyChoose.css";

const imageUrl =
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop";

const points = [
  "1st rank among top engineering colleges in Karnataka",
  "Average B.E package is 15-16 LPA",
  "Highest package up to 67 LPA",
  "Prime location in Bangalore — India's tech hub",
  "Excellent Placement Record",
];

function WhyChoose() {
  return (
    <section className="whychoose">
      <div className="container">
        {/* CENTERED HEADING */}
        <h2 className="title center">Why Choose RVCE Bangalore?</h2>

        {/* SPLIT */}
        <div className="why-container">
          {/* LEFT */}
          <div className="why-left">
            <div className="why-list">
              {points.map((item, index) => (
                <div key={index} className="why-card">
                  <div className="why-number">{index + 1}</div>
                  <p>{item}</p>
                  <div className="right-accent"></div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="why-right">
            <div
              className="why-image"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
