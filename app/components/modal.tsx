'use client'
import React, { ChangeEvent, FormEvent, ReactNode, useState } from 'react'

interface ModalProps {
    onClose: () => void;
  }



function Modal({ onClose }: ModalProps) {
    const [title, setTitle] = useState ('')
    const [content, setContent] = useState('')

    const handleCloseClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onClose();
    };

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
      location.reload()
        
      } catch(error) {
          console.error(error)
      }
      }

  return (
    <div className=' absolute top-34 right-72 w-[950px] h-[650px] flex flex-col justify-center items-center rounded-xl bg-primary border border-secondary'>    
        <div className=' w-[95%] flex justify-end items-center' onClick={handleCloseClick}>
            <p className=' w-10 flex justify-center text-2xl text-primary bg-secondary p-1 cursor-pointer rounded-lg shadow-md shadow-grayBlack hover:shadow-secondary hover:text-cloud'>X</p>
        </div>
        <form method='post' onSubmit={handleSubmit} className='flex flex-col items-center text-white'>
        <label className=' mb-2 text-xl text-secondary'>TITLE</label>
        <input 
        type="text" 
        id="title" 
        value={title} 
        onChange={handleTitleChange} 
        className='mb-6 w-72 h-10 rounded-xl p-2 text-primary' 
        placeholder='Enter a title'
        />
        <label className='mb-2 text-xl text-secondary'>CONTENT</label>
        <textarea 
        id="content"
        value={content}
        onChange={handleContentChange}
        className='mb-6 w-[700px] rounded-xl h-[350px] p-2  text-primary ' 
        placeholder='Write your message here ...'/>
        <button type="submit" className='h-10 border border-secondary w-72 font-bold rounded-xl p-2 text-secondary hover:text-primary hover:bg-secondary '>ADD</button>
        </form>
    </div>
  )
}

export default Modal
