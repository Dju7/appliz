
'use client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

function loggedOut() {
  return (
    <>
    <p 
    className='w-full h-14 bg-primary cursor-pointer text-center p-4 hover:bg-secondary hover:text-grayBlack'
    onClick={() => signOut()}
    >
      SE DECONNECTER
    </p>
   </>
  )
}

export default loggedOut
