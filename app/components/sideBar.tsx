import React from 'react'
import UserLoggedIn from './userLoggedIn'
import Nav from './nav'
import LoggedOut from './loggedOut'

function SideBar() {
  return (
    <div className=' bg-grayBlack fixed h-full w-[20%] flex flex-col justify-center items-center'>
        <div className=' h-[20%] w-full flex flex-col justify-center items-center'>
           <UserLoggedIn />
        </div>
        <div className=' w-full h-[50%] flex flex-col justify-center items-center'>
            <Nav />

        </div>
        <div className=' h-[30%] w-full flex flex-col justify-center items-center gap-4'>
         <LoggedOut />
        </div>
      
    </div>
  )
}

export default SideBar
