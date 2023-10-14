import React from 'react';
import cBanner from "../../assets/cards/c-banner.jpg";
import birdi from '../../assets/logo/birdi.svg'

import { AiOutlineArrowDown } from 'react-icons/ai';

const Banner = () => {
  return (
    <div className='max-w-[310.1vh] h-[82vh] w-full relative'>
      <div style={{ backgroundImage: `url(${cBanner})` }} className='w-full h-full bg-center bg-cover flex items-end justify-center'>
        <div className='flex p-4'>
          <div className='absolute top-0 right-0 m-12'>
            <img src={birdi} alt="" className='w-32' />
          </div>
          <button className='m-20 bg-orange-600 transitions-colors 
          duration-300 ease-in-out text-stone-100 text-xl px-4 py-2 
          hover:bg-orange-500 min-w-[30vh] min-h-[6vh] text-center'>
            Baja para descubrir más...
            <AiOutlineArrowDown  className='text-2xl text-center'/>
          </button>

        </div>
      </div>
    </div>
  );
}

export default Banner;
