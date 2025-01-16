'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

interface ResultData {
  id: string;
  title: string;
  score: string; // Exemplo: "7/10"
  time: string; // Exemplo: "05:32"
  date: string; // Exemplo: "16/01/2025"
}

const mockResults: ResultData[] = [
  {
    id: '1',
    title: 'Simulado de Geografia',
    score: '8/10',
    time: '06:45',
    date: '16/01/2025',
  },
  {
    id: '2',
    title: 'Simulado de Matemática',
    score: '9/10',
    time: '05:32',
    date: '15/01/2025',
  },
  {
    id: '3',
    title: 'Simulado de História',
    score: '7/10',
    time: '07:20',
    date: '14/01/2025',
  },
];

const ResultsPage: React.FC = () => {
  const handleViewDetails = (id: string) => {
    // Redirecionar para a página de detalhes do resultado
    console.log(`Visualizar detalhes do simulado com ID: ${id}`);
    // router.push(`/results/${id}`); // Ative isso se estiver usando o roteamento dinâmico
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <div className=" w-1/2">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Resultados dos <span className="text-main-500">Simulados</span>
        </h1>

        {/* Lista de Resultados */}
        <div className="flex flex-col gap-6 ">
          {mockResults.map((result) => (
            <div
              key={result.id}
              className="md:flex flex-col md:gap-6 justify-between items-center md:items-start p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
            >
              <div>
                <h2 className="text-lg font-bold">{result.title}</h2>
                <p className="text-gray-600">
                  Pontuação: <span className="font-semibold">{result.score}</span>
                </p>
                <p className="text-gray-600">
                  Tempo: <span className="font-semibold">{result.time}</span>
                </p>
                <p className="text-gray-600">
                  Data: <span className="font-semibold">{result.date}</span>
                </p>
              </div>
              <Button
                onClick={() => handleViewDetails(result.id)}
                className="bg-main-500 text-white font-semibold px-4 py-2"
              >
                Ver Detalhes
              </Button>
            </div>
          ))}
        </div>

        {/* Botão de Novo Simulado */}
        <div className="mt-10 flex justify-center">
          <Button
            onClick={() => console.log('Iniciar novo simulado')}
            className="bg-orange-500 text-white font-bold px-6 py-3 hover:bg-orange-600"
          >
            Novo Simulado
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
