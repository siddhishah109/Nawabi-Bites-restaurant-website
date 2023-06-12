import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../img/a1.png'
import about1 from '../img/a2.mp4'
import '../style/about.css'

const About = () => {
  return (
    <div className='d'>
      <Container>
      <Row>
    <Col className='a2' ><img className='a1' src={about} alt='about'/></Col>
    <Col >
    <video width={500} height={400} autoPlay  loop muted playsInline className='v'>
        <source  src={about1} type='video/mp4'/>
        your browser does not support this video
        </video>
    </Col>
  </Row>
      </Container>
  </div>
  )
}

export default About