import React from 'react';

interface OptionItemProps {
  option: string;
  isCorrect: boolean;
  isUserAnswer: boolean;
  optionIndex: number;
}

const OptionItem: React.FC<OptionItemProps> = ({ option, isCorrect, isUserAnswer, optionIndex }) => {
  return (
    <li
      className={`p-2 rounded-lg text-sm md:text-base ${
        isCorrect
          ? 'bg-green-100 text-green-800 font-bold'
          : isUserAnswer
          ? 'bg-red-100 text-red-800 font-semibold'
          : 'bg-gray-100 text-gray-800'
      }`}
    >
      {optionIndex + 1}. {option}
      {isCorrect && <span className="ml-2">(Correta)</span>}
      {isUserAnswer && !isCorrect && <span className="ml-2">(Escolhida)</span>}
    </li>
  );
};

export default OptionItem;
