import birdi from '../assets/logo/birdi.svg'
export const NavBar = () => {
  return (
    <div className='flex items-center bg-gray-100 justify-between p-4 z-[100] w-full absolute'>
      <div className='flex items-center gap-4'>
        <span className='pl-10'>
          <img className='w-20 stroke-cyan-200' src={birdi} alt="logo"/>
        </span>
        <h1 className='text-orange-500 text-4xl font-bold cursor-pointer'> Birdi </h1>
      </div>
      <div>
        <button className='text-slate-800 pr-4'>Iniciar Sesion</button>
        <button className='bg-orange-600 px-6 py-2 rounded cursor-pointer text-white'>Crear Sesion</button>
      </div>
    </div>
  )
}
export default NavBar;