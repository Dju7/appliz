import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'
import { TfiThemifyFaviconAlt } from "react-icons/tfi";




async function Welcome() {
    const session = await getServerSession(authOptions)
    const date = new Date()
    const day = date.getDate()
    const month= date.getMonth() + 1
    const year = date.getFullYear()
    const totalDate = `0${day}` + "-" +  `0${month}` + "-" + `${year}`
  return (
    <div className='flex flex-col h-full w-full items-center mt-10 gap-4 text-secondary'>
        
    <p className='text-2xl lg:text-4xl 3xl:text-5xl text-scondary border p-2 bg-primary '> {totalDate}</p>
      <h3 className='text-xl xl:text-4xl 3xl:text-5xl text- mt-6 font-welcome animate-pulse'>~ B I E N V E N U E ~</h3>
      <div className='mt-6 flex justify-center items-center gap-10'>
      <p className='text-2xl lg:text-4xl 3xl:text-5xl mt-16'>{session?.user.username || "Visitor"}</p>
      <TfiThemifyFaviconAlt className=' text-6xl lg:text-9xl 3xl:text-[20rem]' />
      </div>
      
    </div>
  )
}

export default Welcome
