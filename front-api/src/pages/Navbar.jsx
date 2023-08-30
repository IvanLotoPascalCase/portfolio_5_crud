import React from 'react'
import {BsPlus, BsFillLightningFill,BsGearFill} from 'react-icons/bs'
import {FaFire, FaPoo} from 'react-icons/fa'
/*import ReactSwitch from 'react-switch'*/

const Navbar = () => {
  

  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-slate-700 text-white shadow-lg'>

      <NavbarIcon icon={<FaFire size="35" />} />
      <NavbarIcon icon={<BsPlus size="37" />} />
      <NavbarIcon icon={<BsFillLightningFill size="30" />} />
      <NavbarIcon icon={<FaPoo size="30" />} />
    </div>
  )
}

const NavbarIcon = ({icon, text = 'tooltip '}) => (
  <button className="navbar-icon group">
    {icon}

    <span className="navbar-tooltip group-hover:scale-100">
      {text}
    </span>
  </button>
);

export default Navbar