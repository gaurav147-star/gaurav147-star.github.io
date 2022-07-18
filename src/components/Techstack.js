import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiPytorch, SiFirebase, SiTailwindcss } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={5} md={1} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={5} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={5} md={1} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={5} md={1} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={5} md={1} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={5} md={1} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={5} md={1} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={5} md={1} className="tech-icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
