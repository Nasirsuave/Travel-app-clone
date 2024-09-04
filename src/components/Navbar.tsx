import React,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube} from 'react-icons/fa'

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const [logo,setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
  return (
    <div className='flex w-full justify-between items-center  h-20 px-4 absolute z-10 text-white'>
        <div>
           <h1 >BEACHES</h1>
        </div>
        {/*if you're on medium size or greater show it else do not show it */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Views</li>
            <li>Books</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch size={20} className='mr-2'/>
            <BsPerson size={20}/>
        </div>
        {/*Hamburger */}
        {/*if you're on medium size or greater do not show it else show it */}
        <div className=' md:hidden z-10' onClick={handleNav}>
            {nav? <AiOutlineClose className='text-black'/> : <HiOutlineMenuAlt4 size={20}/>}
            
        </div>
        {/*Mobile menu dropdown */}
        <div  className={nav? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute  left-[-100%]'}>
        <ul>
        <h1 className='border-b'>BEACHES</h1>
            <li className='border-b'>Home</li>
            <li className='border-b'>Destination</li>
            <li className='border-b'>Travel</li>
            <li className='border-b'>Views</li>
            <li className='border-b'>Books</li>
            <div className='flex flex-col '>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex  justify-between my-6'>
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaYoutube className='icon'/>
                <FaPinterest className='icon'/>
                <FaInstagram className='icon'/>
            </div>
        </ul>
        </div>
    </div>
  )
}

export default Navbar