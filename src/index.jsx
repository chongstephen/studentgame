import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import Login from './Login.jsx';
import Register from './Register.jsx';
import MathGame from './MathGame.jsx'
import Navbar from './Navbar.jsx';
import Leaderboard from './Leaderboard.jsx';

const App = () => {
  return(
    <>
    <Navbar />
    <Login />
    <Register />
    <MathGame />
    <Leaderboard />
    </>
  )
}

root.render(<App />);