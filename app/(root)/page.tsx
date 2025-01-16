
'use client'
import Sidebar from '@/components/Sidebar'
import { getLoggedInUser, logoutUser } from '@/lib/auth';
import { User } from 'firebase/auth';
import React, { useState } from 'react';
import {useRouter} from 'next/navigation';
import SimuladosResults from '@/components/SimuladosResults';


const page =  () => {
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
   <SimuladosResults />
  )
}

export default page
