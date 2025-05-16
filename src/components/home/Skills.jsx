import React from "react";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import SkillsCarousel from "./SkillsCarousel";

const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  return (
    <Jumbotron fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={ref} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <div className="skills-carousel-group">
          <h3 className="display-6 text-center" style={{ marginBottom: '0.2rem' }}>Languages</h3>
          <SkillsCarousel skills={hardSkills} />
          <h3 className="display-6 text-center" style={{ marginBottom: '0.2rem', marginTop: '1rem' }}>Tools</h3>
          <SkillsCarousel skills={softSkills} />
        </div>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
