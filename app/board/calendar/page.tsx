'use client'
import React from 'react'
import CalendarComponent from '@/app/components/calendar'

export default function Calendar() {
    return (
        <div className='w-full h-screen flex justify-end bg-primary'>
       <section className='w-[80%] h-full p-4 flex flex-col'>
      <div className='w-full h-20'>
        <h1 className='text-6xl mt-6'>CALENDAR</h1>
      </div >
      <div className='w-[97%] h-[83%] mt-10 bg-grayBlack text-cloud ' >
       <CalendarComponent />

      </div>
    </section>
        </div>
      )
}
