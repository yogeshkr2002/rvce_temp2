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
      icon: <FaMedal />,
      title: "Top Rank Engineering College",
      color: "red",
    },
    {
      icon: <FaBriefcase />,
      title: "Outstanding Placement Record",
      color: "blue",
    },
    {
      icon: <FaUniversity />,
      title: "World Class Infrastructure",
      color: "purple",
    },
    {
      icon: <FaGraduationCap />,
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
