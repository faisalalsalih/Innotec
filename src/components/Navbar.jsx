import React from 'react'
import Logo from '../assets/network.png'
import Down from "../assets/down-arrow.png"
import Burger from "../assets/menu.png"



const Navbar = () => {

  return (
    <>
    <nav className='w-full lg:w-[90%] h-20 flex justify-self-center justify-between items-center px-6'>
    {/* Logo of the Navbar */}

    
    <div className="logo">
      <img src={Logo} alt="navbar logo" className='w-13 h-13 lg:w-15 lg:h-15'/>
    </div>
    {/* Link Section Start here */}
    <div className="links hidden md:block">
      <ul className='flex gap-x-6'>
        <li className='flex  lg:text-base cursor-pointer text-sm text-[#fcf1e3]'>About us <img src={Down} alt="Dropdown" className='w-6 h-6'/></li>
        <li className='flex  lg:text-base cursor-pointer text-sm text-[#fcf1e3]'>what we do <img src={Down} alt="Dropdown" className='w-6 h-6'/></li>
        <li className='flex  lg:text-base cursor-pointer text-sm text-[#fcf1e3]'>Our Result</li>
        <li className='flex  lg:text-base cursor-pointer text-sm text-[#fcf1e3]'>About us <img src={Down} alt="Dropdown" className='w-6 h-6'/></li>
        <li className='flex  lg:text-base cursor-pointer text-sm text-[#fcf1e3]'>what we do <img src={Down} alt="Dropdown" className='w-6 h-6'/></li>

      </ul>
    </div>

    {/* Button Section start from here */}
    <div className="button hidden md:block">
      <button className='white border-1 border-[#191919] cursor-pointer rounded-3xl lg:pl-8 lg:pr-8 lg:pt-2 lg:pb-2 md:pl-5 md:pr-5 md:pt-2 md:pb-2'>Try it Free</button>
    </div>

    <div className='menu block md:hidden cursor-pointer'>
      <img src={Burger} alt="Menu_image" className='w-8 h-8'/>
    </div>

    </nav>
    </>
  )
}

export default Navbar