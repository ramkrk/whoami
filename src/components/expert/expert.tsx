import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";

import './expert.css';
import experData from './experData.tsx';


class ProfileExpert extends React.Component<any, any> {
    expand = false

    render() {
        return (
            <Container>
                <div className="expert-background app-background"></div>
                <div className="app-section-title expert-section-title d-none d-lg-block"><span>What I Do</span></div>
                <div className="expert-content text-start p-5 position-relative">
                    <Row>
                        <Col>
                            <div className="expert-header">
                                <h1 className="expert-heading-title display-5 fw-semibold">
                                    Expertise <span className="app-second-color"> In </span>
                                </h1>
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <div className="p-3">&nbsp;</div>
                        </Col>
                    </Row>
                    <Row >
                        {experData.map((item) => (
                            <Col xs={12} md={4}>
                                <Row>
                                    <Col className="pb-5"><Image src={item.icon} /></Col>
                                </Row>
                                <Row>
                                    <Col className="pb-5"><h4 className="text-uppercase fw-semibold box-title">{item.title}</h4></Col>
                                </Row>
                                <Row>
                                    <Col className="pb-5 expert-box-content">
                                        {item.desc}
                                    </Col>
                                </Row>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        );
    }
}

export{ 
    ProfileExpert
};
