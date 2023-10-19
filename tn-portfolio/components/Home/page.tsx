import React from 'react'
import {names} from './data'


const Homes = () => {
  return (
    <div className='h-screen w-full bg-red-200 flex flex-row items-center'>
      <div className='flex flex-col'>
      <div className='text-[28px]'>
        <span>HI, THERE! 👋 I'M</span>
      </div>
      <div className='text-[48px] flex'>
      {names.map((name:string) => (
          <span key={name} className='text-[48px]'>{name}</span>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Homes