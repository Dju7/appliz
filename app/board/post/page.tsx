import React from 'react'
import { db } from '@/lib/db'
import CardPost from '@/app/components/cardpost'
import AddPost from '@/app/components/addPost'
import Link from 'next/link'


async function getPosts() {
  const posts = await db.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: { username: true}
      }
    }
  })
  return posts
}

 async function Post() {
  
  const posts = await getPosts();
 
  
    return (
    <div className=' w-full h-screen bg-primary flex justify-end'>
      <section className=' w-[80%] h-full p-4 flex flex-col gap-4'>
      
         <div className='w-full h-20'>
            <h1 className='text-6xl mt-6'>POST-IT</h1>
         </div>
         
         <div className=' w-[99%] h-[75%] flex flex-col justify-center items-center gap-2 border-2 border-secondary bg-grayBlack/50 rounded-xl'> 
            <div className='w-[95%] h-[90%] grid grid-cols-5 p-4 gap-8 '>
          {
            (posts).map((post) => {
              return (
                <Link key={post.id} href={`http://localhost:3000/board/post/${post.id}`}>
                <CardPost
                key = {post.id}
                title = {post.title}
                author={post.author ? post.author.username : "Auteur inconnu"}
                content= {post.content}
                id={post.id}
                />
                </Link>
              )
            })
          }
            </div>
          </div>
          <div className=' w-[99%] h-[25%] flex flex-col justify-center items-center gap-2 border-4 border-secondary shadow-xl shadow-grayBlack rounded-xl'>
            <div className='flex justify-center items-center w-full h-[30%]'>
              <AddPost />
            </div>
          </div>
      </section>
    </div>
   )
}

export default Post
