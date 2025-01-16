import { logoutUser } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'




const Navbar = () => {
    const router = useRouter();
    const handleOnClick = async () => {
       
        try {
            await logoutUser(); // Chama a função de logout
            router.push("/sign-in"); // Redireciona para a página de login
        } catch (error) {
            console.error("Erro ao deslogar:", error);
        }
    }
    return (
        <div className='flex w-screen py-3 px-40 border'>
            <nav className='flex items-center  justify-between w-full'>
                <Link href="/">
                    <Image src="/images/logo.png" width={120} height={120} alt="logo" />
                </Link>

                <button onClick={() => handleOnClick()} className="flex items-center justify-center gap-1">
                    <p className="font-medium text-slate-500">
                        exit
                    </p>
                    <Image src='icons/logout.svg' height={15} width={15} alt='exit' />
                </button>
            </nav>

        </div>
    )
}

export default Navbar
