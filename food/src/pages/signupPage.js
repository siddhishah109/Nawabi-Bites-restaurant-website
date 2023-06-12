import React from 'react'
import '../style/signup.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from 'react';


const SignupPage = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  return (
   <>
  
<div className="container e  justify-content-center align-items-center a f">
<Form onSubmit={handleSubmit} className=' w'>
      <h3 className='h'>Sign Up</h3>
      <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
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
        <div>  <p>Already have  an account ?  {`  `}<a className='af' href='/login'>Sign Up</a></p></div>
        </Form.Group>
       <div className='b'>
       <Button className='m-2 b' block="true" size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
       </div>
      </Form>
</div>
    </>
  )
}

export default SignupPage