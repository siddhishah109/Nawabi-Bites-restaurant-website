import React from 'react'
import Card from 'react-bootstrap/Card';

const Card1 = (props) => {
  const imgStyles = {
    height: '200px', // Adjust the height as needed
    objectFit: 'cover', // Ensures the image covers the entire Card.Img container
  };
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} style={imgStyles} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
       
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Card1
