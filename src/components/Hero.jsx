import React from 'react'
import Arrow from "../assets/top-right.png"
import microsoft from "../assets/microsoft.png"
import ibm from "../assets/ibm.png"
import cisco from "../assets/cisco.png"
import hero from "../assets/hero-img.png"
import down from "../assets/down-right.png"


const Hero = () => {
  return (
    <>
      <section id='hero' className='lg:w-[85%] w-full overflow-hidden  h-fit  flex  gap-4 justify-self-center pr-4 pl-4'>
        
        {/* part1 */}
        <div className="part1 w-[60%] h-fit flex flex-col gap-12 p-12 pl-0">
          <h1 className='text-6xl pl-4 high'>Your <span className='pink'>Partner</span> For <br /> Comprehensive <span className='pink'>IT</span> <br /> Solutions</h1>

          <div className="bar  w-[90%]  h-12 border rounded-4xl bg-blue-200 flex justify-between pr-8 pl-8 ml-4">
            <input type="text" placeholder='Enter your Problem' className='focus:outline-none focus:ring-0 focus:border-none'/>
            <button className='flex items-center gap-4 talk'>Lets Talk <span className='goal w-8 h-8  border rounded-full flex justify-center items-center bg-[#191919] cursor-pointer'><img className='w-3 h-3' src={Arrow} alt="arrow-upright" /></span></button>
          </div>

          <p className='paragraph text-[#878787] text-sm pl-4'>we offer services such as custom software development, cloud computing <br />strategies,cybersecurity,and digital transformation consulatncy.<br />we empower business with technology to enhance productivity,security <br /> and  overall operational excellency</p>

          <div className="logos flex justify-between w-[70%] pl-4">
            <img className='logo_1 w-12 h-12' src={microsoft} alt="company-logo" loading='lazy' />
            <img className='logo_2 w-14 h-14' src={ibm} alt="company-logo" loading='lazy'/>
            <img className='logo_3 w-14 h-14' src={cisco} alt="company-logo" loading='lazy'/>
          </div>
        </div>

        {/* The End of Part 1  */}



        {/* Part 2 */}
        <div className="part2 w-[40%] mt-12">
          
          <div className="card w-full  h-140   rounded-xl overflow-hidden p-0 relative bg-blue-200 z-2">
            <div className="curve w-30 h-60 bg-[#191919]  rounded-r-2xl absolute left-0 top-0">
              <div className="chotto_3"></div>
            </div>

            <div className='curve_2 bg-[#191919] rounded-2xl absolute right-45 w-60 h-50'>
              <div className="chotto_2"></div>
            </div>

            <div className="chotto_1">
            </div>


            <div className="chotto_4">

            </div>


            <div className="chotto_5"></div>


            <img src={hero} alt="hero-img" className='z-4 absolute bottom-0 right-0' loading='lazy'/>



            <div className="circle flex justify-center items-center md:w-20 md:h-20 h-15 w-15 bg-[#c762f4] absolute left-16 top-16 z-4 rounded-full">
              
              <div className="circle_1  md:h-14 md:w-14 w-10 h-10   bg-[#fcf1e3] rounded-full flex justify-center items-center">
                <img src={down} alt="arrow" className='md:w-8 md:h-8 w-6 h-6' loading='lazy' />
              </div>
            </div>


          </div>
        </div>



      </section>
    </>
  )
}

export default Hero
