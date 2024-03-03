import React from 'react'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Image from 'next/image'

async function userLoggedIn() {
  const session = await getServerSession(authOptions)
  const placeholderImage = `https://api.dicebear.com/7.x/avataaars/svg?seed=${session?.user.email}`

  return (
    <div className=' w-[70%] h-full flex flex-col justify-center items-center gap-2'>
       <div className='h-[40%] w-[30%] border border-secondary rounded-full overflow-hidden p-1 bg-primary'>
        {session?.user.username ? (
         <Image  src={placeholderImage} alt='image utilisateur par defaut' height={100} width={100} object-fit="contain"/> 
        ) : (
          <Image  src='/default.jpg' alt='image utilisateur par defaut' height={100} width={100} object-fit="contain"/>
        )} 
       </div>
    <p>{session?.user.username ? session.user.username : "Visitor"}</p>
    </div>
  )
}

export default userLoggedIn
