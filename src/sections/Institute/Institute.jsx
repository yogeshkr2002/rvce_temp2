import React from "react";
import "./Institute.css";
import {
  FaMedal,
  FaBriefcase,
  FaUniversity,
  FaGraduationCap,
} from "react-icons/fa";

const Institute = () => {
  const cards = [
    {
      icon: <FaMedal color="white" />,
      title: "Top Rank Engineering College",
      color: "red",
    },
    {
      icon: <FaBriefcase color="white" />,
      title: "Outstanding Placement Record",
      color: "blue",
    },
    {
      icon: <FaUniversity color="white" />,
      title: "World Class Infrastructure",
      color: "purple",
    },
    {
      icon: <FaGraduationCap color="white" />,
      title: "Excellent Academic Standard",
      color: "green",
    },
  ];

  return (
    <section className="institute">
      <div className="container">
        <div className="institute-header">
          <h2>ABOUT RVCE</h2>
        </div>

        <div className="institute-cards">
          {cards.map((card, index) => (
            <div className={`institute-card ${card.color}`} key={index}>
              <div className="icon-box">{card.icon}</div>

              <p>{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Institute;
