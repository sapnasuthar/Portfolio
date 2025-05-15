import React from "react";
import "./SkillsCarousel.css";

const SkillsCarousel = ({ skills }) => {
  // Duplicate the skills array for seamless looping
  const allSkills = [...skills, ...skills];
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {allSkills.map((skill, idx) => (
          <div className="carousel-card" key={idx}>
            <img
              src={skill.img || "https://via.placeholder.com/150"}
              alt={skill.name}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel; 