import { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavScrollExample from "../../../../../layout/Nav/Nav";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import VideoComponent from "../Dolores/VideoComponent";
import LogoRaioSolar from "../../page/img/raiosolar.webp";
import Doloresmusics from "./Doloresmusics";

import "./Dolores.sass";
import "./DoloresResponsivo.sass";
import Footer from "../../../../../layout/Footer/Footer";

function Dolores() {
  const [valorRange, setValorRange] = useState(0);
  const intervaloRef = useRef(null);

  const handleRangeChange = (event) => {
    const novoValorRange = event.target.value;
    setValorRange(novoValorRange);
  };

  const rolar = () => {
    clearInterval(intervaloRef.current);

    const quantidadeRolagemPorEtapa = 10;

    intervaloRef.current = setInterval(() => {

      const posicaoAtual = window.scrollY;

      const proximaPosicao = posicaoAtual + quantidadeRolagemPorEtapa;

      window.scrollTo({
        top: proximaPosicao,
        behavior: "auto", 
      });

      if (proximaPosicao >= document.body.scrollHeight - window.innerHeight) {
 
        clearInterval(intervaloRef.current);
      }
    }, valorRange); 
  };

  return (
    <div className="dolores">
      <NavScrollExample></NavScrollExample>
      <Container className="mt-5">
        <Row>
          <Col xs={{ order: "last" }}>
            <div className="video">
              <VideoComponent />
              <div className="textoDolores">
                <p>
                  <strong>Dolores de Madrid</strong> é uma música cheia de história e emoção,
                  capturando a essência e o romance da capital espanhola. Com
                  seus acordes envolventes e letras cheias de nostalgia, a
                  canção narra a história de Dolores, a flor morena de Madrid.
                  Ela foi noiva de um toureiro que tombou em uma tarde de sol. A
                  melodia e as palavras da música transportam os ouvintes para
                  as ruas vibrantes e os cenários pitorescos da cidade,
                  proporcionando uma experiência musical que evoca a paixão e a
                  melancolia da cultura espanhola. Dolores não é
                  apenas uma música; é uma jornada sensorial que mergulha nas
                  tradições e nos sentimentos que permeiam a alma desta cidade
                  única.
                </p>
              </div>
            </div>
          </Col>
          <Col xs>
            <div className="segundaColuna">
              <div className="cabecario">
                <h1>Dolores</h1>
                <h2>
                  <Nav.Link as={Link} to="/Cifra-Magica/listas/bandaraiosolar">
                    Banda Raio Solar
                  </Nav.Link>
                </h2>
                <Doloresmusics></Doloresmusics>
              </div>
            </div>
          </Col>
          <Col xs={{ order: "first" }}>
            <div className="coluna">
              <img src={LogoRaioSolar} alt="" />
              <div className="funcionalidades">
                <button onClick={rolar}>Auto Rolagem</button>
                <input
                  type="range"
                  name=""
                  id="meuInput"
                  min={0}
                  max={2000}
                  onChange={handleRangeChange}
                />
                <button>Texto</button>
                <button>Tom</button>
                <button>Acordes</button>
                <button>Exibir</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Dolores;
