import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../img/a1.png'
import about1 from '../img/a2.mp4'
import '../style/about.css'

const About = () => {
  return (
    <div>
      <Container>
      <Row>
    <Col className='a' ><img className='a1' src={about} alt='about'/></Col>
    <Col className='a2'>
    <video width={500} height={400} autoplay controls loop muted playsInline className='v'>
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