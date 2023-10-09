import React from 'react'

export const NavBar = () => {
  return (
    <div className='flex items-center bg-gray-600 justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-orange-500 text-4xl font-bold cursor-pointer'> Paris </h1>
            <div>
                <button className='text-white pr-4'>Iniciar Sesion</button>
                <button className='bg-orange-600 px-6 py-2 rounded cursor-pointer text-white'>Crear Sesion</button>
            </div>   
    </div>
  )
}
export default NavBar;