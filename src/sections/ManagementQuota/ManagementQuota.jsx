import "./ManagementQuota.css";

const ICON_ACCENT = "linear-gradient(135deg, #2563eb, #ec4899);";

const quotaInfo = [
  {
    text: "25% of seats are available under this Quota",
    icon: "🎓",
  },
  {
    text: "Direct admission is offered under the Management Quota",
    icon: "📄",
  },
  {
    text: "Admission is based on eligibility + seat availability",
    icon: "📋",
  },
  {
    text: "Ideal for students with average or moderate ranks",
    icon: "📈",
  },
];

function ManagementQuota() {
  return (
    <section className="management-quota">
      <div className="container">
        <h2 className="title">MANAGEMENT QUOTA</h2>

        <div className="subtitle-box">
          What is Management quota Admission in RVCE?
        </div>

        {/* MAIN SPLIT */}
        <div className="quota-layout">
          {/* LEFT IMAGE */}
          <div className="quota-image">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="students discussion"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="quota-content">
            <div className="info-cards">
              {quotaInfo.map((item, index) => (
                <div key={index} className="info-card">
                  {/* ICON */}
                  <div className="icon-box">
                    <span>{item.icon}</span>
                  </div>

                  {/* TEXT */}
                  <div className="card-content">
                    <p>{item.text}</p>
                  </div>

                  {/* RIGHT STRIP */}
                  <div
                    className="right-accent"
                    style={{ background: ICON_ACCENT }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManagementQuota;
