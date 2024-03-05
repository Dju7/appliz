import React from 'react'
import UserLoggedIn from './userLoggedIn'
import Nav from './nav'
import LoggedOut from './loggedOut'
import Image from 'next/image'

function SideBar() {
  return (
    <div className=' z-10 bg-grayBlack fixed h-full w-[20%] flex flex-col justify-center items-center '>
      <Image src="/fond4.png" alt="image de fond" height={500} width={400} className=' absolute top-[130px] 3xl:top-[300px] left-0 opacity-90' />
        <div className='z-20 h-[20%] w-full flex flex-col justify-center items-center'>
           <UserLoggedIn />
        </div>
        <div className='z-20 w-full h-[50%] flex flex-col justify-center items-center'>
            <Nav />

        </div>
        <div className=' z-20 h-[30%] w-full flex flex-col justify-center items-center gap-4'>
         <LoggedOut />
        </div>
      
    </div>
  )
}

export default SideBar
