'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import DetailsSimulados from './DetailsSimulados';
import { mockResults } from '@/constants';
import { useRouter } from 'next/navigation';




const ResultsPage: React.FC = () => {
  const handleViewDetails = (id: string) => {
    // Redirecionar para a página de detalhes do resultado
    console.log(`Visualizar detalhes do simulado com ID: ${id}`);
    // router.push(`/results/${id}`); // Ative isso se estiver usando o roteamento dinâmico
  };

 
const router = useRouter()
  function handleNewSimulado(): void {
    router.push('/simulados')
  }

  return (
    <div className="w-full flex flex-col flex-shrink py-8 items-center overflow-auto">
      <div className=" w-2/3 flex flex-col gap-6">
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-8 mt-8">
          Resultados dos <span className="text-main-500">Simulados</span>
        </h1>

        {/* Lista de Resultados */}
       {mockResults.length > 0 ? (
         mockResults.map((result) => (
          <DetailsSimulados id={result.id} title={result.title} score={result.score} time={result.time} date={result.date} />
        ))
       ): (
        <h2 className='text-center font-medium'>Você não tem simulados ainda!</h2>
       )}

        {/* Botão de Novo Simulado */}
        <div className="mt-10 flex justify-center">
          <Button
            onClick={() => handleNewSimulado()}
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
