import React from "react";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Paper from "../../components/Paper";
import Col from "../../components/Col";
import Timeline from "../../components/Timeline";

import { TimelineItem } from "../../types";

import "../../styles/typography.css";

export default function Home() {
  const history: Array<TimelineItem> = [
    {
      title: "Bachelor Degree",
      description: "Studying computer science at University of Mataram ",
      startYear: 2015,
      endYear: 2020,
    },
    {
      title: "Freelance Front-end Developer",
      description: "Developing ReactJS web app",
      startYear: 2019,
      endYear: 2019,
    },
  ];
  return (
    <Container>
      <Row align="center">
        <Container pageCenter={true}>
          <Row align="center">
            <Col size={12}>
              <h1>ALIF SABRANI</h1>
              <p className="text-center">Software Engineer</p>
            </Col>
          </Row>
        </Container>
      </Row>
      <Row align="center">
        <Col size={12}>
          <Paper>
            <h2 className="text-center">ABOUT ME</h2>
            <p>
              Passionated youth seeking opportunity to contribute in society as
              a software engineer. Graduated with Bachelor of Informatics
              Engineering Degree from University of Mataram. Have been using
              Javascript and PHP on almost every project in study process. Have
              good knowledge in Java, C++, and Machine Learning. Love challenge
              and programming. Willing to learn new technology. High attention
              to detail.
            </p>
          </Paper>
        </Col>
      </Row>
      <Row align="center">
        <Col size={12}>
          <h2 className="text-center">HISTORY</h2>
          <Timeline data={history}></Timeline>
        </Col>
      </Row>
    </Container>
  );
}
