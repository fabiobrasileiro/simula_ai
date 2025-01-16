import React from 'react';

interface SimuladoHeaderProps {
  title: string;
  score: string;
  time: string;
  date: string;
}

const SimuladoHeader: React.FC<SimuladoHeaderProps> = ({ title, score, time, date }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-2xl md:text-4xl font-bold">
        Detalhes do <span className="text-main-500">{title}</span>
      </h1>
      <p className="text-sm md:text-lg text-gray-600 mt-2">
        Pontuação: <span className="font-semibold">{score}</span> | Tempo: <span className="font-semibold">{time}</span> | Data: <span className="font-semibold">{date}</span>
      </p>
    </div>
  );
};

export default SimuladoHeader;
