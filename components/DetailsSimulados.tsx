import React from 'react'
import { Button } from './ui/button'
import { mockResults } from '@/constants'


const DetailsSimulados = ({id, title, score, time, date}: ResultData) => {
    function handleViewDetails(id: any): void {
        throw new Error('Function not implemented.')
    }

  return (
    <div className="flex flex-col gap-6 ">
          
            <div
              key={id}
              className="md:flex flex-col md:gap-6 justify-between items-center md:items-start p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
            >
              <div>
                <h2 className="text-lg font-bold">{ title}</h2>
                <p className="text-gray-600">
                  Pontuação: <span className="font-semibold">{score}</span>
                </p>
                <p className="text-gray-600">
                  Tempo: <span className="font-semibold">{ time}</span>
                </p>
                <p className="text-gray-600">
                  Data: <span className="font-semibold">{ date}</span>
                </p>
              </div>
              <Button
                onClick={() => handleViewDetails(id)}
                className="bg-main-500 text-white font-semibold px-4 py-2"
              >
                Ver Detalhes
              </Button>
            </div>
         
        </div>
  )
}

export default DetailsSimulados
