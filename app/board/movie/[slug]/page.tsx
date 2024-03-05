import Image from "next/image";
import { FC } from "react";

interface PageProps {
  params: { slug: string };
}

const Page: FC<PageProps> = async ({ params }) => {
  try {
    const movieDetail = await fetch(
      `https://api.themoviedb.org/3/movie/${params.slug}?api_key=3d4bb99f3e9d96edb18d9eff6c7c7b79`
    );

    if (!movieDetail.ok) {
      throw new Error("Failed to fetch movie data");
    }

    const movieData = await movieDetail.json();

    return (
    <section className=" w-full h-screen bg-primary flex justify-end">
        <div className="w-[80%] h-full p-4 flex flex-col">
          <h1 className="mt-6 text-6xl 3xl:text-8xl text-secondary">{movieData.title}</h1>
          <div className="flex justify-between items-center h-[90%] w-full mt-6 overflow-hidden gap-6">  
          <Image src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="poster" height={500} width={600} className="mt-12 3xl:mt-0" />
           <div className="w-[70%] flex flex-col gap-10">
             <p className="text-2xl 3xl:text-4xl flex flex-col gap-4"> <span  className="text-3xl 3xl:text-5xl underline">Date de sortie:</span> {movieData.genres[0].name}, {movieData.genres[1].name}</p>
             <p className="text-2xl 3xl:text-4xl flex flex-col gap-4"> <span  className="text-3xl 3xl:text-5xl underline">Genre:</span> {movieData.release_date}</p>
             <p className="  text-2xl 3xl:text-4xl flex flex-col gap-4"><span className="text-3xl 3xl:text-5xl underline">Synopsis:</span>{movieData.overview}</p>
            </div>
          </div>
        </div>
    </section>
    );
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
};

export default Page;