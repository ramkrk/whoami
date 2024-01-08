import React, { Component} from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Twitter, Github, Linkedin  } from 'react-bootstrap-icons';
import Stack from 'react-bootstrap/Stack';

function FooterMenu() {
    return (
        <>
            <Nav.Link href="https://twitter.com/yeanperuramesh" target="_blank"><Twitter /></Nav.Link>
            <Nav.Link href="https://github.com/ramkrk" target="_blank"><Github /></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/rameshkumar-muniyammal/" target="_blank"><Linkedin /></Nav.Link>
        </>
    )
}


function OffcanvasMenuFooter({...props}) {
    return (
        <>
            <Stack direction="horizontal" gap={3}>
                <FooterMenu />
            </Stack>
        </>
    )
}

function Contact({...props}) {
    return (
        <Nav className={props.classNames}>
            <Nav.Link href="#">+91 95005 74445</Nav.Link>
            <Nav.Link href="#">krameshkumar90@gmail.com</Nav.Link>
        </Nav>
    )
}

function OffCanvasMenu({ ...props }) {
    return (
      <>
        <Nav>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${props.expand}`} />
            <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${props.expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${props.expand}`}
            placement="end"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${props.expand}`}>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                {props.menuList.map((items) => (
                    <Nav.Link key={items.id} href={items.link}>{items.label}</Nav.Link>
                ))}
                </Nav>
                <Container>
                    <Contact classNames="d-sm-none me-auto"/>
                </Container>
                <Container className="d-sm-none me-auto">
                    <OffcanvasMenuFooter />
                </Container>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Nav>
      </>
    );
  }

class ProfileMenu extends Component<any, any> {
    menuList = [
        { id: 'menu_item_1', label: 'Home', link: '#home' },
        { id: 'menu_item_2', label: 'Expertise', link: '#about' },
        { id: 'menu_item_3', label: 'Resume', link: '#resume' },
        { id: 'menu_item_4', label: 'Projects', link: '#projects' },
        { id: 'menu_item_5', label: 'Contact', link: '#contact' },
    ]

    render() {
      return  <OffCanvasMenu menuList={this.menuList} expand="lg"/>
    }
}

export{ 
    ProfileMenu,
    Contact,
    FooterMenu
};
