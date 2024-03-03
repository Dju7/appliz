import Image from "next/image";
import { Key } from "react";
import Link from "next/link"


export default async function UpComingMovies() {

  let data = [];
 

  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=3d4bb99f3e9d96edb18d9eff6c7c7b79', { cache: 'no-store' });
     data = await response.json();
     const movies = data.results


   return (
    <main className=" h-screen w-full flex  flex-col bg-grayBlack">
     <section className="w-full h-full grid grid-cols-4 xl:grid-cols-5 py-4 gap-2 px-4">
      {movies.map((movie: { id: Key | null | undefined; poster_path: any; title: string; })=> (
        
        <Link key={movie.id} href={`https://catzami.vercel.app/board/movie/${movie.id}`}>
        <Image key={movie.id}
         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
         alt={movie.title}
         width={500}
         height={750}
       />
       </Link>
      ))}
      
    </section>
    
    </main>
   );
  } catch (error) {
  console.error('Une erreur s\'est produite :', error);
  return <p>Erreur lors du chargement des données</p>;
  }
}