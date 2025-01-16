'use client'
import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import LoadingPage from './LoadingPage'; // Importe a página de loading



const SimuladoForm = () => {
    const [file, setFile] = useState<File | null>(null);
    const [questionCount, setQuestionCount] = useState<number>(3);
    const [difficulty, setDifficulty] = useState<string>('Fácil');
    const [loading, setLoading] = useState(false); // Estado para controlar o loading

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false); 
            console.log({ file, questionCount, difficulty });
        }, 3000); 
    };

    return (
        <div>
            {loading ? (
                <LoadingPage /> // Exibe a tela de loading enquanto processa
            ) : (
                <div className="flex flex-col gap-2 max-w-md h-auto mx-auto px-6 border rounded-3xl shadow-lg w-full py-12">
                    <h2 className="text-2xl font-bold mb-4">Monte Seu Simulado</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Upload de arquivo</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="w-full mt-2 p-2 border rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Número de questões</label>
                        <select
                            value={questionCount}
                            onChange={(e) => setQuestionCount(Number(e.target.value))}
                            className="w-full mt-2 p-2 border rounded-lg"
                        >
                            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                                <option key={num} value={num} >
                                    {num}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Dificuldade</label>
                        <select
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                            className="w-full mt-2 p-2 border rounded-lg"
                        >
                            {['Fácil', 'Médio', 'Difícil'].map((level) => (
                                <option
                                    key={level}
                                    value={level}
                                    className={`px-4 py-2 text-gray-700 ${level === 'Fácil' ? 'bg-orange-500 text-white' : 'bg-white'} hover:bg-gray-200`}
                                >
                                    {level}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full p-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600"
                    >
                        Crie seu simulado
                    </button>
                </div>
            )}
        </div>
    );
};

export default SimuladoForm;
