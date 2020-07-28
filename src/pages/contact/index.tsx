import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";

export default function Contact() {
  return (
    <Container>
      <Row align="center">
        <h1>This is Contact</h1>
      </Row>
      <Row align="center">
        <Col size={5}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            perferendis modi. Cum corporis nihil culpa. Ad molestiae quae
            suscipit dolorum officia, quam ut perferendis excepturi. Dolores
            reiciendis fugit et atque.
          </p>
        </Col>
        <Col size={5}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            perferendis modi. Cum corporis nihil culpa. Ad molestiae quae
            suscipit dolorum officia, quam ut perferendis excepturi. Dolores
            reiciendis fugit et atque.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
