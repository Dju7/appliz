import React from 'react'
import Link from 'next/link'
import { FaHome, FaUser, FaCheck, FaCalendarCheck } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";

export default function Nav() {
  return (
    <nav className='w-[90%] h-full flex flex-col justify-center items-center gap-8 '>
        <Link className='w-[50%] flex justify-between items-center group hover:text-secondary' href='/board'><FaHome className='text-3xl text-secondary' />HOME</Link>
        <Link className='w-[50%] flex justify-between items-center group hover:text-secondary '  href='/board/user'><FaUser className='text-3xl text-secondary' />USERS</Link>
        <Link className='w-[50%] flex justify-between items-center group hover:text-secondary '  href='/board/calendar'><FaCalendarCheck className='text-3xl text-secondary' /> CALENDAR</Link> 
        <Link className='w-[50%] flex justify-between items-center group hover:text-secondary '  href='/board/todo'><FaCheck className='text-3xl text-secondary' /> TODO LIST</Link>
        <Link className='w-[50%] flex justify-between items-center group hover:text-secondary '  href='/board/post'><MdPostAdd className='text-3xl text-secondary' />POST-IT</Link>
        <Link className='w-[50%] flex justify-between items-center group hover:text-secondary'  href='/board/movie'><RiMovie2Fill className='text-3xl text-secondary' /> CINEMA</Link> 
    </nav>
  )
}
