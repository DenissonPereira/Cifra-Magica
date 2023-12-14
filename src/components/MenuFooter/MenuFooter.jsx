import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MenuFooter() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to='/Cifra-Magica/listas/bandaraiosolar'>Top Bandas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/Cifra-Magica'>Home</Nav.Link>
            <Nav.Link as={Link} to='/Cifra-Magica/listas'>Listas</Nav.Link>
            <Nav.Link as={Link} to='/Cifra-Magica/about'>Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MenuFooter;