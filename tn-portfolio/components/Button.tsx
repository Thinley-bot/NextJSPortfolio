import React from 'react'

interface param{
    title:string,
}

const Button = ({title}:param) => {
  return (
    <button className='h-[2rem] w-[6rem] bg-gradient-to-r from-[#8FBC8B] to-[#f9f7f7] to-90% rounded-xl text-sm shadow-lg shadow-lime-800 hover:scale-110'>{title}</button>
  )
}

export default Button
