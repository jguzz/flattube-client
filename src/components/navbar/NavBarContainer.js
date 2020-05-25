import React from "react";
import SearchBar from "./SearchBar";
import Login from "./login/Login";
import LogOut from "./login/LogOut";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container"

function NavBarContainer() {
  return (
    <>
      <Navbar>
        <Container>
        <Navbar.Brand><Nav.Link>FlatTube</Nav.Link></Navbar.Brand>
        <Nav.Item>
          <SearchBar />
        </Nav.Item>
        <Nav.Item>{false ? <Nav.Link><LogOut /> </Nav.Link>: <Nav.Link><Login /></Nav.Link>}</Nav.Item>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarContainer;
