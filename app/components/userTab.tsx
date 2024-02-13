import React from "react"
import Image from "next/image";

interface TabUserProps {
    id: string;
    username: string;
    email: string;
  }

export default function TabUser(props: TabUserProps) {
    return (
        <div className="flex bg-grayBlack h-16 w-[90%] p-2">
            <div className="h-full w-[5%]  border-r border-secondary">
            <Image  src='/default.jpg' alt='image utilisateur par defaut' height={50} width={50} object-fit="contain"/>
            </div>
            <div className="h-full w-[5%] ml-2 border-r border-secondary flex justify-center items-center"> 
            <p className="border-r-1 border-gray-400">ID: {props.id}</p>
            </div>
            <div className="h-full w-[35%] border-r border-secondary ml-2 flex justify-center items-center"> 
            <p >USERNAME: {props.username}</p>
            </div>
            <div className="h-full w-[35%] border-r border-secondary ml-2 flex justify-center items-center"> 
            <p>EMAIL: {props.email}</p>
            </div>
        </div>
    )
}