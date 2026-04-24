import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./BookConsultation.css";

export default function BookConsultation() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name && phone) setSubmitted(true);
  };

  return (
    <section className="consult-section">
      <div className="container">
        {/* HEADING */}
        <h2 className="title">Book Free Consultation</h2>

        <div className="subtitle-box">
          Get expert guidance for RVCE Management Quota Admission
        </div>

        {/* LAYOUT */}
        <div className="consult-layout">
          {/* LEFT */}
          <div className="consult-left card">
            <h3>Why Book Consultation?</h3>

            <ul className="consult-points">
              <li>Direct admission guidance</li>
              <li>Instant response via call/WhatsApp</li>
              <li>Expert counselling for branch selection</li>
              <li>Transparent fee structure</li>
            </ul>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Now
            </a>
          </div>

          {/* RIGHT */}
          <div className="consult-form card">
            {!submitted ? (
              <>
                <h3>Quick Enquiry</h3>

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <select>
                  <option>Select Branch</option>
                  <option>CSE</option>
                  <option>AI & ML</option>
                  <option>Data Science</option>
                </select>

                <button onClick={handleSubmit}>Book Consultation</button>
              </>
            ) : (
              <div className="success">
                <h3>✅ Submitted Successfully</h3>
                <p>We will contact you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
