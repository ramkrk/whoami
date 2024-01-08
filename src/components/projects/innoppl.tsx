import React from "react";
import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import acesHome from './img/acesHome.jpg';


class ProjectInnoppl extends React.Component<any, any> {
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
                          <Badge bg="danger ms-1">Python</Badge>{ }
                          <Badge bg="danger ms-1">Django</Badge>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="warning ms-1" text="dark">HTML</Badge>
                          <Badge bg="warning ms-1" text="dark">CSS</Badge>
                          <Badge bg="warning ms-1" text="dark">Javascript</Badge>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="pb-2">
                          <Badge bg="success ms-1" text="dark">MySQL</Badge>
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
                    <h2 className="project-title box-title text-capitalize mb-3">University of Illinois - ACES</h2>
                    <p> Made drupal based we applocation which is 100% responsive and mobile friendly. Created an extensive library, added documented Info sections and organized their college offerings. Besides this, we crafted an exclusive News and Events section and created an intuitive Where to Buy portal.
                        Simplified the entire content management capability, and gave them a ready-to-run, meta-tag replete, SEO-friendly site!</p>
                </div>
                <h4 className="mb-2 fw-semibold">Overview</h4>
                <ul>
                    <li><em>Content Management:</em> It supports the creation of various contents using content type feature. This flexibility allows users to organize and display different types of content according to their needs. It includes a powerful taxonomy system that enables the categorization and tagging of content.</li>
                    <li><em>Themes:</em> It uses custom themes to control the appearance of websites. Themes define the layout, style, and presentation of content, providing a way to create visually appealing and consistent designs.</li>
                    <li><em>User Roles and Permissions:</em> It allows administrators to define user roles and assign specific permissions to control what different users can do on the site. This helps in managing content creation, editing, and administrative tasks.</li>
                    <li><em>Modular Architecture:</em> Core Modules: It comes with a set of core modules that provide essential functionality. These include modules for content management, user authentication, and system administration.
                        Contributed Modules: It has a vibrant community that develops and maintains a vast array of contributed modules. These modules extend Drupal's functionality and can be easily integrated into a site.
                        Custom Modules: Developed custom modules to meet specific project requirements. These modules can be tailored to add new features, modify existing ones, or integrate with third-party services.</li>
                </ul>
                    
                </Col>
                <Col>
                    <div className="py-5">
                        <Image src={acesHome} alt="First slide" rounded fluid/>
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
    ProjectInnoppl
};
