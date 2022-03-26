import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";

const Header = () => {
    return (
        // <header className="header container text-center mt-sm-2 mt-md-4 mb-5">
        //     <h1 className="logo fw-bold">
        //         The <span className="text-primary">Unpredictable</span> Shop
        //     </h1>
        //     <h2>Choose any 4 items</h2>
        // </header>

        <Navbar bg="warning" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className="fs-md-3 fw-bold">
                    The Unpredictable Shop
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link href="#cart" className="text-black fs-5">
                        <FontAwesomeIcon
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
