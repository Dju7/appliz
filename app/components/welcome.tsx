import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'
import Image from 'next/image'





async function Welcome() {
    const session = await getServerSession(authOptions)
    const date = new Date()
    const day = date.getDate()
    const month= date.getMonth() + 1
    const year = date.getFullYear()
    const totalDate = `0${day}` + "-" +  `0${month}` + "-" + `${year}`
  return (
    <div className='flex flex-col h-full w-full items-center mt-10 gap-4 text-secondary'>
        
    <p className='text-2xl lg:text-4xl 3xl:text-5xl text-scondary border p-2 bg-primary mt-4 '> {totalDate}</p>
      <h3 className='text-xl xl:text-4xl 3xl:text-5xl text- mt-6 font-welcome animate-pulse'>~ B I E N V E N U E ~</h3>
      <div className='flex 3xl:flex-col 3xl:mt-8 justify-center items-center gap-6 w-full p-0'>
      <p className='text-2xl lg:text-4xl 3xl:text-5xl'>{session?.user.username || "Visitor"}</p>
      <Image src='/cats.png' alt='chat' height={200} width={200} />
      </div>
      
    </div>
  )
}

export default Welcome
