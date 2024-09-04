import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'
import KeyWest from '../assets/keywest.jpg'
import SelectCard from './SelectCard'

const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/*@ts-ignore */}
        <SelectCard image={BoraBora} text='Bora Bora'/>
        <SelectCard image={BoraBora}  text='Bora Bora'/>
        <SelectCard image={Maldives}  text='Maldives'/>
        <SelectCard image={Maldives2} text='Antigua'/>
        <SelectCard image={Maldives3} text='Jamaica'/>
        <SelectCard image={KeyWest} text='Bora Bora'/>
       
    </div>
  )
}

export default Select