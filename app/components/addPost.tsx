'use client'
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";


export default function AddPost() {
   const router = useRouter()
    const [title, setTitle] = useState ('')
    const [content, setContent] = useState('')
  
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value)
    }
  
    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value)
    }
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log('Valeurs des champs avant envoi :', { title, content });
  
    try {
      const response = await fetch("https://catzami-peach.vercel.app/api/posts", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, content })
      })

      if (!response.ok) {
        throw new Error(`Erreur lors de la requête : ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Réponse du serveur :', data);

    setTitle('');
    setContent('');
    router.refresh()
      
    } catch(error) {
        console.error(error)
    }
    }

  return (
    <form method='post' onSubmit={handleSubmit} className=' h-full w-full flex items-center text-white '>
        <div className=" h-full flex w-[25%] flex-col justify-center items-center">
        
        <input 
        type="text" 
        id="title" 
        value={title} 
        onChange={handleTitleChange} 
        className=' w-[80%] h-10 rounded-xl p-2  text-secondary bg-grayBlack  placeholder:font-bold placeholder:text-center placeholder:text-secondary' 
        placeholder='CHOOSE TITLE...'
        />
        </div>
        <div className="flex w-[65%] flex-col justify-center items-center ">
        
        <textarea 
        id="content"
        value={content}
        onChange={handleContentChange}
        className='mb-6 w-[90%] rounded-xl h-[150px] p-2 text-secondary bg-grayBlack mt-4 placeholder:font-bold placeholder:text-center placeholder:text-secondary' 
        placeholder='Write your note here...'/>
        </div>
        <div className="w-[10%] h-full flex justify-center items-center">
        <button type="submit" className='h-20 w-24 bg-secondary font-bold rounded-xl text-primary p-2 shadow-lg hover:shadow-yell hover:text-yell '>FEED</button>
        </div>
  </form>
  )
}