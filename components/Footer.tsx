import { logoutUser } from '@/lib/auth';
import { User } from 'firebase/auth';
import { Link } from 'lucide-react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {


    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logoutUser(); // Chama a função de logout
            router.push("/sign-in"); // Redireciona para a página de login
        } catch (error) {
            console.error("Erro ao deslogar:", error);
        }
    };

    return (
        <footer className="flex gap-5 cursor-pointer">
                <div className={type === 'mobile' ? "footer_name-mobile" : 'footer_name'}>
                    <p className='text-xl font-bold text-gray-700'>
                        F
                    </p>
                </div>

                <div className={type === 'mobile' ? "footer_email-mobile" : 'footer_email'}>

                    <h1 className='text-[14px] truncate  text-gray-700 font-semibold'>
                        Fábio brasileiro
                    </h1>

                    <p className='text-[12px] truncate font-normal text-gray-600'>
                        {user?.email}
                    </p>
                </div>
                <div className="footer_image flex r h-full" onClick={handleLogout}>
                    <Image className='mt-2' src="icons/logout.svg" fill alt='logout' />
                </div>
        </footer>
    )
}

export default Footer
