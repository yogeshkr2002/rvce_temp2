import { useState } from "react";
import "./Placement.css";

const faqs = [
  {
    q: "How can I take admission at RVCE?",
    a: "Admission to RVCE is through three routes: Management Quota (25% seats — direct admission), COMEDK UGET (30% seats — All-India entrance exam), and KCET/KEA (45% seats — Karnataka government quota). Contact us for end-to-end guidance on any route.",
  },

  {
    q: "Are JEE Mains scores considered for admission?",
    a: "No, JEE Mains scores are not considered for admissions at RVCE. Admissions are based on COMEDK UGET rank (for COMEDK quota), KCET rank (for government quota), or direct eligibility (for Management quota).",
  },
  {
    q: "Does RVCE conduct its own entrance exam?",
    a: "No, RVCE does not conduct its own entrance examination. Seats are filled through COMEDK UGET and KCET centralized counselling processes, plus Management Quota which is based on eligibility criteria.",
  },
  {
    q: "What is the eligibility criteria for Management Quota?",
    a: "Candidates must have passed Class 12 / 2nd PUC with a minimum of 60% in Physics and Mathematics separately, along with one of the following: Chemistry, Biotechnology, Biology, Computer Science, or Electronics.",
  },

  {
    q: "Is hostel facility available at RVCE?",
    a: "Yes, RVCE has separate hostel facilities for male and female students on campus. The hostels are well-maintained with modern amenities. Availability is subject to capacity — early application is recommended.",
  },
  {
    q: "What documents are required for admission?",
    a: "Required documents include: 10th and 12th mark sheets and certificates, Transfer Certificate, Migration Certificate, Caste/Category certificate (if applicable), Domicile certificate, passport-size photographs, and ID proof. Our team assists with the complete documentation process.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about RVCE admissions</p>
        </div>

        <div className="faq-layout">
          {/* LEFT: Accordion */}
          <div className="faq-left">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item${openIndex === i ? " open" : ""}`}
              >
                <button className="faq-question" onClick={() => toggle(i)}>
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-icon">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>

          {/* RIGHT: Enquiry Form */}
          <div className="faq-right">
            <div className="faq-form-card">
              <h3>Quick Enquiry</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
                <select>
                  <option>Select Course</option>
                  <option>CSE</option>
                  <option>AI &amp; ML</option>
                  <option>Data Science</option>
                  <option>Cyber Security</option>
                  <option>Electronics &amp; Communication</option>
                  <option>Mechanical Engineering</option>
                  <option>Civil Engineering</option>
                </select>
                <textarea placeholder="Your Message" rows="4"></textarea>
                <button type="submit">Submit Enquiry</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
