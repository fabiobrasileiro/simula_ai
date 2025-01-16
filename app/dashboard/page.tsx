'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import SimuladoHeader from '@/components/SimuladoHeader';
import QuestionItem from '@/components/QuestionItem';
import { Button } from '@/components/ui/button';

// Mock para simular um backend
const mockSimuladoDetail = {
  id: '1',
  title: 'Simulado de Geografia',
  score: '8/10',
  time: '06:45',
  date: '16/01/2025',
  questions: [
    {
      question: 'Qual é a capital da França?',
      options: ['Berlim', 'Madrid', 'Paris', 'Lisboa'],
      correctAnswer: 2,
      userAnswer: 2,
    },
    {
      question: 'Qual é o maior continente do mundo?',
      options: ['Ásia', 'África', 'Europa', 'América do Sul'],
      correctAnswer: 0,
      userAnswer: 1,
    },
    {
      question: 'Quantos planetas existem no Sistema Solar?',
      options: ['7', '8', '9', '10'],
      correctAnswer: 1,
      userAnswer: 1,
    },
  ],
};

const SimuladoDetailPage: React.FC = () => {
  const { title, score, time, date, questions } = mockSimuladoDetail;

  return (
    <div>
      <Navbar />
      <div className="p-4 md:p-8">
        {/* Cabeçalho */}
        <SimuladoHeader title={title} score={score} time={time} date={date} />

        {/* Lista de Perguntas */}
        <div className="flex flex-col gap-4 md:gap-6">
          {questions.map((question, index) => (
            <QuestionItem key={index} question={question} index={index} />
          ))}
        </div>

        {/* Botão de Voltar */}
        <div className="mt-10 flex justify-center">
          <Button
            onClick={() => console.log('Voltar para a página de resultados')}
            className="bg-main-500 text-white font-bold px-4 py-2 md:px-6 md:py-3 hover:bg-main-600"
          >
            Voltar para Resultados
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimuladoDetailPage;
