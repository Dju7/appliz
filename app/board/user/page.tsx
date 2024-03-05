import React from 'react'
import TabUser from '@/app/components/userTab';

interface UserData {
  id: string;
  username: string;
  email: string;
  posts:[]
}

async function USer() {
  

  let data = null;

  try {
    const response = await fetch('https://catzami-peach.vercel.app/api/user/getUsers', {cache: 'no-store'});
    if (response.ok) {
     data = await response.json();
    } else {
      console.error('Erreur lors de la requête');
    }
  } catch (error) {
    console.error('Une erreur s\'est produite :', error);
  }

  const TabOfUsers = data && data.length > 0
    ? data.map((user: UserData, index: number) => (
      <li className="list-none" key={index}><TabUser id={user.id} username={user.username} email={user.email} posts={user.posts}/></li>
    ))
    : null;

    return (
        <div className='w-full h-screen flex justify-end bg-primary'>
        <section className='w-[80%] h-full p-4 flex flex-col'>
      <div className='w-full h-20'>
        <h1 className='text-6xl mt-6'>USERS</h1>
      </div>
      <div className='w-full h-[90%] mt-10 flex flex-col gap-6'>

      <div className="flex bg-secondary h-12 w-[90%] p-4 rounded-xl text-grayBlack">
             <div className="h-full w-[5%]  flex justify-center items-center"> 
            <p className="border-r-1 border-gray-400 text-2xl">ID</p>
            </div>
            <div className="h-full w-[5%]  flex justify-center items-center p-2 ">
            <p>Avatar</p>
            </div>
            <div className="h-full w-[35%] border-r border-secondary ml-2 flex justify-center items-center"> 
            <p className="text-2xl">USERNAME</p>
            </div>
            <div className="h-full w-[35%] border-r border-secondary ml-2 flex justify-center items-center"> 
            <p className="text-2xl">EMAIL</p>
            </div>
            <div className="h-full w-[35%] border-r border-secondary ml-2 flex justify-center items-center"> 
            <p className="text-2xl">POSTS</p>
            </div>
        </div>

        <div className="flex flex-col gap-2">
        {TabOfUsers}
        </div>
      </div>
    </section>
        </div>
      )
}

export default USer
