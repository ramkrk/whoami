import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {FooterMenu} from '../menu/menu.tsx'


class ProfileFooter extends React.Component<any, any>{
    expand = false
    constructor(props) {
        super(props)
        this.state = {
            footerClass: "me-auto d-none d-md-flex"
        }
    }

    render() {
      return (
        <Navbar fixed="bottom" expand="lg" className={this.state.footerClass}>
          <Container>
            <Navbar.Brand href="#" className="fs-6">© Ramesh Profile 2023</Navbar.Brand>
            <Nav>
                <FooterMenu />
            </Nav>
          </Container>
        </Navbar>
      );
    }
}

export{ 
    ProfileFooter
};
