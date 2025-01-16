'use client'
import Sidebar from '@/components/Sidebar'
import MobileSidebar from '@/components/MobileSidebar'
import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { getLoggedInUser } from '@/lib/auth'
import { useRouter } from 'next/navigation'

const Layout = ({ children }: { children: React.ReactNode }) => {
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
    <div className="flex">
      <Sidebar user={user} />
      <div className="md:hidden p-8">
        <MobileSidebar user={user} />
      </div>
      <main className="flex h-screen w-full font-inter">
        {children}
      </main>
    </div>
  )
}

export default Layout
