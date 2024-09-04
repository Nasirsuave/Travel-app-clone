import React from 'react'
//@ts-ignore
const SelectCard = ({image,text}) => {
  return (
    <div className='relative'>
            <img src={image} alt='/' className='object-cover w-full h-full'/>
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>{text}</p>
            </div>
        </div>
       
  )
}

export default SelectCard