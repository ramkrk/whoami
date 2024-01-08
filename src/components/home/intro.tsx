import React from "react";
import Container from 'react-bootstrap/Container';
import { Laptop } from "react-bootstrap-icons";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './intro.css';


class ProfileHome extends React.Component<any, any> {
    expand = false

    render() {
      return (
          <Container>
            <div className="home-background app-background"></div>
            <div className="app-section-title home-section-title d-none d-lg-block"><span>Who am I</span></div>
            <Row className="home-content p-5">
                <Col>
                    <div className="home-header">
                        <h1 className="home-heading-title display-1 fw-semibold">
                            <span className="app-first-color">Hello,</span> I'm <br /> Rameshkumar
                        </h1>
                    </div>
                    <div className="highlighted-content">
                        <div className="highlighted-content-title fs-3 fw-semibold"> 
                            <span className="ms-5"><Laptop /> Sotware Engineer</span>
                        </div>
                    </div>
                </Col>
            </Row>
          </Container>
      );
    }
}

export{ 
    ProfileHome
};
