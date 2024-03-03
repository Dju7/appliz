import React from "react"
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";


interface TabUserProps {
    id: string;
    username: string;
    email: string;
    posts:[]
  }

export default async function TabUser(props: TabUserProps) {
    const session = await getServerSession(authOptions)
    const placeholderImage = `https://api.dicebear.com/7.x/avataaars/svg?seed=${session?.user.email}`

    return (
        <div className="flex bg-grayBlack h-16 w-[90%] p-4 rounded-xl">
             <div className="h-full w-[5%]  flex justify-center items-center"> 
            <p className="border-r-1 border-gray-400 text-2xl">{props.id}</p>
            </div>
            <div className="h-full w-[5%]  flex justify-center items-center p-2 ">
            <Image  src={placeholderImage} alt='image utilisateur par defaut' height={80} width={80} object-fit="contain"/> 
            </div>
            <div className="h-full w-[35%] border-r border-secondary ml-2 flex justify-center items-center"> 
            <p className="text-2xl">{props.username}</p>
            </div>
            <div className="h-full w-[35%] border-r border-secondary ml-2 flex justify-center items-center"> 
            <p className="text-2xl">{props.email}</p>
            </div>
            <div className="h-full w-[35%]  ml-2 flex justify-center items-center"> 
            <p className="text-2xl">{props.posts?.length}</p>
            </div>
        </div>
    )
}