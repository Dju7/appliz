import Link from 'next/link'
import React from 'react'

function loggedOut() {
  return (
    <>
   <Link href="/board/tchat"> TCHATBOX</Link>
    <p className='w-full h-14 bg-primary text-center p-4'>SE DECONNECTER</p>
   </>
  )
}

export default loggedOut
