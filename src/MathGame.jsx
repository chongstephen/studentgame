import React from 'react';

const MathGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);


  return(
    <>
    <h1>
      Math Problem
    </h1>

    </>
  )
}

export default MathGame;