import React from 'react'
import Logo from '../assets/network.png'

const Navbar = () => {

  return (
    <>
    <nav className='sm:w-3/4 w-full h-20 bg-amber-200 d-flex justify-self-center'>
    {/* Logo of the Navbar */}
    <div class="logo">
      <img src={Logo} alt="navbar logo" className='w-16 h-16' />
    </div>
    </nav>
    </>
  )
}

export default Navbar