import React, {useState} from 'react';
import { questions } from './seedProblems.js';
import './MathGame.css';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5515ac',
    },
    secondary: {
      main: '#11cb5f',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});


const MathGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);


  const handleAnswerOptionClick = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 10);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setGameOver(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setGameOver(false);
  };

  return(
    <>
    <div className='quiz'>
      {gameOver ? (
        <div className='score-section'>
          You scored {score} out of 100
          <Button variant="contained" onClick={restartQuiz}>Restart Quiz</Button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].question}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].options.map((option) => (
              <Button
              sx={{ backgroundColor: theme.palette.neutral.main, color: theme.palette.neutral.contrastText }}
              variant="contained"
              size="small"
              onClick={() => handleAnswerOptionClick(option)} key={option}
              >
                {option}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>

    </>
  )
}

export default MathGame;