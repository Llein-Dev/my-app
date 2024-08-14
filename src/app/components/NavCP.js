import React from 'react';

export default function Nav({ questions, currentQuestionIndex, onSelectQuestion }) {
  return (
    <nav className="w-1/4 bg-gray-100 p-4">
      <ul className="space-y-2">
        {questions.map((question, index) => (
          <li
            key={index}
            onClick={() => onSelectQuestion(index)}
            className={`cursor-pointer p-2 rounded ${
              currentQuestionIndex === index
                ? 'bg-blue-500 text-white'
                : 'bg-white text-black'
            }`}
          >
            Câu {index + 1}: {question.question}
          </li>
        ))}
      </ul>
    </nav>
  );
}
