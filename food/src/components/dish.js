import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../style/dish.css'

const Dish = (props) => {
  return (
    <div><Row>
    <Col className='c1'><img src={props.name} className='p1 m-5' alt='dish'/> </Col>
    <Col className='t1'>{props.title}</Col>
  </Row></div>
  )
}

export default Dish