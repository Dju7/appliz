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
          <h1 className="mt-6 text-6xl text-secondary">{movieData.title}</h1>
          <div className="flex justify-between items-center h-[750px] w-full mt-6 overflow-hidden gap-6">  
          <Image src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="poster" height={500} width={500} className="mt-12" />
          <p className="text-2xl">{movieData.overview}</p>
          </div>
        </div>
    </section>
    );
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
};

export default Page;