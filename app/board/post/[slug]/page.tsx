import DeleteButton from "@/app/components/deletePost"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import Image from "next/image"
import { FC } from "react"

interface pageProps {
    params: { slug: string }
}

async function GET(request: any, { params }: any) {
    const postId = Number(params.slug); // Convertissez le slug en nombre
    const post = await db.post.findUnique({
        where: {
            id: postId
        },
        include: {
            author: {
              select: { username: true}
            }
          }
    });
    
    return NextResponse.json(post)
}

const page: FC<pageProps> = async({ params }) => {
    let data = null
    try {
        const reponse = await GET(null, { params });
        data = await reponse.json()

    } catch (error) {
        console.error('Une erreur s\'est produite :', error);
    }
    return (
        <div className="h-screen w-full flex justify-end ">
            <section className='relative w-[80%] h-full p-4 flex flex-col gap-10'>
            <Image src="/postit.png" alt="image de fond" height={600} width={600} className=' absolute bottom-[13px] right-0 opacity-50' />
              <div className=' z-10 w-full h-20 flex justify-between items-center'>
                <h1 className='text-6xl mt-6 text-secondary'>{data.title}</h1>
                <DeleteButton PostId={params.slug} />
               </div>
               <article className="h-[85%] w-[95%] flex justify-center items-center ml-10">
                <div className=" h-[80%] w-[90%] flex flex-col justify-between ">
                <p className="text-2xl">{data.content}</p>

                <p className="text-right text-2xl text-secondary">Message écrit par : <span className="font-bold">{data.author.username}</span></p>
                </div>
                
               </article>
              
            </section>
            
        </div>
    )
}

export default page