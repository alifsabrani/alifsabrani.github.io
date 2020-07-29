import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";

import "../../styles/typography.module.css";

export default function Home() {
  return (
    <Container pageCenter={true}>
      <Row align="center">
        <h1>ALIF SABRANI</h1>
      </Row>
      <Row align="center">
        <p>Software Engineer</p>
      </Row>
    </Container>
  );
}
