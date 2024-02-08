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
    const response = await fetch('../api/user', {
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
          <section className="w-[60%] h-[60%] bg-primary flex flex-col lg:flex-row justify-center items-center rounded-2xl overflow-hidden">
            <div className="h-[50%] lg:h-full w-full lg:w-[50%] relative overflow-hidden">
              <Image src='/signup.jpg' alt='image de connection' fill object-fit="cover"/>
            </div>
            <div className="h-[50%] lg:h-full w-full lg:w-[50%] flex flex-col justify-center items-center">
            <h2 className="text-3xl">Create Account</h2>
            <form 
            className="flex flex-col justify-center items-center gap-4 w-[80%] h-[80%]"
            onSubmit={createUser} method="POST"
            >
            <label>
               Your E-mail
              </label>
              <input
              className="w-[80%] text-primary p-1"
              type="email"
              id="email"
              name="email"
              onChange={(e) => { setData({ ...data, email: e.target.value }) }}
              />
              <label>
               Choose username
              </label>
              <input 
              className="w-[80%] text-primary p-1"
              type="username"
              id="username"
              name="username"
              onChange={(e) => { setData({ ...data, username: e.target.value }) }}
              />
              
              <label>
                Choose password
              </label>
              <input 
              className="w-[80%] text-primary p-1"
              type="password"
              id="password"
              name="password"
              onChange={(e) => { setData({ ...data, password: e.target.value }) }}
              />
              <button type="submit" className="mt-10 h-12 w-36 border rounded-xl hover:bg-white hover:text-primary ">SE CONNECTER</button>
            </form>
            </div>
          </section>
          
        </main>
      );
}

export default Signup
