import React from 'react';
import cBanner from "../../assets/cards/c-banner.jpg";

const Banner = () => {
  return (
    <div className='max-w-[310.1vh] h-[110vh] w-full relative'>
      <div style={{ backgroundImage: `url(${cBanner})` }} className='w-full h-full bg-center bg-cover'>
        <div className='absolute right-0 bottom-0 p-4'>
          <button className='m-20 bg-orange-200 text-slate-800 text-xl px-4 py-2 hover:bg-blue-300 min-w-[30vh] min-h-[6vh]'>Ofertas  </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
