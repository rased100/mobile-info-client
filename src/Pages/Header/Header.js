import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/home">Mobile Corner</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex size">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
            <Button className="searchbutton" variant="outline-success">
              Search
            </Button>
          </Form>
          {/* navitem menue */}
          <Nav style={{ maxHeight: "100px" }} navbarScroll>
            <NavLink className="navitem" to="/home">
              Home
            </NavLink>
            <NavLink className="navitem" to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink className="navitem" to="/about">
              About
            </NavLink>
            {user?.email ? (
              <NavLink onClick={logOut} className="navitem" to="/login">
                Logout
              </NavLink>
            ) : (
              <NavLink className="navitem" to="/login">
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
