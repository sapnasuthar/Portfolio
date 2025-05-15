import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const PersonalProjectCard = ({ data }) => {
  return (
    <Col lg="4" className="d-flex align-items-stretch">
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded w-100">
        <Card.Body className="d-flex flex-column">
          {/* Project Title */}
          <Card.Title as="h5">{data.title}</Card.Title>

          {/* Optional Subtitle */}
          {data.subtitle && (
            <Card.Subtitle className="mb-2 text-muted">
              {data.subtitle}
            </Card.Subtitle>
          )}

          {/* Project Image */}
          <Card.Img
            className="rounded mx-auto d-block"
            src={data.img}
            alt={data.title}
            style={{ maxHeight: "35vh", width: "auto", maxWidth: "100%" }}
          />

          {/* Description / Bullet Points */}
          <Card.Text className="mt-3 flex-grow-1">
            {data.description}
          </Card.Text>

          {/* Action Buttons */}
          <div className="mt-auto text-center">
            {data.repo && (
              <Button
                variant="outline-dark"
                href={data.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <i className="fab fa-github"></i> Repo
              </Button>
            )}
            {data.link && (
              <Button
                variant="outline-dark"
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                {data.extraDesc ? data.extraDesc : "Learn More"}
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PersonalProjectCard;
