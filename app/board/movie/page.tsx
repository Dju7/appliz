import Search from '@/app/components/searchMovie'
import UpComingMovies from '@/app/components/upComingMovies'
import React from 'react'

function Movie() {
    return (
    <div className='w-full h-screen bg-primary flex justify-end'>
        <section className='w-[80%] h-full p-4 flex flex-col gap-6'>
          <div className='w-full h-20'>
            <h1 className='text-6xl mt-6'>CINEMA</h1>
          </div>
          <div className='w-full h-[770px]  3xl:h-[1300px] flex gap-4'>
             <div className='w-[40%] min-h-full  bg-grayBlack rounded-xl overflow-auto border'>
              <Search />
             </div>
             <div className='w-[60%]  min-h-full bg-grayBlack rounded-xl overflow-auto border'>
                <h3 className='text-3xl text-secondary mt-4 mb-4 text-center'>UPCOMING MOVIES</h3>
              <UpComingMovies />
             </div>
          </div>
       </section>
    </div>
      )
}

export default Movie
