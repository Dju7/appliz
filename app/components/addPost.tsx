'use client'
import { ChangeEvent, FormEvent, useState } from "react";


export default function AddPost() {
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
      const response = await fetch("http://localhost:3000/api/posts", {
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
    window.location.reload();
      
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
        className=' w-72 h-8 rounded-xl p-2 border border-cloud bg-primary text-secondary placeholder:font-bold placeholder:text-center placeholder:text-secondary' 
        placeholder='TITLE'
        />
        </div>
        <div className="flex w-[65%] flex-col justify-center items-center ">
        
        <textarea 
        id="content"
        value={content}
        onChange={handleContentChange}
        className='mb-6 w-[90%] rounded-xl h-[150px] border border-cloud p-2 text-secondary bg-primary mt-4 placeholder:font-bold placeholder:text-center placeholder:text-secondary' 
        placeholder='Write your note here...'/>
        </div>
        <div className="w-[10%] h-full flex justify-center items-center">
        <button type="submit" className='h-20 w-24 bg-secondary font-bold rounded-xl text-primary p-2 shadow-lg hover:shadow-cloud hover:text-cloud '>FEED</button>
        </div>
  </form>
  )
}