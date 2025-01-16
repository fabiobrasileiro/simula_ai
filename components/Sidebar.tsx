'use client';

import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Footer from './Footer';

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname(); // Obtem o caminho atual do cliente

  return (
    <section className="sticky left-0 top-0  w-[300px] h-screen py-8 px-12 border border-neutral-200 hidden md:flex ">
      <div className="flex flex-col gap-8">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" width={120} height={120} alt="logo" />
        </Link>

        {/* Navegação */}
        <nav className="flex flex-col gap-4">
          {sidebarLinks.map((item) => {
            const isActive =
              pathname === item.route || pathname.startsWith(`${item.route}/`);

            return (
              <Link
                href={item.route}
                key={item.label}
                className={
                  isActive
                    ? 'flex items-center gap-2 px-3 rounded-lg bg-gradient-to-r from-main-500 to-main-400 text-slate-50 font-bold w-full h-10'
                    : 'px-3 gap-2 font-semibold text-gray-500 flex'
                }
              >
                <Image
                  src={item.imgURL}
                  width={24}
                  height={24}
                  alt={item.label}
                  className={isActive ? 'brightness-[3] invert-0' : ''}
                />
                <p>{item.label}</p>
              </Link>
            );
          })}
        </nav>
      </div>

    </section>
  );
};

export default Sidebar;
