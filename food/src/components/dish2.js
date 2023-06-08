import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/dish.css'

const Dish2 = (props) => {
  return (
    <div><Row>
    
    <Col className='t1 t2'>{props.title}</Col>
    <Col className='c1'><img src={props.name} className='p1 m-5' alt='dish'/> </Col>
  </Row></div>
  )
}

export default Dish2