'use client';

import Navbar from '@/components/Navbar';
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuestionDetail {
  question: string;
  options: string[];
  correctAnswer: number; // Índice da resposta correta no array de options
  userAnswer: number; // Índice da resposta escolhida pelo usuário
}

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

const SimuladoDetail: React.FC = () => {
  const { title, score, time, date, questions } = mockSimuladoDetail;

  return (
    <div>
      <Navbar />
      <div className="p-8">
        {/* Título e Resumo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            Detalhes do <span className="text-main-500">{title}</span>
          </h1>
          <p className="text-lg text-gray-600">
            Pontuação: <span className="font-semibold">{score}</span> | Tempo: <span className="font-semibold">{time}</span> | Data: <span className="font-semibold">{date}</span>
          </p>
        </div>

        {/* Lista de Perguntas */}
        <div className="flex flex-col gap-6">
          {questions.map((question, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-md p-4"
            >
              <h2 className="text-lg font-bold mb-2">
                {index + 1}. {question.question}
              </h2>
              <ul className="flex flex-col gap-2">
                {question.options.map((option, optionIndex) => {
                  const isCorrect = optionIndex === question.correctAnswer;
                  const isUserAnswer = optionIndex === question.userAnswer;

                  return (
                    <li
                      key={optionIndex}
                      className={`p-2 rounded-lg ${
                        isCorrect
                          ? 'bg-green-100 text-green-800 font-bold'
                          : isUserAnswer
                          ? 'bg-red-100 text-red-800 font-semibold'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {optionIndex + 1}. {option}
                      {isCorrect && <span className="ml-2">(Correta)</span>}
                      {isUserAnswer && !isCorrect && (
                        <span className="ml-2">(Escolhida)</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Botão de Voltar */}
        <div className="mt-10 flex justify-center">
          <Button
            onClick={() => console.log('Voltar para a página de resultados')}
            className="bg-main-500 text-white font-bold px-6 py-3 hover:bg-main-600"
          >
            Voltar para Resultados
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimuladoDetail;
