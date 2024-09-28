import Image from 'next/image'
import React from 'react'
import Banner1 from '../../Images/homepage_-_coming_soon_2000x.webp'
import Banner2 from '../../Images/homepage_-_commute_-_luggage_2000x.webp'

function banner() {
  return (
    <div className='w-full flex flex-wrap'>
        <div className='relative w-full md:w-1/2'>
        <Image className='w-full bg-cover' src={Banner1}/>
        <div className='w-full absolute px-10 bottom-10 flex justify-between'>
            <a className='text-white text-3xl font-bold' href="">Comming soon</a>
            <a className='border border-white p-2 hover:bg-white duration-700 hover:text-black text-white flex justify-center items-center' href="">Signup for pre-access</a>
        </div>
        </div>
        <div className='relative w-full md:w-1/2'>
        <Image className='w-full bg-cover' src={Banner2}/>
        <div className='w-full absolute px-10 bottom-10 flex justify-between'>
            <a className='text-white text-3xl font-bold' href="">Luggage</a>
            <a className='border border-white p-2 hover:bg-white duration-700 hover:text-black text-white flex justify-center items-center' href="">Explore</a>
        </div>
        </div>
    </div>
  )
}

export default banner