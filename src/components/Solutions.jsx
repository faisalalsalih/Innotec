import React from 'react'
import arrow from "../assets/down-right.png"
import web from "../assets/web-programming (1).png"
import tick from "../assets/check.png"
import white from "../assets/right-up.png"
import security from "../assets/security.png"
import cloud from "../assets/cloud-service (1).png"
import AI from "../assets/artificial-intelligence.png"




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


                {/* CARD 1 */}

                <div className="card1">
                  <div id='invisible'>
                    <div className="invisible_1">
                      <div className="gola"><img src={web} alt="web" width="30px" height="30px" /></div>
                      <h1>CUSTOM SOFTWARE <br /> DEVELOPMENT</h1>
                    </div>

                    <div className="invisible_2">
                      <p>Tailored software solutions <br />design to meet your specific <br />business requirements ensuring <br />seamless integration and optimal <br />performance.</p>
                    </div>


                    <div className="invisible_3">
                      <h6 id='include'>Including With</h6>
                      <div className="ro1">
                        <div className="circlo"><img src={tick} alt="check" width="15px" height="15px"/></div>
                        <h6>Custom-built</h6>
                      </div>
                      <div className="ro2">
                        <div className="circlo"><img src={tick} alt="check" width="15px" height="15px"/></div>
                        <h6>Integration</h6>
                      </div>
                      <div className="ro2">
                        <div className="circlo"><img src={tick} alt="check" width="15px" height="15px"/></div>
                        <h6>Optimal Performance</h6>
                      </div>
                    </div>


                    <div className="invisible_4">
                      <button>Get Started<img src={white} alt="arrow" width="20px" height="20px" /></button>
                    </div>
                  </div>

                  <div id="visible">
                  <div className="gola"><img src={web} alt="web" width="30px" height="30px" /></div>
                    <h1>CUSTOM SOFTWARE <br /> DEVELOPMENT</h1>
                      <button>Get Started<img src={white} alt="arrow" width="20px" height="20px" /></button>
                    
                  </div>
                </div>


                {/* CARD 2 */}
                <div className="card2">
                  <div id='invisible'>
                    <div className="invisible_1">
                      <div className="gola"><img src={web} alt="web" width="30px" height="30px" /></div>
                      <h1>CLOUD COMPUTING <br /> SOLUTIONS</h1>
                    </div>

                    <div className="invisible_2">
                      <p>Tailored software solutions <br />design to meet your specific <br />business requirements ensuring <br />seamless integration and optimal <br />performance.</p>
                    </div>


                    <div className="invisible_3">
                      <h6 id='include'>Including With</h6>
                      <div className="ro1">
                        <div className="circlo"><img src={tick} alt="check" width="15px" height="15px"/></div>
                        <h6>Custom-built</h6>
                      </div>
                      <div className="ro2">
                        <div className="circlo"><img src={tick} alt="check" width="15px" height="15px"/></div>
                        <h6>Integration</h6>
                      </div>
                      <div className="ro2">
                        <div className="circlo"><img src={tick} alt="check" width="15px" height="15px"/></div>
                        <h6>Optimal Performance</h6>
                      </div>
                    </div>


                    <div className="invisible_4">
                      <button>Get Started<img src={white} alt="arrow" width="20px" height="20px" /></button>
                    </div>
                  </div>

                  <div id="visible">
                  <div className="gola"><img src={cloud} alt="web" width="30px" height="30px" /></div>
                    <h1>CLOUD COMPUTING <br /> SOLUTIONS</h1>
                      <button>Get Started<img src={white} alt="arrow" width="20px" height="20px" /></button>
                    
                  </div>
                </div>

                {/* CARD 3 */}
                <div className="card3">
                  <div id='invisible'>
                    <div className="invisible_1">
                      <div className="gola"><img src={web} alt="web" width="30px" height="30px" /></div>
                      <h1>CUSTOM SOFTWARE <br /> DEVELOPMENT</h1>
                    </div>

                    <div className="invisible_2">
                      <p>Tailored software solutions <br />design to meet your specific <br />business requirements ensuring <br />seamless integration and optimal <br />performance.</p>
                    </div>


                    <div className="invisible_3">
                      <h6 id='include'>Including With</h6>
                      <div className="ro1">
                        <div className="circlo"><img src={tick} alt="check" width="15px" height="15px"/></div>
                        <h6>Custom-built</h6>
                      </div>
                      <div className="ro2">
                        <div className="circlo"><img src={tick} alt="check" width="15px" height="15px"/></div>
                        <h6>Integration</h6>
                      </div>
                      <div className="ro2">
                        <div className="circlo"><img src={tick} alt="check" width="15px" height="15px"/></div>
                        <h6>Optimal Performance</h6>
                      </div>
                    </div>


                    <div className="invisible_4">
                      <button>Get Started<img src={white} alt="arrow" width="20px" height="20px" /></button>
                    </div>
                  </div>

                  <div id="visible">
                  <div className="gola"><img src={security} alt="web" width="30px" height="30px" /></div>
                    <h1>CYBER SECURITY <br /> SOLUTIONS</h1>
                      <button>Get Started<img src={white} alt="arrow" width="20px" height="20px" /></button>
                    
                  </div>
                </div>

                {/* Card 4 */}
                <div className="card4">
                  <div id='invisible'>
                    <div className="invisible_1">
                      <div className="gola"><img src={web} alt="web" width="30px" height="30px" /></div>
                      <h1>AI AND MACHINE <br /> LEARNING <br />  INTEGRATION</h1>
                    </div>

                    <div className="invisible_2">
                      <p>Tailored software solutions <br />design to meet your specific <br />business requirements ensuring <br />seamless integration and optimal <br />performance.</p>
                    </div>


                    <div className="invisible_3">
                      <h6 id='include'>Including With</h6>
                      <div className="ro1">
                        <div className="circlo"><img src={tick} alt="check" width="15px" height="15px"/></div>
                        <h6>Custom-built</h6>
                      </div>
                      <div className="ro2">
                        <div className="circlo"><img src={tick} alt="check" width="15px" height="15px"/></div>
                        <h6>Integration</h6>
                      </div>
                      <div className="ro2">
                        <div className="circlo"><img src={tick} alt="check" width="15px" height="15px"/></div>
                        <h6>Optimal Performance</h6>
                      </div>
                    </div>


                    <div className="invisible_4">
                      <button>Get Started<img src={white} alt="arrow" width="20px" height="20px" /></button>
                    </div>
                  </div>

                  <div id="visible">
                  <div className="gola"><img src={AI} alt="web" width="30px" height="30px" /></div>
                      <h1>AI AND MACHINE <br /> LEARNING <br />  INTEGRATION</h1>
                      <button>Get Started<img src={white} alt="arrow" width="20px" height="20px" /></button>
                    
                  </div>
                </div>
              </div>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default Solutions