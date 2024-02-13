import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'

async function userLoggedIn() {
  const session = await getServerSession(authOptions)

  return (
    <div className=' w-[70%] h-full flex flex-col justify-center items-center gap-2'>
       <div className='h-[40%] w-[30%] border rounded-full overflow-hidden'>
         <Image  src='/default.jpg' alt='image utilisateur par defaut' height={100} width={100} object-fit="contain"/>
       </div>
    <p>{session?.user.username ? session.user.username : "Nobody"}</p>
    </div>
  )
}

export default userLoggedIn
