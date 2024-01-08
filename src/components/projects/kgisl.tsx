import React from "react";
import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import kiRapid from './img/kiRapid.png';


class ProjectKgisl extends React.Component<any, any> {
    expand = false

    handleSelect(e) {
        e.preventDefault();
        console.log(e);
    }

    techStack() {
        return (
          <Row>
              <Col>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="danger ms-1">Python</Badge>
                          <Badge bg="danger ms-1">Django</Badge>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="warning ms-1" text="dark">HTML</Badge>
                          <Badge bg="warning ms-1" text="dark">CSS</Badge>
                          <Badge bg="warning ms-1" text="dark">HalfMoon</Badge>
                          <Badge bg="warning ms-1" text="dark">Javascript</Badge>
                          <Badge bg="warning ms-1" text="dark">React(Scheduler)</Badge>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="success ms-1" text="dark">PostgreSQL</Badge>
                          <Badge bg="success ms-1" text="dark">REST</Badge>
                          <Badge bg="success ms-1" text="dark">SOAP</Badge>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="secondary ms-1" text="dark">Celery</Badge>
                          <Badge bg="secondary ms-1" text="dark">Redis</Badge>
                          <Badge bg="secondary ms-1" text="dark">Docker</Badge>
                          <Badge bg="secondary ms-1" text="dark">GIT</Badge>
                          <Badge bg="secondary ms-1" text="dark">PyTest</Badge>
                          <Badge bg="secondary ms-1" text="dark">Linux</Badge>
                      </Col>
                  </Row>
              </Col>
          </Row>
        );
      }

    render() {
        return (
            
            <Row className="pb-5 project-item">
                <Col>
                <div className="mb-4">
                    <h2 className="project-title box-title text-capitalize mb-3">Kitchen Innovations - Rapid</h2>
                    <p>A Job and Task Management System is a software or organizational framework designed to efficiently plan, schedule, assign, track, and monitor tasks and jobs within a business or project.
                        It provides a structured approach to managing workloads, ensuring that tasks are completed in a timely and organized manner. 
                        This system is aims to optimize workflow, enhance collaboration, and increase the efficiency of business operations.</p>
                </div>
                <h4 className="mb-2 fw-semibold">Overview</h4>
                <ul>
                    <li><em>Task Creation and Assignment:</em> Users can create tasks, set priorities, and assign them to individuals or teams based on their skills and availability.</li>
                    <li><em>Scheduling:</em> The system allows for the scheduling of tasks, ensuring that they are allocated appropriate timeframes and deadlines. This can involve calendar integration and resource management.</li>
                    <li><em>Progress Tracking:</em> Users can monitor the progress of tasks and jobs in real-time, providing visibility into which tasks are completed, in progress, or overdue. </li>
                    <li><em>Resource Allocation:</em> Helps in allocating resources efficiently, ensuring that the right people with the right skills are assigned to tasks, and that equipment or materials are available as needed.</li>
                    <li><em>User Permissions and Access Control:</em> Implements security measures by defining user roles, permissions, and access levels to ensure that sensitive information is only accessible to authorized personnel.</li>
                    <li><em>Reporting and Analytics:</em> Generates reports and analytics on task and project performance, providing insights into productivity, bottlenecks, and areas for improvement.</li>
                </ul>
                    
                </Col>
                <Col>
                    <div className="py-5">
                        <Image src={kiRapid} alt="First slide" rounded fluid/>
                    </div>
                    <div className="mt-2">
                        <h4 className="mb-2 fw-semibold">Tech Stack</h4>
                        {this.techStack()}
                    </div>
                </Col>
            </Row>
          );
    }
}

export {
    ProjectKgisl
};
