'use client'

import React from 'react'
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Signup() {
  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
    username: '',
    
  })
  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Data', data);
    const response = await fetch('https://catzami-peach.vercel.app/api/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({data}),
    });

    if (response.ok) {
      alert("votre compte à été créer, vous êtes redirigé vers la page de connexion")
      router.push('/');
    } else {
      console.error('Registration failed');
    }
  };

    return (
        <main className="h-screen w-full flex justify-center items-center">
          <section className="w-[30%] h-[60%] bg-secondary flex flex-col lg:flex-row justify-center items-center rounded-full overflow-hidden">
            <div className="h-[50%] lg:h-full w-full lg:w-[70%] flex flex-col justify-center items-center mt-6">
            <h2 className="text-4xl font-bold">Create Account</h2>
            <form 
            className="flex flex-col justify-center items-center gap-4 w-full h-[80%] font-bold text-xl"
            onSubmit={createUser} method="POST"
            >
            <label className='mt-4'>
               Your E-mail
              </label>
              <input
              className="w-full text-grayBlack p-1 bg-cloud"
              type="email"
              id="email"
              name="email"
              onChange={(e) => { setData({ ...data, email: e.target.value }) }}
              />
              <label>
               Choose username
              </label>
              <input 
              className="w-full text-grayBlack p-1 bg-cloud"
              type="username"
              id="username"
              name="username"
              onChange={(e) => { setData({ ...data, username: e.target.value }) }}
              />
              
              <label>
                Choose password
              </label>
              <input 
              className="w-full text-primary p-1 bg-cloud"
              type="password"
              id="password"
              name="password"
              onChange={(e) => { setData({ ...data, password: e.target.value }) }}
              />
              <button type="submit" className="mt-6 h-12 w-36 bg-cloud text-grayBlack rounded-xl hover:text-secondary ">CREATE</button>
            </form>
            </div>
          </section>
          
        </main>
      );
}

export default Signup
