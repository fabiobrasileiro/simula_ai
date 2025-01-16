'use client'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'


const page = () => {
    const router = useRouter();
    const handleSubmit = () =>{
        router.push('/dashboard')
    }
    return (
        <div className=''>
            <Navbar />
            <div className="flex flex-col justify-center items-center gap-4 h-[80vh]">
                <h1 className='font-bold text-3xl text-center'>Parabéns!!! Você <span className='text-main-500'>concluiu</span> <br />
                    seu <span className='text-main-500'>Simulado.</span></h1>
                <div className="flex flex-col gap-4">
                    <Button className='bg-gray-300 hover:bg-gray-400 text-black font-semibold'>Você terminou em 29s</Button>
                    <Button
                    onClick={() => handleSubmit()}
                    className='bg-main-500 hover:bg-main-600 text-white font-semibold'>Ver resultados</Button>

                </div>
            </div>

        </div>
    )
}

export default page
