'use client'
import React from 'react'

import {useState, useEffect} from 'react'

interface TodoItem {
  id: number;
  value: string;
}

function TodoElement() {
    const [newItem, setNewItem] = useState<string>("");
    const [items, setItems] = useState<TodoItem[]>([]);
  
    useEffect(() => {
        const storedTask: TodoItem[] = Object.keys(localStorage)
          .filter((key) => key.startsWith('task_'))
          .map((key) => ({ id: parseInt(key.replace('task_', '')), value: localStorage.getItem(key) as string }));
        setItems(storedTask);
      }, []);
  
    const addItem = () => {
      if (!newItem) {
        alert("You have to add an item");
        return;
      }
      const newTask: TodoItem = {
        id: Math.floor(Math.random() * 100),
        value: newItem,
      };
      setItems((prevItems) => [...prevItems, newTask]); 
      localStorage.setItem(`task_${newTask.id}`, newTask.value);
      setNewItem(""); 
    }
  
    const deleteItem = (id: number) => {
      const newArray = items.filter((item) => item.id !== id);
      setItems(newArray);
      localStorage.removeItem(`task_${id}`);
    };
  
  
    return (
      <section className='w-[50%] h-[800px] flex justify-center items-center mt-4'>
        <div className='w-full h-[95%] bg-grayBlack shadow-2xl rounded-xl border border-secondary'>
          <div className='w-full h-36 flex flex-col justify-center items-center gap-2 mt-4'>
            <h2 className='text-3xl'>LIST ONE</h2>
            <input 
            type="text" 
            placeholder="Enter a task" 
            className='w-[400px] text-grayBlack h-10 p-2 mt-2 rounded-xl'
            value={newItem || ''}
            onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit" 
            className='mt-2 w-44 bg-secondary text-grayBlack  p-2 rounded-xl'
            onClick={() => addItem()}
            >Add Task</button>
          </div>
          <div className='flex flex-col justify-center items-center h-auto w-full '>
          <ul className="mt-6 text-white">
            {items.map((item) => (
              <li key={item.id} className=' w-[650px] p-2 flex justify-between items-center bg-primary text-2xl mt-4 text-secondary rounded-xl'>
                {item.value}{" "}
                <button
                  className="ml-5 cursor-pointer bg-secondary text-2xl text-grayBlack px-2 rounded-xl"
                  onClick={() => deleteItem(item.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          </div>
  
        </div>
        
      </section>
    )
  
  
}

export default TodoElement
