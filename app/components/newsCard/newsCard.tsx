import React from 'react'
import Image from 'next/image'


interface NewsProps {
  img: string | null,
    title: string,
    source: string,
    description: string,
    url: string,
    author: string | null,
}

const NewsCard: React.FC<NewsProps> = ({ title, img, source, description, url, author }) => {
    return (
      <a href={url} target="_blank">
      <div className='h-[230px] 3xl:h-[330px] w-[400px] 3xl:w-[500px] flex text-secondary p-2 bg-primary hover:bg-grayBlack rounded-xl 3xl:gap-6'>
        <div className='h-[90%] w-[30%] flex flex-col m-2 overflow-hidden'>
          <h3 className='text-2xl mb-14'>{source}</h3> 
          {img && <Image alt='pictures of article' src={img} height={140} width={120} />}
        </div>
        <div className='h-full w-[90%] flex flex-col justify-between overflow-hidden'>
            <h3 className='text-md font-bold  '>{title}</h3>
            <p className=' text-sm w-[90%] '>{description}</p>
            <p className='text-sm text-right'>{author}</p>
        </div>
      </div>
      </a>
    );
  };
  
  export default NewsCard;