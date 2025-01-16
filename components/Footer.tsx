import { logoutUser } from '@/lib/auth';
import { User } from 'firebase/auth';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Footer = async ({ user, type = 'desktop' }: FooterProps) => {
    const [loading, setLoading] = useState(false);
    

    const router = useRouter();

        const handleLogout = async () => {
            setLoading(true);
            try {
                await logoutUser(); // Chama a função de logout
                router.push("/sign-in"); // Redireciona para a página de login
            } catch (error) {
                console.error("Erro ao deslogar:", error);
            } finally {
                setLoading(false);
            }
        };

        return (
            <footer className="footer">
                <div className={type === 'mobile' ? "footer_name-mobile" : 'footer_name'}>
                    <p className='text-xl font-bold text-gray-700'>
                        {user?.name[0]}
                    </p>
                </div>

                <div className={type === 'mobile' ? "footer_email-mobile" : 'footer_email'}>

                    <h1 className='text-14 truncate  text-gray-700 font-semibold'>
                        {user?.name}
                    </h1>

                    <p className='text-14 truncate font-normal text-gray-600'>
                        {user?.email}
                    </p>
                </div>
                <div className="footer_image" onClick={handleLogout}>
                    <Image src="icons/logout.svg" fill alt='logout' />
                </div>
            </footer>
        )
    }

    export default Footer
