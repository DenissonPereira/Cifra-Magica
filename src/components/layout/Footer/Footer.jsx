import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MenuFooter from "../../MenuFooter/MenuFooter";

import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { TbWorld } from "react-icons/tb";

import './Footer.sass'

function Footer() {
  return (
    <Container>
      <Row>
        <Col xs={{ order: "last" }}>
          <div className="redes">
            <p>Conheça nossas redes rociais:</p>
            <div className="icons">
              <FaInstagram />
              <FaGithub />
              <CiLinkedin />
              <TbWorld />
            </div>
          </div>
        </Col>
        <Col xs>
          <div className="segundo">
            frefori
          </div>
        </Col>
        <Col xs={{ order: "first" }}>
          <div className="menu_footer">
            <MenuFooter />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
