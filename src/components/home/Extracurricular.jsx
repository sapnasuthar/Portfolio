import React from 'react';
import ExtracurricularCard from "./ExtracurricularCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Extracurricular = ({ extracurriculars }) => {
  return (
    <section className="section" id="extracurriculars">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {extracurriculars.heading}
          </h2>
          <Row className="experiences-row justify-content-center">
            {
              extracurriculars.data.map((data, index) => {
                return <ExtracurricularCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Extracurricular;