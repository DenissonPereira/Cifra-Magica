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
    <Container className="text-center">
      <Row>
        <Col xs={{ order: "last" }}>
          <div className="redes">
            <p>Conheça nossas redes rociais:</p>
            <div className="icons">
              <div className="insta">
                <FaInstagram />
              </div>
              <div className="git">
                <FaGithub />
              </div>
              <div className="link">
                <CiLinkedin />
              </div>
              <div className="site">
                <TbWorld />
              </div>
            </div>
          </div>
        </Col>
        <Col xs>
          <div className="segundo">
            <p className="cake"><span>Cifra Mágica:</span> Transformando Melodias em Encantamentos!</p>
            <p>&copy; 2023. <span>Denisson Pereira</span>.</p>
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
