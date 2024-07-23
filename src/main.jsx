import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJCIpT1qLwI6vyeXM7Icc3uwCLpUfEIrY",
  authDomain: "proyecto-react-coderhous-44100.firebaseapp.com",
  projectId: "proyecto-react-coderhous-44100",
  storageBucket: "proyecto-react-coderhous-44100.appspot.com",
  messagingSenderId: "733873033364",
  appId: "1:733873033364:web:22a4c584e2dd237b68e481"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
