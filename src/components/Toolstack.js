import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={1} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={5} md={1} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={5} md={1} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={5} md={1} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={5} md={1} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={5} md={1} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;