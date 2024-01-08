import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Image } from "react-bootstrap";
import downloadResume from './img/downloadResume.png'

import './resume.css';

function ReleventSkills() {
  return (
    <Row>
        <Col>
            <Row>
                <Col className="pb-2">
                    <Badge bg="danger ms-1">Python</Badge>{ }
                    <Badge bg="danger ms-1">Django, Flask</Badge>
                    <Badge bg="primary ms-1">DS &amp; Algorithm</Badge>
                </Col>
            </Row>
            <Row>
                <Col className="pb-2">
                    <Badge bg="warning ms-1" text="dark">HTML</Badge>
                    <Badge bg="warning ms-1" text="dark">CSS</Badge>
                    <Badge bg="warning ms-1" text="dark">Bootstrap 5</Badge>
                    <Badge bg="warning ms-1" text="dark">Javascript</Badge>
                    <Badge bg="warning ms-1" text="dark">React</Badge>
                </Col>
            </Row>
            <Row>
                <Col className="pb-2">
                    <Badge bg="success ms-1" text="dark">MySQL</Badge>
                    <Badge bg="success ms-1" text="dark">PostgreSQL</Badge>
                    <Badge bg="success ms-1" text="dark">REST</Badge>
                    <Badge bg="success ms-1" text="dark">SOAP</Badge>
                </Col>
            </Row>
            <Row>
                <Col className="pb-2">
                    <Badge bg="info ms-1" text="dark">AWS S3</Badge>
                    <Badge bg="info ms-1" text="dark">Lambda</Badge>
                    <Badge bg="info ms-1" text="dark">Transfer Family</Badge>
                    <Badge bg="info ms-1" text="dark">IAM</Badge>
                    <Badge bg="info ms-1" text="dark">Amplify</Badge>
                    <Badge bg="info ms-1" text="dark">Rest Gateway</Badge>
                </Col>
            </Row>
            <Row>
                <Col className="pb-2">
                    <Badge bg="secondary ms-1" text="dark">Celery</Badge>
                    <Badge bg="secondary ms-1" text="dark">Docker</Badge>
                    <Badge bg="secondary ms-1" text="dark">GIT</Badge>
                    <Badge bg="secondary ms-1" text="dark">PyTest</Badge>
                    <Badge bg="secondary ms-1" text="dark">Selenium</Badge>
                    <Badge bg="secondary ms-1" text="dark">Linux</Badge>
                </Col>
            </Row>
        </Col>
    </Row>
  );
}

function TechStack() {
    return (
      <Row>
          <Col>
              <Row>
                  <Col className="pb-2">
                        <Badge bg="danger ms-1">PHP</Badge>{ }
                        <Badge bg="danger ms-1">Drupal</Badge>
                        <Badge bg="danger ms-1">Symfony</Badge>
                        <Badge bg="danger ms-1">Yii</Badge>
                        <Badge bg="danger ms-1">CodeIgniter</Badge>
                        <Badge bg="success ms-1" text="dark">Mongo DB</Badge>
                  </Col>
              </Row>
              <Row>
                  <Col className="pb-2">
                        <Badge bg="warning ms-1" text="dark">Ionic</Badge>
                        <Badge bg="warning ms-1" text="dark">jQuery</Badge>
                        <Badge bg="warning ms-1" text="dark">Angular 2</Badge>
                        <Badge bg="warning ms-1" text="dark">Bootstrap 4</Badge>
                  </Col>
              </Row>
              <Row>
                  <Col className="pb-2">
                        <Badge bg="secondary ms-1" text="dark">Maven</Badge>
                        <Badge bg="secondary ms-1" text="dark">Ansible</Badge>
                        <Badge bg="secondary ms-1" text="dark">Jenkins</Badge>
                        <Badge bg="secondary ms-1" text="dark">SonarQube</Badge>
                  </Col>
              </Row>
          </Col>
      </Row>
    );
  }


class ProfileInfo extends React.Component<any, any> {
    expand = false

    render() {
        return (
            <>
            <Container>
                <div className="resume-background app-background"></div>
                <div className="app-section-title resume-section-title d-none d-lg-block"><span>resume</span></div>
                <div className="resume-content text-start p-5 pt-10 position-relative top-0">
                    <Row>
                        <Col lg={6}>
                            <h3 className="resume-title box-title">Education</h3>
                            <div className="resume-item">
                                <h4 className="fw-semibold">B.Tech - Information Technology</h4>
                                <h5>2007 - 2011</h5>
                                <p><em>Kamaraj College of Engineering &amp; Technology, Virudhunagar</em></p>
                            </div>
                            <div className="resume-item">
                                <h4 className="fw-semibold">Current Skills</h4>
                                <p><ReleventSkills /></p>
                            </div>
                            <div className="resume-item">
                                <h4 className="fw-semibold">Technology Worked</h4>
                                <p><TechStack /></p>
                            </div>
                            <div className="highlighted-content mt-5">
                                <div className="highlighted-content-title fs-3 fw-semibold"> 
                                    <span className="ms-4"><Image src={downloadResume} /></span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3 className="resume-title box-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4 className="fw-semibold">Senior Associate</h4>
                                <h5>Aug, 2022 - Present</h5>
                                <p><a href="https://www.kgisl.com/" target="_blank"><em>KGiSL</em></a><em>, Chennai</em></p>
                                <p></p>
                                <ul>
                                    <li>
                                        Lead and manage a team of developers, providing guidance, mentorship, and support.
                                        Contribute to the architectural design and development of software solutions.
                                        Deploy applications using CI/CD pipelines and containerization technologies
                                    </li>
                                </ul>
                                <p></p>
                            </div>
                            <div className="resume-item">
                                <h4 className="fw-semibold">Advanced Software Engineer</h4>
                                <h5>July, 2015 - Aug, 2022</h5>
                                <p><a href="https://www.lnw.com/" target="_blank"><em>Light &amp; Wonder</em></a><em>, Chennai</em></p>
                                <p>
                                </p><ul>
                                    <li>Wrote high-quality, efficient, and maintainable code. Implement complex features and functionality, considering performance, security, and usability.</li>
                                    <li>Conducted code reviews to ensure adherence to coding standards, best practices, and quality guidelines. Provide guidance and mentorship to junior developers, helping them improve their skills and understanding of software development.</li>
                                </ul>
                                <p></p>
                            </div>
                            <div className="resume-item">
                                <h4 className="fw-semibold">Technical Team Lead</h4>
                                <h5>Oct, 2012 - July, 2015</h5>
                                <p><a href="https://www.innoppl.in/" target="_blank"><em>Innoppl</em></a><em>, Chennai</em></p>
                                <p> 
                                </p>
                                <ul>
                                    <li>Lead a team of 5 members to design and develop Drupal based projects.</li>
                                    <li>Developed many e-commerce and CMS projects using PHP frameworks (Symfony, YII, Codeigniter, Drupal) </li>
                                </ul>
                                <p></p>
                            </div>
                        </Col>
                    </Row>
                    
                </div>
            </Container>
          </>
        );
    }
}

export{ 
    ProfileInfo
};
