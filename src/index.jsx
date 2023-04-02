import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import Login from './Login.jsx';
import Navbar from './Navbar.jsx';
import Register from './Register.jsx';

const App = () => {
  return(
    <>
    <Navbar />
    <Login />
    <Register />
    </>
  )
}

root.render(<App />);