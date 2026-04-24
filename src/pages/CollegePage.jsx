import Navbar from "../components/layout/Navbar/Navbar";
import Admission from "../sections/Admission/Admission";
import Hero from "../sections/Hero/Hero";
import WhyChoose from "../sections/WhyChoose/WhyChoose";
import ManagementQuota from "../sections/ManagementQuota/ManagementQuota";
import Eligibility from "../sections/Eligibility/Eligibility";
import Institute from "../sections/Institute/Institute";
import Process from "../sections/Process/Process";
import FeeStructure from "../sections/FeeStructure/FeeStructure";
import WhyUs from "../sections/WhyUs/WhyUs";
import BookConsultation from "../sections/Bookconsultation/Bookconsultation";
import ComedkQuota from "../sections/ComedkQuota/ComedkQuota";
import KcetQuota from "../sections/KcetQuota/KcetQuota";
import FAQ from "../sections/Placement/Placement";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import Disclaimer from "../sections/Disclaimer/Disclaimer";

function CollegePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Institute />
      <WhyChoose />
      <Admission />
      <ManagementQuota />
      <Eligibility />
      <Process />
      <FeeStructure />
      <WhyUs />
      <BookConsultation />
      <ComedkQuota />
      <KcetQuota />
      <FAQ />
      {/* <Disclaimer /> */}

      {/* Fixed bottom contact buttons — mobile only */}
      <div className="fixed-contact-btns">
        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="fixed-contact-btn wa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} />
          WhatsApp
        </a>
        <a href="tel:+91XXXXXXXXXX" className="fixed-contact-btn call">
          <FaPhone size={18} />
          Call Us
        </a>
      </div>
    </>
  );
}

export default CollegePage;
