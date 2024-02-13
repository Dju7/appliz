import React from 'react'
import NewsCard from '../components/newsCard/newsCard'

interface NewsData {
  pagination: {
    limit: number;
    offset: number;
    count: number;
    total: number;
  };
  data: Array<{
    author: string | null;
    image: string | null;
    title: string;
    description: string;
    url: string;
    source: string;
    category: string;
    language: string;
    country: string;
    published_at: string;
  }>;
}


export default async function Board() {

  let NewsData: NewsData | null = null;
  try {
    const response = await fetch('http://api.mediastack.com/v1/news?access_key=17ffc6276a1943811729f130a5782b41&countries=fr&sources=lepoint&limit=6', { cache: 'no-store' });
     NewsData = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  return (
    <div className='w-full h-screen flex justify-end bg-primary'>
    <section className='w-[80%] h-full p-4 flex flex-col'>
      <div className='w-full h-20'>
        <h1 className='text-6xl mt-6'>HOME</h1>
      </div>
      <div className=' w-full h-[90%] mt-4 flex justify-center items-center gap-6 '>
        <div className='h-full w-[40%] flex flex-col justify-center items-center gap-4'>
          <div className='h-[50%] w-full bg-grayBlack flex justify-center items-center border border-secondary rounded-xl'>
          Contenu à venir
          </div>
          <div className='h-[50%] w-full bg-grayBlack flex justify-center items-center border border-secondary rounded-xl'>
           Contenu à venir
          </div>

        </div>
        <div className='h-full w-[60%] flex flex-col items-center overflow-scoll border border-secondary bg-grayBlack p-6 rounded-xl'>
          <h2 className='text-secondary text-3xl mb-4'>~ DAILY NEWS ~</h2>
          <article className='grid grid-cols-2 gap-4'>
        {Array.isArray(NewsData?.data)  ? (
           NewsData.data.map((news) => (
      
          <NewsCard 
            key={news.published_at}
            img={news.image}
            title={news.title}
            description={news.description}
            author={news.author} 
            source={news.source} 
            url={news.url}          
            />
          
            ))
            ) : (
              <p>Les données ne sont pas au format de tableau.</p>
            )}
          </article>
        </div>

      </div>
    </section>
    </div>
  )
}
