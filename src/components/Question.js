// src/components/Question.js
import React from 'react';

function Question({ question, answer, onChange }) {
  return (
    <div className="question">
      <p>{question.question}</p>
      {question.options.map((option, index) => (
        <div
          key={index}
          className={`option-box ${answer === option.value ? 'selected' : ''}`}
          onClick={() => onChange(question.id, option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}

export default Question;
