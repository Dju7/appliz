
'use client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

function loggedOut() {
  return (
    <>
   <Link className='hover:text-secondary hover:font-bold' href="/board/tchat"> TCHATBOX</Link>
    <p 
    className='w-full h-14 bg-primary text-center p-4 hover:bg-secondary hover:text-grayBlack'
    onClick={() => signOut()}
    >
      SE DECONNECTER
    </p>
   </>
  )
}

export default loggedOut
