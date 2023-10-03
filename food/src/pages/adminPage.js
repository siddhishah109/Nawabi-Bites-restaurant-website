import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Create a reference to the "messages" collection in Firestore
    const messagesRef = firebase.firestore().collection('messages');

    // Listen for changes in the collection and update the state
    const unsubscribe = messagesRef.onSnapshot((snapshot) => {
      const messageData = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        messageData.push(data);
      });
      setMessages(messageData);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      // User signed out successfully
      navigate('/');
    } catch (error) {
      // Handle sign-out errors
      alert(error.message);
      console.error(error.message);
    }
  };

  return (
    <div className='box-admin'>
      <div>
        <Button onClick={handleSignOut} variant="secondary">
          Sign Out
        </Button>{' '}
      </div>
      <div className='databox'>
        <h2>Form Submissions</h2>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>
              Name: {message.name}, Email: {message.email}, Message: {message.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
