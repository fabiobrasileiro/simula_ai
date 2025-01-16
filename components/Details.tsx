'use client';

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import SimuladoHeader from '@/components/SimuladoHeader';
import QuestionItem from '@/components/QuestionItem';
import { Button } from '@/components/ui/button';

// Simular uma função que busca os dados no backend
const fetchSimuladoDetail = async (id: string) => {
  interface SimuladoDetail {
    id: string;
    title: string;
    score: string;
    time: string;
    date: string;
    questions: {
      question: string;
      options: string[];
      correctAnswer: number;
      userAnswer: number;
    }[];
  }
  
  // Mock de dados com a assinatura de índice
  const mockData: Record<string, SimuladoDetail> = {
    '1': {
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
    },
    // Você pode adicionar outros simulados com diferentes IDs
  };
  

  // Simula um atraso (como uma requisição ao backend)
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockData[id] || null;
};

const SimuladoDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [simuladoDetail, setSimuladoDetail] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const loadSimulado = async () => {
        const data = await fetchSimuladoDetail(id as string);
        setSimuladoDetail(data);
        setLoading(false);
      };

      loadSimulado();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Carregando os detalhes do simulado...</p>
      </div>
    );
  }

  if (!simuladoDetail) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Simulado não encontrado!</p>
      </div>
    );
  }

  const { title, score, time, date, questions } = simuladoDetail;

  return (
    <div>
      <Navbar />
      <div className="p-4 md:p-8">
        {/* Cabeçalho */}
        <SimuladoHeader title={title} score={score} time={time} date={date} />

        {/* Lista de Perguntas */}
        <div className="flex flex-col gap-4 md:gap-6">
          {questions.map((question: any, index: number) => (
            <QuestionItem key={index} question={question} index={index} />
          ))}
        </div>

        {/* Botão de Voltar */}
        <div className="mt-10 flex justify-center">
          <Button
            onClick={() => router.push('/simulados')}
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
