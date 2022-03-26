import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
    return (
        <Navbar className="header" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className="fs-md-3 text-white">
                    The Unpredictable Shop
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="#cart" className="text-white fs-5">
                        <FontAwesomeIcon
                            className="text-white"
                            icon={faShoppingCart}
                        ></FontAwesomeIcon>{" "}
                        Cart
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
