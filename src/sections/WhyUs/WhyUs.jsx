import "./WhyUs.css";

const reasons = [
  {
    title: "Trusted Admission Consultancy",
    desc: "Years of proven expertise helping students secure seats at RVCE.",
    icon: "🎓",
    color: "red",
  },
  {
    title: "End-to-End Guidance",
    desc: "From form submission to final admission — we handle everything.",
    icon: "📋",
    color: "blue",
  },
  {
    title: "Quick Seat Confirmation",
    desc: "Fast process ensures your seat is secured without delays.",
    icon: "⚡",
    color: "purple",
  },
  {
    title: "No Hidden Charges",
    desc: "Complete transparency in fees. No surprises.",
    icon: "₹",
    color: "green",
  },
];

function WhyUs() {
  return (
    <section className="why-section">
      <div className="container">
        {/* HEADING */}
        <h2 className="title">WHY CHOOSE US</h2>

        <div className="subtitle-box">
          Why Apply Through Us for RVCE Management Quota?
        </div>

        {/* SPLIT LAYOUT */}
        <div className="why-layout">
          {/* LEFT IMAGE */}
          <div className="why-image">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="students"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="why-content">
            <div className="info-cards">
              {reasons.map((item, index) => (
                <div key={index} className={`info-card ${item.color}`}>
                  {/* ICON */}
                  <div className="icon-box">
                    <span>{item.icon}</span>
                  </div>

                  {/* TEXT */}
                  <div className="card-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>

                  {/* RIGHT STRIP */}
                  <div className="right-accent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
