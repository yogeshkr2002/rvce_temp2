import "./Process.css";

const steps = [
  { title: "Submit your Query", desc: "Start your admission process" },
  { title: "Expert Counselling", desc: "Get guidance for best branch" },
  { title: "Document Verification", desc: "Submit required documents" },
  { title: "Fee Payment", desc: "Complete payment process" },
  { title: "Admission Confirmation", desc: "Secure your seat" },
];

function Process() {
  return (
    <section className="process-section">
      <div className="container">
        <h2 className="title">ADMISSION PROCESS</h2>

        <div className="subtitle-box">
          Step-by-step process for RVCE Management Quota
        </div>

        {/* TWO CARDS */}
        <div className="process-layout">
          {/* LEFT CARD → TIMELINE */}
          <div className="timeline-card">
            <div className="timeline">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`timeline-item ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >
                  {/* CONTENT */}
                  <div className="timeline-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>

                  {/* CIRCLE */}
                  <div className="timeline-circle">{index + 1}</div>

                  {/* LINE (ONLY BETWEEN ITEMS) */}
                  {index !== steps.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD → FORM */}
          <div className="form-card">
            <h3>Enquiry Form</h3>

            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />

              <select>
                <option>Select Course</option>
                <option>CSE</option>
                <option>AI & ML</option>
                <option>Data Science</option>
                <option>Cyber Security</option>
              </select>

              <textarea placeholder="Your Message"></textarea>

              <button type="submit">Submit Enquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
