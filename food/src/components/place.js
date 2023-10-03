import Carousel from 'react-bootstrap/Carousel';
import f1 from '../img/f1.jpg'
import r1 from '../img/r1.jpg'
import r2 from '../img/r2.png'
import r3 from '../img/r3.jpg'
import r4 from '../img/r4.jpg'


function Place() {
  return (
<div className='carousel-place-outer'>
<div className='carousel-place'>
  <h2 className='cpText'>Ambience</h2>
<Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100 ci"
          src={r1}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>Experience Unmatched Ambiance at Nawabi Bites – Where Culinary Excellence Meets Tranquil Elegance</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 ci"
          src={r2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>An Enchanting Dining Experience Awaits</h5>
          <p>Experience the Perfect Blend of Elegance and Comfort at Our Restaurant</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 ci"
          src={r3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>An Enchanting Dining Experience Awaits</h5>
          <p>
          Experience the Perfect Blend of Elegance and Comfort at Our Restaurant
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</div>
</div>
  );
}

export default Place;