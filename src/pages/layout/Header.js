import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="warning" expand="md">
      <Container>
        {/* <Link to="/" className="navbar-brand">
          <i class="fa-regular fa-bars"></i>
        </Link> */}
        <Link to="/" className="navbar-brand">
          Admin CMS
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              {" "}
              <i className="fa-solid fa-right-to-bracket"></i> Login
            </Link>
            <Link to="/register" className="nav-link">
              <i className="fa-solid fa-pencil"></i> Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
