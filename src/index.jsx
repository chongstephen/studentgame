import React, {useState} from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
import Login from './Login.jsx';
import Navbar from './Navbar.jsx';
import Register from './Register.jsx';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleShowLogin = () => {
    setShowLogin(!showLogin);
  };

  return(
    <>
    <Navbar />
    {showLogin ? <Login toggleShowLogin={toggleShowLogin} /> : <Register toggleShowLogin={toggleShowLogin} />}
    </>
  )
}

root.render(<App />);