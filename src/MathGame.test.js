import { render, screen, fireEvent } from '@testing-library/react';
import MathGame from './MathGame';

describe('MathGame', () => {
  it('displays a question and answer options', () => {
    render(<MathGame />);
    const question = screen.getByText(/Question 1/i);
    const answerOption1 = screen.getByText(/4/i);
    const answerOption2 = screen.getByText(/7/i);
    const answerOption3 = screen.getByText(/8/i);
    const answerOption4 = screen.getByText(/10/i);
    expect(question).toBeInTheDocument();
    expect(answerOption1).toBeInTheDocument();
    expect(answerOption2).toBeInTheDocument();
    expect(answerOption3).toBeInTheDocument();
    expect(answerOption4).toBeInTheDocument();
  });

  it('updates the score when the correct answer is clicked', () => {
    render(<MathGame />);
    const answerOption = screen.getByText(/4/i);
    fireEvent.click(answerOption);
    const score = screen.getByText(/You scored 10 out of 100/i);
    expect(score).toBeInTheDocument();
  });

  it('goes to the next question when an answer is clicked', () => {
    render(<MathGame />);
    const answerOption = screen.getByText(/4/i);
    fireEvent.click(answerOption);
    const nextQuestion = screen.getByText(/Question 2/i);
    expect(nextQuestion).toBeInTheDocument();
  });

  it('displays the final score when all questions have been answered', () => {
    render(<MathGame />);
    const answerOption1 = screen.getByText(/4/i);
    const answerOption2 = screen.getByText(/7/i);
    const answerOption3 = screen.getByText(/8/i);
    const answerOption4 = screen.getByText(/10/i);
    fireEvent.click(answerOption1);
    fireEvent.click(answerOption2);
    fireEvent.click(answerOption3);
    fireEvent.click(answerOption4);
    const score = screen.getByText(/You scored 40 out of 100/i);
    expect(score).toBeInTheDocument();
  });
});