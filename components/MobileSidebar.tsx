'use client'
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Footer from './Footer'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { logoutUser } from '@/lib/auth'


const Sidebar = ({ user }: SiderbarProps) => {
    const router = useRouter();

    const handleClick = async () => {
           
            try {
                await logoutUser(); // Chama a função de logout
                router.push("/sign-in"); // Redireciona para a página de login
            } catch (error) {
                console.error("Erro ao deslogar:", error);
            }
        }
    const pathname = usePathname();
    return (
        <section className="w-[164px] absolute">
            <Sheet>
                <SheetTrigger>
                    <Image src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt="menu"
                        className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side={"left"} >
                    <SheetClose className='h-[93%] flex flex-col '>
                        <Link href='/' className='flex flex-col gap-8 mb-8 '>
                            <Image src='/images/logo.png' width={120} height={120} alt='logo' />
                        </Link>
                        <nav className='flex flex-col gap-4'>
                            {sidebarLinks.map((item) => {
                                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                return (
                                    <Link href={item.route} key={item.label} className={isActive ? 'flex items-center w-full gap-2 px-3 rounded-lg bg-gradient-to-r from-main-500 to-main-400 text-slate-50 font-bold w-fill h-10  ' : ' px-3 gap-2 font-semibold text-gray-500 flex '}>
                                        <Image src={item.imgURL} width={24} height={24} alt={item.label} className={isActive ? 'brightness-[3] invert-0' : ' '} />
                                        <p >{item.label}</p>
                                    </Link>
                                )
                            })}
                        </nav>


                    </SheetClose>
                    <footer className="flex cursor-pointer gap-4">
                        <button 
                        onClick={()=> handleClick()}
                        className='flex text-start gap-4'>
                            <div className="w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center">
                                <p className='text-xl font-bold text-gray-50'>
                                    F
                                </p>
                            </div>

                            <div >

                                <h1 className='text-[14px] truncate  text-gray-700 font-semibold'>
                                    Fábio brasileiro
                                </h1>

                                <p className='text-[12px] truncate font-normal text-gray-600'>
                                    {user?.email}
                                </p>
                            </div>
                            <div className=" flex r h-full" >
                                <Image className='' src="icons/logout.svg" width={20} height={20} alt='logout' />
                            </div>
                        </button>

                    </footer>
                </SheetContent>

            </Sheet>

        </section>
    )
}

export default Sidebar
