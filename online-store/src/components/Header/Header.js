import { Link } from 'react-router-dom';
// Importing Bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
// Importing Logo and icons
import logo from '../../images/platoLogo.webp';
import shoppingBag from '../../images/shoppingBag.svg';
// Importing stylsheet
import './header.css';

export default function Header() {
  return (
    <header>

      {/* Off-canvas Navbar from Bootstrap */}
      <Navbar expand={false} className="mb-3">
        <Container fluid>
          <div className='navigationBar'>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Brand>
              <Link to="/">
                <img src={logo} alt='"Plato Coffee" Logo' className='img-fluid nav-logo-img' />
              </Link>
            </Navbar.Brand>
            <Nav.Link>
              <Link to="/cart">
                <img src={shoppingBag} alt='Shopping Bag icon' />
              </Link>
            </Nav.Link>
          </div>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/products">Products</Link>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <Link to="/cart">Shopping Cart</Link>
                </Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </header>
  );
}