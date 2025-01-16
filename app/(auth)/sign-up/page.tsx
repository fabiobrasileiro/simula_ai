import AuthForm from '@/components/AuthForm'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <AuthForm type="sign-up" />
    </div>
  )
}

export default page
