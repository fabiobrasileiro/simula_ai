'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simula o carregamento com incremento de 10% a cada 500ms até 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
      <div className="mb-6">
        <Image src="/images/loading.png" alt="Loading" width={500} height={500} />
      </div>
      <p className="text-xl font-semibold text-gray-700 mb-4">Estamos preparando o seu simulado...</p>
      <div className="w-64 h-2 bg-gray-300 rounded-full">
        <div
          className="h-full bg-orange-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-gray-500">{progress}% Concluído</p>
    </div>
  );
};

export default LoadingPage;
