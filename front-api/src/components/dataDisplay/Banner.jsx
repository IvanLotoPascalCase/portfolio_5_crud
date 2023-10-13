import {useState} from 'react'
import c5 from "../../assets/cards/c5.png";

const Banner = () => {
  return (
    <div className='max-w-[1750px] h-[510px] w-full m-auto py-16 px-4 relative flex items-center justify-center'>
        <div style={{backgroundImage:`url(${c5})` }} className='w-full h-full bg-center bg-cover flex items-center justify-center'></div>

    </div>
  )
}

export default Banner