import React from 'react';
import { Col, Button } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4" className="experience-card pb-3 text-center d-flex align-items-center flex-column justify-content-end">
      <div style={{ flexGrow: 1, alignSelf: 'center' }} className="d-flex flex-column justify-content-center align-items-center">
        <img
          className="bg-white mb-3"
          src={data.picture || data.companylogo}
          alt={data.company || data.title}
          style={{ maxWidth: data.customWidth || '60%', height: 'auto', borderRadius: 8 }}
        />
        <div className="experience-title">{data.title}</div>
        <div className="text-muted mb-1">{data.dates}</div>
        <div className="mb-2">{data.description}</div>
        {data.link && (
          <div style={{ marginTop: '1rem' }}>
            <Button
              variant="outline-dark"
              href={data.link}
              target="_blank"
              rel="noreferrer noopener"
              className="experience-btn"
              aria-label="Learn More"
            >
              Learn More
            </Button>
          </div>
        )}
      </div>
    </Col>
  );
}

export default ExperienceCard;