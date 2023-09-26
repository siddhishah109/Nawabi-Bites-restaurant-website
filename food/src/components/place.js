import Carousel from 'react-bootstrap/Carousel';
import f1 from '../img/f1.jpg'

function Place() {
  return (
    <Carousel>
      <Carousel.Item>
        
        <img src={f1}/>
        
      </Carousel.Item>
      <Carousel.Item>
       
          <img src={f1}/>
      </Carousel.Item>
      <Carousel.Item>
      
         <img src={f1}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Place;