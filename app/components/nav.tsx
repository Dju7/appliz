import React from 'react'
import Link from 'next/link'
import { FaHome, FaUser, FaCheck } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { RiMovie2Fill } from "react-icons/ri";

export default function Nav() {
  return (
    <nav className='w-[90%] h-full flex flex-col justify-center items-center gap-8 '>
        <Link className='w-[40%] flex justify-between items-center ' href='/board'><FaHome className='text-3xl text-secondary' />Accueil</Link>
        <Link className='w-[40%] flex justify-between items-center '  href='/board/user'><FaUser className='text-3xl text-secondary' />Utilisateurs</Link>
        <Link className='w-[40%] flex justify-between items-center '  href='/board/todo'><FaCheck className='text-3xl text-secondary' /> Todo List</Link>
        <Link className='w-[40%] flex justify-between items-center '  href='/board/post'><MdPostAdd className='text-3xl text-secondary' />Post-it</Link>
        <Link className='w-[40%] flex justify-between items-center '  href='/board/movie'><RiMovie2Fill className='text-3xl text-secondary' /> Cinéma</Link> 
    </nav>
  )
}
