import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import a1 from '../img/a1.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../style/menu.css'
import Card1 from '../components/card';


const MenuPage = () => {
  return (
    <div >
      <div className='cat'>
      <Carousel fade className='cs' >
    <Carousel.Item>
      <img
        className="d-block center cs"
        src={a1}
        alt="First slide"
      />
      <Carousel.Caption>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block  cs"
        src={a1}
        alt="Second slide"
      />

      <Carousel.Caption>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block 0 cs"
        src={a1}
        alt="Third slide"
      />

      <Carousel.Caption>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
      </div>
      <div>
        hiii
      </div>
      <Card1/>
      <Card1/>
      <Card1/>
      <Card1/>
    

  </div>
  
  )
}

export default MenuPage