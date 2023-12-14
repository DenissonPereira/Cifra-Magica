import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../assets/images/Carousels/img1.png';
import Image2 from '../../assets/images/Carousels/img2.png';
import Image3 from '../../assets/images/Carousels/img3.png';

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
        <Carousel.Caption style={captionStyle}>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="Second slide"
        />
        <Carousel.Caption style={captionStyle}>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />
        <Carousel.Caption style={captionStyle}>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
