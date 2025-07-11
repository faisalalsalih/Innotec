import React from 'react'
import Arrow from "../assets/top-right.png"
import microsoft from "../assets/microsoft.png"
import ibm from "../assets/ibm.png"
import cisco from "../assets/cisco.png"


const Hero = () => {
  return (
    <>
      <section id='hero' className='w-[85%] h-dvh flex justify-self-center'>
        
        {/* part1 */}
        <div className="part1 w-[60%] flex flex-col gap-12 p-16 pl-0">
          <h1 className='text-6xl'>Your <span className='pink'>Partner</span> For <br /> Comprehensive <span className='pink'>IT</span> <br /> Solutions</h1>

          <div className="bar w-[90%] h-12 border rounded-4xl bg-blue-200 flex justify-between pr-8 pl-8">
            <input type="text" placeholder='Enter your Problem' className='focus:outline-none focus:ring-0 focus:border-none'/>
            <button className='flex items-center gap-4'>Lets Talk <span className='goal w-8 h-8 border rounded-full flex justify-center items-center bg-[#191919] cursor-pointer'><img className='w-3 h-3' src={Arrow} alt="arrow-upright" /></span></button>
          </div>

          <p className='paragraph text-[#878787]'>we offer services such as custom software development, cloud computing <br />strategies,cybersecurity,and digital transformation consulatncy.<br />we empower business with technology to enhance productivity,security <br /> and  overall operational excellency</p>

          <div className="logos flex justify-between">
            <img className='logo w-14 h-14' src={microsoft} alt="company-logo" />
            <img className='logo' src={ibm} alt="company-logo" />
            <img className='logo' src={cisco} alt="company-logo" />
          </div>
        </div>

        {/* The End of Part 1  */}



        {/* Part 2 */}
        <div className="part2 w-[40%] bg-pink-500 pt-10">
          
          <div className="card w-full h-140 bg-black">


          </div>
        </div>



      </section>
    </>
  )
}

export default Hero
