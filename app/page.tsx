'use client'
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {
  const router = useRouter();
  const [data, setData] = useState ({
    username: '',
    password:''
  })

  const [error, setError] = useState('');

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(data)
    const result = await signIn('credentials', {
      ...data,
      redirect: false,
    });
  
    if (result?.ok) { 
      alert("authentification réussi, vous allez être redirigé vers le Board dans quelques instants")
      router.push('/board');
    } else {
      setError("L'utilisateur n'existe pas. Veuillez vérifier vos informations d'identification.");
    }
  };

  return (
    <main className="h-screen w-full flex justify-center items-center">
      <section className="w-[60%] h-[60%] bg-primary flex flex-col lg:flex-row justify-center items-center rounded-2xl overflow-hidden shadow-lg shadow-secondary">
        <div className="h-[50%] lg:h-full w-full lg:w-[50%] relative overflow-hidden ">
          <Image  src='/connect.jpg' alt='image de connection' fill object-fit="cover"/>
        </div>
        <div className="h-[50%] lg:h-full w-full lg:w-[50%] flex flex-col justify-center items-center text-secondary">
        <h2 className="text-3xl">APPLIZ'AMI</h2>
        {error && (
                <p className="text-alert text-center text-white rounded-xl">{error}</p>
              )}
        <form 
        className="flex flex-col justify-center items-center gap-4 w-[80%] h-[80%] "
        onSubmit={loginUser} method="POST"
        >
          <label>
           LOGIN
          </label>
          <input 
          id="username" 
          name="username" type="username"  
          placeholder="john Doe"
          onChange={(e) => { setData({ ...data, username: e.target.value }) }} 
          className="w-[80%] p-1 text-cloud font-bold bg-secondary"
          />
         
          <label>
            PASSWORD
          </label>
          <input 
          className="w-[80%] p-1 text-cloud font-bold bg-secondary"
          id="password" 
          name="password" 
          type="password" 
          placeholder="password" 
          onChange={(e) => { setData({ ...data, password: e.target.value }) }}
          />
          <button type="submit" className="mt-10 h-12 w-36 border rounded-xl hover:bg-secondary hover:text-primary ">SE CONNECTER</button>
        </form>
        <Link className="mb-4" href="/signup">S'inscrire</Link>
        <Link href="/board">Board</Link>
        </div>
      </section>
      
    </main>
  );
}
