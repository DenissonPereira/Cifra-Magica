import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Footer from '../layout/Footer/Footer';

function DefaultExample() {
  return (
    <div className="listas">
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
            <Nav.Link as={Link} to='/Cifra-Magica/listas/bandaraiosolar'>Banda Raio Solar</Nav.Link>
            </div>
            <Nav.Link as={Link} to='/Cifra-Magica/listas/bandaraiosolar/dolores'>Dolores</Nav.Link>
            <Nav.Link as={Link} to='/Cifra-Magica'>Quem Eu quero Não Me Quer</Nav.Link>
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
      </ListGroup>
      <Footer />
    </div>
  );
}

export default DefaultExample;