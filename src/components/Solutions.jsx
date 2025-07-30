import React from 'react'
import arrow from "../assets/down-right.png"

const Solutions = () => {
  return (
    <>
    <section id='solutions' className='w-full lg:w-[90%] h-dvh bg-green-600 justify-self-center relative'>
        <div className="offer">
            <div className="offer_1">
              
            </div>

            <div className="stc1"></div>
            <div className="stc2"></div>

            <div className="offer_2">
                <h1>We OFFER <br /> LEADING <br /> SOLUTIONS IN</h1>

                <div className="deta1">
                  <p>At INNOTECH we specialize in delivering tailored software solutions.provide customization <br />and personilization to meet the diverse needs of business. Our Offering ensure quality <br /> integration optimal performance and a personalized approach that align with Your specific <br /> requirements. <span>HERE WHAT WE OFFERS:</span></p>
                  <button>Get Started <img src={arrow} width="25px" height="20px" alt="arrow" /></button>
                </div>

            </div>




            <div className="offer_3">
              <div className="cards">
                <div className="card1"></div>
                <div className="card2"></div>
                <div className="card3"></div>
                <div className="card4"></div>
              </div>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default Solutions