import React from 'react';
import OptionItem from './OptionItem';

interface QuestionDetail {
  question: string;
  options: string[];
  correctAnswer: number;
  userAnswer: number;
}

interface QuestionItemProps {
  question: QuestionDetail;
  index: number;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, index }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-2">
        {index + 1}. {question.question}
      </h2>
      <ul className="flex flex-col gap-2">
        {question.options.map((option, optionIndex) => (
          <OptionItem
            key={optionIndex}
            option={option}
            isCorrect={optionIndex === question.correctAnswer}
            isUserAnswer={optionIndex === question.userAnswer}
            optionIndex={optionIndex}
          />
        ))}
      </ul>
    </div>
  );
};

export default QuestionItem;
