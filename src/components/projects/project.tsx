import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from 'react-bootstrap/CarouselItem';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ProjectKgisl } from "./kgisl.tsx";
import { ProjectGdmWrapper, ProjectAwsIosAppSupport, ProjectGPS, ProjectIGP } from "./lnw.tsx";
import { ProjectInnoppl } from "./innoppl.tsx";
import { ProjectRampage } from "./rampage.tsx";

import './project.css'


class ProfileProjects extends React.Component<any, any> {
    expand = false

    handleSelect(e) {
        e.preventDefault();
        console.log(e);
    }

    render() {
        return (
            <Container>
                <div className="project-section-background app-background"></div>
                <div className="app-section-title project-section-title d-none d-lg-block"><span>Projects</span></div>
                <Row>
                    <Col>
                        <div className="projects text-start position-relative p-5 w-100">
                            <Carousel controls={false} variant="light">
                                <CarouselItem>
                                    <ProjectKgisl />
                                </CarouselItem>
                                <CarouselItem>
                                    <ProjectGdmWrapper />
                                </CarouselItem>
                                <CarouselItem>
                                    <ProjectAwsIosAppSupport />
                                </CarouselItem>
                                <CarouselItem>
                                    <ProjectGPS />
                                </CarouselItem>
                                <CarouselItem>
                                    <ProjectIGP />
                                </CarouselItem>
                                <CarouselItem>
                                    <ProjectInnoppl />
                                </CarouselItem>
                                <CarouselItem>
                                    <ProjectRampage />
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            
          );
    }
}

export {
    ProfileProjects
};
