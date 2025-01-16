'use client'
import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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


const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();
    return (
        <section className="w-[164px]">
            <Sheet>
                <SheetTrigger>
                    <Image src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt="menu"
                        className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side={"left"} >
                    <SheetClose>
                        <Link href='/' className='flex flex-col gap-8 mb-8 '>
                            <Image src='/images/logo.png' width={120} height={120} alt='logo' />
                        </Link>
                        <nav className='flex flex-col gap-4'>
                            {sidebarLinks.map((item) => {
                                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                return (
                                    <Link href={item.route} key={item.label} className={isActive ? 'flex items-center gap-2 px-3 rounded-lg bg-gradient-to-r from-main-500 to-main-400 text-slate-50 font-bold w-fill h-10  ' : ' px-3 gap-2 font-semibold text-gray-500 flex '}>
                                        <Image src={item.imgURL} width={24} height={24} alt={item.label} className={isActive ? 'brightness-[3] invert-0' : ' '} />
                                        <p >{item.label}</p>
                                    </Link>
                                )
                            })}

                        </nav>
                    </SheetClose>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default Sidebar
