import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GeoAlt, Envelope, Phone } from "react-bootstrap-icons";
import emailjs from 'emailjs-com';

import './contact.css';


class ProfileContact extends React.Component<any, any> {
    expand = false

    sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_rameshkumar_gm', 'template_rameshkumar_gm', e.target, 'iYqNba_cuy0IGkAXD')
          .then((result) => {
              e.target.reset(); 
              alert("Message Sent!"); 
          }, (error) => {
              console.log(error.text);
              alert("Message sent failed!");
          });
      }
    

    render() {
        return (
            <Container>
                <div className="contact-background app-background"></div>
                <div className="app-section-title contact-section-title d-none d-lg-block"><span>Contact</span></div>
                <div className="contact-content text-start p-5 position-relative">
                    <Row>
                        <Col lg={5} className="mb-5">
                            <div className="contact-header">
                                <h1 className="contact-heading-title display-5 fw-semibold">
                                     <span className="app-second-color"><GeoAlt  size={40} /> Chennai</span>, India
                                </h1>
                            </div>
                            <div className="fs-5 mb-5 contact-address">Plot 313A, Kamaraj Nagar, 16th East Street, Thiruvanmiyur, Chennai - 600041</div>
                            <div className="mt-5 address">
                                <h6 className="email"> <Envelope className="me-3" size={20}/>krameshkumar90@gmail.com</h6>
                                <br />
                                <h6 className="phone"> <Phone className="me-3" size={20} />+91 95005 74445</h6>
                            </div>
                        </Col>
                        <Col lg={7}>
                                <Form onSubmit={this.sendEmail}>
                                    <Row>
                                        <Col lg={6} sm={12}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control required name="from_name" type="text" size="lg" placeholder="Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6} sm={12}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control required name="from_email" type="email" size="lg" placeholder="Email Address"/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control name="subject" type="text" size="lg"  placeholder="Subject(optional)"/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control required name="message" as="textarea" size="lg"  rows={5}  placeholder="Message"/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button size="sm" className="me-2 send-msg-btn" type="submit"> Send Message </Button>
                                        </Col>
                                    </Row>
                                    
                                </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

export{ 
    ProfileContact
};
