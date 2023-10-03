
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import firebase from 'firebase/compat/app'; // Import Firebase compatibility module
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyCqqbzFeor_Fb42nl1mcYTVIupqHdqJVvY",
  authDomain: "nawabi-bites.firebaseapp.com",
  projectId: "nawabi-bites",
  storageBucket: "nawabi-bites.appspot.com",
  messagingSenderId: "898314143431",
  appId: "1:898314143431:web:024b1517cea25f88d9e0e2",
  measurementId: "G-Y8NQJES34X"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(); 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
