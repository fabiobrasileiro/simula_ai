'use client'
import React, { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import LoadingPage from './LoadingPage'; // Importe a página de loading

const customStyles: StylesConfig = {
    control: (provided) => ({
      ...provided,
      borderRadius: '0.375rem', // Tailwind rounded-md
      borderColor: '#e5e7eb', // Tailwind gray-300
      padding: '0.5rem',
    }),
    option: (provided, state) => ({
      ...provided,
      padding: '0.75rem 1rem',
      fontSize: '1rem',
      fontWeight: state.isSelected ? 'bold' : 'normal',
      backgroundColor: state.isSelected
        ? '#FB923C' // Tailwind orange-400
        : state.isFocused
        ? '#f3f4f6' // Tailwind gray-100 (hover/focus effect)
        : 'white',
      color: state.isSelected ? 'white' : 'gray',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#1f2937', // Tailwind gray-800 (for the selected value)
    }),
};

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
        // Ativar a tela de loading
        setLoading(true);

        // Simula o processamento do simulado (substitua com sua lógica de backend)
        setTimeout(() => {
            setLoading(false); // Finaliza o loading após 3 segundos (simulação)
            console.log({ file, questionCount, difficulty });
        }, 3000); // 3 segundos de "processamento"
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
                            {[3, 5, 10, 15, 20].map((num) => (
                                <option key={num} value={num}>{num}</option>
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
                        Create quiz
                    </button>
                </div>
            )}
        </div>
    );
};

export default SimuladoForm;
