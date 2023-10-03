import React, { useState, useRef } from 'react';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const ContactForm = ({ db }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendCopy, setSendCopy] = useState(true);

  const formRef = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        name: name,
        email: email,
        message: message,
      };

      // Access the "messages" collection in Firestore and add a new document
      await db.collection('messages').add(formData);

      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');

      // Reset the form using the formRef
      formRef.current.reset();

      // Handle successful form submission or navigate to another page
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className='contact-form' id='contact'>
      <form className='foc' onSubmit={handleFormSubmit} ref={formRef}>
        <div className='contact-title2'>Contact / Feedback <MDBIcon fas icon="concierge-bell" /></div>
        <MDBInput id='form4Example1' wrapperClass='mb-4' labelClass='black-label'
          label='Name'
          onChange={(e) => setName(e.target.value)}
          inputClass='black-input' />
        <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' labelClass='black-label' onChange={(e) => setEmail(e.target.value)} inputClass='black-input' />
        <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' onChange={(e) => setMessage(e.target.value)} labelClass='black-label' inputClass='black-input' />

        <MDBCheckbox
          wrapperClass='d-flex justify-content-center mb-4'
          id='form4Example4'
          label='Send me a copy of this message'
          labelClass='black-label'
          checkboxClass='yellow-checkbox'
          defaultChecked
        />

        <MDBBtn type='submit' className='mb-4' color='dark' block>
          Send
        </MDBBtn>
      </form>
    </div>
  );
}

export default ContactForm;
