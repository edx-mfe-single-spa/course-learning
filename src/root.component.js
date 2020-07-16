import React from "react";
import { navigateToUrl } from "single-spa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Root(props) {
  return (
    <Container className="pt-4">
      <Row>
        <Col>
          <h1 className="h2">Courseware</h1>
          <p className="lead">{props.name} is mounted!</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="/enterprise"
            className="btn btn-primary px-3"
            onClick={navigateToUrl}
          >
            Back to Dashboard
          </a>
        </Col>
      </Row>
    </Container>
  );
}
