import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import a1 from '../img/bg1.jpg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../style/menu.css'
import AutoPlay from '../components/autoplay';


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
   
      </div>
    
   <div className='p-3 m-5 text-white'>
   <AutoPlay title='Starters'/>
   {/* <div m-5 p-5>
    Cupidatat mollit aliqua occaecat enim nostrud deserunt. Incididunt dolor ad sint minim nostrud culpa in incididunt aliquip fugiat in sint sunt. Tempor fugiat commodo cupidatat aliqua adipisicing exercitation dolor. Eu laboris exercitation irure incididunt cillum adipisicing. Adipisicing irure aute tempor amet nulla.

   </div> */}
   
   </div>
   <div className='p-3 m-5 text-white'>
   <AutoPlay title='Main Course'/>
   
   </div>
   <div className='p-3 m-5 text-white'>
   <AutoPlay title='Deserts'/>
   
   </div>

  </div>
  
  )
}

export default MenuPage