import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <section className="w-[60%] h-[60%] bg-primary flex flex-col lg:flex-row justify-center items-center rounded-2xl overflow-hidden">
        <div className="h-[50%] lg:h-full w-full lg:w-[50%] relative overflow-hidden">
          <Image  src='/connect.jpg' alt='image de connection' fill object-fit="cover"/>
        </div>
        <div className="h-[50%] lg:h-full w-full lg:w-[50%] flex flex-col justify-center items-center">
        <h2 className="text-3xl">APPLIZ'AMI</h2>
        <form className="flex flex-col justify-center items-center gap-4 w-[80%] h-[80%]">
          <label>
           LOGIN
          </label>
          <input className="w-[80%]">
          </input>
          <label>
            PASSWORD
          </label>
          <input className="w-[80%]"></input>
          <button className="mt-10 h-12 w-36 border rounded-xl hover:bg-white hover:text-primary ">SE CONNECTER</button>
        </form>
        <Link href="/board">Board</Link>
        </div>
      </section>
      
    </main>
  );
}
