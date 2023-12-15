import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/images/Carousels/img1.png';
import Image2 from '../../assets/images/Carousels/img2.png';
import Image3 from '../../assets/images/Carousels/img3.png';

import './Carousels.sass'

function Carousels() {
  const captionStyle = {
    color: 'white', // Cor do texto
    textShadow: '1px 1px 2px black', // Adiciona sombra preta
  };

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="First slide"
        />
        <Carousel.Caption style={captionStyle} className='car_desc'>
          <h5>Aprenda com o <strong>Cifra Mágica</strong></h5>
          <p>Aprenda a tocar suas músicas favoritas de maneira fácil e divertida, elevando suas habilidades para um patamar maior!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="Second slide"
        />
        <Carousel.Caption style={captionStyle} className='car_desc'>
          <h5>Hey! Vai ficar só ouvindo?</h5>
          <p>Deixe a música sair de você: Aprenda a tocar, não apenas ouvir suas músicas favoritas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />
        <Carousel.Caption style={captionStyle} className='car_desc'>
          <h5><strong>Cifra Mágica</strong> com Responsividade</h5>
          <p>
            Não está em casa? Não importa! <strong>Cifra Mágica</strong> te acompanha em vários dispositivos.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
