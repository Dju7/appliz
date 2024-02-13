import React from 'react'
import TabUser from '@/app/components/userTab';

interface UserData {
  id: string;
  username: string;
  email: string;
}

async function USer() {

  let data = null;

  try {
    const response = await fetch('http://localhost:3000/api/user/getUsers');
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
      <li className="list-none" key={index}><TabUser id={user.id} username={user.username} email={user.email}/></li>
    ))
    : null;

    return (
        <div className='w-full h-screen flex justify-end bg-primary'>
        <section className='w-[80%] h-full p-4 flex flex-col'>
      <div className='w-full h-20'>
        <h1 className='text-6xl mt-6'>USERS</h1>
      </div>
      <div className='w-full h-[90%] mt-10 flex flex-col gap-6'>
        <div className="flex flex-col gap-2">
        {TabOfUsers}
        </div>
      </div>
    </section>
        </div>
      )
}

export default USer
