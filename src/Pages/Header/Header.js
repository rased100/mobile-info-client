import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Button,
    Carousel,
    Container,
    Form,
    FormControl,
    Nav,
    Navbar
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Header.css";
import { faAddressBook, faHome, faShoppingBag, faShoppingBasket, faSign, faSignInAlt } from "@fortawesome/free-solid-svg-icons";


const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div>

            <Navbar bg="" variant="dark" expand="lg" fixed="top" className="Navbar">
                <Container >
                    <Navbar.Brand href="/home" className="header">MobileHut</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        {/* navitem menue */}
                        <Nav style={{ maxHeight: "100px" }} navbarScroll>
                            <NavLink className="navitem items" to="/home">
                                <FontAwesomeIcon icon={faHome} /> Home
                            </NavLink>
                            <NavLink className="navitem items" to="/moreproduct">
                                <FontAwesomeIcon icon={faShoppingBasket} />  More Phone
                            </NavLink>
                            <NavLink className="navitem items" to="/dashboard">
                                <FontAwesomeIcon icon={faShoppingBag} />  Dashboard
                            </NavLink>


                        </Nav>

                        <Form className="d-flex size">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button className="searchbutton" variant="outline-primary">
                                Search
                            </Button>

                        </Form>

                        <NavLink className="navitem items" to="/about">
                            <FontAwesomeIcon icon={faAddressBook} />  About
                        </NavLink>
                        <h6 className="navitem items">{user?.displayName}</h6>
                        {user?.email ? (
                            <NavLink onClick={logOut} className="navitem items" to="/login">
                                <FontAwesomeIcon icon={faSignInAlt} />  Logout
                            </NavLink>
                        ) : (
                            <NavLink className="navitem items" to="/login">
                                <FontAwesomeIcon icon={faSign} />  Login
                            </NavLink>
                        )}



                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;
