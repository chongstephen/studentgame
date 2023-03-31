import React, {useState} from 'react';

const questions = [
  {
    id: 1,
    question: '1 + 1 = ?',
    options: ['0', '1', '2', '3'],
    answer: '2'
  },
  {
    id: 2,
    question: '25 + 24 = ?',
    options: ['0', '1', '2', '49'],
    answer: '49'
  },
  {
    id: 3,
    question: '1 + 0 = ?',
    options: ['0', '1', '2', '3'],
    answer: '1'
  },
];

const MathGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
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
          <button onClick={restartQuiz}>Restart Quiz</button>
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
              <button onClick={() => handleAnswerOptionClick(option)} key={option}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>

    </>
  )
}

export default MathGame;