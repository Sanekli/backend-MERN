import React, { useEffect, useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("current_user"));
    setUser(storedUser);
  }, []);

  const logout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <Navbar bg="black" variant="dark">
        <Container className="navbar">
          <Navbar.Brand className="navbarLogo">IMMO SANEKLI </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">
              AboutUs
            </Nav.Link>
            <Nav.Link as={Link} to="/Product">
              Our service
            </Nav.Link>
            {user?.role === "admin" && (
              <Nav.Link as={Link} to="/listNewReservation">
                Reservations
              </Nav.Link>
            )}
            {user ? (
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/Login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
