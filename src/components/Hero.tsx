import React from 'react'
import beachVid from '../assets/beachVid.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    
    <div className='w-full h-screen relative '>
        <video src={beachVid} className='w-full h-full object-cover' autoPlay loop muted/>
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/3'></div>     
       <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white' >
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations Worldwide</h2>
        <form className='flex justify-between items-center  mx-auto max-w-[700px]  w-full border
        p-1 rounded-md text-black bg-gray-100/90'>
           <div >
            <input placeholder='Search Destinations' className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none'/>
           </div>
           <div>
            <button><AiOutlineSearch className='icon' style={{color:'white'}}/></button>
           </div>
        </form>
       </div>
    </div>
  )
}

export default Hero