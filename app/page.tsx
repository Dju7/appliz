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
      <Image src="/cat.png" alt="image de chat" height={500} width={500} />
      <section className=" w-[30%] h-[60%] bg-cloud flex flex-col lg:flex-row justify-center items-center rounded-full overflow-hidden">  
        <div className="h-[50%] lg:h-full w-full lg:w-[70%] flex flex-col justify-center items-center">
        <h2 className="text-3xl text-grayBlack font-bold mt-4">CONNECTION</h2>
        {error && (
                <p className="mt-4 text-alert text-center rounded-xl">{error}</p>
              )}
        <form 
        className="flex flex-col justify-center items-center gap-4 w-full h-[70%] "
        onSubmit={loginUser} method="POST"
        >
          <label className="text-grayBlack font-bold">
           LOGIN
          </label>
          <input 
          id="username" 
          name="username" type="username"  
          placeholder="john Doe"
          onChange={(e) => { setData({ ...data, username: e.target.value }) }} 
          className="w-full p-1 text-grayBlack  bg-secondary placeholder:text-grayBlack"
          />
         
          <label className="text-grayBlack font-bold">
            PASSWORD
          </label>
          <input 
          className="w-full p-1 text-grayBlack  bg-secondary placeholder:text-grayBlack"
          id="password" 
          name="password" 
          type="password" 
          placeholder="password" 
          onChange={(e) => { setData({ ...data, password: e.target.value }) }}
          />
          <button type="submit" className="mt-8 h-12 w-36 text-primary font-bold rounded-xl bg-secondary hover:bg-grayBlack hover:text-cloud ">SE CONNECTER</button>
        </form>
        <Link className="mb-2 text-grayBlack text-2xl underline" href="/signup">SIGN UP</Link>
        <Link href="/board" className="text-grayBlack underline">entrée visiteurs</Link>
        </div>
        
      </section>
      
      
    </main>
  );
}
