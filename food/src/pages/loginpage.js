import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import fork from '../img/fork.png';
import knife from '../img/knife.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/login.css'
import { useState } from 'react';

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>


    <Row>
        <Col ><img  className='fork' src={fork} alt='fork'/></Col>
        <Col xs={6}>     <div className="Login">
      
      <Form onSubmit={handleSubmit}>
      <h3>Login</h3>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <div>  <p>Don't have an account ?  {`  `}<a href='/signup'>Sign Up</a></p></div>
        </Form.Group>
       <div className='b'>
       <Button className='m-2 b' block="true" size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
       </div>
      </Form>



    </div></Col>
        <Col  ><img className='knife' src={knife} alt='fork'/></Col>
      </Row>
    </>
  )
}

export default Loginpage