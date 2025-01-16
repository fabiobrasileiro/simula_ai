

import Image from 'next/image';
import React from 'react'

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex justify-between items-center h-screen'>
      {children}
      <div className=" h-screen flex-col w-2/3 bg-main-400 hidden lg:flex rounded-l-3xl justify-center  relative">
        <div className="flex w-5/6 h-5/6 absolute right-0">
        <Image src='/images/simulado.png' fill alt='simulaAi app image' className='' />
        </div>
      </div>
    </div>
  )
}

