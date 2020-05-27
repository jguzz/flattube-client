import React from "react";
import SearchBar from "./SearchBar";
import Login from "./login/Login";
import LogOut from "./login/LogOut";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";


function NavBarContainer(props,{currentUser, toggleLoggedIn}) {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/">FlatTube</Link>
          </Navbar.Brand>
          <Nav.Item>
            <SearchBar videos={props.videos} />
          </Nav.Item>
          {/* Dropdown of site map */}
          <NavDropdown title="Go To" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/results">Results</Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link to="/">Featured</Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              <Link to="/show">Show</Link>
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Item>
            {currentUser.loggedIn ? (
              <Nav.Link onClick={toggleLoggedIn}>
                Log Out
              </Nav.Link>
            ) : (
              <Nav.Link>
                <Link to="/signup" style={{padding: '10px'}}>SignUp</Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
            )}
          </Nav.Item>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarContainer;
