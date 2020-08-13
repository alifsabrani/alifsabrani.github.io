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
      imageURL:
        "https://mediacdn.quipper.com/media/W1siZiIsIjIwMTgvMDEvMjkvMDYvNDEvMTYvYmRlYjhiOTUtZjNlNC00YWZmLWE5NjMtZDIwNTc3MDU0ODcyLyJdLFsicCIsInRodW1iIiwiNjAweFx1MDAzZSIse31dLFsicCIsImNvbnZlcnQiLCItY29sb3JzcGFjZSBzUkdCIC1zdHJpcCIseyJmb3JtYXQiOiJqcGcifV1d?sha=ffaa55241a9964bf",
    },
    {
      title: "Freelance Front-end Developer at ITEC Mataram",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis consequuntur expedita sit, minus quos esse reiciendis quasi sapiente fuga, praesentium voluptate perspiciatis soluta rerum quibusdam eius vel, neque illum porro",
      startYear: 2019,
      endYear: 2019,
      imageURL:
        "data:image/png;base64,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",
    },
    {
      title: "Front-end Developer at PT. Arima Dedikasi Kreatif",
      description: "Developing ReactJS web app",
      startYear: 2020,
      endYear: 2020,
      imageURL:
        "https://img.itch.zone/aW1hZ2UyL3VzZXIvNzM1ODIvMTc5NjQ3MS5qcGc=/original/93hzu5.jpg",
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
