import React from 'react';

interface QuestionType {
  type: 'question' | 'answer';
  noq: number;
  question: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const QuestionSimulado: React.FC<QuestionType> = ({
  type,
  noq,
  question,
  onClick,
  isSelected = false,
}) => {
  if (type === 'question') {
    return (
      <div className="h-[80px] border border-gray-200 rounded-lg shadow-lg py-2 px-3">
        <div className="flex h-full w-full items-center gap-6">
          <div className="w-[30px] flex flex-col items-center font-bold">{noq}</div>
          <h1 className="text-sm md:text-lg font-bold">{question}</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-0">
        <button
          type="button"
          onClick={onClick}
          className={`h-[65px] border rounded-lg shadow-lg py-2 px-3 cursor-pointer ${isSelected ? 'bg-main-500 text-white' : 'bg-white'
            }`}
        >
          <div className="flex h-full w-full items-center gap-6">
            <div className={`w-[30px] h-[30px] rounded-md flex justify-center items-center font-semibold
                            ${isSelected ? 'bg-white text-black' : 'bg-slate-100 '}`}>
              {noq}
            </div>
            <h3 className={`text-md max-md:text-xs font-semibold 
                            ${isSelected ? 'text-white ' : 'text-black '}`}>{question}</h3>
          </div>
        </button>
      </div>
    );
  }
};

export default QuestionSimulado;
