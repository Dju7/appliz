'use client'
import React from 'react'
import Image from 'next/image';
import {useState, useEffect} from 'react'


interface TodoItem {
  id: number;
  value: string;
}

function TodoElement1() {
    const [newItem, setNewItem] = useState<string>("");
    const [items, setItems] = useState<TodoItem[]>([]);
  
    useEffect(() => {
        const storedTask: TodoItem[] = Object.keys(localStorage)
          .filter((key) => key.startsWith('task1_'))
          .map((key) => ({ id: parseInt(key.replace('task1_', '')), value: localStorage.getItem(key) as string }));
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
      localStorage.setItem(`task1_${newTask.id}`, newTask.value);
      setNewItem(""); 
    }
  
    const deleteItem = (id: number) => {
      const newArray = items.filter((item) => item.id !== id);
      setItems(newArray);
      localStorage.removeItem(`task1_${id}`);
    };
  
  
    return (
      <section className='w-[50%] h-full flex justify-center items-center mt-4'>
       
        <div className=' w-full h-[95%] bg-grayBlack shadow-2xl rounded-xl border border-secondary'>
        
          <div className=' w-full h-36 flex flex-col justify-center items-center gap-2 mt-4'>
          <h2 className='text-3xl'>LIST TWO</h2>
            <input 
            type="text" 
            placeholder="Enter a task" 
            className='w-[70%] text-grayBlack h-10 p-2 mt-2 rounded-xl'
            value={newItem || ''}
            onChange={(e) => setNewItem(e.target.value)}
            />
            <button type="submit" 
            className='mt-2 w-44 bg-secondary text-grayBlack  p-2 rounded-xl'
            onClick={() => addItem()}
            >Add Task</button>
          </div>
          <div className=' flex flex-col justify-center items-center h-auto w-full '>
          <ul className="mt-6 text-white w-full flex justify-center items-center">
            {items.map((item) => (
              <li key={item.id} className=' w-[90%] p-2 flex justify-between bg-primary text-xl text-secondary shadow-xl mt-4 rounded-xl'>
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

export default TodoElement1