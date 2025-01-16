'use client';
import React, { useState, useEffect } from 'react';
import QuestionSimulado from './QuestionSimulado';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface QuestionData {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: number; // Índice da resposta correta no array de answers
}

const Simulado: React.FC = () => {
  const router = useRouter();
  const questions: QuestionData[] = [
    {
      id: 1,
      question: 'Qual é a capital da França?',
      answers: ['Berlim', 'Madrid', 'Paris', 'Lisboa'],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: 'Qual é o maior planeta do sistema solar?',
      answers: ['Terra', 'Júpiter', 'Saturno', 'Vênus'],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: 'Quem pintou a Mona Lisa?',
      answers: ['Vincent Van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
      correctAnswer: 2,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Índice da pergunta atual
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null); // Resposta selecionada
  const [elapsedTime, setElapsedTime] = useState(0); // Tempo em segundos

  // Atualiza o tempo decorrido a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer); // Limpa o timer quando o componente é desmontado
  }, []);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index); // Marca a resposta selecionada
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      // Verifica se existe uma próxima pergunta
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null); // Reseta a seleção de resposta para a próxima pergunta
      } else {
        router.push('/review'); // Redireciona para a página de revisão
      }
    } else {
      alert('Selecione uma resposta antes de prosseguir!');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col w-2/4 gap-2 ">
      <div className="flex items-center justify-center bg-gray-100 p-3 rounded-lg shadow-lg text-xs font-bold w-20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        {formatTime(elapsedTime)}
      </div>
      <section className="w-full flex flex-col gap-10 relative">
        {/* Relógio */}


        {/* Pergunta atual */}
        <QuestionSimulado
          type="question"
          noq={currentQuestion.id}
          question={currentQuestion.question}
        />

        {/* Respostas da pergunta atual */}
        {currentQuestion.answers.map((answer, index) => (
          <QuestionSimulado
            key={index}
            type="answer"
            noq={index + 1}
            question={answer}
            onClick={() => handleAnswerSelect(index)}
            isSelected={selectedAnswer === index} // Define se a resposta está selecionada
          />
        ))}

        {/* Botão para salvar e ir para a próxima */}
        <button
          onClick={handleNextQuestion}
          className="fixed bottom-10 right-10 p-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Próxima' : 'Finalizar'}
        </button>
      </section>
    </div>
  );
};

export default Simulado;
