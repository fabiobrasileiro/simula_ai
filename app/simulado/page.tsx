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
    const fetchUser = async () => {
      const loggedInUser = await getLoggedInUser()
      if (!loggedInUser) {
        router.push('/sign-in')
      } else {
        setUser(loggedInUser)
      }
    }

    fetchUser()
  }, [router]) 

  if (!user) {
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
