import TodoElement1 from '@/app/components/todoElement1'
import TodoElement from '@/app/components/todoElment'
import React from 'react'

function Todo() {
    return (
        <div className='w-full h-screen bg-primary flex justify-end'>
      <section className='w-[80%] h-full p-4 flex flex-col'>
        <div className='w-full h-20'>
          <h1 className='text-6xl mt-6'>TODO LIST</h1>
        </div>
        <div className='ml-2 w-[97%] h-[90%] flex justify-center items-center gap-6 '>
          <TodoElement/>
          <TodoElement1/>
        </div>
      </section>
        </div>
      )
}

export default Todo
