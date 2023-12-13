import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavScrollExample from "../../../../../layout/Nav/Nav";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import LogoRaioSolar from "../../page/img/raiosolar.webp";
import Doloresmusics from "./Doloresmusics";

function Dolores() {
  return (
    <div>
      <NavScrollExample></NavScrollExample>
      <Container>
        <Row>
          <Col xs={{ order: "last" }}>ultimo</Col>
          <Col xs>
            <div className="segundaColuna">
              <div className="cabecario">
                <p>Dolores</p>
                <p><Nav.Link as={Link} to='/Cifra-Magica/listas/bandaraiosolar'>Banda Raio Solar</Nav.Link></p>
                <Doloresmusics></Doloresmusics>
              </div>
            </div>
          </Col>
          <Col xs={{ order: "first" }}>
            <div className="coluna">
              <img src={LogoRaioSolar} alt="" />
              <div className="funcionalidades">
               <button>Auto Rolagem</button>
               <input type="range" name="" id="" />
               <button>Texto</button>
               <button>Tom</button>
               <button>Acordes</button>
               <button>Exibir</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dolores;
