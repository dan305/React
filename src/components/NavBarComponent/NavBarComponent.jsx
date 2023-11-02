import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CarWidgetComponent from "../CarWidgetComponent/CarWidgetComponent"

const NavBarComponent = () => {
  return (
    <Navbar bg="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tienda Canciones.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Exitos</Nav.Link>
            <NavDropdown title="Mas Info" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> Trap</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> 
                 Cumbia
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pop</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Rap
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CarWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;