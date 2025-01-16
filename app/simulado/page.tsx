'use client'
import Navbar from '@/components/Navbar'
import Simulado from '@/components/Simulado'
import { getLoggedInUser } from '@/lib/auth'
import { User } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [user, setUser] = useState<User | null>(null)

  const router = useRouter()

  useEffect(() => {
    // Função assíncrona dentro do useEffect para pegar o usuário logado
    const fetchUser = async () => {
      const loggedInUser = await getLoggedInUser()
      if (!loggedInUser) {
        router.push('/sign-in')
      } else {
        setUser(loggedInUser)
      }
    }

    fetchUser()
  }, [router]) // Esse efeito só será executado quando o componente for montado

  if (!user) {
    // Opcional: você pode exibir um loading até que o estado 'user' seja definido
    return <div></div>
  }

  return (
    <div className='flex flex-col gap-16'>
      <Navbar />
      <div className="flex justify-center items-center">
        <Simulado />
      </div>

    </div>
  )
}

export default page
