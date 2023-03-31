import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import Login from './Login.jsx';
import Register from './Register.jsx';
import MathGame from './MathGame.jsx'

const App = () => {
  return(
    <>
    <h1>Student Game</h1>
    {/* <Login />
    <Register /> */}
    <MathGame />
    </>
  )
}

root.render(<App />);