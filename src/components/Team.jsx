import React from 'react'
import support from "../assets/support.png";
import setting from "../assets/setting-lines.png";
import arrow from "../assets/top-right.png";


const Team = () => {
  return (
    <>
      <section id='team' className='w-full md:w-[85%] h-dvh bg-amber-300 justify-self-center p-2 my-22 flex items-center overflow-x-hidden'>

        <div className="center w-full bg-black h-120 overflow-hidden">
          <div className="center_upper">
            <div className="teamwork">
              <p className='hello'>OUR WORK</p>
              <div className="member">
                <div className="round"></div>
                <div className="round"></div>
                <div className="round"></div>
                <div className="round"></div>
                <div className="round"></div>
              </div>
              <div className="roundi">
                <img src={arrow} alt="arrow-img" width="20px" height="20px" style={{cursor: "pointer"}}/>
              </div>
            </div>
          </div>


          <div className="sticky_1">
          </div>


          <div className="flexi">

            <div className="flexi_1">
              <button className='px-10 py-2 bg-[#8f4ef2] text-[#fcf1e3] text-sm rounded-2xl mb-4 cursor-pointer' id='choose'>why choose us</button>
              <div className="adv">OUR <br /> ADVANTAGES</div>
            </div>



            <div className="flexi_2">
              <div className="flexi_2a">
                <img src={support} width="40px" height="40px" alt="support" loading='lazy'/>

                <div className="texto">
                  <h3>Team of Experts</h3>
                  <p>Our experts team of tech <br /> enthusiast and industry veterans. <br /> dedicated to shaping cutting-edge <br /> solutions for your success.</p>
                </div>
              </div>
              <div className="flexi_2b">
                <img src={setting} width="40px" height="40px" alt="support" loading='lazy'/>

                <div className="texto">
                  <h3>Personilzation</h3>
                  <p>We excell in tailoring solutions to your <br /> unique needs, ensuring a personilzed <br /> experienced that align perfectly with <br /> Your Requirements.</p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default Team
