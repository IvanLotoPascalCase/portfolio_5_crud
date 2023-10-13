import birdi from '../assets/logo/birdi.svg';
import { FaUser } from 'react-icons/fa';
import SearchInput from '../components/inputs/SearchInput'

const NavBar = () => {
  return (
    <nav>
      {/* Sección superior */}
      <div className="flex items-center justify-between bg-gray-100 pt-4">
        {/* Logo */}
        <span className="pl-10 flex items-center">
          <img className='w-20 stroke-cyan-200 pr-4 py-2' src={birdi} alt="logo" />
          <h1 className='text-orange-500 text-4xl font-bold cursor-pointer'> Birdi </h1>
        </span>

        {/* Barra de búsqueda */}
        <SearchInput/>

        {/* Botón de usuario login/signup */}
        <div className="bg-gray-600 p-4 text-2xl mr-10">
          <FaUser className="text-white" />
        </div>
      </div>

      {/* Sección inferior */}
      <div className="mt-4 py-4 bg-gray-800">
        {/* Botones de categorías */}
        <div className="flex justify-around">
          <button className="text-white mr-4">Ofertas</button>
          <button className="text-white mr-4">Categorias</button>
          <button className="text-white mr-4">Sobre Nosotros</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;