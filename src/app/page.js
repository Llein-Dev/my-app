"use client"
import { useState, useEffect } from 'react';
import Header from './components/HeaderCP';
import Nav from './components/NavCP';
import Question from './components/question';

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanationTimeout, setExplanationTimeout] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => setError('Could not load questions'));
  }, []);

  const handleSelectQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleAnswer = (isCorrect) => {
    const question = questions[currentQuestionIndex];
    const correctAnswer = question.correctAnswer;

    if (isCorrect === correctAnswer) {
      setScore(score + 1000);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      setScore(score - 2000);
      setShowExplanation(true);

      // Clear previous timeout if any
      if (explanationTimeout) {
        clearTimeout(explanationTimeout);
      }

      // Set a timeout to navigate to the previous question after showing explanation
      const timeout = setTimeout(() => {
        setShowExplanation(false);
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
      }, 1000); // 3 seconds for explanation

      setExplanationTimeout(timeout);
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="h-screen flex flex-col">
      <Header score={score} />
      <div className="flex flex-1">
        <Nav
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          onSelectQuestion={handleSelectQuestion}
        />
        {questions.length > 0 && (
          <Question
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            showExplanation={showExplanation} // Pass this to Question component
          />
        )}
      </div>
    </div>
  );
}
