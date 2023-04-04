import React, {useState, useEffect} from 'react';
import { questions } from './seedData.js';
import './MathGame.css';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import BadgeSystem from './BadgeSystem.jsx';

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

const getRandomQuestions = () => {
  const shuffledQuestions = [...questions].sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, 10);
};


const MathGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [questions, setQuestions] = useState(getRandomQuestions());
  const [time, setTime] = useState(5);

  useEffect(() => {
    if (currentQuestion >= questions.length || gameOver) {
      return;
    }
    const interval = setInterval(() => {
      setTime(time => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentQuestion, questions.length, gameOver]);

  useEffect(() => {
    if (time === 0) {
      handleAnswerOptionClick("");
    }
  }, [time]);

  useEffect(() => {
    setTime(5);
  }, [currentQuestion]);


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

  // const restartQuiz = () => {
  //   setCurrentQuestion(0);
  //   setScore(0);
  //   setGameOver(false);
  // };

  return(
    <>
    <div className='quiz'>
      {gameOver ? (
        <div className='score-section'>
          You scored {score} out of 100 points for today!
          {/* <Button variant="contained" onClick={restartQuiz}>Restart Quiz</Button> */}
          <BadgeSystem score={score} />
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].question}</div>
            <div className="timer">{time} seconds left</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].options.map((option) => (
              <Button
              sx={{ backgroundColor: theme.palette.neutral.main, color: theme.palette.neutral.contrastText }}
              variant="contained"
              size="small"
              onClick={() => handleAnswerOptionClick(option)} key={option}
              >
                <span className="answer-option">{option}</span>
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