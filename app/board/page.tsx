import React from 'react'
import NewsCard from '../components/newsCard/newsCard'
import Welcome from '../components/welcome';


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
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.MEDIA_KEY}&countries=fr&sources=lepoint&limit=6`, { next: { revalidate: 3600000 } });
     NewsData = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  return (
    <div className=' w-full h-screen flex justify-end bg-primary'> 
    <section className=' z-10 w-[80%] h-full p-4 flex flex-col'>
      <div className='w-full h-20'>
        <h1 className='text-6xl mt-6'>HOME</h1>
      </div>
      <div className=' w-full h-[90%] mt-4 flex justify-center items-center gap-6 '>
        <div className='h-full w-[40%] flex flex-col justify-center items-center gap-4'>
          <div className='h-[50%] w-full bg-grayBlack/70 flex justify-center items-center border border-secondary rounded-xl text-welcome'>
          <Welcome />
          </div>
          <div className='h-[50%] w-full bg-grayBlack flex justify-center items-center border border-secondary rounded-xl p-4'>

          <iframe src="https://www.meteoblue.com/fr/meteo/widget/daily/paris_france_2988507?geoloc=fixed&days=4&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&winddirection=1&uv=0&humidity=0&precipitation=0&precipitationprobability=0&spot=0&pressure=0&layout=dark" 
           sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" 
           style={{
            width: '95%', 
            height: '95%', 
            border: 'none',
            }}>
          </iframe>

        </div>
        </div>
        <div className='h-[800px] w-[60%] flex flex-col items-center overflow-scoll border border-secondary bg-grayBlack/70 p-4 rounded-xl'>
          <h2 className='text-secondary text-3xl mb-2'>~ DAILY NEWS ~</h2>
          <article className=' h-auto grid grid-cols-1 xl:grid-cols-2 gap-4 overflow-auto'>
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
