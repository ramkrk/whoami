import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Image } from "react-bootstrap";

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
                    <Badge bg="warning ms-1" text="dark">HTML</Badge>
                    <Badge bg="warning ms-1" text="dark">CSS</Badge>
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
                    <Badge bg="secondary ms-1" text="dark">Jenkins</Badge>
                    <Badge bg="secondary ms-1" text="dark">Linux</Badge>
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
                <div className="resume-content text-start position-relative top-0">
                    <Row>
                        <Col lg={6}>
                        <h3 className="resume-title box-title">Education</h3>
                        <div className="resume-item">
                            <h4>B.Tech - Information Technology</h4>
                            <h5>2007 - 2011</h5>
                            <p><em>Kamaraj College of Engineering &amp; Technology, Virudhunagar</em></p>
                        </div>
                        <div className="resume-item">
                            <h4>Relaevent Skills</h4>
                            <p><ReleventSkills /></p>
                        </div>
                        <h3 className="resume-title box-title">Current Experience</h3>
                        <div className="resume-item">
                            <h4>Senior Associate</h4>
                            <h5>Aug, 2022 - Present</h5>
                            <p><a href="https://www.kgisl.com/" target="_blank"><em>KGiSL</em></a><em>, Chennai</em></p>
                            <p></p>
                            <ul>
                                <li>Lead and manage a team of developers, providing guidance, mentorship, and support. Conduct regular team meetings to discuss progress, challenges, and upcoming tasks.</li>
                                <li>Contribute to the architectural design and development of software solutions. Ensure that the technical architecture aligns with business goals and requirements.</li>
                                <li>Maintain comprehensive documentation of technical designs, processes, and procedures. Ensure that documentation is up-to-date and accessible to the team.</li>
                                <li>Use Git for version control and participate in branching, merging, and pull requests. Deploy applications using CI/CD pipelines and containerization technologies</li>
                            </ul>
                            <p></p>
                        </div>
                        </Col>
                        <Col lg={6}>
                        <h3 className="resume-title box-title">Previous Experience</h3>
                        <div className="resume-item">
                        <h4>Advanced Software Engineer</h4>
                        <h5>July, 2015 - Aug, 2022</h5>
                        <p><a href="https://www.lnw.com/" target="_blank"><em>Light &amp; Wonder</em></a><em>, Chennai</em></p>
                        <p>
                        </p><ul>
                            <li>Write high-quality, efficient, and maintainable code. Implement complex features and functionality, considering performance, security, and usability.</li>
                            <li>Conduct code reviews to ensure adherence to coding standards, best practices, and quality guidelines. Provide guidance and mentorship to junior developers, helping them improve their skills and understanding of software development.</li>
                            <li>Take a leadership role in technical discussions and decision-making processes. Collaborate with cross-functional teams to align technical strategies with overall business objectives.</li>
                            <li>Explore and recommend innovative solutions, technologies, and approaches to improve software development processes and outcomes</li>
                            <li>Contribute to project planning and estimation. Work within project timelines and deliver software solutions on schedule. </li>
                        </ul>
                        <p></p>
                        </div>
                        <div className="resume-item">
                        <h4>Technical Team Lead</h4>
                        <h5>Oct, 2012 - July, 2015</h5>
                        <p><a href="https://www.innoppl.in/" target="_blank"><em>Innoppl</em></a><em>, Chennai</em></p>
                        <p> 
                        </p>
                        <ul>
                            <li>Architecture and Design: Lead the architectural design and implementation of Drupal solutions, ensuring they align with best practices and meet project requirements.</li>
                            <li>Code Review: Review and provide guidance on code written by team members, ensuring adherence to coding standards, security practices, and performance considerations.</li>
                            <li>Technical Problem Solving: Address complex technical challenges and provide solutions to ensure the successful implementation of Drupal projects.</li>
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
