import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


import { ProfileMenu, Contact } from '../menu/menu.tsx'
import logo from '../../img/logo.png'


class ProfileHeader extends React.Component<any, any> {
    expand = false

    render() {
      return (
        <Navbar fixed="top" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <Image src={logo} height="40px" rounded />
            </Navbar.Brand>
            <Contact classNames="me-auto d-none d-md-flex" />
            <ProfileMenu />
          </Container>
        </Navbar>
      );
    }
}

export{ 
    ProfileHeader
};
