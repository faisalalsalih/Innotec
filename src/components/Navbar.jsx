import React from 'react'
import Logo from '../assets/network.png'
import Down from "../assets/down-arrow.png"
import Burger from "../assets/menu.png"
import { gsap } from "gsap";
import { useState, useEffect } from 'react';



const Navbar = () => {

  // useState to handle the on and off of the sidebar
  const [open, setOpen] = useState(false);


   useEffect(() => {
    if (open) {
      gsap.fromTo(
        "#menu-panel",
        { x: "100%" },
        { x: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [open]);




  const handleopen = () => {
    setOpen(true);
    gsap.to("#menu-panel", { x: 0, duration: 0.5, ease: "power3.out" });
  }

  const handleClose = () => {
     gsap.to("#menu-panel", {
      x: "100%",
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => setOpen(false)
    });

  }





  return (
    <>
    {
      open && (
         <div id='menu-panel' className="fixed top-0 right-0 w-64 h-full bg-[#f1fce3] shadow-lg  translate-x-full">
          <button onClick={handleClose} className="text-xl p-4 cursor-pointer">❌</button>
          <ul className="p-4 space-y-2">
            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">What we do</li>
            <li className="hover:underline cursor-pointer">Our Result</li>
            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">What we do</li>
          </ul>
        </div>

      )
    }
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
      <img onClick={handleopen} src={Burger} alt="Menu_image" className='w-8 h-8'/>
    </div>

    </nav>
    </>
  )
}

export default Navbar