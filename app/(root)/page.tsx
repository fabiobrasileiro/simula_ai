
'use client'
import Sidebar from '@/components/Sidebar'
import { getLoggedInUser, logoutUser } from '@/lib/auth';
import { User } from 'firebase/auth';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SimuladosResults from '@/components/SimuladosResults';
import Details from '@/components/Details';


const page = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutUser();
      console.log("Usuário deslogado com sucesso!");
      router.push('sign-in')
    } catch (error) {
      console.error("Erro ao deslogar", error);
    }
  };


  return (
    <div className="flex h-screen w-full">
      <SimuladosResults />
      {/* <Details /> */}
    </div>
  )
}

export default page
