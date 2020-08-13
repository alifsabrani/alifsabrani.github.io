import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Paper from "../../components/Paper";

import "../../styles/typography.module.css";
import Col from "../../components/Col";

export default function Home() {
  return (
    <Container>
      <Row align="center">
        <Container pageCenter={true}>
          <Row align="center">
            <h1>ALIF SABRANI</h1>
          </Row>
          <Row align="center">
            <p>Software Engineer</p>
          </Row>
        </Container>
      </Row>
      <Row align="center">
        <Col size={12}>
          <Paper>
            <h2>ABOUT ME</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              laborum soluta sequi impedit, voluptate vero quaerat fugiat magni
              quos quibusdam non minima. Temporibus, quas deleniti dignissimos
              aperiam cumque maxime atque.
            </p>
          </Paper>
        </Col>
      </Row>
    </Container>
  );
}
